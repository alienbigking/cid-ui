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
      <el-form class="form-criminal" :model="criminalRecord" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w25" label="判决罪名" prop="decisionAccusation">
            <el-input v-model="criminalRecord.decisionAccusation"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="逮捕日期" prop="arrestDate">
              <el-date-picker v-model="criminalRecord.arrestDate" type="date"></el-date-picker>
            </el-form-item>
           <el-form-item class="w25" label="羁押日期" prop="detentionDate">
              <el-date-picker v-model="criminalRecord.detentionDate" type="date"></el-date-picker>
            </el-form-item>
          
          <el-form-item class="w25" label="逮捕机关" prop="selectedArrestOrgan">
            <el-select v-model="selectedArrestOrgan" value-key="code" :loading="flag.allPoliceStations" clearable>
              <el-option v-for="(item, index) in allPoliceStations" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="起诉机关" prop="selectedProsecutionOrgan">
            <el-select v-model="selectedProsecutionOrgan" value-key="code" :loading="flag.allProcuratorates" clearable>
              <el-option v-for="(item, index) in allProcuratorates" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="起诉字号" prop="prosecutionLetterNumber">
            <el-input v-model="criminalRecord.prosecutionLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="起诉罪名" prop="prosecutionAccusation">
            <el-input v-model="criminalRecord.prosecutionAccusation"></el-input>
          </el-form-item>


          <el-form-item class="w25" label="一审机关" prop="selectedFirstTrialOrgan">
            <el-select v-model="selectedFirstTrialOrgan" value-key="code" :loading="flag.allCourts" clearable>
              <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="一审字号" prop="firstTrialLetterNumber">
            <el-input v-model="criminalRecord.firstTrialLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="终审机关" prop="selectedFinalTrialOrgan">
            <el-select v-model="selectedFinalTrialOrgan" value-key="code" :loading="flag.allCourts" clearable>
              <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="w25" label="终审字号" prop="finalTrialLetterNumber">
            <el-input v-model="criminalRecord.finalTrialLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="判决机关" prop="selectedDecisionOrgan">
            <el-select v-model="selectedDecisionOrgan" value-key="code" :loading="flag.allCourts" clearable>
              <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="判决字号" prop="decisionLetterNumber">
            <el-input v-model="criminalRecord.decisionLetterNumber"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="判决日期" prop="decisionDate">
              <el-date-picker v-model="criminalRecord.decisionDate" type="date"></el-date-picker>
            </el-form-item>
          <el-form-item class="w25" label="判决剥政年限" prop="decisionDeprivationPoliticalRightYears">
            <el-input v-model="criminalRecord.decisionDeprivationPoliticalRightYears"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="判决刑期开始日期" prop="decisionPrisonTermStartDate">
            <el-date-picker v-model="criminalRecord.decisionPrisonTermStartDate" type="date"></el-date-picker>
          </el-form-item>
          <el-form-item class="w25" label="判决刑期结束日期" prop="decisionPrisonTermEndDate">
            <el-date-picker v-model="criminalRecord.decisionPrisonTermEndDate" type="date"></el-date-picker>
          </el-form-item>
          <el-form-item class="w25" label="有否上诉" prop="appealed">
            <el-select v-model="criminalRecord.appealed" clearable>
                <el-option label="是" :value="true"></el-option>
                <el-option label="否" :value="false"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item class="w50" label="判决明细" prop="decisionDetail">
            <el-input v-model="criminalRecord.decisionDetail"></el-input>
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
      criminalRecord: _.cloneDeep(
        this.$store.state.criminal.criminalRecord
      ),
      rules: {
        // decisionAccusation: [{ required: true, message: "请输入判决罪名", trigger: "blur" }],
        // arrestDate: [{ required: true, message: "请选择逮捕日期", trigger: "blur" }],
        // detentionDate: [{ required: true, message: "请输入羁押日期", trigger: "blur" }],
        // selectedArrestOrgan: [{ required: true, message: "请选择逮捕机关", trigger: "blur" }],
        // selectedProsecutionOrgan: [{ required: true, message: "请选择起诉机关", trigger: "blur" }],
        // prosecutionLetterNumber: [{ required: true, message: "请输入起诉字号", trigger: "blur" }],
        // prosecutionAccusation: [{ required: true, message: "请输入起诉罪名", trigger: "blur" }],
        // selectedFirstTrialOrgan: [{ required: true, message: "请选择一审机关", trigger: "blur" }],
        // firstTrialLetterNumber: [{ required: true, message: "请输入一审字号", trigger: "blur" }],
        // selectedDecisionOrgan: [{ required: true, message: "请选择判决机关", trigger: "blur" }],
        // decisionLetterNumber: [{ required: true, message: "请输入判决字号", trigger: "blur" }],
        // decisionDate: [{ required: true, message: "请选择判决日期", trigger: "blur" }],
        // decisionDeprivationPoliticalRightYears: [{ required: true, message: "请输入判决剥政年限", trigger: "blur" }],
        // decisionPrisonTermStartDate: [{ required: true, message: "请选择判决刑期开始日期", trigger: "blur" }],
        // decisionPrisonTermEndDate: [{ required: true, message: "请选择判决刑期结束日期", trigger: "blur" }],
        // appealed: [{ required: true, message: "请选择有否上诉", trigger: "blur" }]
      },
      selectedArrestOrgan: null,
      selectedProsecutionOrgan: null,
      selectedFirstTrialOrgan: null,
      selectedFinalTrialOrgan: null,
      selectedDecisionOrgan: null,
      flag: {
        allCourts: true,
        allPoliceStations: true,
        allProcuratorates: true
      },
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
    criminalRecord: {
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
      this.flag.allCourts = false;
      this.allPoliceStations = this.$store.state.policeStation.allPoliceStations;
      this.flag.allPoliceStations = false;
      this.allProcuratorates = this.$store.state.procuratorate.allProcuratorates;
      this.flag.allProcuratorates = false;
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
      this.editDialogVisible = true;
      this.criminalRecord = { criminalId: this.$route.params.id };
    },
    onEdit(id) {
      this.getCriminalRecord(id).then(() => {
        this.criminalRecord = _.cloneDeep(
          this.$store.state.criminal.criminalRecord
        );
        this.selectedArrestOrgan = {
          code: this.criminalRecord.arrestOrganCode,
          name: this.criminalRecord.arrestOrganName
        };
        this.selectedProsecutionOrgan = {
          code: this.criminalRecord.prosecutionOrganCode,
          name: this.criminalRecord.prosecutionOrganName
        };
        this.selectedFirstTrialOrgan = {
          code: this.criminalRecord.firstTrialOrganCode,
          name: this.criminalRecord.firstTrialOrganName
        };
        this.selectedFinalTrialOrgan = {
          code: this.criminalRecord.finalTrialOrganCode,
          name: this.criminalRecord.finalTrialOrganName
        };
        this.selectedDecisionOrgan = {
          code: this.criminalRecord.decisionOrganCode,
          name: this.criminalRecord.decisionOrganName
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
          this.$message.error("删除失败");
          this.deleting = false;
        });
    },
    getList() {
      this.getAllCriminalRecords(this.$route.params.id);
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.criminalRecord.arrestOrganCode = this.selectedArrestOrgan.code;
          this.criminalRecord.arrestOrganName = this.selectedArrestOrgan.name;

          this.criminalRecord.prosecutionOrganCode = this.selectedProsecutionOrgan.code;
          this.criminalRecord.prosecutionOrganName = this.selectedProsecutionOrgan.name;

          this.criminalRecord.firstTrialOrganCode = this.selectedFirstTrialOrgan.code;
          this.criminalRecord.firstTrialOrganName = this.selectedFirstTrialOrgan.name;

          this.criminalRecord.finalTrialOrganCode = this.selectedFinalTrialOrgan.code;
          this.criminalRecord.finalTrialOrganName = this.selectedFinalTrialOrgan.name;

          this.criminalRecord.decisionOrganCode = this.selectedDecisionOrgan.code;
          this.criminalRecord.decisionOrganName = this.selectedDecisionOrgan.name;
          this.$store.commit(
            "updateCriminalRecord",
            this.criminalRecord
          );
          if (this.criminalRecord.id) {
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
                this.$message.error("修改失败");
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


