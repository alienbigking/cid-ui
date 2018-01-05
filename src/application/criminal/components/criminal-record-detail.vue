<template>
  <div>
    <div class="card">
        <span class="um-title">犯罪详情</span>
        <div class="form-container">
          <el-row type="flex" justify="space-between">
              <el-col :span="12">
                  <label>逮捕日期：</label><span>{{criminalRecord.arrestDate}}</span>
              </el-col>
              <el-col :span="12">
                  <label>羁押日期</label><span>{{criminalRecord.detentionDate}}</span>
              </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <label>逮捕机关：</label><span>{{criminalRecord.arrestOrganName}}</span>
                </el-col>
                <el-col :span="12">
                    <label>起诉机关：</label><span>{{criminalRecord.prosecutionOrganName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <label>起诉字号：</label><span>{{criminalRecord.prosecutionLetterNumber}}</span>
                </el-col>
                <el-col :span="12">
                    <label>起诉罪名：</label><span>{{criminalRecord.prosecutionAccusation}}</span>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <label>一审机关：</label><span>{{criminalRecord.firstTrialOrganName}}</span>
                </el-col>
                <el-col :span="12">
                    <label>终审机关：</label><span>{{criminalRecord.finalTrialOrganName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <label>判决机关：</label><span>{{criminalRecord.decisionOrganName}}</span>
                </el-col>
                <el-col :span="12">
                    <label>判决字号：</label><span>{{criminalRecord.decisionLetterNumber}}</span>
                </el-col>
            </el-row>
             <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <label>判决日期：</label><span>{{criminalRecord.decisionDate}}</span>
                </el-col>
                <el-col :span="12">
                    <label>判决罪名：</label><span>{{criminalRecord.decisionAccusation}}</span>
                </el-col>
            </el-row>
             <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <label>剥政年限：</label><span>{{criminalRecord.decisionDeprivationPoliticalRightYears}}</span>
                </el-col>
            </el-row>
             <el-row type="flex" justify="space-between">
               <el-col :span="12">
                    <label>刑期开始日期：</label><span>{{criminalRecord.decisionPrisonTermStartDate}}</span>
                </el-col>
                <el-col :span="12">
                    <label>刑期结束日期：</label><span>{{criminalRecord.decisionPrisonTermEndDate}}</span>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <label>创建时间：</label><span>51</span>
                </el-col>
                <el-col :span="12">
                    <label>最后更新时间：</label><span>165</span>
                </el-col>
            </el-row>
        </div>
        <div class="padding20">
            <div class="form-container">
                <label class="title">判决明细：</label>
                <div>{{criminalRecord.decisionDetail}}</div>
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
      criminalRecord: state => state.criminal.criminalRecord
    })
  },
  created() {
    this.getCriminalRecord(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getCriminalRecord"]),
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
