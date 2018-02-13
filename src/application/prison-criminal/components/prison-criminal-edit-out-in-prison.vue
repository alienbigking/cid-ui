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
        :data="allCriminalOutInPrisons"
        v-loading="loading"
        header-row-class-name="table-header">
        <el-table-column
          prop="reasonName"
          label="出入事由"
          width="110px"
          sortable/>
        <el-table-column
          prop="outgoingDate"
          label="出监日期"
          sortable>
          <template slot-scope="scope">
            {{ scope.row.outgoingDate | moment }}
          </template>
        </el-table-column>
        <el-table-column
          prop="entryDate"
          label="入监日期"
          sortable>
          <template slot-scope="scope">
            {{ scope.row.entryDate | moment }}
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
      title="出入监"
      class="dialog"
      width="730px"
      :visible.sync="editDialogVisible">
      <prison-criminal-outinprison-edit
        :criminal-out-in-prison-id="criminalOutInPrisonId"
        :edit-dialog-visible="editDialogVisible"
        @on-close="editDialogVisible = false"/>
    </el-dialog>
    <el-dialog
      class="delete-dialog"
      width="400px"
      :visible.sync="deleteDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认删除<b>{{ deleteItem.reasonName }}</b>吗</span>
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
import PrisonCriminalOutInPrisonEdit from "./prison-criminal-out-in-prison-edit";
import _ from "lodash";

export default {
  components: {
    "prison-criminal-outinprison-edit": PrisonCriminalOutInPrisonEdit
  },
  data() {
    return {
      criminalOutInPrisonId: "",
      editDialogVisible: null,
      deleteDialogVisible: false,
      deleting: false,
      loading: true,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allCriminalOutInPrisons: state => state.prisonCriminal.allCriminalOutInPrisons
    })
  },
  activated() {
    this.getList();
  },
  methods: {
    ...mapActions([
      "getAllPrisonCriminalOutInPrisons",
      "deletePrisonCriminalOutInPrison"
    ]),
    onNew() {
      this.criminalOutInPrisonId = "";
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.criminalOutInPrisonId = id;
      this.editDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deletePrisonCriminalOutInPrison(this.deleteItem.id)
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
      this.getAllPrisonCriminalOutInPrisons(this.$route.params.id).then(() => {
        this.criminalOutInPrison = _.cloneDeep(
          this.$store.state.criminal.criminalOutInPrison
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
