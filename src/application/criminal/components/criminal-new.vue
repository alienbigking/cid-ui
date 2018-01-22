<template>
    <div class="detail-card">
        <div class="card-title">
            新增罪犯
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
              <el-select v-model="criminal.genderCode" value-key="code" :loading="initializing" placeholder="请选择性别" clearable>
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
              <el-select v-model="criminal.ethnicityCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allEthnicities" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="籍贯/国籍" prop="nationalityCode">
              <el-select v-model="criminal.nationalityCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allCountries" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="户籍分类" prop="householdRegisterTypeCode">
              <el-select v-model="criminal.householdRegisterTypeCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allHouseholdRegisterTypes" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w50" label="出生地" prop="birthplace">
              <el-cascader :options="allCountries" @change="onChange($event, 'birthplace')" @active-item-change="onChangeAddress($event, 'birthplace')" :props="{ value: 'code', label: 'name', children: 'children' }" separator="-" v-model="criminal.birthplace" :loading="initializing" clearable>
              </el-cascader>
            </el-form-item>
            <el-form-item class="w50" label="户籍地址" prop="householdRegisterAddress">
              <el-cascader :options="allCountries" @change="onChange($event, 'householdRegisterAddress')" @active-item-change="onChangeAddress($event, 'householdRegisterAddress')" :props="{ value: 'code', label: 'name', children: 'children' }" separator="-" v-model="criminal.householdRegisterAddress" :loading="initializing" clearable>
              </el-cascader>
            </el-form-item>
            <el-form-item class="w50" label="街道详情(户籍地址)" prop="householdRegisterAddressStreetDetail">
              <el-input v-model="criminal.householdRegisterAddressStreetDetail"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="家庭地址" prop="homeAddress">
              <el-cascader :options="allCountries" @change="onChange($event, 'homeAddress')" @active-item-change="onChangeAddress($event, 'homeAddress')" :props="{ value: 'code', label: 'name', children: 'children' }" separator="-" v-model="criminal.homeAddress" :loading="initializing" clearable>
              </el-cascader>
            </el-form-item>
            <el-form-item class="w50" label="街道详情(家庭地址)" prop="homeAddressStreetDetail">
              <el-input v-model="criminal.homeAddressStreetDetail"></el-input>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="政治面貌" prop="politicalStatusCode">
              <el-select v-model="criminal.politicalStatusCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allPoliticalStatuses" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="参加过何党派团体" prop="politicalParty">
                <el-input v-model="criminal.politicalParty"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="文化程度" prop="educationDegreeCode">
              <el-select v-model="criminal.educationDegreeCode" value-key="code" :loading="initializing" clearable>
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
              <el-select v-model="criminal.fledTypeCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allFledTypes" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="分管等级" prop="separateManagementLevelCode">
              <el-select v-model="criminal.separateManagementLevelCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allSeparateManagementLevels" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="分押类型" prop="separateCustodyTypeCode">
              <el-select v-model="criminal.separateCustodyTypeCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allSeparateCustodyTypes" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="减刑尺度" prop="commutationScaleCode">
              <el-select v-model="criminal.commutationScaleCode" value-key="code" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allCommutationScales" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="所属监区" prop="prisonAreaId">
              <el-select v-model="criminal.prisonAreaId" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allPrisonAreas" :key="index" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="监舍号" prop="prisonHouseId">
              <el-select v-model="criminal.prisonHouseId" :loading="initializing" clearable>
                <el-option v-for="(item, index) in allPrisonHouses" :key="index" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="床位号" prop="bedNumber">
                <el-input v-model="criminal.bedNumber"></el-input>
            </el-form-item>
            <el-form-item class="w100" label="备注" prop="remark">
                <el-input v-model="criminal.remark" :maxlength="255" type="textarea" resize="none"></el-input>
            </el-form-item>
            <div class="el-form-item-div">
                <el-button class="button-confirm" :loading="saving" @click="onSubmit">保 存</el-button>
            </div>
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
        birthplace: ["required"],
        householdRegisterAddress: ["required"],
        householdRegisterAddressStreetDetail: ["required", "-50"],
        homeAddress: ["required"],
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
      initializing: true,
      allCountries: [],
      birthplace: {
        countryIndex: "",
        provinceIndex: "",
        cityIndex: "",
        countyIndex: ""
      },
      householdRegisterAddress: {
        countryIndex: "",
        provinceIndex: "",
        cityIndex: "",
        countyIndex: ""
      },
      homeAddress: {
        countryIndex: "",
        provinceIndex: "",
        cityIndex: "",
        countyIndex: ""
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
    this.criminal.id = null;
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
      this.allEthnicities = response[1];
      this.allHouseholdRegisterTypes = response[2];
      this.allPoliticalStatuses = response[3];
      this.allEducationDegrees = response[4];
      this.allFledTypes = response[5];
      this.allSeparateManagementLevels = response[6];
      this.allSeparateCustodyTypes = response[7];
      this.allCommutationScales = response[8];
      response[9].map(item => { item.children = []; });
      this.allCountries = response[9];
      this.initializing = false;
    });
    this.addRules();
  },
  methods: {
    ...mapActions(["getAllPrisonAreas", "getAllPrisonHouses", "addCriminal"]),
    onChange(arr, type) {
      this[type].countyIndex = this.allCountries[this[type].countryIndex].children[this[type].provinceIndex].children[this[type].cityIndex].children.findIndex(item => { return item.code === arr[3]; });
    },
    onChangeAddress(arr, type) {
      if (!arr[0]) return;
      this[type].countryIndex = this.allCountries.findIndex(item => { return item.code === arr[0]; });
      if (!this.allCountries[this[type].countryIndex].children.length) {
        regionLookupService.getAllProvinces(arr[0]).then(response => {
          response.map(item => { item.children = []; });
          this.allCountries[this[type].countryIndex].children = _.cloneDeep(response);
        });
      }
      if (!arr[1]) return;
      this[type].provinceIndex = this.allCountries[this[type].countryIndex].children.findIndex(item => { return item.code === arr[1]; });
      if (!this.allCountries[this[type].countryIndex].children[this[type].provinceIndex].children.length) {
        regionLookupService.getAllCities(arr[1]).then(response => {
          response.map(item => { item.children = []; });
          this.allCountries[this[type].countryIndex].children[this[type].provinceIndex].children = _.cloneDeep(response);
        });
      }
      if (!arr[2]) return;
      this[type].cityIndex = this.allCountries[this[type].countryIndex].children[this[type].provinceIndex].children.findIndex(item => { return item.code === arr[2]; });
      if (!this.allCountries[this[type].countryIndex].children[this[type].provinceIndex].children[this[type].cityIndex].length) {
        regionLookupService.getAllCounties(arr[2]).then(response => {
          this.allCountries[this[type].countryIndex].children[this[type].provinceIndex].children[this[type].cityIndex].children = _.cloneDeep(response);
        });
      }
    },
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
              message: "该项必填"
            });
          } else if (item.indexOf("-") > -1) {
            if (this.lengthRule(item)) rule.push(this.lengthRule(item));
          }
        });
        this.rules[key] = rule;
      });
    },
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          let criminal = Object.assign({}, this.criminal);
          Object.keys(criminal).map(key => {
            if (criminal[key] instanceof Array) {
              criminal[`${key}CountryCode`] = this.allCountries[this[key].countryIndex].code;
              criminal[`${key}CountryName`] = this.allCountries[this[key].countryIndex].name;
              criminal[`${key}ProvinceCode`] = this.allCountries[this[key].countryIndex].children[this[key].provinceIndex].code;
              criminal[`${key}ProvinceName`] = this.allCountries[this[key].countryIndex].children[this[key].provinceIndex].name;
              criminal[`${key}CityCode`] = this.allCountries[this[key].countryIndex].children[this[key].provinceIndex].children[this[key].cityIndex].code;
              criminal[`${key}CityName`] = this.allCountries[this[key].countryIndex].children[this[key].provinceIndex].children[this[key].cityIndex].name;
              criminal[`${key}CountyCode`] = this.allCountries[this[key].countryIndex].children[this[key].provinceIndex].children[this[key].cityIndex].children[this[key].countyIndex].code;
              criminal[`${key}CountyName`] = this.allCountries[this[key].countryIndex].children[this[key].provinceIndex].children[this[key].cityIndex].children[this[key].countyIndex].name;
              delete criminal[key];
            } else if (criminal[key] instanceof Object) {
              let obj = Object.assign({}, criminal[key]);
              let str = key.substring(0, key.lastIndexOf("Code"));
              criminal[key] = obj.code;
              criminal[`${str}Name`] = obj.name;
            }
          });
          this.$store.commit("updateCriminal", criminal);
          this.addCriminal().then(response => {
            this.saving = false;
            this.$router.push(`/criminal/list`);
          }).catch(error => {
            this.saving = false;
            this.$errorMessage.show(error, "新增失败");
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
