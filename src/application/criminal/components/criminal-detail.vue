<template>
<div>
  <!-- 基本信息 -->
  <div class="card">
    <div class="title" @click="isShowInformation">
        基本信息
        <span class="iconfont" :class="informationShow?'icon-unfold':'icon-enter'"></span>
    </div>
    <div v-if="informationShow">
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>编号：</label><span>{{criminal.code}}</span>
                </el-col>
                <el-col :span="6">
                    <label>姓名：</label><span>{{criminal.name}}</span>
                </el-col>
                <el-col :span="6">
                    <label>别化名：</label><span>{{criminal.alias}}</span>
                </el-col>
                <el-col :span="6">
                    <label>性别：</label><span>{{criminal.genderName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>出生日期:</label><span>{{criminal.birthday}}</span>
                </el-col>
                
                <el-col :span="6">
                    <label>婚否：</label><span>{{criminal.married?"是":"否"}}</span>
                </el-col>
                <el-col :span="6">
                    <label>民族：</label><span>{{criminal.ethnicityName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>国籍：</label><span>{{criminal.nationalityName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>户籍类型：</label><span>{{criminal.householdRegisterTypeName}}</span>
                </el-col>
                <el-col :span="15">
                    <label>身份证号：</label><span class="s50">{{criminal.identityCardNumber}}</span>
                </el-col>
            </el-row>
            <el-row type="flex"> 
                <el-col :span="24">
                    <label>出生地：</label>
                    <span>{{criminal.birthplaceCountryName}}</span>
                    <span>{{criminal.birthplaceProvinceName}}</span>
                    <span>{{criminal.birthplaceCityName}}</span>
                    <span>{{criminal.birthplaceCountyName}}</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>户籍地址国家：</label><span>{{criminal.householdRegisterAddressCountryName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址省份：</label><span>{{criminal.householdRegisterAddressProvinceName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址城市：</label><span>{{criminal.householdRegisterAddressCityName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址县：</label><span>{{criminal.householdRegisterAddressCountyName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="15">
                    <label>户籍地址街道详情：</label><span class="s50">{{criminal.householdRegisterAddressStreetDetail}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>家庭地址国家：</label><span>{{criminal.homeAddressCountryName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址省份：</label><span>{{criminal.homeAddressProvinceName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址城市：</label><span>{{criminal.homeAddressCityName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址县：</label><span>{{criminal.homeAddressCountyName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="15">
                    <label>家庭地址街道详情：</label><span class="s50">{{criminal.homeAddressStreetDetail}}</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>政治面貌：</label><span>{{criminal.politicalStatusName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>曾经加入的党派团体：</label><span>{{criminal.politicalParty?"是":"否"}}</span>
                </el-col>
                <el-col :span="6">
                    <label>文化程度名称：</label><span>{{criminal.educationDegreeName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>职业：</label><span>{{criminal.occupation}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>特殊技能：</label><span>{{criminal.specialSkill}}</span>
                </el-col>
                <el-col :span="6">
                    <label>累惯犯：</label><span>{{criminal.recidivisted?"是":"否"}}</span>
                </el-col>
                <el-col :span="6">
                    <label>四涉：</label><span>{{criminal.involvingFour}}</span>
                </el-col>
                <el-col :span="6">
                    <label>四史：</label><span>{{criminal.fourHistory}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>流窜类别名称：</label><span>{{criminal.fledTypeName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>分管等级名称：</label><span>{{criminal.separateManagementLevelName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>分押类别名称：</label><span>{{criminal.separateCustodyTypeName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>减刑尺度名称：</label><span>{{criminal.commutationScaleName}}</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>监区名称：</label><span>{{criminal.prisonAreaName}}</span>
                </el-col>
                <el-col :span="15">
                    <label>监区标识：</label><span class="s50">{{criminal.prisonAreaId}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>监舍名称：</label><span>{{criminal.prisonHouseName}}</span>
                </el-col>
                <el-col :span="15">
                    <label>监舍标识：</label><span class="s50">{{criminal.prisonHouseId}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>床位号：</label><span>{{criminal.bedNumber}}</span>
                </el-col>
                <el-col :span="15">
                    <label>备注：</label><span class="s50">{{criminal.remark}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="12">
                    <label>创建时间：</label><span class="s50">{{criminal.createdTime && criminal.createdTime | moment("YYYY-MM-DD HH:mm:ss")}}</span>
                </el-col>
                <el-col :span="12">
                    <label>最后更新时间：</label><span class="s50">{{criminal.lastUpdatedTime && criminal.lastUpdatedTime | moment("YYYY-MM-DD HH:mm:ss")}}</span>
                </el-col>
            </el-row>
        </div>
    </div>
  </div>
  <!-- 犯罪记录 -->
  <div class="card">
      <div class="title" @click="isShowRecord">
        犯罪记录
        <span class="iconfont" :class="recordShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="recordShow">
        <el-table class="table40" :data="allCriminalRecords" header-row-class-name="tableHeader40">
          <el-table-column align="center" prop="decisionAccusation" label="罪名"> </el-table-column>
          <el-table-column align="center" prop="arrestDate" label="逮捕日期"> </el-table-column>
          <el-table-column align="center" prop="detentionDate" label="羁押日期"> </el-table-column>
          <el-table-column align="center" prop="firstTrialOrganName" label="一审机关名称"> </el-table-column>
          <el-table-column align="center" prop="finalTrialOrganName" label="终审机关名称"> </el-table-column>
          <el-table-column align="center" prop="decisionDate" label="判决日期"> </el-table-column>
          <el-table-column align="center" prop="decisionPrisonTermStartDate" label="判决刑期开始日期"> </el-table-column>
          <el-table-column align="center" prop="decisionPrisonTermEndDate" label="判决刑期结束日期"> </el-table-column>
        </el-table>
      </div>
  </div>
  <!-- 简历 -->
  <div class="card">
      <div class="title" @click="isShowResume">
        简历
        <span class="iconfont" :class="resumeShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="resumeShow">
        <el-table class="table40" :data="allCriminalResumes" header-row-class-name="tableHeader40">
          <el-table-column align="center" prop="startDate" label="开始日期"> </el-table-column>
          <el-table-column align="center" prop="endDate" label="截至日期"> </el-table-column>
          <el-table-column align="center" prop="company" label="公司"> </el-table-column>
          <el-table-column align="center" prop="occupation" label="职业"> </el-table-column>
          <el-table-column align="center" prop="duty" label="职位"> </el-table-column>
          <el-table-column align="center" prop="criminalName" label="罪犯姓名"> </el-table-column>
          <el-table-column align="center" prop="createdTime" label="创建时间">
            <template slot-scope="scope">
                {{scope.row.createdTime && scope.row.createdTime | moment("YYYY-MM-DD HH:mm:ss")}}
            </template>
          </el-table-column>
          <el-table-column align="center" prop="lastUpdatedTime" label="最后更新时间">
            <template slot-scope="scope">
                {{scope.row.lastUpdatedTime && scope.row.lastUpdatedTime | moment("YYYY-MM-DD HH:mm:ss")}}
            </template>
          </el-table-column>
        </el-table>
      </div>
  </div>
  <!-- 体貌特征 -->
  <div class="card">
      <div class="title" @click="isShowFeature">
        体貌特征
        <span class="iconfont" :class="featureShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="featureShow">
        <el-table class="table40" :data="allCriminalPhysicalCharacteristics" header-row-class-name="tableHeader40">
          <el-table-column align="center" prop="height" label="身高"> </el-table-column>
          <el-table-column align="center" prop="weight" label="体重"> </el-table-column>
          <el-table-column align="center" prop="somatotypeName" label="体型"> </el-table-column>
          <el-table-column align="center" prop="faceTypeName" label="脸型"> </el-table-column>
          <el-table-column align="center" prop="bloodTypeName" label="血型"> </el-table-column>
          <el-table-column align="center" prop="accentName" label="口音"> </el-table-column>
          <el-table-column align="center" prop="footLength" label="足长"> </el-table-column>
          <el-table-column align="center" prop="shoeSize" label="鞋号"> </el-table-column>
          <el-table-column align="center" prop="lastUpdatedTime" label="最后更新时间">
            <template slot-scope="scope">
                {{scope.row.lastUpdatedTime && scope.row.lastUpdatedTime | moment("YYYY-MM-DD HH:mm:ss")}}
            </template>
          </el-table-column>
        </el-table>
      </div>
  </div>
  <!-- 社会关系 -->
  <div class="card">
      <div class="title" @click="isShowSocialRelation">
        社会关系
        <span class="iconfont" :class="socialRelationShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="socialRelationShow">
        <el-table class="table40" :data="allCriminalSocialRelations" header-row-class-name="tableHeader40">
          <el-table-column align="center" prop="appellation" label="称谓"> </el-table-column>
          <el-table-column align="center" prop="name" label="姓名"> </el-table-column>
          <el-table-column align="center" prop="age" label="年龄"> </el-table-column>
          <el-table-column align="center" prop="company" label="公司"> </el-table-column>
          <el-table-column align="center" prop="occupation" label="职业"> </el-table-column>
          <el-table-column align="center" prop="politicalStatusName" label="政治面貌"> </el-table-column>
          <el-table-column align="center" prop="criminalName" label="罪犯姓名"> </el-table-column>
          <el-table-column align="center" prop="createdTime" label="创建时间">
            <template slot-scope="scope">
                {{scope.row.createdTime && scope.row.createdTime | moment("YYYY-MM-DD HH:mm:ss")}}
            </template>
          </el-table-column>
          <el-table-column align="center" prop="lastUpdatedTime" label="最后更新时间">
            <template slot-scope="scope">
                {{scope.row.lastUpdatedTime && scope.row.lastUpdatedTime | moment("YYYY-MM-DD HH:mm:ss")}}
            </template>
          </el-table-column>
        </el-table>
      </div>
  </div>
</div>

</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      informationShow: false,
      recordShow: false,
      resumeShow: false,
      featureShow: false,
      socialRelationShow: false
    };
  },
  computed: {
    ...mapState({
      criminal: state => state.criminal.criminal,
      allCriminalResumes: state => state.criminal.allCriminalResumes,
      allCriminalPhysicalCharacteristics: state => state.criminal.allCriminalPhysicalCharacteristics,
      allCriminalSocialRelations: state => state.criminal.allCriminalSocialRelations,
      allCriminalRecords: state => state.criminal.allCriminalRecords
    })
  },
  created() {
    this.getCriminal(this.$route.params.id);
    this.getAllCriminalRecords(this.$route.params.id);
    this.getAllCriminalPhysicalCharacteristics(this.$route.params.id);
    this.getAllCriminalResumes(this.$route.params.id);
    this.getAllCriminalSocialRelations(this.$route.params.id);
  },
  methods: {
    ...mapActions([ "getCriminal", "getAllCriminalRecords", "getAllCriminalResumes", "getAllCriminalPhysicalCharacteristics", "getAllCriminalSocialRelations" ]),
    isShowInformation() {
      this.informationShow = !this.informationShow;
    },
    isShowRecord() {
      this.recordShow = !this.recordShow;
    },
    isShowResume() {
      this.resumeShow = !this.resumeShow;
    },
    isShowFeature() {
      this.featureShow = !this.featureShow;
    },
    isShowSocialRelation() {
      this.socialRelationShow = !this.socialRelationShow;
    }
  }
};
</script>
<style lang="scss" scoped>
.card{
  .title{
    display: block;
    padding:20px;
    color: #333;
    font-size:14px;
    cursor: pointer;
  }
  .iconfont{
    float: right;
  }
  .list-box {
    margin-left: 0px;
    padding: 30px 20px 20px 20px;
  }
}
.form-container {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 20px 20px 20px 41px;
  font-size: 14px;
  border-top: 1px solid #ddd;
  label {
    color: #666;
    display: inline-block;
    font-size: 14px;
    box-sizing: border-box;
    float: left;
    padding-top: 20px;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    margin-left:8px;
    padding-bottom: 10px;
    padding-top: 20px;
    width: 125px;
    color: #333;
    height: 14px;
    vertical-align: middle;
  }
  .s50{
    width: calc(100% - 300px); 
  }
  .rowTitle {
    height:47px;
    background: #fff;
  }
  .rowTwo {
    background: url(../../../assets/images/rowtwo.png) 100% 100% repeat;
    margin-top: 3px;
    line-height: 45px;
  }
}
</style>
