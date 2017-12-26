<template>
  <div class="">
    <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
      <div class="form-box">
        <el-form-item class="w25" label="编号" prop="code">
            <el-input v-model="criminal.code"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="姓名" prop="name">
            <el-input v-model="criminal.name"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="别化名" prop="alias">
            <el-input v-model="criminal.alias"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="性别" prop="genderCode">
          <el-select v-model="criminal.genderCode" value-key="code" :loading="flag.genders" placeholder="请选择性别" clearable>
            <el-option v-for="(item, index) in genders" :key="index" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="出生日期" prop="birthday">
          <el-date-picker v-model="criminal.birthday" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item class="w25" label="身份证号" prop="identityCardNumber">
            <el-input v-model="criminal.identityCardNumber"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="婚否" prop="married">
            <el-input v-model="criminal.married"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="民族" prop="ethnicityCode">
          <el-select v-model="criminal.ethnicityCode" :loading="flag.ethnicities" clearable>
            <el-option v-for="(item, index) in ethnicities" :key="index" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="form-box">
        <el-form-item class="w25" label="籍贯/国籍" prop="nationalityCode">
          <el-select v-model="criminal.nationalityCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="户籍分类" prop="householdRegisterTypeCode">
          <el-select v-model="criminal.householdRegisterTypeCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="国家(出生地)" prop="birthplaceCountryCode">
          <el-select v-model="criminal.birthplaceCountryCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="省份(出生地)" prop="birthplaceProvinceCode">
          <el-select v-model="criminal.birthplaceProvinceCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="城市(出生地)" prop="birthplaceCityCode">
          <el-select v-model="criminal.birthplaceCityCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="县/区(出生地)" prop="birthplaceCountyCode">
          <el-select v-model="criminal.birthplaceCountyCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="国家(户籍地址)" prop="householdRegisterAddressCountryCode">
          <el-select v-model="criminal.householdRegisterAddressCountryCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="省份(户籍地址)" prop="householdRegisterAddressProvinceCode">
          <el-select v-model="criminal.householdRegisterAddressProvinceCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="城市(户籍地址)" prop="householdRegisterAddressCityCode">
          <el-select v-model="criminal.householdRegisterAddressCityCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="县/区(户籍地址)" prop="householdRegisterAddressCountyCode">
          <el-select v-model="criminal.householdRegisterAddressCountyCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="街道详情(户籍地址)" prop="householdRegisterAddressStreetDetail">
          <el-select v-model="criminal.householdRegisterAddressStreetDetail" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="国家(家庭地址)" prop="householdRegisterAddressStreetDetail">
          <el-select v-model="criminal.householdRegisterAddressStreetDetail" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="省份(家庭地址)" prop="householdRegisterAddressStreetDetail">
          <el-select v-model="criminal.householdRegisterAddressStreetDetail" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="城市(家庭地址)" prop="householdRegisterAddressStreetDetail">
          <el-select v-model="criminal.householdRegisterAddressStreetDetail" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="县/区(家庭地址)" prop="householdRegisterAddressStreetDetail">
          <el-select v-model="criminal.householdRegisterAddressStreetDetail" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="街道详情(家庭地址)" prop="homeAddressStreetDetail">
          <el-select v-model="criminal.homeAddressStreetDetail" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="form-box">
        <el-form-item class="w25" label="政治面貌" prop="politicalStatusCode">
          <el-select v-model="criminal.politicalStatusCode" :loading="flag.politicalStatuses" clearable>
            <el-option v-for="(item, index) in politicalStatuses" :key="index" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="参加过何党派团体" prop="politicalParty">
            <el-input v-model="criminal.politicalParty"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="文化程度" prop="educationDegreeCode">
          <el-select v-model="criminal.educationDegreeCode" :loading="flag.educationDegrees" clearable>
            <el-option v-for="(item, index) in educationDegrees" :key="index" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="职业" prop="occupation">
          <el-select v-model="criminal.occupation" :loading="flag.occupations" clearable>
            <el-option v-for="(item, index) in occupations" :key="index" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="特殊技能" prop="specialSkill">
            <el-input v-model="criminal.specialSkill"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="是否累惯犯" prop="recidivisted">
          <el-select v-model="criminal.recidivisted" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="四涉" prop="involvingFour">
            <el-input v-model="criminal.involvingFour"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="四史" prop="fourHistory">
            <el-input v-model="criminal.fourHistory"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="流窜类别" prop="fledTypeCode">
          <el-select v-model="criminal.fledTypeCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="分管等级" prop="separateManagementLevelCode">
          <el-select v-model="criminal.separateManagementLevelCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="分押类型" prop="separateCustodyTypeCode">
          <el-select v-model="criminal.separateCustodyTypeCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="减刑尺度" prop="commutationScaleCode">
          <el-select v-model="criminal.commutationScaleCode" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="form-box">
        <el-form-item class="w25" label="所属监区" prop="prisonAreaId">
          <el-select v-model="criminal.prisonAreaId" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="监舍号" prop="prisonHouseId">
            <el-input v-model="criminal.prisonHouseId"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="床位号" prop="bedNumber">
            <el-input v-model="criminal.bedNumber"></el-input>
        </el-form-item>
        <el-form-item class="w50" label="入监备注" prop="remark">
            <el-input :maxlength="255" v-model="criminal.remark" type="textarea" resize="none"></el-input>
        </el-form-item>
        <el-form-item class="hasButton">
            <el-button type="primary" @click="onSubmit" :loading="saving">保存</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import _ from "lodash";

export default {
  data() {
    return {
      criminal: {},
      rules: {},
      formRules: {
        code: ["required", "-100"],
        name: ["required"],
        genderCode: ["required"],
        birthday: ["required"],
        identityCardNumber: ["required"],
        married: ["required"],
        ethnicityCode: ["required"],
        nationalityCode: ["required"],
        householdRegisterTypeCode: ["required"],
        birthplaceCountryCode: ["required"],
        birthplaceProvinceCode: ["required"],
        birthplaceCityCode: ["required"],
        birthplaceCountyCode: ["required"],
        householdRegisterAddressCountryCode: ["required"],
        householdRegisterAddressProvinceCode: ["required"],
        householdRegisterAddressCityCode: ["required"],
        householdRegisterAddressCountyCode: ["required"],
        householdRegisterAddressStreetDetail: ["required"],
        homeAddressCountryCode: ["required"],
        homeAddressProvinceCode: ["required"],
        homeAddressCityCode: ["required"],
        homeAddressCountyCode: ["required"],
        homeAddressStreetDetail: ["required"],
        politicalStatusCode: ["required"],
        educationDegreeCode: ["required"],
        occupation: ["required"],
        recidivisted: ["required"],
        involvingFour: ["required"],
        fourHistory: ["required"],
        fledTypeCode: ["required"],
        separateManagementLevelCode: ["required"],
        separateCustodyTypeCode: ["required"],
        commutationScaleCode: ["required"],
        prisonAreaId: ["required"],
        prisonHouseId: ["required"]
      },
      saving: false,
      flag: {
        genders: true,
        ethnicities: true,
        occupations: true,
        educationDegrees: true,
        politicalStatuses: true
      }
    };
  },
  computed: {
    ...mapState({
      genders: state => state.criminal.genders,
      ethnicities: state => state.criminal.ethnicities,
      occupations: state => state.criminal.occupations,
      educationDegrees: state => state.criminal.educationDegrees,
      politicalStatuses: state => state.criminal.politicalStatuses
    })
  },
  methods: {
    ...mapActions(["getGenders", "getEthnicities", "getOccupations", "getEducationDegrees", "getPoliticalStatuses"]),
    lengthRule(e) {
      let min = e.split("-")[0];
      let max = e.split("-")[1];
      if (min && max) {
        return { min: parseInt(min), max: max, message: `请输入${min}至${max}个字符` };
      } else if (min) {
        return { min: parseInt(min), message: `至少输入${min}个字符` };
      } else if (max) {
        return { max: parseInt(max), message: `最多输入${max}个字符` };
      } else {
        return false;
      }
    },
    addRules() {
      Object.keys(this.formRules).map(key => {
        let rule = [];
        this.formRules[key].forEach(item => {
          if (item === "required") {
            rule.push({ required: true, message: "该项必填", trigger: "change blur" });
          } else if (item.indexOf('-') > -1) {
            if (this.lengthRule(item)) rule.push(this.lengthRule(item));
          }
        });
        this.rules[key] = rule;
      });
    },
    onSubmit() {
      console.log(this.criminal);
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          console.log(this.criminal, "可以提交了");
        }
      });
    }
  },
  created() {
    this.addRules();
    this.getGenders().then(res => {
      this.flag.genders = false;
    });
    this.getEthnicities().then(res => {
      this.flag.ethnicities = false;
    });
    this.getOccupations().then(res => {
      this.flag.occupations = false;
    });
    this.getEducationDegrees().then(res => {
      this.flag.educationDegrees = false;
    });
    this.getPoliticalStatuses().then(res => {
      this.flag.politicalStatuses = false;
    });
  }
};
</script>

<style lang="scss">
</style>
