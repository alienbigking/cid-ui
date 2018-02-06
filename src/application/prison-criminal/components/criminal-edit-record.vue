<template>
  <div class="container">
    <div class="filters">
      <el-button
        class="button-addInEdit"
        @click="onNew">新 增</el-button>
    </div>
    <div class="list-box">
      <template>
        <el-table
          class="table40"
          :data="allCriminalRecords"
          v-loading="loading"
          header-row-class-name="tableHeader40">
          <el-table-column
            prop="decisionAccusation"
            label="罪名"
            width="80px"/>
          <el-table-column
            prop="prosecutionOrganName"
            label="起诉机关"
            :show-overflow-tooltip="true"/>
          <el-table-column
            prop="firstTrialOrganName"
            label="一审机关"
            :show-overflow-tooltip="true"/>
          <el-table-column
            prop="finalTrialOrganName"
            label="终审机关"
            :show-overflow-tooltip="true"/>
          <el-table-column
            prop="decisionOrganName"
            label="判决机关"
            :show-overflow-tooltip="true"/>
          <el-table-column
            prop="decisionDate"
            label="判决日期"/>
          <el-table-column
            prop="decisionPrisonTermStartDate"
            label="刑期开始日期"/>
          <el-table-column
            prop="decisionPrisonTermEndDate"
            label="刑期结束日期"/>
          <el-table-column
            label="操作"
            width="141px">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="onEdit(scope.row.id)">编辑</el-button>
              <el-button
                type="text"
                @click="onDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <el-dialog
      title="犯罪记录"
      class="dialog"
      width="950px"
      :visible.sync="editDialogVisible">
      <criminal-record-edit
        :criminal-record-id="criminalRecordId"
        :edit-dialog-visible="editDialogVisible"
        @on-close="editDialogVisible = false"/>
    </el-dialog>
    <el-dialog
      class="deleteDialog"
      width="400px"
      :visible.sync="deleteDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认删除吗</span>
      <template slot="footer">
        <el-button
          class="button-cancel"
          @click="deleteDialogVisible = false">取 消</el-button>
        <el-button
          class="button-sure"
          :loading="deleting"
          @click="onDeleteConfirm">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CriminalRecordEdit from "./criminal-record-edit";

export default {
  components: {
    "criminal-record-edit": CriminalRecordEdit
  },
  data() {
    return {
      criminalRecordId: "",
      editDialogVisible: false,
      deleteDialogVisible: false,
      loading: true,
      deleting: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allCriminalRecords: state => state.prisonCriminal.allCriminalRecords
    })
  },
  activated() {
    this.getList();
  },
  methods: {
    ...mapActions([
      "getAllCriminalRecords",
      "deleteCriminalRecord"
    ]),
    onNew() {
      this.criminalRecordId = "";
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.criminalRecordId = id;
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
        .catch(error => {
          this.$errorMessage.show(error, "删除失败");
          this.deleting = false;
        });
    },
    getList() {
      this.getAllCriminalRecords(this.$route.params.id)
        .then(() => { this.loading = false; })
        .catch(() => { this.loading = false; });
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
</style>
