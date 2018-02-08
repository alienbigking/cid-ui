<template>
  <el-form
    ref="form"
    :model="form"
    class="form-criminal"
    :rules="rules"
    label-position="top">
    <div class="form-box">
      <el-form-item
        class="w25"
        label="编号"
        prop="criminal.code">
        <el-input v-model="form.criminal.code"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="姓名"
        prop="criminal.name">
        <el-input v-model="form.criminal.name"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="别化名"
        prop="criminal.alias">
        <el-input v-model="form.criminal.alias"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="性别"
        prop="selectedGender">
        <el-select
          v-model="form.selectedGender"
          value-key="code"
          :loading="initializing"
          placeholder="请选择性别"
          clearable>
          <el-option
            v-for="(item, index) in allGenders"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="出生日期"
        prop="criminal.birthday">
        <el-date-picker
          v-model="form.criminal.birthday"
          value-format="yyyy-MM-dd"
          type="date"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="身份证号"
        prop="criminal.identityCardNumber">
        <el-input v-model="form.criminal.identityCardNumber"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="婚否"
        prop="criminal.married">
        <el-select
          v-model="form.criminal.married"
          clearable>
          <el-option
            label="是"
            :value="true"/>
          <el-option
            label="否"
            :value="false"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="民族"
        prop="selectedEthnicity">
        <el-select
          v-model="form.selectedEthnicity"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allEthnicities"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-box">
      <el-form-item
        class="w25"
        label="籍贯/国籍"
        prop="selectedNationality">
        <el-select
          v-model="form.selectedNationality"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allCountries"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="户籍分类"
        prop="selectedHouseholdRegisterType">
        <el-select
          v-model="form.selectedHouseholdRegisterType"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allHouseholdRegisterTypes"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w50"
        label="出生地"
        prop="selectedBirthplace">
        <el-cascader
          :options="allSelectedBirthplace"
          @active-item-change="onChangeBirthplaceAddress"
          :props="{ value: 'code', label: 'name', children: 'children' }"
          separator="-"
          v-model="form.selectedBirthplace"
          :loading="initializing"
          clearable/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="户籍地址"
        prop="selectedHouseholdRegister">
        <el-cascader
          :options="allHouseholdRegister"
          @active-item-change="onChangeHouseholdRegisterAddress"
          :props="{ value: 'code', label: 'name', children: 'children' }"
          separator="-"
          v-model="form.selectedHouseholdRegister"
          :loading="initializing"
          clearable/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="街道详情(户籍地址)"
        prop="criminal.householdRegisterAddressStreetDetail">
        <el-input v-model="form.criminal.householdRegisterAddressStreetDetail"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="家庭地址"
        prop="selectedHomeAddress">
        <el-cascader
          :options="allHomeAddress"
          @active-item-change="onChangeHomeAddress"
          :props="{ value: 'code', label: 'name', children: 'children' }"
          separator="-"
          v-model="form.selectedHomeAddress"
          :loading="initializing"
          clearable/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="街道详情(家庭地址)"
        prop="criminal.homeAddressStreetDetail">
        <el-input v-model="form.criminal.homeAddressStreetDetail"/>
      </el-form-item>
    </div>
    <div class="form-box">
      <el-form-item
        class="w25"
        label="政治面貌"
        prop="selectPoliticalStatus">
        <el-select
          v-model="form.selectPoliticalStatus"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allPoliticalStatuses"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="参加过何党派团体"
        prop="criminal.politicalParty">
        <el-input v-model="form.criminal.politicalParty"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="文化程度"
        prop="selectEducationDegree">
        <el-select
          v-model="form.selectEducationDegree"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allEducationDegrees"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="职业"
        prop="criminal.occupation">
        <el-input v-model="form.criminal.occupation"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="特殊技能"
        prop="criminal.specialSkill">
        <el-input v-model="form.criminal.specialSkill"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="是否累惯犯"
        prop="criminal.recidivisted">
        <el-select
          v-model="form.criminal.recidivisted"
          clearable>
          <el-option
            label="是"
            :value="true"/>
          <el-option
            label="否"
            :value="false"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="四涉"
        prop="criminal.involvingFour">
        <el-input
        v-model="form.criminal.involvingFour"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="四史"
        prop="criminal.fourHistory">
        <el-input v-model="form.criminal.fourHistory"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="流窜类别"
        prop="selectedFledType">
        <el-select
          v-model="form.selectedFledType"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allFledTypes"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="分管等级"
        prop="selectedSeparateManagementLevel">
        <el-select
          v-model="form.selectedSeparateManagementLevel"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allSeparateManagementLevels"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="分押类型"
        prop="selectedSeparateCustodyType">
        <el-select
          v-model="form.selectedSeparateCustodyType"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allSeparateCustodyTypes"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="减刑尺度"
        prop="selectedCommutationScale">
        <el-select
          v-model="form.selectedCommutationScale"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allCommutationScales"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-box">
      <el-form-item
        class="w25"
        label="所属监区"
        prop="criminal.prisonAreaId">
        <el-select
          v-model="form.criminal.prisonAreaId"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allPrisonAreas"
            :key="index"
            :label="item.name"
            :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="监舍号"
        prop="criminal.prisonHouseId">
        <el-select
          v-model="form.criminal.prisonHouseId"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allPrisonHouses"
            :key="index"
            :label="item.name"
            :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w25"
        label="床位号"
        prop="criminal.bedNumber">
        <el-input v-model="form.criminal.bedNumber"/>
      </el-form-item>
      <el-form-item
        class="w100"
        label="备注"
        prop="criminal.remark">
        <el-input
          v-model="form.criminal.remark"
          :maxlength="1000"
          type="textarea"
          resize="none"/>
      </el-form-item>
      <div class="el-form-item-div">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSave">保 存</el-button>
      </div>
    </div>
  </el-form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { default as criminalLookupService } from "@/application/common/service/lookup/criminal/criminal-lookup-service";
import { default as regionLookupService } from "@/application/common/service/lookup/region/region-lookup-service";
import _ from "lodash";
export default {
  data() {
    return {
      form: {
        selectedGender: null,
        selectedEthnicity: null,
        selectedNationality: null,
        selectedHouseholdRegisterType: null,
        selectPoliticalStatus: null,
        selectEducationDegree: null,
        selectedFledType: null,
        selectedSeparateManagementLevel: null,
        selectedSeparateCustodyType: null,
        selectedCommutationScale: null,
        selectedBirthplace: [],
        selectedHouseholdRegister: [],
        selectedHomeAddress: [],
        criminal: _.cloneDeep(
            this.$store.state.prisonCriminal.criminal
        )
      },
      rules: {
        "criminal.code": [
          { required: true, message: "请输入编号" },
          { max: 50, message: "长度在 50 个字符以内" }
        ],
        "criminal.name": [
          { required: true, message: "请输入姓名" },
          { max: 50, message: "长度在 50 个字符以内" }
        ],
        selectedGender: [{ required: true, message: "请选择性别" }],
        "criminal.birthday": [{ required: true, message: "请选择出生日期" }],
        "criminal.identityCardNumber": [
          { required: true, message: "请输入身份证号" },
          { validator: this.$validators.iDCardRange18w }
        ],
        "criminal.married": [{ required: true, message: "请选择是否婚否" }],
        selectedEthnicity: [{ required: true, message: "请选择民族" }],
        selectedNationality: [{ required: true, message: "请选择国籍" }],
        selectedHouseholdRegisterType: [
          { required: true, message: "请选择户籍类型" }
        ],
        selectedBirthplace: [{ required: true, message: "请选择出生地" }],
        selectedHouseholdRegister: [
          { required: true, message: "请选择户籍地址" }
        ],
        "criminal.householdRegisterAddressStreetDetail": [
          { required: true, message: "请输入户籍街道详情" },
          { max: 50, message: "长度在 50 个字符以内" }
        ],
        selectedHomeAddress: [{ required: true, message: "请选择家庭住址" }],
        "criminal.homeAddressStreetDetail": [
          { required: true, message: "请输入家庭街道详情" },
          { max: 50, message: "长度在 50 个字符以内" }
        ],
        selectPoliticalStatus: [{ required: true, message: "请选择政治面貌" }],
        selectEducationDegree: [{ required: true, message: "请选择文化程度" }],
        "criminal.occupation": [
          { required: true, message: "请选择职业" },
          { max: 50, message: "长度在 50 个字符以内" }
        ],
        "criminal.recidivisted": [
          { required: true, message: "请选择是否惯犯" }
        ],
        "criminal.involvingFour": [
          { required: true, message: "请输入四涉" },
          { max: 50, message: "长度在 50 个字符以内" }
        ],
        "criminal.fourHistory": [
          { required: true, message: "请输入四史" },
          { max: 50, message: "长度在 50 个字符以内" }
        ],
        selectedFledType: [{ required: true, message: "请选择流窜类别" }],
        selectedSeparateManagementLevel: [
          { required: true, message: "请选择分管等级" }
        ],
        selectedSeparateCustodyType: [
          { required: true, message: "请选择分押类型" }
        ],
        selectedCommutationScale: [
          { required: true, message: "请选择减刑尺度" }
        ],
        "criminal.prisonAreaId": [
          { required: true, message: "请选择所属监区" }
        ],
        "criminal.prisonHouseId": [{ required: true, message: "请选择监舍号" }]
      },
      saving: false,
      initializing: true,
      allCountries: [],
      allGenders: [],
      allEthnicities: [],
      allEducationDegrees: [],
      allPoliticalStatuses: [],
      allHouseholdRegisterTypes: [],
      allFledTypes: [],
      allSeparateManagementLevels: [],
      allSeparateCustodyTypes: [],
      allCommutationScales: [],
      allSelectedBirthplace: [],
      allHouseholdRegister: [],
      allHomeAddress: []
    };
  },
  computed: {
    ...mapState({
      allPrisonAreas: state => state.prisonArea.allPrisonAreas,
      allPrisonHouses: state => state.prisonHouse.allPrisonHouses
    })
  },
  watch: {
    "form.selectedGender"(val) {
      this.$set(this.form.criminal, "genderCode", val.code);
      this.$set(this.form.criminal, "genderName", val.name);
    },
    "form.selectedEthnicity"(val) {
      this.$set(this.form.criminal, "ethnicityCode", val.code);
      this.$set(this.form.criminal, "ethnicityName", val.name);
    },
    "form.selectedNationality"(val) {
      this.$set(this.form.criminal, "nationalityCode", val.code);
      this.$set(this.form.criminal, "nationalityName", val.name);
    },
    "form.selectedHouseholdRegisterType"(val) {
      this.$set(this.form.criminal, "householdRegisterTypeCode", val.code);
      this.$set(this.form.criminal, "householdRegisterTypeName", val.name);
    },
    "form.selectPoliticalStatus"(val) {
      this.$set(this.form.criminal, "politicalStatusCode", val.code);
      this.$set(this.form.criminal, "politicalStatusName", val.name);
    },
    "form.selectEducationDegree"(val) {
      this.$set(this.form.criminal, "educationDegreeCode", val.code);
      this.$set(this.form.criminal, "educationDegreeName", val.name);
    },
    "form.selectedFledType"(val) {
      this.$set(this.form.criminal, "fledTypeCode", val.code);
      this.$set(this.form.criminal, "fledTypeName", val.name);
    },
    "form.selectedSeparateManagementLevel"(val) {
      this.$set(this.form.criminal, "separateManagementLevelCode", val.code);
      this.$set(this.form.criminal, "separateManagementLevelName", val.name);
    },
    "form.selectedSeparateCustodyType"(val) {
      this.$set(this.form.criminal, "separateCustodyTypeCode", val.code);
      this.$set(this.form.criminal, "separateCustodyTypeName", val.name);
    },
    "form.selectedCommutationScale"(val) {
      this.$set(this.form.criminal, "commutationScaleCode", val.code);
      this.$set(this.form.criminal, "commutationScaleName", val.name);
    },
    "form.selectedBirthplace"(val) {
      this.$set(this.form.criminal, "birthplaceCountryCode", val[0]);
      let country = this.allSelectedBirthplace.find(item => item.code === val[0]);
      this.$set(
        this.form.criminal,
        "birthplaceCountryName",
        country.name
      );
      this.$set(this.form.criminal, "birthplaceProvinceCode", val[1]);
      let province = country.children.find(item => item.code === val[1]);
      this.$set(
        this.form.criminal,
        "birthplaceProvinceName",
        province.name
      );
      this.$set(this.form.criminal, "birthplaceCityCode", val[2]);
      let city = province.children.find(item => item.code === val[2]);
      this.$set(
        this.form.criminal,
        "birthplaceCityName",
        city.name
      );
      this.$set(this.form.criminal, "birthplaceCountyCode", val[3]);
      let County = city.children.find(item => item.code === val[3]);
      this.$set(
        this.form.criminal,
        "birthplaceCountyName",
        County.name
      );
    },
    "form.selectedHouseholdRegister"(val) {
      this.$set(this.form.criminal, "householdRegisterAddressCountryCode", val[0]);
      let country = this.allHouseholdRegister.find(item => item.code === val[0]);
      this.$set(
        this.form.criminal,
        "householdRegisterAddressCountryName",
        country.name
      );
      this.$set(this.form.criminal, "householdRegisterAddressProvinceCode", val[1]);
      let province = country.children.find(item => item.code === val[1]);
      this.$set(
        this.form.criminal,
        "householdRegisterAddressProvinceName",
        province.name
      );
      this.$set(this.form.criminal, "householdRegisterAddressCityCode", val[2]);
      let city = province.children.find(item => item.code === val[2]);
      this.$set(
        this.form.criminal,
        "householdRegisterAddressCityName",
        city.name
      );
      this.$set(this.form.criminal, "householdRegisterAddressCountyCode", val[3]);
      let County = city.children.find(item => item.code === val[3]);
      this.$set(
        this.form.criminal,
        "householdRegisterAddressCountyName",
        County.name
      );
    },
    "form.selectedHomeAddress"(val) {
      this.$set(this.form.criminal, "homeAddressCountryCode", val[0]);
      let country = this.allHomeAddress.find(item => item.code === val[0]);
      this.$set(
        this.form.criminal,
        "homeAddressCountryName",
        country.name
      );
      this.$set(this.form.criminal, "homeAddressProvinceCode", val[1]);
      let province = country.children.find(item => item.code === val[1]);
      this.$set(
        this.form.criminal,
        "homeAddressProvinceName",
        province.name
      );
      this.$set(this.form.criminal, "homeAddressCityCode", val[2]);
      let city = province.children.find(item => item.code === val[2]);
      this.$set(
        this.form.criminal,
        "homeAddressCityName",
        city.name
      );
      this.$set(this.form.criminal, "homeAddressCountyCode", val[3]);
      let County = city.children.find(item => item.code === val[3]);
      this.$set(
        this.form.criminal,
        "homeAddressCountyName",
        County.name
      );
    },
    "form.criminal": {
      handler: _.debounce(function(criminal) {
        this.$store.commit("updateCriminal", criminal);
      }, 500),
      deep: true
    }
  },
  created() {
    this.$store.commit("setCriminal", { id: this.$route.params.id });
    this.form.criminal = _.cloneDeep(
        this.$store.state.prisonCriminal.criminal
      );
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
      this.allCountries = response[9];
      response[9].map(item => {
        item.children = [];
      });
      this.allSelectedBirthplace = _.cloneDeep(response[9]);
      this.allHouseholdRegister = _.cloneDeep(response[9]);
      this.allHomeAddress = _.cloneDeep(response[9]);
      this.initializing = false;
      this.render();
    });
  },
  methods: {
    ...mapActions([
      "getCriminal",
      "getAllPrisonAreas",
      "getAllPrisonHouses",
      "updateCriminal"
    ]),
    loadingData(allData, CountryCode, ProvinceCode, CityCode, CountyCode, form, tpyeName) {
      const selectedCountry = allData.find(
        b => b.code === CountryCode
      );
      regionLookupService
        .getAllProvinces(CountryCode)
        .then(response => {
          response.map(item => {
            item.children = [];
          });
          selectedCountry.children = _.cloneDeep(response);
        }).then(() => {
          const selectedCountry = allData.find(
            b => b.code === CountryCode
          );
          const selectedProvince = selectedCountry.children.find(
            p => p.code === ProvinceCode
          );
          regionLookupService
            .getAllCities(ProvinceCode)
            .then(response => {
              response.map(item => {
                item.children = [];
              });
              selectedProvince.children = _.cloneDeep(response);
            }).then(() => {
              const selectedCountry = allData.find(
                b => b.code === CountryCode
              );
              const selectedProvince = selectedCountry.children.find(
                p => p.code === ProvinceCode
              );
              const selectedCity = selectedProvince.children.find(
                c => c.code === CityCode
              );
              regionLookupService.getAllCounties(CityCode).then(response => {
                selectedCity.children = _.cloneDeep(response);
              }).then(() => {
                form[tpyeName] = [
                  CountryCode,
                  ProvinceCode,
                  CityCode,
                  CountyCode
                ];
              });
            });
        });
    },
    onLoadingNext(value, allData) {
      const selectedCountryCode = value[0];
      const selectedProvinceCode = value[1];
      const selectedCityCode = value[2];
      if (selectedCityCode) {
        const selectedCountry = allData.find(
          b => b.code === selectedCountryCode
        );
        const selectedProvince = selectedCountry.children.find(
          p => p.code === selectedProvinceCode
        );
        const selectedCity = selectedProvince.children.find(
          c => c.code === selectedCityCode
        );
        regionLookupService.getAllCounties(selectedCityCode).then(response => {
          selectedCity.children = _.cloneDeep(response);
        });
      } else if (selectedProvinceCode) {
        const selectedCountry = allData.find(
          b => b.code === selectedCountryCode
        );
        const selectedProvince = selectedCountry.children.find(
          p => p.code === selectedProvinceCode
        );
        regionLookupService
          .getAllCities(selectedProvinceCode)
          .then(response => {
            response.map(item => {
              item.children = [];
            });
            selectedProvince.children = _.cloneDeep(response);
          });
      } else if (selectedCountryCode) {
        const selectedCountry = allData.find(
          b => b.code === selectedCountryCode
        );
        regionLookupService
          .getAllProvinces(selectedCountryCode)
          .then(response => {
            response.map(item => {
              item.children = [];
            });
            selectedCountry.children = _.cloneDeep(response);
          });
      }
    },
    onChangeBirthplaceAddress(value) {
      this.onLoadingNext(value, this.allSelectedBirthplace);
    },
    onChangeHouseholdRegisterAddress(value) {
      this.onLoadingNext(value, this.allHouseholdRegister);
    },
    onChangeHomeAddress(value) {
      this.onLoadingNext(value, this.allHomeAddress);
    },
    render() {
      this.getCriminal(this.$route.params.id).then(() => {
        this.$refs.form.clearValidate();
        this.form.criminal = _.cloneDeep(this.$store.state.prisonCriminal.criminal);
        this.form.selectedGender = {
          code: this.form.criminal.genderCode,
          name: this.form.criminal.genderName
        };
        this.form.selectedEthnicity = {
          code: this.form.criminal.ethnicityCode,
          name: this.form.criminal.ethnicityName
        };
        this.form.selectedNationality = {
          code: this.form.criminal.nationalityCode,
          name: this.form.criminal.nationalityName
        };
        this.form.selectedHouseholdRegisterType = {
          code: this.form.criminal.householdRegisterTypeCode,
          name: this.form.criminal.householdRegisterTypeName
        };
        this.form.selectPoliticalStatus = {
          code: this.form.criminal.politicalStatusCode,
          name: this.form.criminal.politicalStatusName
        };
        this.form.selectEducationDegree = {
          code: this.form.criminal.educationDegreeCode,
          name: this.form.criminal.educationDegreeName
        };
        this.form.selectedFledType = {
          code: this.form.criminal.fledTypeCode,
          name: this.form.criminal.fledTypeName
        };
        this.form.selectedSeparateManagementLevel = {
          code: this.form.criminal.separateManagementLevelCode,
          name: this.form.criminal.separateManagementLevelName
        };
        this.form.selectedSeparateCustodyType = {
          code: this.form.criminal.separateCustodyTypeCode,
          name: this.form.criminal.separateCustodyTypeName
        };
        this.form.selectedCommutationScale = {
          code: this.form.criminal.commutationScaleCode,
          name: this.form.criminal.commutationScaleName
        };
        this.loadingData(
          this.allSelectedBirthplace,
          this.form.criminal.birthplaceCountryCode,
          this.form.criminal.birthplaceProvinceCode,
          this.form.criminal.birthplaceCityCode,
          this.form.criminal.birthplaceCountyCode,
          this.form,
          "selectedBirthplace"
        );
        this.loadingData(
          this.allHouseholdRegister,
          this.form.criminal.householdRegisterAddressCountryCode,
          this.form.criminal.householdRegisterAddressProvinceCode,
          this.form.criminal.householdRegisterAddressCityCode,
          this.form.criminal.householdRegisterAddressCountyCode,
          this.form,
          "selectedHouseholdRegister"
        );
        this.loadingData(
          this.allHomeAddress,
          this.form.criminal.homeAddressCountryCode,
          this.form.criminal.homeAddressProvinceCode,
          this.form.criminal.homeAddressCityCode,
          this.form.criminal.homeAddressCountyCode,
          this.form,
          "selectedHomeAddress"
        );
      });
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateCriminal()
            .then(response => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/prison-criminal/list`);
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, "修改失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
