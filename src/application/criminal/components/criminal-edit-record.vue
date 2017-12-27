<template>
  <div class="container">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="onNew">新增</el-button>
    </div>
    <div class="list-box">
      <template>
        <el-table class="table40" :data="allCriminalRecords" header-row-class-name="tableHeader40">
          <el-table-column prop="decisionAccusation" label="罪名"> </el-table-column>
          <el-table-column prop="arrestDate" label="逮捕日期"> </el-table-column>
          <el-table-column prop="detentionDate" label="羁押日期"> </el-table-column>
          <el-table-column prop="firstTrialOrganName" label="一审机关名称"> </el-table-column>
          <el-table-column prop="finalTrialOrganName" label="终审机关名称"> </el-table-column>
          <el-table-column prop="decisionDate" label="判决日期"> </el-table-column>
          <el-table-column prop="decisionPrisonTermStartDate" label="判决刑期开始日期"> </el-table-column>
          <el-table-column prop="decisionPrisonTermEndDate" label="判决刑期结束日期"> </el-table-column>
          <el-table-column label="操作" min-width="122">
            <template slot-scope="scope">
              <el-button type="text" @click="onEdit(scope.row.id)">编辑</el-button>
              <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-button type="primary">保存</el-button>
    </div>
    <el-dialog width="950px" :center="true" custom-class="noPadding" :visible.sync="editDialogVisible">
      <el-form class="form-criminal" :model="criminalRecord" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w25" label="罪名" prop="decisionAccusation">
            <el-input v-model="criminalRecord.decisionAccusation"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="逮捕日期" prop="arrestDate">
            <el-input v-model="criminalRecord.arrestDate"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="羁押日期" prop="detentionDateage">
            <el-input v-model="criminalRecord.detentionDate"></el-input>
          </el-form-item>
          
          <el-form-item class="w25" label="逮捕机关" prop="arrestOrgan">
            <el-input v-model="criminalRecord.arrestOrgan"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="起诉机关" prop="prosecutionOrgan">
            <el-input v-model="criminalRecord.prosecutionOrgan"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="起诉字号" prop="prosecutionLetterNumber">
            <el-input v-model="criminalRecord.prosecutionLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="起诉罪名" prop="prosecutionAccusation">
            <el-input v-model="criminalRecord.prosecutionAccusation"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="一审机关" prop="firstTrialOrganName">
            <el-input v-model="criminalRecord.firstTrialOrganName"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="终审机关" prop="finalTrialOrganName">
            <el-input v-model="criminalRecord.finalTrialOrganName"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="终审字号" prop="finalTrialLetterNumber">
            <el-input v-model="criminalRecord.finalTrialLetterNumber"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="判决机关" prop="finalTrialOrganName">
            <el-input v-model="criminalRecord.decisionOrgan"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="判决字号" prop="finalTrialOrganName">
            <el-input v-model="criminalRecord.decisionLetterNumber"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="判决日期" prop="decisionDate">
            <el-input v-model="criminalRecord.decisionDate"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="判决剥政年限" prop="decisionDeprivationPoliticalRightYears">
            <el-input v-model="criminalRecord.decisionDeprivationPoliticalRightYears"></el-input>
          </el-form-item>

          <el-form-item class="w25" label="判决刑期开始日期" prop="decisionPrisonTermStartDate">
            <el-input v-model="criminalRecord.decisionPrisonTermStartDate"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="判决刑期结束日期" prop="decisionPrisonTermEndDate">
            <el-input v-model="criminalRecord.decisionPrisonTermEndDate"></el-input>
          </el-form-item>
          <el-form-item class="w50" label="判决明细" prop="decisionDetail">
            <el-input v-model="criminalRecord.decisionDetail"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="有否上诉" prop="appealed">
            <el-input v-model="criminalRecord.appealed"></el-input>
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
      criminalRecord: {},
      rules: {
        appellation: [
          { required: true, message: "请输入称谓", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ]
      },
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
    this.getList();
  },
  methods: {
    ...mapActions([
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


