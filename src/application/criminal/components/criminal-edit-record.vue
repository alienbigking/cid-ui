<template>
  <div class="container">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="onNew">新增</el-button>
    </div>
    <div class="list-box">
      <template>
        <el-table class="table40" :data="allCriminalRecords" header-row-class-name="tableHeader40">
          <el-table-column align="center" prop="decisionAccusation" label="罪名"> </el-table-column>
          <el-table-column align="center" prop="arrestDate" label="逮捕日期"> </el-table-column>
          <el-table-column align="center" prop="detentionDate" label="羁押日期"> </el-table-column>
          <el-table-column align="center" prop="firstTrialOrganName" label="一审机关"> </el-table-column>
          <el-table-column align="center" prop="finalTrialOrganName" label="终审机关"> </el-table-column>
          <el-table-column align="center" prop="decisionDate" label="判决日期"> </el-table-column>
          <el-table-column align="center" prop="decisionPrisonTermStartDate" label="刑期开始日期"> </el-table-column>
          <el-table-column align="center" prop="decisionPrisonTermEndDate" label="刑期结束日期"> </el-table-column>
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
      <el-form class="form-criminal" :model="form" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w25" label="判决罪名" prop="criminalRecord.decisionAccusation">
            <el-input v-model="form.criminalRecord.decisionAccusation"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="逮捕日期" prop="criminalRecord.arrestDate">
              <el-date-picker v-model="form.criminalRecord.arrestDate" type="date"></el-date-picker>
            </el-form-item>
           <el-form-item class="w25" label="羁押日期" prop="criminalRecord.detentionDate">
              <el-date-picker v-model="form.criminalRecord.detentionDate" type="date"></el-date-picker>
            </el-form-item>
          
          <el-form-item class="w25" label="逮捕机关" prop="selectedArrestOrgan">
            <el-select v-model="form.selectedArrestOrgan" value-key="code" :loading="initializing" clearable>
              <el-option v-for="(item, index) in allPoliceStations" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="起诉机关" prop="selectedProsecutionOrgan">
            <el-select v-model="form.selectedProsecutionOrgan" value-key="code" :loading="initializing" clearable>
              <el-option v-for="(item, index) in allProcuratorates" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="起诉字号" prop="criminalRecord.prosecutionLetterNumber">
            <el-input v-model="form.criminalRecord.prosecutionLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="起诉罪名" prop="criminalRecord.prosecutionAccusation">
            <el-input v-model="form.criminalRecord.prosecutionAccusation"></el-input>
          </el-form-item>


          <el-form-item class="w25" label="一审机关" prop="selectedFirstTrialOrgan">
            <el-select v-model="form.selectedFirstTrialOrgan" value-key="code" :loading="initializing" clearable>
              <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="一审字号" prop="criminalRecord.firstTrialLetterNumber">
            <el-input v-model="form.criminalRecord.firstTrialLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="终审机关" prop="selectedFinalTrialOrgan">
            <el-select v-model="form.selectedFinalTrialOrgan" value-key="code" :loading="initializing" clearable>
              <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="w25" label="终审字号" prop="criminalRecord.finalTrialLetterNumber">
            <el-input v-model="form.criminalRecord.finalTrialLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="判决机关" prop="selectedDecisionOrgan">
            <el-select v-model="form.selectedDecisionOrgan" value-key="code" :loading="initializing" clearable>
              <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="判决字号" prop="criminalRecord.decisionLetterNumber">
            <el-input v-model="form.criminalRecord.decisionLetterNumber"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="判决日期" prop="criminalRecord.decisionDate">
              <el-date-picker v-model="form.criminalRecord.decisionDate" type="date"></el-date-picker>
            </el-form-item>
          <el-form-item class="w25" label="判决剥政年限" prop="criminalRecord.decisionDeprivationPoliticalRightYears">
            <el-input v-model="form.criminalRecord.decisionDeprivationPoliticalRightYears"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="判决刑期开始日期" prop="criminalRecord.decisionPrisonTermStartDate">
            <el-date-picker v-model="form.criminalRecord.decisionPrisonTermStartDate" type="date" :picker-options="pickerBeginDateBefore"></el-date-picker>
          </el-form-item>
          <el-form-item class="w25" label="判决刑期结束日期" prop="criminalRecord.decisionPrisonTermEndDate">
            <el-date-picker v-model="form.criminalRecord.decisionPrisonTermEndDate" type="date" :picker-options="pickerBeginDateAfter"></el-date-picker>
          </el-form-item>
          <el-form-item class="w25" label="有否上诉" prop="criminalRecord.appealed">
            <el-select v-model="form.criminalRecord.appealed" clearable>
                <el-option label="是" :value="true"></el-option>
                <el-option label="否" :value="false"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item class="w50" label="判决明细" prop="criminalRecord.decisionDetail">
            <el-input v-model="form.criminalRecord.decisionDetail"></el-input>
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
import _ from "lodash";

export default {
  data() {
    return {
      form: {
        selectedArrestOrgan: null,
        selectedProsecutionOrgan: null,
        selectedFirstTrialOrgan: null,
        selectedFinalTrialOrgan: null,
        selectedDecisionOrgan: null,
        criminalRecord: _.cloneDeep(
          this.$store.state.criminal.criminalRecord
        )
      },
      rules: {
        "criminalRecord.decisionAccusation": [{ required: true, message: "请输入判决罪名", trigger: "blur" }],
        "criminalRecord.arrestDate": [{ required: true, message: "请选择逮捕日期", trigger: "blur" }],
        "criminalRecord.detentionDate": [{ required: true, message: "请输入羁押日期", trigger: "blur" }],
        selectedArrestOrgan: [{ required: true, message: "请选择逮捕机关" }],
        selectedProsecutionOrgan: [{ required: true, message: "请选择起诉机关" }],
        "criminalRecord.prosecutionLetterNumber": [{ required: true, message: "请输入起诉字号", trigger: "blur" }],
        "criminalRecord.prosecutionAccusation": [{ required: true, message: "请输入起诉罪名", trigger: "blur" }],
        selectedFirstTrialOrgan: [{ required: true, message: "请选择一审机关" }],
        "criminalRecord.firstTrialLetterNumber": [{ required: true, message: "请输入一审字号", trigger: "blur" }],
        selectedDecisionOrgan: [{ required: true, message: "请选择判决机关" }],
        "criminalRecord.decisionLetterNumber": [{ required: true, message: "请输入判决字号", trigger: "blur" }],
        "criminalRecord.decisionDate": [{ required: true, message: "请选择判决日期", trigger: "blur" }],
        "criminalRecord.decisionDeprivationPoliticalRightYears": [{ required: true, message: "请输入判决剥政年限", trigger: "blur" }],
        "criminalRecord.decisionPrisonTermStartDate": [{ required: true, message: "请选择判决刑期开始日期", trigger: "blur" }],
        "criminalRecord.decisionPrisonTermEndDate": [{ required: true, message: "请选择判决刑期结束日期", trigger: "blur" }],
        "criminalRecord.appealed": [{ required: true, message: "请选择有否上诉", trigger: "blur" }]
      },
      pickerBeginDateBefore: {
        disabledDate: (time) => {
          let beginDateVal = this.form.criminalRecord.decisionPrisonTermEndDate;
          if (beginDateVal) {
              return time.getTime() > beginDateVal;
          }
        }
      },
      pickerBeginDateAfter: {
        disabledDate: (time) => {
          let beginDateVal = this.form.criminalRecord.decisionPrisonTermStartDate;
          if (beginDateVal) {
              return time.getTime() < beginDateVal;
          }
        }
      },
      initializing: true,
      allCourts: [],
      allPoliceStations: [],
      allProcuratorates: [],
      editDialogVisible: false,
      deleteDialogVisible: false,
      deleting: false,
      saving: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allCriminalRecords: state => state.criminal.allCriminalRecords
    })
  },
  watch: {
    "form.selectedArrestOrgan"(val) {
      let obj = {
        arrestOrganCode: val.code,
        arrestOrganName: val.name
      };
      this.$store.commit("updateCriminalRecord", obj);
    },
    "form.selectedProsecutionOrgan"(val) {
      let obj = {
        prosecutionOrganCode: val.code,
        prosecutionOrganName: val.name
      };
      this.$store.commit("updateCriminalRecord", obj);
    },
    "form.selectedFirstTrialOrgan"(val) {
      let obj = {
        firstTrialOrganCode: val.code,
        firstTrialOrganName: val.name
      };
      this.$store.commit("updateCriminalRecord", obj);
    },
    "form.selectedFinalTrialOrgan"(val) {
      let obj = {
        finalTrialOrganCode: val.code,
        finalTrialOrganName: val.name
      };
      this.$store.commit("updateCriminalRecord", obj);
    },
    "form.selectedDecisionOrgan"(val) {
      let obj = {
        decisionOrganCode: val.code,
        decisionOrganName: val.name
      };
      this.$store.commit("updateCriminalRecord", obj);
    },
    "form.criminalRecord": {
      handler: _.debounce(function(criminalRecord) {
        this.$store.commit(
          "updateCriminalRecord",
          criminalRecord
        );
      }, 500),
      deep: true
    }
  },
  created() {
    Promise.all([
      this.getAllCourts(),
      this.getAllPoliceStations(),
      this.getAllProcuratorates()
    ]).then(() => {
      this.allCourts = this.$store.state.court.allCourts;
      this.allPoliceStations = this.$store.state.policeStation.allPoliceStations;
      this.allProcuratorates = this.$store.state.procuratorate.allProcuratorates;
      this.initializing = false;
    });
    this.getList();
  },
  methods: {
    ...mapActions([
      "getAllCourts",
      "getAllPoliceStations",
      "getAllProcuratorates",
      "getCriminalRecord",
      "addCriminalRecord",
      "updateCriminalRecord",
      "getAllCriminalRecords",
      "deleteCriminalRecord"
    ]),
    onNew() {
      this.form.selectedArrestOrgan = {};
      this.form.selectedProsecutionOrgan = {};
      this.form.selectedFirstTrialOrgan = {};
      this.form.selectedFinalTrialOrgan = {};
      this.form.selectedDecisionOrgan = {};
      this.form.criminalRecord = { criminalId: this.$route.params.id };
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.getCriminalRecord(id).then(() => {
        this.form.criminalRecord = _.cloneDeep(
          this.$store.state.criminal.criminalRecord
        );
        this.form.selectedArrestOrgan = {
          code: this.form.criminalRecord.arrestOrganCode,
          name: this.form.criminalRecord.arrestOrganName
        };
        this.form.selectedProsecutionOrgan = {
          code: this.form.criminalRecord.prosecutionOrganCode,
          name: this.form.criminalRecord.prosecutionOrganName
        };
        this.form.selectedFirstTrialOrgan = {
          code: this.form.criminalRecord.firstTrialOrganCode,
          name: this.form.criminalRecord.firstTrialOrganName
        };
        this.form.selectedFinalTrialOrgan = {
          code: this.form.criminalRecord.finalTrialOrganCode,
          name: this.form.criminalRecord.finalTrialOrganName
        };
        this.form.selectedDecisionOrgan = {
          code: this.form.criminalRecord.decisionOrganCode,
          name: this.form.criminalRecord.decisionOrganName
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
      this.deleteCriminalRecord(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.getList();
        })
        .catch(() => {
          this.$handleError("删除失败");
          this.deleting = false;
        });
    },
    getList() {
      this.getAllCriminalRecords(this.$route.params.id);
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalRecord.id) {
            // 修改
            this.saving = true;
            this.updateCriminalRecord()
              .then(res => {
                this.saving = false;
                this.getList();
                this.$message.success("修改成功");
                this.editDialogVisible = false;
              })
              .catch(() => {
                this.saving = false;
                this.$handleError("修改失败");
              });
          } else {
            // 新增
            this.saving = true;
            this.addCriminalRecord()
              .then(res => {
                this.saving = false;
                this.getList();
                this.$message.success("新增成功");
                this.editDialogVisible = false;
              })
              .catch(() => {
                this.saving = false;
                this.$handleError("新增失败");
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
    margin-left: 30px;
  }
}
.form-criminal .w50 .el-form-item__content > [class^="el-"]:not(.el-textarea):nth-last-child(1) {
  width:100%;
}
.el-form .el-form-item.w50{
  padding-right: 0;
}

</style>


