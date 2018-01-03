<template>
  <div class="">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="onNew">新增</el-button>
    </div>
    <div class="list-box">
      <el-table class="table40" :data="allCriminalResumes" :loading="loading" header-row-class-name="tableHeader40">
        <el-table-column align="center" prop="startDate" label="开始日期"> </el-table-column>
        <el-table-column align="center" prop="endDate" label="结束日期"> </el-table-column>
        <el-table-column align="center" prop="company" label="公司"> </el-table-column>
        <el-table-column align="center" prop="occupation" label="职业"> </el-table-column>
        <el-table-column align="center" prop="duty" label="职位"> </el-table-column>
        <el-table-column align="center" prop="criminalName" label="罪犯姓名"> </el-table-column>
        <el-table-column align="center" prop="createdTime" label="创建时间">
          <template slot-scope="scope">
              {{scope.row.createdTime | moment}}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="lastUpdatedTime" label="最后更新时间">
          <template slot-scope="scope">
              {{scope.row.lastUpdatedTime | moment}}
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="122">
          <template slot-scope="scope">
            <el-button type="text" @click="onEdit(scope.row.id)">编辑</el-button>
            <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog class="dialog" width="710px" :center="true" :visible.sync="editDialogVisible">
      <criminal-resume-edit :criminalResumeId="criminalResumeId" :editDialogVisible="editDialogVisible" @on-close="editDialogVisible = false"></criminal-resume-edit>
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
import CriminalResumeEdit from "./criminal-resume-edit";
import _ from "lodash";
export default {
  components: {
    "criminal-resume-edit": CriminalResumeEdit
  },
  data() {
    return {
      criminalResumeId: "",
      editDialogVisible: null,
      deleteDialogVisible: false,
      deleting: false,
      loading: true,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allCriminalResumes: state => state.criminal.allCriminalResumes
    })
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions([
      "getAllCriminalResumes",
      "deleteCriminalResume"
    ]),
    onNew() {
      this.criminalResumeId = "";
      this.editDialogVisible = true;
    },
    onEdit(id) {
      this.criminalResumeId = id;
      this.editDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteCriminalResume(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.getList();
        })
        .catch(error => {
          this.$handleError(error.response, "删除失败");
          this.deleting = false;
        });
    },
    getList() {
      this.getAllCriminalResumes(this.$route.params.id).then(() => {
        this.criminalResume = _.cloneDeep(
          this.$store.state.criminal.criminalResume
        );
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-criminal{
  padding: 0 28px;
  .w-px180{
    width: 180px;
    float: left;
    margin-right: 20px;
  }
}
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
