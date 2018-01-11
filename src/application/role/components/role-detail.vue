<template>
    <div>
        <div class="card">
            <span class="um-title">{{role.name}} - 明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>角色名称：</label><span> {{role.name}}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>创建时间：</label><span> {{role.createdTime | moment}}</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>最后更新时间：</label><span> {{role.lastUpdatedTime | moment}}</span>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="card padding20">
            <div class="form-container">
                <label class="title">角色描述：</label>
                <div>
                    {{role.description}}
                </div>
            </div>
            <el-button @click="onBack">返 回</el-button>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      role: state => state.role.role
    })
  },
  created() {
    this.getRole(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getRole"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.form-container {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 20px 20px 20px 41px;
  font-size: 14px;
  label {
    font-weight: bold;
    color: #333;
    display: inline-block;
    width: 148px;
    box-sizing: border-box;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    padding-bottom: 19px;
    padding-top: 20px;
    width: calc(100% - 148px);
    color: #333;
  }
  .el-row .el-col-12:first-child {
    span {
      width: calc(100% - 198px);
    }
  }
  .title {
    display: block;
    margin-bottom: 10px;
    & + div {
      line-height: 24px;
    }
  }
}
</style>
