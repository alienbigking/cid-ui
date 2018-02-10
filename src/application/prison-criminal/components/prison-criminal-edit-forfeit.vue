<template>
  <div class="">
    <div class="filters">
      <el-button
        class="button-addInEdit"
        @click="onNew">新 增</el-button>
    </div>
    <div class="list-box">
      <el-table
        class="table40"
        :data="allCriminalForfeits"
        v-loading="loading"
        header-row-class-name="table-header">
        <el-table-column
          prop="receiptNumber"
          label="罚金单据号"
          :show-overflow-tooltip="true"
          sortable/>
        <el-table-column
          prop="amount"
          label="缴纳罚金"
          :show-overflow-tooltip="true"
          sortable/>
        <el-table-column
          prop="payee"
          label="收款单位"
          :show-overflow-tooltip="true"
          sortable/>
        <el-table-column
          prop="paymentDate"
          label="缴纳日期"
          sortable>
          <template slot-scope="scope">
            {{ scope.row.createdTime | moment }}
          </template>
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="创建时间"
          sortable>
          <template slot-scope="scope">
            {{ scope.row.createdTime | moment }}
          </template>
        </el-table-column>
        <el-table-column
          prop="lastUpdatedTime"
          label="最后更新时间"
          sortable>
          <template slot-scope="scope">
            {{ scope.row.lastUpdatedTime | moment }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          width="86px">
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
    </div>
    <el-dialog
      title="罚金"
      class="dialog"
      width="730px"
      :visible.sync="editDialogVisible">
      <prison-criminal-forfeit-edit
        :criminal-forfeit-id="criminalForfeitId"
        :edit-dialog-visible="editDialogVisible"
        @on-close="editDialogVisible = false"/>
    </el-dialog>
    <el-dialog
      class="delete-dialog"
      width="400px"
      :visible.sync="deleteDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认删除<b>{{ deleteItem.receiptNumber }}</b>吗</span>
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
import PrisonCriminalForfeitEdit from "./prison-criminal-forfeit-edit";
import _ from "lodash";

export default {
  components: {
    "prison-criminal-forfeit-edit": PrisonCriminalForfeitEdit
  },
  data() {
    return {
      criminalForfeitId: "",
      editDialogVisible: null,
      deleteDialogVisible: false,
      deleting: false,
      loading: true,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allCriminalForfeits: state => state.prisonCriminal.allCriminalForfeits
    })
  },
  activated() {
    this.getList();
  },
  methods: {
    ...mapActions([
      "getAllPrisonCriminalForfeits",
      "deletePrisonCriminalForfeit"
    ]),
    onNew() {
      this.criminalForfeitId = "";
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.criminalForfeitId = id;
      this.editDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deletePrisonCriminalForfeit(this.deleteItem.id)
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
      this.getAllPrisonCriminalForfeits(this.$route.params.id).then(() => {
        this.criminalForfeit = _.cloneDeep(
          this.$store.state.criminal.criminalForfeit
        );
        this.loading = false;
      }).catch(() => { this.loading = false; });
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
