<template>
    <div>
        <div class="card">
            <span class="um-title">日志明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>操作人：</label><span>{{ log.operator }}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>类别：</label><span>{{ log.type | enumText(logTypes) }}</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>动作：</label><span>{{ log.action }}</span>
                    </el-col>
                    <el-col :span="12">
                       <label>创建时间：</label><span>{{ log.createdTime | moment }}</span>
                   </el-col>
                </el-row>
            </div>
            <div class="form-container padding20">
                <label class="title">日志详情：</label>
                <div>
                    {{log.detail}}
                </div>
                <el-button @click="onBack">返 回</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { default as logTypeService } from "../service/log-type-service";

export default {
  computed: {
    ...mapState({
      log: state => state.log.log
    })
  },
  created() {
    this.getLog(this.$route.params.id);
    this.logTypes = logTypeService.getAll();
  },
  methods: {
    ...mapActions(["getLog"]),
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
    width: 148px;
    padding-top: 20px;
    line-height: 1;
    box-sizing: border-box;
    float: left;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
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
</style>
