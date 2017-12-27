<template>
    <div class="container">
        <div class="card">
            <span class="um-title">查询用户</span>
            <div class="filters">
                <div class="filter">
                    <el-input placeholder="用户账号" v-model="filter.username" @keyup.enter.native="onSearch"></el-input>
                    <el-input placeholder="用户名称" v-model="filter.name" @keyup.enter.native="onSearch"></el-input>
                    <el-select v-model="filter.status"  @keyup.enter.native="onSearch" clearable placeholder="请选择用户使用状态">
                      <el-option v-for="item in userStatuses" :key="item.value" :label="item.text" :value="item.value"></el-option>
                    </el-select>
                    <el-button class="searchbtn" :loading="searching" @click="onSearch">查询</el-button>
                </div>
                <el-button type="primary" @click="onNew">新增用户</el-button>
            </div>
            <template>
                <el-table class="my_table" :data="pagedUsers.content" border header-row-class-name="tableHeader">
                  <el-table-column prop="username" label="用户账号">
                  </el-table-column>
                  <el-table-column prop="name" label="用户名称">
                  </el-table-column>
                  <el-table-column prop="createdTime" label="创建时间" sortable>
                  </el-table-column>
                  <el-table-column prop="lastUpdatedTime" label="最后更新时间" sortable>
                  </el-table-column>
                  <el-table-column label="用户状态" sortable >
                    <template slot-scope="scope">{{scope.row.status | convertToText(userStatuses)}}</template>
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
                    <span>共{{ pagedUsers.totalElements }}条信息</span>
                    <el-pagination
                      @current-change="onPageChange"
                      :current-page.sync="currentPage"
                      :page-size="pagination.size"
                      layout="prev, pager, next, jumper"
                      :total="pagedUsers.totalElements">
                    </el-pagination>
                </div>
            </template>
        </div>
        <el-dialog class="deleteDialog" width="400px" :center="true" custom-class="noPadding" :visible.sync="deleteDialogVisible">
          <i class="iconfont icon-tishishuoming"></i>
          <span>确认删除<b style="margin: 0 10px;">{{ deleteItem.name }}</b>吗</span>
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
import { default as userStatusService } from "../service/user-status-service";

export default {
  data() {
    return {
      userStatuses: [],
      filter: {},
      pagination: {
        page: 0,
        size: 10,
        sort: "createdTime,desc"
      },
      currentPage: 1,
      searching: false,
      deleting: false,
      deleteDialogVisible: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      pagedUsers: state => state.user.pagedUsers
    })
  },
  created() {
    this.userStatuses = userStatusService.getAll();
    this.search();
  },
  methods: {
    ...mapActions(["getPagedUsers", "deleteUser"]),
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
      this.$router.push(`/user/detail/${id}`);
    },
    onEdit(id) {
      this.$router.push(`/user/edit/${id}`);
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onNew() {
      this.$router.push(`/user/new`);
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteUser(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.search();
        })
        .catch(() => {
          this.$message.error("删除失败");
          this.deleting = false;
        });
    },
    search() {
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedUsers(params).then(() => {
        this.searching = false;
      });
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
