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
                <el-col :span="6">
                    <label>身份证号：</label><span>{{criminal.identityCardNumber}}</span>
                </el-col>
                <el-col :span="12">
                    <label>出生地址：</label>
                    <span>{{criminal.birthplaceCountryName}} - {{criminal.birthplaceProvinceName}} - {{criminal.birthplaceCityName}} - {{criminal.birthplaceCountyName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="24">
                    <label>户籍地址：</label>
                    <span>{{criminal.householdRegisterAddressCountryName}} - {{criminal.householdRegisterAddressProvinceName}} - {{criminal.householdRegisterAddressCityName}} - {{criminal.householdRegisterAddressCountyName}} - {{criminal.householdRegisterAddressStreetDetail}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="24">
                    <label>家庭地址：</label>
                    <span>{{criminal.homeAddressCountryName}} - {{criminal.homeAddressProvinceName}} - {{criminal.homeAddressCityName}} - {{criminal.homeAddressCountyName}} - {{criminal.homeAddressStreetDetail}}</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>政治面貌：</label><span>{{criminal.politicalStatusName}}</span>
                </el-col>
                <el-col :span="6">
                    <label class="label120">是否参加党派团体：</label><span class="span120">{{criminal.politicalParty?"是":"否"}}</span>
                </el-col>
                <el-col :span="6">
                    <label>文化程度：</label><span>{{criminal.educationDegreeName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>职业：</label><span>{{criminal.occupation}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>特殊技能：</label><span>{{criminal.specialSkill}}</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>累惯犯：</label><span>{{criminal.recidivisted?"是":"否"}}</span>
                </el-col>
                <el-col :span="6">
                    <label>四涉：</label><span>{{criminal.involvingFour}}</span>
                </el-col>
                <el-col :span="6">
                    <label>四史：</label><span>{{criminal.fourHistory}}</span>
                </el-col>
                <el-col :span="6">
                    <label>监区名称：</label><span>{{criminal.prisonAreaName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>监舍名称：</label><span>{{criminal.prisonHouseName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>床位号：</label><span>{{criminal.bedNumber}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="24">
                    <label>备注：</label><span class="s50">{{criminal.remark}}</span>
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
      <criminal-detail-record :recordShow="recordShow"></criminal-detail-record>
  </div>
  <!-- 简历 -->
  <div class="card">
      <div class="title" @click="isShowResume">
        简历
        <span class="iconfont" :class="resumeShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <criminal-detail-resume :resumeShow="resumeShow"></criminal-detail-resume>
  </div>
  <!-- 体貌特征 -->
  <div class="card">
      <div class="title" @click="isShowFeature">
        体貌特征
        <span class="iconfont" :class="featureShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div v-if="featureShow">
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>身高(m)：</label><span>{{criminalPhysicalCharacteristic.height}}</span>
                </el-col>
                <el-col :span="6">
                    <label>体重(kg)：</label><span>{{criminalPhysicalCharacteristic.weight}}</span>
                </el-col>
                <el-col :span="6">
                    <label>体型：</label><span>{{criminalPhysicalCharacteristic.somatotypeName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>脸型：</label><span>{{criminalPhysicalCharacteristic.faceTypeName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>血型：</label><span>{{criminalPhysicalCharacteristic.bloodTypeName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>口音：</label><span>{{criminalPhysicalCharacteristic.accentName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>足长(cm)：</label><span>{{criminalPhysicalCharacteristic.footLength}}</span>
                </el-col>
                <el-col :span="6">
                    <label>鞋号：</label><span>{{criminalPhysicalCharacteristic.shoeSize}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="24">
                    <label>其他特征：</label><span>
                        <b v-for="(item, index) in criminalPhysicalCharacteristic.otherFeatures" :key="index">
                            {{item.description}}
                        </b>
                    </span>
                </el-col>
            </el-row>
        </div>
      </div>
  </div>
  <!-- 社会关系 -->
  <div class="card">
      <div class="title" @click="isShowSocialRelation">
        社会关系
        <span class="iconfont" :class="socialRelationShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <criminal-detail-social-relation :socialRelationShow="socialRelationShow"></criminal-detail-social-relation>
  </div>
  <!-- 罚金 -->
  <div class="card">
      <div class="title" @click="isShowForfeit">
        罚金
        <span class="iconfont" :class="forfeitShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <criminal-detail-forfeit :forfeitShow="forfeitShow"></criminal-detail-forfeit>
  </div>
  <!-- 出入监 -->
  <div class="card">
      <div class="title" @click="isShowOutInPrison">
        出入监
        <span class="iconfont" :class="outInPrisonShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <criminal-detail-outInPrison :outInPrisonShow="outInPrisonShow"></criminal-detail-outInPrison>
  </div>
</div>

</template>
<script>
import CriminalDetailRecord from './criminal-detail-record';
import CriminalDetailResume from './criminal-detail-resume';
import CriminalDetailSocialRelation from './criminal-detail-social-relation';
import CriminalDetailForfeit from './criminal-detail-forfeit';
import CriminalDetailOutInPrison from './criminal-detail-outinprison';
import { mapState, mapActions } from "vuex";

export default {
  components: {
    "criminal-detail-record": CriminalDetailRecord,
    "criminal-detail-resume": CriminalDetailResume,
    "criminal-detail-social-relation": CriminalDetailSocialRelation,
    "criminal-detail-forfeit": CriminalDetailForfeit,
    "criminal-detail-outInPrison": CriminalDetailOutInPrison
  },
  data() {
    return {
      informationShow: true,
      recordShow: false,
      resumeShow: false,
      featureShow: false,
      socialRelationShow: false,
      forfeitShow: false,
      outInPrisonShow: false
    };
  },
  computed: {
    ...mapState({
      criminal: state => state.criminal.criminal,
      criminalPhysicalCharacteristic: state => state.criminal.criminalPhysicalCharacteristic
    })
  },
  created() {
    this.getCriminal(this.$route.params.id);
    this.getCriminalPhysicalCharacteristic(this.$route.params.id);
  },
  methods: {
    ...mapActions([ "getCriminal", "getCriminalPhysicalCharacteristic" ]),
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
    },
    isShowForfeit() {
      this.forfeitShow = !this.forfeitShow;
    },
    isShowOutInPrison() {
      this.outInPrisonShow = !this.outInPrisonShow;
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
    width: 80px;
    box-sizing: border-box;
    float: left;
    padding-top: 20px;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    padding-top: 20px;
    width: calc(100% - 100px);
    color: #333;
    height: 14px;
    vertical-align: middle;
  }
  .label120{
      width: 130px;
  }
  .span120{
      width: calc(100% - 150px);
  }
}
</style>
