<template>
  <div class="container">
    <div class="card">
      <span class="um-title">查询用户</span>
      <div class="filters">
        <el-input
          placeholder="账号"
          v-model="filter.username"
          @keyup.enter.native="onSearch"/>
        <el-input
          placeholder="名称"
          v-model="filter.name"
          @keyup.enter.native="onSearch"/>
        <el-select
          v-model="filter.status"
          @keyup.enter.native="onSearch"
          clearable
          placeholder="请选择使用状态">
          <el-option
            v-for="item in userStatuses"
            :key="item.value"
            :label="item.text"
            :value="item.value"/>
        </el-select>
        <el-button
          class="button-search"
          :loading="searching"
          @click="onSearch">查 询</el-button>
        <el-button
          class="button-addInList"
          @click="onNew">新增</el-button>
      </div>
      <template>
        <el-table
          class="my_table"
          :data="pagedUsers.content"
          v-loading="loading"
          border
          header-row-class-name="tableHeader">
          <el-table-column
            prop="username"
            label="账号"/>
          <el-table-column
            prop="name"
            label="名称"/>
          <el-table-column
            prop="createdTime"
            label="创建时间"
            width="180px">
            <template slot-scope="scope">
              {{ scope.row.createdTime | moment }}
            </template>
          </el-table-column>
          <el-table-column
            prop="lastUpdatedTime"
            label="最后更新时间"
            width="180px">
            <template slot-scope="scope">
              {{ scope.row.lastUpdatedTime | moment }}
            </template>
          </el-table-column>
          <el-table-column
            label="用户状态"
            sortable
            align="center">
            <template slot-scope="scope">
              {{ scope.row.status | enumText(userStatuses) }}
              <el-button
                class="button-status"
                type="text"
                v-if="scope.row.status=='ENABLED'"
                @click="onDisable(scope.row)">禁用</el-button>
              <el-button
                class="button-status"
                type="text"
                v-if="scope.row.status=='DISABLED'"
                @click="onEnable(scope.row)">启用</el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="opretion"
            label="操作"
            width="201px">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="onSelectRoles(scope.row.id)">分配角色</el-button>
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
          <span>共{{ pagedUsers.totalElements }}条信息</span>
          <el-pagination
            @current-change="onPageChange"
            :current-page.sync="currentPage"
            :page-size="pagination.size"
            layout="prev, pager, next, jumper"
            :total="pagedUsers.totalElements"/>
        </div>
      </template>
    </div>
    <el-dialog
      class="dialog"
      width="450px"
      :visible.sync="editDialogVisible">
      <user-list-edit
        :user-id="userId"
        :edit-dialog-visible="editDialogVisible"
        @on-close="editDialogVisible = false"/>
    </el-dialog>
    <el-dialog
      class="deleteDialog"
      width="400px"
      :center="true"
      custom-class="noPadding"
      :visible.sync="deleteDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认删除<b style="margin: 0 10px;">{{ deleteItem.name }}</b>吗</span>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          class="button-cancel"
          @click="deleteDialogVisible = false">取 消</el-button>
        <el-button
          class="button-sure"
          :loading="deleting"
          @click="onDeleteConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="deleteDialog"
      width="400px"
      :center="true"
      custom-class="noPadding"
      :visible.sync="statusDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认启用<b style="margin: 0 10px;">{{ statusItem.name }}</b>吗</span>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          class="button-cancel"
          @click="statusDialogVisible = false">取 消</el-button>
        <el-button
          class="button-sure"
          :loading="settingStatus"
          @click="onEnableConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="deleteDialog"
      width="400px"
      :center="true"
      custom-class="noPadding"
      :visible.sync="disablledStatusDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认禁用<b style="margin: 0 10px;">{{ disableItem.name }}</b>吗</span>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          class="button-cancel"
          @click="disablledStatusDialogVisible = false">取 消</el-button>
        <el-button
          class="button-sure"
          :loading="settingStatus"
          @click="onDisableConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
import { default as userStatusService } from "../service/user-status-service";
import UserListEdit from "./user-list-edit";

export default {
  components: {
    "user-list-edit": UserListEdit
  },
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
      loading: true,
      searching: false,
      editDialogVisible: false,
      userId: null,
      deleting: false,
      deleteDialogVisible: false,
      deleteItem: {},
      statusItem: {},
      disableItem: {},
      statusDialogVisible: false,
      disablledStatusDialogVisible: false,
      settingStatus: false
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
    ...mapActions(["getPagedUsers", "deleteUser", "enableUser", "disableUser"]),
    onSearch() {
      this.searching = true;
      this.pagination.page = 0;
      this.search();
    },
    onPageChange(page) {
      this.pagination.page = page - 1;
      this.search();
    },
    onSelectRoles(id) {
      this.userId = id;
      this.editDialogVisible = true;
    },
    onView(id) {
      this.$router.push(`/user/detail/${id}`);
    },
    onEdit(id) {
      this.$router.push(`/user/edit/${id}`);
    },
    onEnable(item) {
      this.statusItem = item;
      this.statusDialogVisible = true;
    },
    onDisable(item) {
      this.disableItem = item;
      this.disablledStatusDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onNew() {
      this.$router.push(`/user/new`);
    },
    onEnableConfirm() {
      this.settingStatus = true;
      this.enableUser(this.statusItem.id)
        .then(res => {
          this.settingStatus = false;
          this.statusDialogVisible = false;
          this.$message.success("启用成功");
          this.search();
        })
        .catch(error => {
          this.$errorMessage.show(error, "修改失败");
          this.statusDialogVisible = false;
        });
    },
    onDisableConfirm() {
      this.settingStatus = true;
      this.disableUser(this.disableItem.id)
        .then(res => {
          this.settingStatus = false;
          this.disablledStatusDialogVisible = false;
          this.$message.success("禁用成功");
          this.search();
        })
        .catch(error => {
          this.$errorMessage.show(error, "修改失败");
          this.disablledStatusDialogVisible = false;
        });
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
        .catch(error => {
          this.$errorMessage.show(error, "删除失败");
          this.deleting = false;
        });
    },
    search() {
      this.loading = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedUsers(params).then(() => {
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
  .dialog{
    div div:nth-child(1){
      margin-top: -30px;
      padding-bottom: 15px;
    }
  }
}

.cell {
  button:nth-child(1) {
    color: #2196f3;
  }
  button:nth-child(2) {
    color: #29b0a3;
  }
  button:nth-child(3) {
    color: #29b0a3;
  }
  button:nth-child(4) {
    color: #f44336;
  }
  .button-status{
    vertical-align: baseline;
  }
}
</style>
