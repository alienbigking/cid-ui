<template>
  <div class="container">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="onNew">新增</el-button>
    </div>
    <div class="list-box">
      <template>
        <el-table class="table40" :data="allCriminalPhysicalCharacteristics" header-row-class-name="tableHeader40">
          <el-table-column align="center" prop="height" label="身高"> </el-table-column>
          <el-table-column align="center" prop="weight" label="体重"> </el-table-column>
          <el-table-column align="center" prop="somatotypeName" label="体型"> </el-table-column>
          <el-table-column align="center" prop="faceTypeName" label="脸型"> </el-table-column>
          <el-table-column align="center" prop="bloodTypeName" label="血型"> </el-table-column>
          <el-table-column align="center" prop="accentName" label="口音"> </el-table-column>
          <el-table-column align="center" prop="footLength" label="足长"> </el-table-column>
          <el-table-column align="center" prop="shoeSize" label="鞋号"> </el-table-column>
          <el-table-column align="center" prop="lastUpdatedTime" label="最后更新时间"> </el-table-column>
          <el-table-column align="center" label="操作" min-width="122">
            <template slot-scope="scope">
              <el-button type="text" @click="onEdit(scope.row.id)">编辑</el-button>
              <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <el-dialog max-height="500px" width="950px" :center="true" custom-class="noPadding" :visible.sync="editDialogVisible">
      <el-form class="form-criminal" :model="form" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w25" label="身高(m)" prop="criminalPhysicalCharacteristic.height">
            <el-input v-model.number="form.criminalPhysicalCharacteristic.height"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="体重(kg)" prop="criminalPhysicalCharacteristic.weight">
            <el-input v-model.number="form.criminalPhysicalCharacteristic.weight"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="体型" prop="selectedSomatotype">
            <el-select v-model="form.selectedSomatotype" value-key="code" :loading="selecting" clearable placeholder="请选择体型">
              <el-option v-for="(item, index) in allSomatotypes" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="脸型" prop="selectedFaceType">
            <el-select v-model="form.selectedFaceType" value-key="code" :loading="selecting" clearable placeholder="请选择脸型">
              <el-option v-for="(item, index) in allFaceTypes" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="血型" prop="selectedBloodType">
            <el-select v-model="form.selectedBloodType" value-key="code" :loading="selecting" clearable placeholder="请选择血型">
              <el-option v-for="(item, index) in allBloodTypes" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="口音" prop="selectedAccent">
            <el-select v-model="form.selectedAccent" value-key="code" :loading="selecting" clearable placeholder="请选择口音">
              <el-option v-for="(item, index) in allAccents" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="足长(cm)" prop="criminalPhysicalCharacteristic.footLength">
            <el-input v-model.number="form.criminalPhysicalCharacteristic.footLength"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="鞋号" prop="criminalPhysicalCharacteristic.shoeSize">
            <el-input v-model.number="form.criminalPhysicalCharacteristic.shoeSize"></el-input>
          </el-form-item>
          <el-form-item class="w100" label="体貌特征描述" prop="criminalPhysicalCharacteristic.otherFeatures">
            <el-table :data="form.criminalPhysicalCharacteristic.otherFeatures" :show-header="false" header-row-class-name="tableHeader40">
              <el-table-column prop="description">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.description"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作" min-width="122">
                <template slot-scope="scope">
                  <el-button @click.prevent="removePhysicalCharacteristic(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button @click="addPhysicalCharacteristic">新增特征</el-button>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" :loading="saving" @click="onSave">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog class="deleteDialog" width="400px" :center="true" custom-class="noPadding" :visible.sync="deleteDialogVisible">
        <i class="iconfont icon-tishishuoming"></i>
        <span>确认删除<b style="margin: 0 10px;"></b>吗</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="onDeleteConfirm" :loading="deleting">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { default as criminalPhysicalCharacteristicLookupService } from "@/application/common/service/lookup/criminal-physical-characteristic-lookup-service";
import _ from "lodash";

export default {
  data() {
    return {
      form: {
        selectedSomatotype: null,
        selectedFaceType: null,
        selectedBloodType: null,
        selectedAccent: null,
        criminalPhysicalCharacteristic: _.cloneDeep(
          this.$store.state.criminal.criminalPhysicalCharacteristic
        )
      },
      rules: {
        "criminalPhysicalCharacteristic.height": [
          { required: true, message: "请输入身高" },
          { type: "number", message: "身高必须为数字值" }
        ],
        "criminalPhysicalCharacteristic.weight": [
          { required: true, message: "请输入体重" },
          { type: "number", message: "体重必须为数字值" }
        ],
        selectedSomatotype: [{ required: true, message: "请选择血型" }],
        selectedFaceType: [
          { required: true, message: "请选择脸型" }
        ]
      },
      characteristicDescription: null,
      selecting: true,
      // flag: {
      //   allSomatotypes: true,
      //   allFaceTypes: true,
      //   allBloodTypes: true,
      //   allAccents: true
      // },
      allSomatotypes: [],
      allFaceTypes: [],
      allBloodTypes: [],
      allAccents: [],
      editDialogVisible: false,
      deleteDialogVisible: false,
      deleting: false,
      saving: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allCriminalPhysicalCharacteristics: state =>
        state.criminal.allCriminalPhysicalCharacteristics
    })
  },
  watch: {
    selectedSomatotype(val) {
      let obj = {
        somatotypeCode: val.code,
        somatotypeName: val.name
      };
      this.$store.commit("updateCriminalPhysicalCharacteristic", obj);
    },
    selectedFaceType(val) {
      let obj = {
        faceTypeCode: val.code,
        faceTypeName: val.name
      };
      this.$store.commit("updateCriminalPhysicalCharacteristic", obj);
    },
    selectedBloodType(val) {
      let obj = {
        bloodTypeCode: val.code,
        bloodTypeName: val.name
      };
      this.$store.commit("updateCriminalPhysicalCharacteristic", obj);
    },
    selectedAccent(val) {
      let obj = {
        accentCode: val.code,
        accentName: val.name
      };
      this.$store.commit("updateCriminalPhysicalCharacteristic", obj);
    },
    criminalPhysicalCharacteristic: {
      handler: _.debounce(function(criminalPhysicalCharacteristic) {
        this.$store.commit(
          "updateCriminalPhysicalCharacteristic",
          criminalPhysicalCharacteristic
        );
      }, 500),
      deep: true
    }
  },
  created() {
    Promise.all([
      criminalPhysicalCharacteristicLookupService.getAllSomatotypes(),
      criminalPhysicalCharacteristicLookupService.getAllFaceTypes(),
      criminalPhysicalCharacteristicLookupService.getAllBloodTypes(),
      criminalPhysicalCharacteristicLookupService.getAllAccents()
    ]).then(response => {
      this.allSomatotypes = response[0];
      // this.flag.allSomatotypes = false;
      this.allFaceTypes = response[1];
      // this.flag.allFaceTypes = false;
      this.allBloodTypes = response[2];
      // this.flag.allBloodTypes = false;
      this.allAccents = response[3];
      // this.flag.allAccents = false;
      this.selecting = false;
    });
    this.getList();
  },
  methods: {
    removePhysicalCharacteristic(item) {
      var index = this.form.criminalPhysicalCharacteristic.otherFeatures.indexOf(
        item
      );
      if (index !== -1) {
        this.form.criminalPhysicalCharacteristic.otherFeatures.splice(index, 1);
      }
    },
    addPhysicalCharacteristic() {
      this.form.criminalPhysicalCharacteristic.otherFeatures.push({
        description: ""
      });
    },
    ...mapActions([
      "getCriminalPhysicalCharacteristic",
      "addCriminalPhysicalCharacteristic",
      "updateCriminalPhysicalCharacteristic",
      "getAllCriminalPhysicalCharacteristics",
      "deleteCriminalPhysicalCharacteristic"
    ]),
    onNew() {
      this.form.criminalPhysicalCharacteristic = {
        otherFeatures: [{ description: "" }],
        criminalId: this.$route.params.id
      };
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.getCriminalPhysicalCharacteristic(id).then(() => {
        this.form.criminalPhysicalCharacteristic = _.cloneDeep(
          this.$store.state.criminal.criminalPhysicalCharacteristic
        );
        this.selectedSomatotype = {
          code: this.form.criminalPhysicalCharacteristic.somatotypeCode,
          name: this.form.criminalPhysicalCharacteristic.somatotypeName
        };
        this.selectedFaceType = {
          code: this.form.criminalPhysicalCharacteristic.faceTypeCode,
          name: this.form.criminalPhysicalCharacteristic.faceTypeName
        };
        this.selectedBloodType = {
          code: this.form.criminalPhysicalCharacteristic.bloodTypeCode,
          name: this.form.criminalPhysicalCharacteristic.bloodTypeName
        };
        this.selectedAccent = {
          code: this.form.criminalPhysicalCharacteristic.accentCode,
          name: this.form.criminalPhysicalCharacteristic.accentName
        };
      });
      this.editDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteCriminalPhysicalCharacteristic(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.getList();
        })
        .catch(() => {
          this.$message.error("删除失败");
          this.deleting = false;
        });
    },
    getList() {
      this.getAllCriminalPhysicalCharacteristics(
        this.$route.params.id
      ).then(() => {
        this.form.criminalPhysicalCharacteristic = _.cloneDeep(
          this.$store.state.criminal.criminalPhysicalCharacteristic
        );
      });
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          // this.form.criminalPhysicalCharacteristic.somatotypeCode = this.selectedSomatotype.code;
          // this.form.criminalPhysicalCharacteristic.somatotypeName = this.selectedSomatotype.name;
          // this.form.criminalPhysicalCharacteristic.faceTypeCode = this.selectedFaceType.code;
          // this.form.criminalPhysicalCharacteristic.faceTypeName = this.selectedFaceType.name;
          // this.form.criminalPhysicalCharacteristic.bloodTypeCode = this.selectedBloodType.code;
          // this.form.criminalPhysicalCharacteristic.bloodTypeName = this.selectedBloodType.name;
          // this.form.criminalPhysicalCharacteristic.accentCode = this.selectedAccent.code;
          // this.form.criminalPhysicalCharacteristic.accentName = this.selectedAccent.name;
          // this.$store.commit(
          //   "updateCriminalPhysicalCharacteristic",
          //   this.form.criminalPhysicalCharacteristic
          // );
          if (this.form.criminalPhysicalCharacteristic.id) {
            // 修改
            this.saving = true;
            this.updateCriminalPhysicalCharacteristic()
              .then(res => {
                this.saving = false;
                this.getList();
                this.$message.success("修改成功");
                this.editDialogVisible = false;
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("修改失败");
              });
          } else {
            // 新增
            this.saving = true;
            console.log(this.form.criminalPhysicalCharacteristic);
            this.addCriminalPhysicalCharacteristic()
              .then(res => {
                this.saving = false;
                this.getList();
                this.$message.success("新增成功");
                this.editDialogVisible = false;
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("新增失败");
              });
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cell {
  button:nth-child(1) {
    color: #2196f3;
  }
  button:nth-child(2) {
    color: #f44336;
  }
}
.form-criminal .w50 {
  .el-form-item__content > [class^="el-"]:not(.el-textarea):nth-last-child(1) {
    width: 100%;
  }
}

.el-form .el-form-item.w50 {
  padding-right: 0;
}
</style>
