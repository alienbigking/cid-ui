<template>
  <div class="container">
    <div class="filters">
      <el-button
        class="button-addInEdit"
        @click="onNew">新 增</el-button>
    </div>
    <div class="list-box">
      <el-table
        class="table40"
        :data="allCriminalSocialRelations"
        v-loading="loading"
        header-row-class-name="table-header">
        <el-table-column
          prop="appellation"
          label="称谓"
          width="60px"
          :show-overflow-tooltip="true"
          sortable/>
        <el-table-column
          align="center"
          prop="name"
          label="姓名"
          width="80px"
          sortable/>
        <el-table-column
          prop="age"
          label="年龄"
          width="50px"
          sortable/>
        <el-table-column
          align="left"
          prop="company"
          label="公司"
          :show-overflow-tooltip="true"
          sortable/>
        <el-table-column
          prop="occupation"
          label="职业"
          width="120px"
          :show-overflow-tooltip="true"
          sortable/>
        <el-table-column
          prop="politicalStatusName"
          label="政治面貌"
          sortable/>
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
      class="dialog"
      title="社会关系"
      width="950px"
      :visible.sync="editDialogVisible">
      <prison-criminal-social-relation-edit
        :criminal-social-relation-id="criminalSocialRelationId"
        :edit-dialog-visible="editDialogVisible"
        @on-close="editDialogVisible = false"/>
    </el-dialog>
    <el-dialog
      class="delete-dialog"
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
import { mapState, mapActions } from 'vuex';
import PrisonCriminalSocialRelationEdit from './prison-criminal-social-relation-edit';

export default {
  components: {
    'prison-criminal-social-relation-edit': PrisonCriminalSocialRelationEdit
  },
  data() {
    return {
      criminalSocialRelationId: '',
      editDialogVisible: false,
      deleteDialogVisible: false,
      loading: true,
      deleting: false,
      saving: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allCriminalSocialRelations: state => state.prisonCriminal.allCriminalSocialRelations
    })
  },
  activated() {
    this.getList();
  },
  methods: {
    ...mapActions(['getAllPrisonCriminalSocialRelations', 'deletePrisonCriminalSocialRelation']),
    onNew() {
      this.criminalSocialRelationId = '';
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.criminalSocialRelationId = id;
      this.editDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deletePrisonCriminalSocialRelation(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success('删除成功');
          this.getList();
        })
        .catch(error => {
          this.$errorMessage.show(error, '删除失败');
          this.deleting = false;
        });
    },
    getList() {
      this.getAllPrisonCriminalSocialRelations(this.$route.params.id)
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
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
</style>
