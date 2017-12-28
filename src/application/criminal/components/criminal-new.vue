<template>
    <div class="card">
        <div class="um-title">
            <p>基本信息</p>
        </div>
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
              <el-select v-model="criminal.genderCode" value-key="code" :loading="flag.allGenders" placeholder="请选择性别" clearable>
                <el-option v-for="(item, index) in allGenders" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="出生日期" prop="birthday">
              <el-date-picker v-model="criminal.birthday" value-format="yyyy-MM-dd" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="身份证号" prop="identityCardNumber">
                <el-input v-model="criminal.identityCardNumber"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="婚否" prop="married">
                <el-select v-model="criminal.married" clearable>
                  <el-option label="是" :value="true"></el-option>
                  <el-option label="否" :value="false"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="w25" label="民族" prop="ethnicityCode">
              <el-select v-model="criminal.ethnicityCode" value-key="code" :loading="flag.allEthnicities" clearable>
                <el-option v-for="(item, index) in allEthnicities" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="籍贯/国籍" prop="nationalityCode">
              <el-select v-model="criminal.nationalityCode" value-key="code" :loading="flag.allCountries" clearable>
                <el-option v-for="(item, index) in allCountries" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="户籍分类" prop="householdRegisterTypeCode">
              <el-select v-model="criminal.householdRegisterTypeCode" value-key="code" :loading="flag.allHouseholdRegisterTypes" clearable>
                <el-option v-for="(item, index) in allHouseholdRegisterTypes" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="国家(出生地)" prop="birthplaceCountryCode">
              <el-select v-model="criminal.birthplaceCountryCode" value-key="code" @change="getProvinces($event, 'birthplace')" :loading="flag.allCountries"  clearable>
                <el-option v-for="(item, index) in allCountries" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="省份(出生地)" prop="birthplaceProvinceCode">
              <el-select v-model="criminal.birthplaceProvinceCode" value-key="code" @change="getCities($event, 'birthplace')" :disabled="!criminal.birthplaceCountryCode" :loading="flag.birthplace.province" clearable>
                <el-option v-for="(item, index) in birthplace.province" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="城市(出生地)" prop="birthplaceCityCode">
              <el-select v-model="criminal.birthplaceCityCode" value-key="code" @change="getCounties($event, 'birthplace')" :disabled="!criminal.birthplaceProvinceCode" :loading="flag.birthplace.city" clearable>
                <el-option v-for="(item, index) in birthplace.city" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="县/区(出生地)" prop="birthplaceCountyCode">
              <el-select v-model="criminal.birthplaceCountyCode" value-key="code" :disabled="!criminal.birthplaceCityCode" clearable>
                <el-option v-for="(item, index) in birthplace.county" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="国家(户籍地址)" prop="householdRegisterAddressCountryCode">
              <el-select v-model="criminal.householdRegisterAddressCountryCode" value-key="code" @change="getProvinces($event, 'householdRegisterAddress')" :loading="flag.allCountries" clearable>
                <el-option v-for="(item, index) in allCountries" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="省份(户籍地址)" prop="householdRegisterAddressProvinceCode">
              <el-select v-model="criminal.householdRegisterAddressProvinceCode" value-key="code" @change="getCities($event, 'householdRegisterAddress')" :disabled="!criminal.householdRegisterAddressCountryCode" :loading="flag.householdRegisterAddress.province" clearable>
                <el-option v-for="(item, index) in householdRegisterAddress.province" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="城市(户籍地址)" prop="householdRegisterAddressCityCode">
              <el-select v-model="criminal.householdRegisterAddressCityCode" value-key="code" @change="getCounties($event, 'householdRegisterAddress')" :disabled="!criminal.householdRegisterAddressProvinceCode" clearable>
                <el-option v-for="(item, index) in householdRegisterAddress.city" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="县/区(户籍地址)" prop="householdRegisterAddressCountyCode">
              <el-select v-model="criminal.householdRegisterAddressCountyCode" value-key="code" :disabled="!criminal.householdRegisterAddressCityCode" clearable>
                <el-option v-for="(item, index) in householdRegisterAddress.county" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="街道详情(户籍地址)" prop="householdRegisterAddressStreetDetail">
                <el-input v-model="criminal.householdRegisterAddressStreetDetail" :disabled="!criminal.householdRegisterAddressCountyCode"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="国家(家庭地址)" prop="homeAddressCountryCode">
              <el-select v-model="criminal.homeAddressCountryCode" value-key="code" @change="getProvinces($event, 'homeAddress')" :loading="flag.allCountries" clearable>
                <el-option v-for="(item, index) in allCountries" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="省份(家庭地址)" prop="homeAddressProvinceCode">
              <el-select v-model="criminal.homeAddressProvinceCode" value-key="code" @change="getCities($event, 'homeAddress')" :disabled="!criminal.homeAddressCountryCode" :loading="flag.homeAddress.province" clearable>
                <el-option v-for="(item, index) in homeAddress.province" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="城市(家庭地址)" prop="homeAddressCityCode">
              <el-select v-model="criminal.homeAddressCityCode" value-key="code" @change="getCounties($event, 'homeAddress')" :disabled="!criminal.homeAddressProvinceCode" clearable>
                <el-option v-for="(item, index) in homeAddress.city" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="县/区(家庭地址)" prop="homeAddressCountyCode">
              <el-select v-model="criminal.homeAddressCountyCode" value-key="code" :disabled="!criminal.homeAddressCityCode" clearable>
                <el-option v-for="(item, index) in homeAddress.county" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="街道详情(家庭地址)" prop="homeAddressStreetDetail">
                <el-input v-model="criminal.homeAddressStreetDetail" :disabled="!criminal.homeAddressCountyCode"></el-input>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="政治面貌" prop="politicalStatusCode">
              <el-select v-model="criminal.politicalStatusCode" value-key="code" :loading="flag.allPoliticalStatuses" clearable>
                <el-option v-for="(item, index) in allPoliticalStatuses" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="参加过何党派团体" prop="politicalParty">
                <el-input v-model="criminal.politicalParty"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="文化程度" prop="educationDegreeCode">
              <el-select v-model="criminal.educationDegreeCode" value-key="code" :loading="flag.allEducationDegrees" clearable>
                <el-option v-for="(item, index) in allEducationDegrees" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="职业" prop="occupation">
                <el-input v-model="criminal.occupation"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="特殊技能" prop="specialSkill">
                <el-input v-model="criminal.specialSkill"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="是否累惯犯" prop="recidivisted">
              <el-select v-model="criminal.recidivisted" clearable>
                <el-option label="是" :value="true"></el-option>
                <el-option label="否" :value="false"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="四涉" prop="involvingFour">
                <el-input v-model="criminal.involvingFour"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="四史" prop="fourHistory">
                <el-input v-model="criminal.fourHistory"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="流窜类别" prop="fledTypeCode">
              <el-select v-model="criminal.fledTypeCode" value-key="code" :loading="flag.allFledTypes" clearable>
                <el-option v-for="(item, index) in allFledTypes" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="分管等级" prop="separateManagementLevelCode">
              <el-select v-model="criminal.separateManagementLevelCode" value-key="code" :loading="flag.allSeparateManagementLevels" clearable>
                <el-option v-for="(item, index) in allSeparateManagementLevels" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="分押类型" prop="separateCustodyTypeCode">
              <el-select v-model="criminal.separateCustodyTypeCode" value-key="code" :loading="flag.allSeparateCustodyTypes" clearable>
                <el-option v-for="(item, index) in allSeparateCustodyTypes" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="减刑尺度" prop="commutationScaleCode">
              <el-select v-model="criminal.commutationScaleCode" value-key="code" :loading="flag.allCommutationScales" clearable>
                <el-option v-for="(item, index) in allCommutationScales" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="所属监区" prop="prisonAreaId">
              <el-select v-model="criminal.prisonAreaId" :loading="flag.allPrisonAreas" clearable>
                <el-option v-for="(item, index) in allPrisonAreas" :key="index" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="监舍号" prop="prisonHouseId">
              <el-select v-model="criminal.prisonHouseId" :loading="flag.allPrisonHouses" clearable>
                <el-option v-for="(item, index) in allPrisonHouses" :key="index" :label="item.name" :value="item.id"></el-option>
              </el-select>
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
import { default as criminalLookupService } from "@/application/common/service/lookup/criminal-lookup-service";
import { default as regionLookupService } from "@/application/common/service/lookup/region-lookup-service";
import _ from "lodash";

export default {
  data() {
    return {
      criminal: {},
      rules: {},
      formRules: {
        code: ["required", "-50"],
        name: ["required", "-50"],
        genderCode: ["required"],
        birthday: ["required"],
        identityCardNumber: ["required", "18-18", "ID"],
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
        householdRegisterAddressStreetDetail: ["required", "-50"],
        homeAddressCountryCode: ["required"],
        homeAddressProvinceCode: ["required"],
        homeAddressCityCode: ["required"],
        homeAddressCountyCode: ["required"],
        homeAddressStreetDetail: ["required", "-50"],
        politicalStatusCode: ["required"],
        educationDegreeCode: ["required"],
        occupation: ["required", "-50"],
        recidivisted: ["required"],
        involvingFour: ["required", "-50"],
        fourHistory: ["required", "-50"],
        fledTypeCode: ["required"],
        separateManagementLevelCode: ["required"],
        separateCustodyTypeCode: ["required"],
        commutationScaleCode: ["required"],
        prisonAreaId: ["required"],
        prisonHouseId: ["required"]
      },
      saving: false,
      flag: {
        allGenders: true,
        allEthnicities: true,
        allEducationDegrees: true,
        allPoliticalStatuses: true,
        allCountries: true,
        birthplace: {
          province: true,
          city: true,
          county: true
        },
        householdRegisterAddress: {
          province: true,
          city: true,
          county: true
        },
        homeAddress: {
          province: true,
          city: true,
          county: true
        },
        allSeparateManagementLevels: true,
        allSeparateCustodyTypes: true,
        allCommutationScales: true,
        allPrisonAreas: true,
        allPrisonHouses: true
      },
      allCountries: [],
      birthplace: {
        province: [],
        city: [],
        county: []
      },
      householdRegisterAddress: {
        province: [],
        city: [],
        county: []
      },
      homeAddress: {
        province: [],
        city: [],
        county: []
      },
      allGenders: [],
      allEthnicities: [],
      allEducationDegrees: [],
      allPoliticalStatuses: [],
      allHouseholdRegisterTypes: [],
      allFledTypes: [],
      allSeparateManagementLevels: [],
      allSeparateCustodyTypes: [],
      allCommutationScales: []
    };
  },
  computed: {
    ...mapState({
      allPrisonAreas: state => state.prisonArea.allPrisonAreas,
      allPrisonHouses: state => state.prisonHouse.allPrisonHouses
    })
  },
  watch: {
    criminal: {
      handler: _.debounce(function(criminal) {
        this.$store.commit("updateCriminal", criminal);
      }, 500),
      deep: true
    }
  },
  created() {
    Promise.all([
      criminalLookupService.getAllGenders(),
      criminalLookupService.getAllEthnicities(),
      criminalLookupService.getAllHouseholdRegisterTypes(),
      criminalLookupService.getAllPoliticalStatuses(),
      criminalLookupService.getAllEducationDegrees(),
      criminalLookupService.getAllFledTypes(),
      criminalLookupService.getAllSeparateManagementLevels(),
      criminalLookupService.getAllSeparateCustodyTypes(),
      criminalLookupService.getAllCommutationScales(),
      regionLookupService.getAllCountries(),
      this.getAllPrisonAreas(),
      this.getAllPrisonHouses()
    ]).then(response => {
      this.allGenders = response[0];
      this.flag.allGenders = false;
      this.allEthnicities = response[1];
      this.flag.allEthnicities = false;
      this.allHouseholdRegisterTypes = response[2];
      this.flag.allHouseholdRegisterTypes = false;
      this.allPoliticalStatuses = response[3];
      this.flag.allPoliticalStatuses = false;
      this.allEducationDegrees = response[4];
      this.flag.allEducationDegrees = false;
      this.allFledTypes = response[5];
      this.flag.allFledTypes = false;
      this.allSeparateManagementLevels = response[6];
      this.flag.allSeparateManagementLevels = false;
      this.allSeparateCustodyTypes = response[7];
      this.flag.allSeparateCustodyTypes = false;
      this.allCommutationScales = response[8];
      this.flag.allCommutationScales = false;
      this.allCountries = response[9];
      this.flag.allCountries = false;
      this.flag.allPrisonAreas = false;
      this.flag.allPrisonHouses = false;
    });
    this.addRules();
  },
  methods: {
    ...mapActions(["getAllPrisonAreas", "getAllPrisonHouses", "addCriminal"]),
    lengthRule(e) {
      let min = e.split("-")[0];
      let max = e.split("-")[1];
      if (min && max) {
        if (min === max) return { min: parseInt(min), max: parseInt(max), message: `请输入${min}个字符` };
        return { min: parseInt(min), max: parseInt(max), message: `请输入${min}至${max}个字符` };
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
            rule.push({
              required: true,
              message: "该项必填",
              trigger: "change blur"
            });
          } else if (item.indexOf("-") > -1) {
            if (this.lengthRule(item)) rule.push(this.lengthRule(item));
          }
        });
        this.rules[key] = rule;
      });
    },
    getProvinces(e, type) {
      // 修改国家之后先清空已选择的城市县区等
      delete this.criminal[`${type}ProvinceCode`];
      delete this.criminal[`${type}CityCode`];
      delete this.criminal[`${type}CountyCode`];
      delete this.criminal[`${type}StreetDetail`];
      if (!e) return;
      regionLookupService.getAllProvinces(e.code).then(response => {
        this[type].province = response;
        this.flag[type].province = false;
      });
    },
    getCities(e, type) {
      delete this.criminal[`${type}CityCode`];
      delete this.criminal[`${type}CountyCode`];
      delete this.criminal[`${type}StreetDetail`];
      if (!e) return;
      regionLookupService.getAllCities(e.code).then(response => {
        this[type].city = response;
        this.flag[type].city = false;
      });
    },
    getCounties(e, type) {
      delete this.criminal[`${type}CountyCode`];
      delete this.criminal[`${type}StreetDetail`];
      if (!e) return;
      regionLookupService.getAllCounties(e.code).then(response => {
        this[type].county = response;
        this.flag[type].county = false;
      });
    },
    onSubmit() {
      // console.log(this.criminal);
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          let criminal = Object.assign({}, this.criminal);
          Object.keys(criminal).map(key => {
            if (typeof criminal[key] === "object") {
              let obj = Object.assign({}, criminal[key]);
              let str = key.substring(0, key.lastIndexOf("Code"));
              criminal[key] = obj.code;
              criminal[`${str}Name`] = obj.name;
            }
          });
          // console.log(criminal);
          this.$store.commit("updateCriminal", criminal);
          this.addCriminal().then(response => {
            // console.log(response);
            this.$router.push(`/criminal/list`);
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
