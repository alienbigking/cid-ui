<template>
  <div class="container">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="onNew">新增</el-button>
    </div>
    <div class="list-box">
      <template>
        <el-table class="table40" :data="allCriminalPhysicalCharacteristics" header-row-class-name="tableHeader40">
          <el-table-column prop="height" label="身高"> </el-table-column>
          <el-table-column prop="weight" label="体重"> </el-table-column>
          <el-table-column prop="somatotypeName" label="体型"> </el-table-column>
          <el-table-column prop="faceTypeName" label="脸型"> </el-table-column>
          <el-table-column prop="bloodTypeName" label="血型"> </el-table-column>
          <el-table-column prop="accentName" label="口音"> </el-table-column>
          <el-table-column prop="footLength" label="足长"> </el-table-column>
          <el-table-column prop="shoeSize" label="鞋号"> </el-table-column>
          <!-- <el-table-column prop="otherFeatures[0].description" label="其它特征"> </el-table-column> -->
           <!-- <el-table-column label="其它特征">
            <template slot-scope="scope">
              {{scope.row.otherFeatures[0].description}}
            </template>
          </el-table-column> -->
          <el-table-column prop="lastUpdatedTime" label="最后更新时间"> </el-table-column>
          <el-table-column label="操作" min-width="122">
            <template slot-scope="scope">
              <el-button type="text" @click="onEdit(scope.row.id)">编辑</el-button>
              <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <el-dialog width="950px" :center="true" custom-class="noPadding" :visible.sync="editDialogVisible">
      <el-form class="form-criminal" :model="criminalPhysicalCharacteristic" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w25" label="身高(m)" prop="height">
            <el-input v-model="criminalPhysicalCharacteristic.height"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="体重(kg)" prop="weight">
            <el-input v-model="criminalPhysicalCharacteristic.weight"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="体型" prop="somatotypeCode">
            <el-select v-model="selectedSomatotype" value-key="code" :loading="flag.allSomatotypes" clearable placeholder="请选择体型">
              <el-option v-for="(item, index) in allSomatotypes" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="脸型" prop="faceTypeCode">
            <el-select v-model="selectedFaceType" value-key="code" :loading="flag.allFaceTypes" clearable placeholder="请选择脸型">
              <el-option v-for="(item, index) in allFaceTypes" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="血型" prop="bloodTypeCode">
            <el-select v-model="selectedBloodType" value-key="code" :loading="flag.allBloodTypes" clearable placeholder="请选择血型">
              <el-option v-for="(item, index) in allBloodTypes" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="口音" prop="accentCode">
            <el-select v-model="selectedAccent" value-key="code" :loading="flag.allAccents" clearable placeholder="请选择口音">
              <el-option v-for="(item, index) in allAccents" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="足长(cm)" prop="footLength">
            <el-input v-model="criminalPhysicalCharacteristic.footLength"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="鞋号" prop="shoeSize">
            <el-input v-model="criminalPhysicalCharacteristic.shoeSize"></el-input>
          </el-form-item>
          <el-form-item class="w100" label="体貌特征描述" prop="otherFeatures">
            <el-table :data="criminalPhysicalCharacteristic.otherFeatures" :show-header="false" header-row-class-name="tableHeader40">
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
      criminalPhysicalCharacteristic: _.cloneDeep(
        this.$store.state.criminal.criminalPhysicalCharacteristic
      ),
      rules: {
        // height: [
        //   { required: true, message: "请输入身高" },
        //   { type: "number", max: 50, message: "长度在 1 到 50 个字符" }
        // ],
        // weight: [
        //   { required: true, message: "请输入体重", trigger: "blur" },
        //   { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        // ],
        // somatotypeCode: [
        //   { required: true, message: "请选择血型", trigger: "blur" }
        // ],
        // faceTypeCode: [
        //   { required: true, message: "请选择脸型", trigger: "blur" }
        // ],
        // otherFeatures: [
        //   { required: true, message: "不能为空", trigger: "blur" },
        //   { max: 255, message: "长度在 1 到 255 个字符", trigger: "blur" }
        // ]
      },
      selectedSomatotype: null,
      selectedFaceType: null,
      selectedBloodType: null,
      selectedAccent: null,
      characteristicDescription: null,
      flag: {
        allSomatotypes: true,
        allFaceTypes: true,
        allBloodTypes: true,
        allAccents: true
      },
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
    criminalSocialRelation: {
      handler: _.debounce(function(criminalSocialRelation) {
        this.$store.commit(
          "updateCriminalSocialRelation",
          criminalSocialRelation
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
      this.flag.allSomatotypes = false;
      this.allFaceTypes = response[1];
      this.flag.allFaceTypes = false;
      this.allBloodTypes = response[2];
      this.flag.allBloodTypes = false;
      this.allAccents = response[3];
      this.flag.allAccents = false;
    });
    this.getList();
  },
  methods: {
      removePhysicalCharacteristic(item) {
        var index = this.criminalPhysicalCharacteristic.otherFeatures.indexOf(item);
        if (index !== -1) {
          this.criminalPhysicalCharacteristic.otherFeatures.splice(index, 1);
        }
      },
      addPhysicalCharacteristic() {
        this.criminalPhysicalCharacteristic.otherFeatures.push({
          description: ''
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
      this.criminalPhysicalCharacteristic = { otherFeatures: [{ description: "" }], criminalId: this.$route.params.id };
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.getCriminalPhysicalCharacteristic(id).then(() => {
        this.criminalPhysicalCharacteristic = _.cloneDeep(
          this.$store.state.criminal.criminalPhysicalCharacteristic
        );
        this.selectedSomatotype = {
          code: this.criminalPhysicalCharacteristic.somatotypeCode,
          name: this.criminalPhysicalCharacteristic.somatotypeName
        };
        this.selectedFaceType = {
          code: this.criminalPhysicalCharacteristic.faceTypeCode,
          name: this.criminalPhysicalCharacteristic.faceTypeName
        };
        this.selectedBloodType = {
          code: this.criminalPhysicalCharacteristic.bloodTypeCode,
          name: this.criminalPhysicalCharacteristic.bloodTypeName
        };
        this.selectedAccent = {
          code: this.criminalPhysicalCharacteristic.accentCode,
          name: this.criminalPhysicalCharacteristic.accentName
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
      this.getAllCriminalPhysicalCharacteristics(this.$route.params.id).then(() => {
        this.criminalPhysicalCharacteristic = _.cloneDeep(
          this.$store.state.criminal.criminalPhysicalCharacteristic
        );
      });
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.criminalPhysicalCharacteristic.somatotypeCode = this.selectedSomatotype.code;
          this.criminalPhysicalCharacteristic.somatotypeName = this.selectedSomatotype.name;

          this.criminalPhysicalCharacteristic.faceTypeCode = this.selectedFaceType.code;
          this.criminalPhysicalCharacteristic.faceTypeName = this.selectedFaceType.name;

          this.criminalPhysicalCharacteristic.bloodTypeCode = this.selectedBloodType.code;
          this.criminalPhysicalCharacteristic.bloodTypeName = this.selectedBloodType.name;

          this.criminalPhysicalCharacteristic.accentCode = this.selectedAccent.code;
          this.criminalPhysicalCharacteristic.accentName = this.selectedAccent.name;

          this.$store.commit(
            "updateCriminalPhysicalCharacteristic",
            this.criminalPhysicalCharacteristic
          );
          if (this.criminalPhysicalCharacteristic.id) {
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
.form-criminal
  .w50 {
    .el-form-item__content
    > [class^="el-"]:not(.el-textarea):nth-last-child(1) {
      width: 100%;
    }
  }
    
.el-form .el-form-item.w50 {
  padding-right: 0;
}
</style>

