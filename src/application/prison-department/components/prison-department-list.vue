<template>
    <div class="container">
        <div class="card">
            <span class="um-title">查询监狱部门</span>
            <div class="filters">
                <div class="filter">
                    <el-input placeholder="监狱部门名称" v-model="filter.name" @keyup.enter.native="onSearch"></el-input>
                    <el-select v-model="filter.parentDepartmentId" clearable :loading="gettingPrisonDepartments">
                        <el-option v-for="(item, index) in allPrisonDepartments" :key="index" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                    <el-button class="button-search" :loading="searching" @click="onSearch">查 询</el-button>
                </div>
                <el-button class="button-addInList" @click="onNew">新增监狱部门</el-button>
            </div>
            <template>
                <el-table class="my_table" :data="pagedPrisonDepartments.content" v-loading="loading" border header-row-class-name="tableHeader">
                  <el-table-column prop="name" label="部门名称">
                  </el-table-column>
                  <el-table-column prop="parentDepartmentName" label="上级部门名称">
                  </el-table-column>
                  <el-table-column prop="createdTime" label="创建时间" sortable>
                    <template slot-scope="scope">
                      {{scope.row.createdTime | moment}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="lastUpdatedTime" label="最后更新时间" sortable>
                    <template slot-scope="scope">
                      {{scope.row.lastUpdatedTime | moment}}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" prop="opretion" label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" @click="onEdit(scope.row.id)">修改</el-button>
                      <el-button type="text" @click="onView(scope.row.id)">明细</el-button>
                      <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="pagination-box">
                    <span>共{{ pagedPrisonDepartments.totalElements }}条信息</span>
                    <el-pagination
                      @current-change="onPageChange"
                      :current-page.sync="currentPage"
                      :page-size="pagination.size"
                      layout="prev, pager, next, jumper"
                      :total="pagedPrisonDepartments.totalElements">
                    </el-pagination>
                </div>
            </template>
        </div>
        <el-dialog class="deleteDialog" width="400px" :center="true" :visible.sync="deleteDialogVisible">
          <i class="iconfont icon-tishishuoming"></i>
          <span>确认删除<b style="margin: 0 10px;">{{ deleteItem.name }}</b>吗</span>
          <span slot="footer" class="dialog-footer">
            <el-button class="button-cancel" @click="deleteDialogVisible = false">取 消</el-button>
            <el-button class="button-sure" :loading="deleting" @click="onDeleteConfirm">确 定</el-button>
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
      filter: {},
      pagination: {
        page: 0,
        size: 10,
        sort: "createdTime,desc"
      },
      currentPage: 1,
      gettingPrisonDepartments: true,
      loading: true,
      searching: false,
      deleting: false,
      deleteDialogVisible: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allPrisonDepartments: state => state.prisonDepartment.allPrisonDepartments,
      pagedPrisonDepartments: state => state.prisonDepartment.pagedPrisonDepartments
    })
  },
  created() {
    this.getAllPrisonDepartments().then(() => {
      this.gettingPrisonDepartments = false;
      this.search();
    }).catch(() => { this.gettingPrisonDepartments = false; });
  },
  methods: {
    ...mapActions([
      "getAllPrisonDepartments",
      "getPagedPrisonDepartments",
      "deletePrisonDepartment"
      ]),
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
      this.$router.push(`/prison-department/detail/${id}`);
    },
    onEdit(id) {
      this.$router.push(`/prison-department/edit/${id}`);
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onNew() {
      this.$router.push(`/prison-department/new`);
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deletePrisonDepartment(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.search();
        })
        .catch(error => {
          this.$handleError(error.response, "删除失败");
        });
    },
    search() {
      this.loading = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedPrisonDepartments(params).then(() => {
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
.container {
  height: 100%;
  /deep/ .el-table__body-wrapper {
    overflow: inherit;
  }
}

.cell {
  button:nth-child(1) {
    color: #2196f3;
  }
  button:nth-child(2) {
    color: #29b0a3;
    margin-left: 20px;
  }
  button:nth-child(3) {
    color: #f44336;
    margin-left: 20px;
  }
}
</style>
