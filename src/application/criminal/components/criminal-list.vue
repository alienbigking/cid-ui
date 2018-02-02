<template>
  <div class="container">
    <div class="card">
      <span class="um-title">查询罪犯</span>
      <div class="filters">
        <el-input
          placeholder="编号"
          v-model="filter.code"
          @keyup.enter.native="onSearch"/>
        <el-input
          placeholder="姓名"
          v-model="filter.name"
          @keyup.enter.native="onSearch"/>
        <el-button
          class="button-search"
          :loading="searching"
          @click="onSearch">查 询</el-button>
        <el-button
          class="button-addInList"
          @click="onNew">新 增</el-button>
      </div>
      <el-table
        class="my_table"
        :data="pagedCriminals.content"
        v-loading="loading"
        border
        header-row-class-name="tableHeader">
        <el-table-column
          prop="code"
          label="编号"/>
        <el-table-column
          prop="name"
          label="姓名"/>
        <el-table-column
          prop="alias"
          label="别名"/>
        <el-table-column
          prop="genderName"
          label="性别"/>
        <el-table-column
          prop="ethnicityName"
          label="民族"/>
        <el-table-column
          prop="birthday"
          label="出生日期"/>
        <el-table-column
          prop="prisonAreaName"
          label="隶属监区"/>
        <el-table-column
          align="center"
          label="操作"
          width="141px">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="onView(scope.row.id)">查看</el-button>
            <el-button
              type="text"
              @click="onEdit(scope.row.id)">修改</el-button>
            <el-button
              type="text"
              @click="onDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-box">
        <span>共{{ pagedCriminals.totalElements }}条信息</span>
        <el-pagination
          @current-change="onPageChange"
          :current-page.sync="currentPage"
          :page-size="pagination.size"
          layout="prev, pager, next, jumper"
          :total="pagedCriminals.totalElements"/>
      </div>
    </div>
    <el-dialog
      class="deleteDialog"
      width="400px"
      :visible.sync="deleteDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认删除<b>{{ deleteItem.name }}</b>吗</span>
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
import _ from "lodash";

export default {
  data() {
    return {
      filter: {},
      pagination: {
        page: 0,
        size: 10,
        sort: "createdTime,desc"
      },
      currentPage: 1,
      loading: true,
      searching: false,
      deleting: false,
      deleteDialogVisible: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      pagedCriminals: state => state.criminal.pagedCriminals
    })
  },
  created() {
    this.search();
  },
  methods: {
    ...mapActions(["getPagedCriminals", "deleteCriminal"]),
    onSearch() {
      this.searching = true;
      this.pagination.page = 0;
      this.search();
    },
    onPageChange(page) {
      this.pagination.page = page - 1;
      this.search();
    },
    onView(id) {
      this.$router.push(`/criminal/detail/${id}`);
    },
    onEdit(id) {
      this.$router.push(`/criminal/edit/${id}`);
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onNew() {
      this.$router.push(`/criminal/new`);
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteCriminal(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.search();
        })
        .catch(error => {
          this.$errorMessage.show(error, "删除失败");
          this.deleting = false;
        });
    },
    search() {
      this.loading = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedCriminals(params).then(() => {
        this.searching = false;
        this.loading = false;
      }).catch(() => { this.searching = false; this.loading = false; });
    },
    getFilter() {
      return _.transform(this.filter, (result, value, key) => {
        if (value) {
          result[key] = value;
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
    color: #29b0a3;
  }
  button:nth-child(3) {
    color: #f44336;
  }
}
</style>
