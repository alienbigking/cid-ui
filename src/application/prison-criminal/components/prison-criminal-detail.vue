<template>
  <div>
    <!-- 基本信息 -->
    <div class="detail-card">
      <div
        class="title"
        @click="isShowInformation">
        基本信息
        <span :class="informationShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"/>
      </div>
      <div v-if="informationShow">
        <div class="card-body">
          <el-row>
            <el-col :span="6">
              <label>编号：</label><span>{{ criminal.code }}</span>
            </el-col>
            <el-col :span="6">
              <label>姓名：</label><span>{{ criminal.name }}</span>
            </el-col>
            <el-col :span="6">
              <label>别化名：</label><span>{{ criminal.alias }}</span>
            </el-col>
            <el-col :span="6">
              <label>性别：</label><span>{{ criminal.genderName }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <label>出生日期:</label><span>{{ criminal.birthday }}</span>
            </el-col>

            <el-col :span="6">
              <label>婚否：</label><span>{{ criminal.married?"是":"否" }}</span>
            </el-col>
            <el-col :span="6">
              <label>民族：</label><span>{{ criminal.ethnicityName }}</span>
            </el-col>
            <el-col :span="6">
              <label>国籍：</label><span>{{ criminal.nationalityName }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <label>户籍类型：</label><span>{{ criminal.householdRegisterTypeName }}</span>
            </el-col>
            <el-col :span="6">
              <label>身份证号：</label><span>{{ criminal.identityCardNumber }}</span>
            </el-col>
            <el-col :span="12">
              <label>出生地址：</label>
              <span>{{ criminal.birthplaceCountryName }} - {{ criminal.birthplaceProvinceName }} - {{ criminal.birthplaceCityName }} - {{ criminal.birthplaceCountyName }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <label>户籍地址：</label>
              <span>{{ criminal.householdRegisterAddressCountryName }} - {{ criminal.householdRegisterAddressProvinceName }} - {{ criminal.householdRegisterAddressCityName }} - {{ criminal.householdRegisterAddressCountyName }} - {{ criminal.householdRegisterAddressStreetDetail }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <label>家庭地址：</label>
              <span>{{ criminal.homeAddressCountryName }} - {{ criminal.homeAddressProvinceName }} - {{ criminal.homeAddressCityName }} - {{ criminal.homeAddressCountyName }} - {{ criminal.homeAddressStreetDetail }}</span>
            </el-col>
          </el-row>
        </div>
        <div class="card-body">
          <el-row>
            <el-col :span="6">
              <label>政治面貌：</label><span>{{ criminal.politicalStatusName }}</span>
            </el-col>
            <el-col :span="6">
              <label>是否参加党派团体：</label><span class="span120">{{ criminal.politicalParty?"是":"否" }}</span>
            </el-col>
            <el-col :span="6">
              <label>文化程度：</label><span>{{ criminal.educationDegreeName }}</span>
            </el-col>
            <el-col :span="6">
              <label>职业：</label><span>{{ criminal.occupation }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <label>特殊技能：</label><span>{{ criminal.specialSkill }}</span>
            </el-col>
          </el-row>
        </div>
        <div class="card-body">
          <el-row>
            <el-col :span="6">
              <label>累惯犯：</label><span>{{ criminal.recidivisted?"是":"否" }}</span>
            </el-col>
            <el-col :span="6">
              <label>四涉：</label><span>{{ criminal.involvingFour }}</span>
            </el-col>
            <el-col :span="6">
              <label>四史：</label><span>{{ criminal.fourHistory }}</span>
            </el-col>
            <el-col :span="6">
              <label>监区名称：</label><span>{{ criminal.prisonAreaName }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <label>监舍名称：</label><span>{{ criminal.prisonHouseName }}</span>
            </el-col>
            <el-col :span="6">
              <label>床位号：</label><span>{{ criminal.bedNumber }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <label>备注：</label><span>{{ criminal.remark }}</span>
            </el-col>
          </el-row>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <!-- 犯罪记录 -->
    <div class="detail-card">
      <div
        class="title"
        @click="isShowRecord">
        犯罪记录
        <span :class="recordShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"/>
      </div>
      <prison-criminal-detail-record v-if="recordShow"/>
    </div>
    <!-- 简历 -->
    <div class="detail-card">
      <div
        class="title"
        @click="isShowResume">
        简历
        <span :class="resumeShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"/>
      </div>
      <prison-criminal-detail-resume v-if="resumeShow"/>
    </div>
    <!-- 体貌特征 -->
    <div class="detail-card">
      <div
        class="title"
        @click="isShowFeature">
        体貌特征
        <span :class="featureShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"/>
      </div>
      <div
        class="card-body"
        v-if="featureShow">
        <el-row>
          <el-col :span="6">
            <label>身高(m)：</label><span>{{ criminalPhysicalCharacteristic.height }}</span>
          </el-col>
          <el-col :span="6">
            <label>体重(kg)：</label><span>{{ criminalPhysicalCharacteristic.weight }}</span>
          </el-col>
          <el-col :span="6">
            <label>体型：</label><span>{{ criminalPhysicalCharacteristic.somatotypeName }}</span>
          </el-col>
          <el-col :span="6">
            <label>脸型：</label><span>{{ criminalPhysicalCharacteristic.faceTypeName }}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <label>血型：</label><span>{{ criminalPhysicalCharacteristic.bloodTypeName }}</span>
          </el-col>
          <el-col :span="6">
            <label>口音：</label><span>{{ criminalPhysicalCharacteristic.accentName }}</span>
          </el-col>
          <el-col :span="6">
            <label>足长(cm)：</label><span>{{ criminalPhysicalCharacteristic.footLength }}</span>
          </el-col>
          <el-col :span="6">
            <label>鞋号：</label><span>{{ criminalPhysicalCharacteristic.shoeSize }}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <label>其他特征：</label><span>
              <b
                v-for="(item, index) in criminalPhysicalCharacteristic.otherFeatures"
                :key="index">
                {{ item.description }}
              </b>
            </span>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 社会关系 -->
    <div class="detail-card">
      <div
        class="title"
        @click="isShowSocialRelation">
        社会关系
        <span :class="socialRelationShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"/>
      </div>
      <prison-criminal-detail-social-relation v-if="socialRelationShow"/>
    </div>
    <!-- 罚金 -->
    <div class="detail-card">
      <div
        class="title"
        @click="isShowForfeit">
        罚金
        <span :class="forfeitShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"/>
      </div>
      <prison-criminal-detail-forfeit v-if="forfeitShow"/>
    </div>
    <!-- 出入监 -->
    <div class="detail-card">
      <div
        class="title"
        @click="isShowOutInPrison">
        出入监
        <span :class="outInPrisonShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"/>
      </div>
      <prison-criminal-detail-outInPrison v-if="outInPrisonShow"/>
    </div>
  </div>

</template>
<script>
import PrisonCriminalDetailRecord from './prison-criminal-detail-record';
import PrisonCriminalDetailResume from './prison-criminal-detail-resume';
import PrisonCriminalDetailSocialRelation from './prison-criminal-detail-social-relation';
import PrisonCriminalDetailForfeit from './prison-criminal-detail-forfeit';
import PrisonCriminalDetailOutInPrison from './prison-criminal-detail-out-in-prison';
import { mapState, mapActions } from "vuex";

export default {
  components: {
    "prison-criminal-detail-record": PrisonCriminalDetailRecord,
    "prison-criminal-detail-resume": PrisonCriminalDetailResume,
    "prison-criminal-detail-social-relation": PrisonCriminalDetailSocialRelation,
    "prison-criminal-detail-forfeit": PrisonCriminalDetailForfeit,
    "prison-criminal-detail-outInPrison": PrisonCriminalDetailOutInPrison
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
      criminal: state => state.prisonCriminal.criminal,
      criminalPhysicalCharacteristic: state => state.prisonCriminal.criminalPhysicalCharacteristic
    })
  },
  created() {
    this.getPrisonCriminal(this.$route.params.id);
    this.getPrisonCriminalPhysicalCharacteristic(this.$route.params.id);
  },
  methods: {
    ...mapActions([ "getPrisonCriminal", "getPrisonCriminalPhysicalCharacteristic" ]),
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
.detail-card{
  .title{
    [class^="el-icon"]{
      float: right;
      font-weight: bold;
      line-height: 50px;
    }
  }
  .card-body{
    .label120{
        width: 130px;
    }
    .span120{
        width: calc(100% - 150px);
    }
  }
}
</style>
