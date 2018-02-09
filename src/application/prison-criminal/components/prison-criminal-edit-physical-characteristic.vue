<template>
  <div>
    <el-form
      class="form-criminal"
      :model="form"
      :rules="rules"
      ref="form"
      label-position="top">
      <div class="form-box">
        <el-form-item
          class="w25"
          label="身高(m)"
          prop="criminalPhysicalCharacteristic.height">
          <el-input v-model.number="form.criminalPhysicalCharacteristic.height"/>
        </el-form-item>
        <el-form-item
          class="w25"
          label="体重(kg)"
          prop="criminalPhysicalCharacteristic.weight">
          <el-input v-model.number="form.criminalPhysicalCharacteristic.weight"/>
        </el-form-item>
        <el-form-item
          class="w25"
          label="体型"
          prop="selectedSomatotype">
          <el-select
            v-model="form.selectedSomatotype"
            value-key="code"
            :loading="initializing"
            clearable
            placeholder="请选择体型">
            <el-option
              v-for="(item, index) in allSomatotypes"
              :key="index"
              :label="item.name"
              :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item
          class="w25"
          label="脸型"
          prop="selectedFaceType">
          <el-select
            v-model="form.selectedFaceType"
            value-key="code"
            :loading="initializing"
            clearable
            placeholder="请选择脸型">
            <el-option
              v-for="(item, index) in allFaceTypes"
              :key="index"
              :label="item.name"
              :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item
          class="w25"
          label="血型"
          prop="selectedBloodType">
          <el-select
            v-model="form.selectedBloodType"
            value-key="code"
            :loading="initializing"
            clearable
            placeholder="请选择血型">
            <el-option
              v-for="(item, index) in allBloodTypes"
              :key="index"
              :label="item.name"
              :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item
          class="w25"
          label="口音"
          prop="selectedAccent">
          <el-select
            v-model="form.selectedAccent"
            value-key="code"
            :loading="initializing"
            clearable
            placeholder="请选择口音">
            <el-option
              v-for="(item, index) in allAccents"
              :key="index"
              :label="item.name"
              :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item
          class="w25"
          label="足长(cm)"
          prop="criminalPhysicalCharacteristic.footLength">
          <el-input v-model.number="form.criminalPhysicalCharacteristic.footLength"/>
        </el-form-item>
        <el-form-item
          class="w25"
          label="鞋号"
          prop="criminalPhysicalCharacteristic.shoeSize">
          <el-input v-model.number="form.criminalPhysicalCharacteristic.shoeSize"/>
        </el-form-item>
        <el-form-item
          class="w100"
          prop="criminalPhysicalCharacteristic.otherFeatures">
          <el-button
            size="mini"
            class="mini"
            @click="addPhysicalCharacteristic">新增</el-button>
          <el-table
            ref="gk-table"
            class="table40"
            :data="form.criminalPhysicalCharacteristic.otherFeatures"
            header-row-class-name="tableHeader">
            <el-table-column
              align="center"
              label="其它特征"
              prop="description"
              :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <el-form-item
                  :prop="'criminalPhysicalCharacteristic.otherFeatures.' + scope.$index + '.description'"
                  :key="scope.row.key"
                  :rules="{ required: true, message: '不能为空'}">
                  <el-input v-model="scope.row.description"/>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="操作"
              width="200px">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  @click.prevent="removePhysicalCharacteristic(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <div class="el-form-item-div">
          <el-button
            class="button-confirm"
            :loading="saving"
            @click="onSave">保 存</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { default as criminalPhysicalCharacteristicLookupService } from "@/application/common/service/lookup/criminal/physical-characteristic/criminal-physical-characteristic-lookup-service";
import _ from "lodash";

export default {
  data() {
    return {
      form: {
        selectedSomatotype: null,
        selectedFaceType: null,
        selectedBloodType: null,
        selectedAccent: null,
        criminalPhysicalCharacteristic: {}
      },
      rules: {
        "criminalPhysicalCharacteristic.height": [
          { required: true, message: "请输入身高" },
          { validator: this.$validators.decimal1i2f }
        ],
        "criminalPhysicalCharacteristic.weight": [
          { required: true, message: "请输入体重" },
          { validator: this.$validators.decimal3i2f }
        ],
        "criminalPhysicalCharacteristic.footLength": [
          { validator: this.$validators.decimal2i2f }
        ],
        selectedSomatotype: [{ required: true, message: "请选择血型" }],
        selectedFaceType: [{ required: true, message: "请选择脸型" }]
      },
      initializing: true,
      allSomatotypes: [],
      allFaceTypes: [],
      allBloodTypes: [],
      allAccents: [],
      saving: false
    };
  },
  watch: {
    "form.selectedSomatotype"(val) {
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "somatotypeCode",
        val.code
      );
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "somatotypeName",
        val.name
      );
    },
    "form.selectedFaceType"(val) {
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "faceTypeCode",
        val.code
      );
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "faceTypeName",
        val.name
      );
    },
    "form.selectedBloodType"(val) {
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "bloodTypeCode",
        val.code
      );
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "bloodTypeName",
        val.name
      );
    },
    "form.selectedAccent"(val) {
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "accentCode",
        val.code
      );
      this.$set(
        this.form.criminalPhysicalCharacteristic,
        "accentName",
        val.name
      );
    },
    "form.criminalPhysicalCharacteristic": {
      handler: _.debounce(function(criminalPhysicalCharacteristic) {
        this.$store.commit(
          "updatePrisonCriminalPhysicalCharacteristic",
          criminalPhysicalCharacteristic
        );
      }, 500),
      deep: true
    }
  },
  activated() {
    Promise.all([
      criminalPhysicalCharacteristicLookupService.getAllSomatotypes(),
      criminalPhysicalCharacteristicLookupService.getAllFaceTypes(),
      criminalPhysicalCharacteristicLookupService.getAllBloodTypes(),
      criminalPhysicalCharacteristicLookupService.getAllAccents()
    ]).then(response => {
      this.allSomatotypes = response[0];
      this.allFaceTypes = response[1];
      this.allBloodTypes = response[2];
      this.allAccents = response[3];
      this.initializing = false;
      this.render();
    });
  },
  methods: {
    removePhysicalCharacteristic(feature) {
      this.form.criminalPhysicalCharacteristic.otherFeatures = this.form.criminalPhysicalCharacteristic.otherFeatures.filter(
        item => item !== feature
      );
    },
    addPhysicalCharacteristic() {
      this.form.criminalPhysicalCharacteristic.otherFeatures.push({
        description: ""
      });
    },
    ...mapActions([
      "getPrisonCriminalPhysicalCharacteristic",
      "addPrisonCriminalPhysicalCharacteristic",
      "updatePrisonCriminalPhysicalCharacteristic"
    ]),
    render() {
      this.getPrisonCriminalPhysicalCharacteristic(this.$route.params.id).then(() => {
        this.$refs.form.clearValidate();
        this.form.criminalPhysicalCharacteristic = _.cloneDeep(
          this.$store.state.prisonCriminal.criminalPhysicalCharacteristic
        );
        if (!this.form.criminalPhysicalCharacteristic.id) {
          this.$store.commit("setPrisonCriminalPhysicalCharacteristic", { criminalId: this.$route.params.id, otherFeatures: [] });
          this.form.criminalPhysicalCharacteristic = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalPhysicalCharacteristic
          );
        } else {
          this.form.selectedSomatotype = {
            code: this.form.criminalPhysicalCharacteristic.somatotypeCode,
            name: this.form.criminalPhysicalCharacteristic.somatotypeName
          };
          this.form.selectedFaceType = {
            code: this.form.criminalPhysicalCharacteristic.faceTypeCode,
            name: this.form.criminalPhysicalCharacteristic.faceTypeName
          };
          this.form.selectedBloodType = {
            code: this.form.criminalPhysicalCharacteristic.bloodTypeCode,
            name: this.form.criminalPhysicalCharacteristic.bloodTypeName
          };
          this.form.selectedAccent = {
            code: this.form.criminalPhysicalCharacteristic.accentCode,
            name: this.form.criminalPhysicalCharacteristic.accentName
          };
        }
      });
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalPhysicalCharacteristic.id) {
            // 修改
            this.saving = true;
            this.updatePrisonCriminalPhysicalCharacteristic()
              .then(res => {
                this.saving = false;
                this.render();
                this.$message.success("修改成功");
                this.editDialogVisible = false;
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "修改失败");
              });
          } else {
            // 新增
            this.saving = true;
            this.addPrisonCriminalPhysicalCharacteristic()
              .then(res => {
                this.saving = false;
                this.render();
                this.$message.success("新增成功");
                this.editDialogVisible = false;
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "新增失败");
              });
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.table40{ margin-bottom: 0; }
.cell {
  button {
    color: #f44336;
  }
}
.mini{
  float: right;
  margin-bottom: 5px;
  height: 31px;
}
</style>
