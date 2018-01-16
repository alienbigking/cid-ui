<template>
    <div class="detail-card">
        <h3 class="card-title">犯罪详情</h3>
        <div class="card-body">
            <el-row>
                <el-col :span="12">
                    <label>逮捕日期：</label><span>{{criminalRecord.arrestDate}}</span>
                </el-col>
                <el-col :span="12">
                    <label>羁押日期</label><span>{{criminalRecord.detentionDate}}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <label>逮捕机关：</label><span>{{criminalRecord.arrestOrganName}}</span>
                </el-col>
                <el-col :span="12">
                    <label>起诉机关：</label><span>{{criminalRecord.prosecutionOrganName}}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <label>起诉字号：</label><span>{{criminalRecord.prosecutionLetterNumber}}</span>
                </el-col>
                <el-col :span="12">
                    <label>起诉罪名：</label><span>{{criminalRecord.prosecutionAccusation}}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <label>一审机关：</label><span>{{criminalRecord.firstTrialOrganName}}</span>
                </el-col>
                <el-col :span="12">
                    <label>终审机关：</label><span>{{criminalRecord.finalTrialOrganName}}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <label>判决机关：</label><span>{{criminalRecord.decisionOrganName}}</span>
                </el-col>
                <el-col :span="12">
                    <label>判决字号：</label><span>{{criminalRecord.decisionLetterNumber}}</span>
                </el-col>
            </el-row>
            <el-row>
               <el-col :span="12">
                   <label>判决日期：</label><span>{{criminalRecord.decisionDate}}</span>
               </el-col>
               <el-col :span="12">
                   <label>判决罪名：</label><span>{{criminalRecord.decisionAccusation}}</span>
               </el-col>
            </el-row>
            <el-row>
               <el-col :span="12">
                   <label>剥政年限：</label><span>{{criminalRecord.decisionDeprivationPoliticalRightYears}}</span>
               </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <label>刑期开始日期：</label><span>{{criminalRecord.decisionPrisonTermStartDate}}</span>
                </el-col>
                <el-col :span="12">
                    <label>刑期结束日期：</label><span>{{criminalRecord.decisionPrisonTermEndDate}}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <label>创建时间：</label><span>{{criminalRecord.createdTime | moment}}</span>
                </el-col>
                <el-col :span="12">
                    <label>最后更新时间：</label><span>{{criminalRecord.lastUpdatedTime | moment}}</span>
                </el-col>
            </el-row>
        </div>
        <div class="card-body">
            <label>判决明细：</label>
            <div class="detail">{{criminalRecord.decisionDetail}}</div>
            <el-button @click="onBack">返 回</el-button>
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

</style>
