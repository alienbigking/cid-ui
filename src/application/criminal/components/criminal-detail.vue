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
                    <label>身份证号：</label><span>{{criminal.identityCardNumber}}</span>
                </el-col>
                <el-col :span="6">
                    <label>婚否：</label><span>{{criminal.married}}</span>
                </el-col>
                <el-col :span="6">
                    <label>民族：</label><span>{{criminal.ethnicityName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>国籍：</label><span>{{criminal.nationalityName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍类型：</label><span>{{criminal.householdRegisterTypeName}}</span>
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
                    <label>户籍地址国家名称：</label><span>{{criminal.householdRegisterAddressCountryName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址省份名称：</label><span>{{criminal.householdRegisterAddressProvinceName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址城市名称：</label><span>{{criminal.householdRegisterAddressCityName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址县名称：</label><span>{{criminal.householdRegisterAddressCountyName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>户籍地址街道详情：</label><span>{{criminal.householdRegisterAddressStreetDetail}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>家庭地址国家名称：</label><span>{{criminal.homeAddressCountryName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址省份名称：</label><span>{{criminal.homeAddressProvinceName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址城市名称：</label><span>{{criminal.homeAddressCityName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址县名称：</label><span>{{criminal.homeAddressCountyName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>家庭地址街道详情：</label><span>{{criminal.homeAddressStreetDetail}}</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>政治面貌名称：</label><span>{{criminal.politicalStatusName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>曾经加入的党派团体：</label><span>{{criminal.politicalParty}}</span>
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
                    <label>累惯犯：</label><span>{{criminal.recidivisted}}</span>
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
                    <label>监区标识：</label><span>{{criminal.prisonAreaId}}</span>
                </el-col>
                <el-col :span="6">
                    <label>监区名称：</label><span>{{criminal.prisonAreaName}}</span>
                </el-col>
                <el-col :span="6">
                    <label>监舍标识：</label><span>{{criminal.prisonHouseId}}</span>
                </el-col>
                <el-col :span="6">
                    <label>监舍名称：</label><span>{{criminal.prisonHouseName}}</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>床位号：</label><span>{{criminal.bedNumber}}</span>
                </el-col>
                <el-col :span="6">
                    <label>备注：</label><span>{{criminal.remark}}</span>
                </el-col>
                <el-col :span="6">
                    <label>创建时间：</label><span>{{criminal.createdTime}}</span>
                </el-col>
                <el-col :span="6">
                    <label>最后更新时间：</label><span>{{criminal.lastUpdatedTime}}</span>
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
        <el-table class="table40" :data="criminalResume.content" header-row-class-name="tableHeader40">
          <el-table-column prop="a" label="类别"> </el-table-column>
          <el-table-column prop="s" label="开始日期"> </el-table-column>
          <el-table-column prop="d" label="截至日期"> </el-table-column>
          <el-table-column prop="f" label="罪名"> </el-table-column>
          <el-table-column prop="g" label="判处日期"> </el-table-column>
          <el-table-column prop="h" label="刑期"> </el-table-column>
          <el-table-column prop="j" label="关押"> </el-table-column>
          <el-table-column prop="k" label="备注"> </el-table-column>
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
        <el-table class="table40" :data="criminalResume.content" header-row-class-name="tableHeader40">
          <el-table-column prop="startDate" label="开始日期"> </el-table-column>
          <el-table-column prop="endDate" label="截至日期"> </el-table-column>
          <el-table-column prop="company" label="公司"> </el-table-column>
          <el-table-column prop="occupation" label="职业"> </el-table-column>
          <el-table-column prop="duty" label="职位"> </el-table-column>
          <el-table-column prop="criminalName" label="罪犯姓名"> </el-table-column>
          <el-table-column prop="createdTime" label="创建时间"> </el-table-column>
          <el-table-column prop="lastUpdatedTime" label="最后更新时间"> </el-table-column>
        </el-table>
      </div>
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
                  <label>身高(cm):</label><span>{{criminalPhysicalCharacteristic.height}}</span>
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
                  <label class="rowTitle">特征：</label>
                  <div class="rowTwo"> 1{{criminalPhysicalCharacteristic.description}}</div>
              </el-col>
          </el-row>
          <el-row type="flex">
              <el-col :span="6">
                  <label>罪犯标识：</label><span>{{criminalPhysicalCharacteristic.criminalId}}</span>
              </el-col>
              <el-col :span="6">
                  <label>罪犯姓名：</label><span>{{criminalPhysicalCharacteristic.criminalName}}</span>
              </el-col>
              <el-col :span="6">
                  <label>创建时间：</label><span>{{criminalPhysicalCharacteristic.createdTime}}</span>
              </el-col>
              <el-col :span="6">
                  <label>最后更新时间：</label><span>{{criminalPhysicalCharacteristic.lastUpdatedTime}}</span>
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
      <div class="list-box" v-if="socialRelationShow">
        <el-table class="table40" :data="criminalSocialRelation.content" header-row-class-name="tableHeader40">
          <el-table-column prop="appellation" label="称谓"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="age" label="年龄"> </el-table-column>
          <el-table-column prop="company" label="公司"> </el-table-column>
          <el-table-column prop="occupation" label="职业"> </el-table-column>
          <el-table-column prop="politicalStatusName" label="政治面貌"> </el-table-column>
          <el-table-column prop="criminalName" label="罪犯姓名"> </el-table-column>
          <el-table-column prop="createdTime" label="创建时间"> </el-table-column>
          <el-table-column prop="lastUpdatedTime" label="最后更新时间"> </el-table-column>
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
      criminalResume: state => state.criminal.criminalResume,
      criminalPhysicalCharacteristic: state => state.criminal.criminalResume,
      criminalSocialRelation: state => state.criminal.criminalResume
    })
  },
  created() {
    this.getCriminal(this.$route.params.id);
    this.getCriminalResume(this.$route.params.id);
    this.getCriminalPhysicalCharacteristic(this.$route.params.id);
    this.getCriminalSocialRelation(this.$route.params.id);
    console.log(this.criminal);
  },
  methods: {
    ...mapActions([ "getCriminal", "getCriminalResume", "getCriminalPhysicalCharacteristic", "getCriminalSocialRelation" ]),
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
    width: 135px;
    color: #333;
    height: 14px;
    vertical-align: middle;
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
