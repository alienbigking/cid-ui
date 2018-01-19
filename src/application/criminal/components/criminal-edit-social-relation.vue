<template>
  <div class="container">
    <div class="filters">
      <el-button class="button-addInEdit" @click="onNew">新 增</el-button>
    </div>
    <div class="list-box">
      <template>
        <el-table class="table40" :data="allCriminalSocialRelations" v-loading="loading" header-row-class-name="tableHeader40">
          <el-table-column  prop="appellation" label="称谓" width="40px" :show-overflow-tooltip="true"> </el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="80px"> </el-table-column>
          <el-table-column  prop="age" label="年龄" width="50px"> </el-table-column>
          <el-table-column align="left" prop="company" label="公司"  :show-overflow-tooltip="true"> </el-table-column>
          <el-table-column  prop="occupation" label="职业"  width="120px" :show-overflow-tooltip="true"> </el-table-column>
          <el-table-column  prop="politicalStatusName" label="政治面貌"> </el-table-column>
          <el-table-column  prop="createdTime" label="创建时间">
            <template slot-scope="scope">
                {{scope.row.createdTime | moment}}
            </template>
          </el-table-column>
          <el-table-column  prop="lastUpdatedTime" label="最后更新时间">
            <template slot-scope="scope">
                {{scope.row.lastUpdatedTime | moment}}
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="170px">
            <template slot-scope="scope">
              <el-button type="text" @click="onEdit(scope.row.id)">编辑</el-button>
              <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <el-dialog class="dialog" title="社会关系" width="950px" :visible.sync="editDialogVisible">
      <criminal-social-relation-edit :criminalSocialRelationId="criminalSocialRelationId" :editDialogVisible="editDialogVisible" @on-close="editDialogVisible = false"></criminal-social-relation-edit>
    </el-dialog>

    <el-dialog class="deleteDialog" width="400px" :center="true" custom-class="noPadding" :visible.sync="deleteDialogVisible">
        <i class="iconfont icon-tishishuoming"></i>
        <span>确认删除<b style="margin: 0 10px;"></b>吗</span>
        <span slot="footer" class="dialog-footer">
            <el-button class="button-cancel" @click="deleteDialogVisible = false">取 消</el-button>
            <el-button class="button-sure" :loading="deleting" @click="onDeleteConfirm">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CriminalSocialRelationEdit from "./criminal-social-relation-edit";

export default {
  components: {
    "criminal-social-relation-edit": CriminalSocialRelationEdit
  },
  data() {
    return {
      criminalSocialRelationId: "",
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
      allCriminalSocialRelations: state =>
        state.criminal.allCriminalSocialRelations
    })
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions([
      "getAllCriminalSocialRelations",
      "deleteCriminalSocialRelation"
    ]),
    onNew() {
      this.criminalSocialRelationId = "";
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
      this.deleteCriminalSocialRelation(this.deleteItem.id)
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
      this.getAllCriminalSocialRelations(this.$route.params.id)
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
    margin-left: 30px;
  }
}
</style>
