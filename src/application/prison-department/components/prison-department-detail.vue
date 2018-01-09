<template>
    <div>
        <div class="card">
            <span class="um-title">{{prisonDepartment.name}} - 明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                  <el-col :span="12">
                        <label>部门：</label><span>{{prisonDepartment.name}}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>上级部门：</label><span>{{prisonDepartment.parentDepartmentName}}</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>创建时间：</label><span>{{prisonDepartment.createdTime | moment}}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>最后更新时间：</label><span>{{prisonDepartment.lastUpdatedTime | moment}}</span>
                    </el-col>
                </el-row>
            </div>
            <div class="padding20">
                <div class="form-container">
                    <label class="title">监狱部门描述：</label>
                    <div>
                        {{prisonDepartment.description}}
                    </div>
                </div>
                <el-button @click="onBack">返 回</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      prisonDepartment: state => state.prisonDepartment.prisonDepartment
    })
  },
  created() {
    this.getPrisonDepartment(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPrisonDepartment"]),
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
    float: left;
    padding-top: 20px;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    // box-sizing: border-box;
    padding-bottom: 10px;
    padding-top: 20px;
    width: calc(100% - 148px);
    color: #333;
    height: 14px;
    vertical-align: middle;
  }
  .el-row .el-col-12:first-child {
    span {
      width: calc(100% - 198px);
    }
  }
  .title {
    display: block;
    margin-bottom: 10px;
    float: none;
    padding-top: 0;
    & + div {
      line-height: 24px;
    }
  }
}
.padding20 {
  padding-bottom: 20px;
  padding-right: 20px;
  overflow: hidden;
  background: #fff;
  border-top: 1px solid #ddd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  button {
    float: right;
  }
}
</style>
