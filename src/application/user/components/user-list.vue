<template>
  <div class="self-box">
    <div class="list-card">
      <h3 class="title">查询用户</h3>
      <div class="filters">
        <el-input
          placeholder="账号"
          v-model="filter.username"
          @keyup.enter.native="onSearch"/>
        <el-input
          placeholder="姓名"
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
        <opt-button
          class="button-search"
          permission="prison.user.search"
          :loading="searching"
          @click="onSearch">查 询</opt-button>
        <opt-button
          class="button-addInList"
          permission="prison.user.add"
          @click="onNew">新 增</opt-button>
      </div>
      <el-table
        class="table45"
        :data="pagedUsers.content"
        :default-sort="{ prop: 'createdTime', order: 'descending' }"
        v-loading="loading"
        border
        header-row-class-name="table-header"
        @sort-change="onSort">
        <el-table-column
          prop="username"
          label="账号"
          sortable="custom"/>
        <el-table-column
          prop="name"
          label="姓名"
          sortable="custom"/>
        <el-table-column
          prop="phoneNumber"
          label="手机号码"
          sortable="custom"/>
        <el-table-column
          prop="createdTime"
          label="创建时间"
          width="180px"
          sortable="custom">
          <template slot-scope="scope">
            {{ scope.row.createdTime | moment }}
          </template>
        </el-table-column>
        <el-table-column
          prop="lastUpdatedTime"
          label="最后更新时间"
          width="180px"
          sortable="custom">
          <template slot-scope="scope">
            {{ scope.row.lastUpdatedTime | moment }}
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="141px"
          sortable="custom">
          <template slot-scope="scope">
            {{ scope.row.status | enumText(userStatuses) }}
            <opt-button
              v-if="!scope.row.isAdministrator && scope.row.status=='ENABLED'"
              class="button-status"
              type="text"
              @click="onDisable(scope.row)"
              permission="prison.user.disable">禁用</opt-button>
            <opt-button
              v-if="!scope.row.isAdministrator && scope.row.status=='DISABLED'"
              class="button-status"
              type="text"
              @click="onEnable(scope.row)"
              perimission="prison.user.enable">启用</opt-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="opretion"
          label="操作"
          width="201px">
          <template slot-scope="scope">
            <opt-button
              v-if="!scope.row.isAdministrator"
              type="text"
              @click="onSelectRoles(scope.row)"
              permission="prison.user.assign-role">分配角色</opt-button>
            <opt-button
              class="button-success"
              type="text"
              @click="onView(scope.row.id)"
              permission="prison.user.view">查看</opt-button>
            <opt-button
              type="text"
              @click="onEdit(scope.row.id)"
              permission="prison.user.update">修改</opt-button>
            <opt-button
              class="button-danger"
              v-if="!scope.row.isAdministrator"
              type="text"
              @click="onDelete(scope.row)"
              permission="prison.user.delete">删除</opt-button>
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
    </div>
    <el-dialog
      class="dialog"
      width="450px"
      :visible.sync="editDialogVisible">
      <user-role-edit
        :user-name="userName"
        :user-id="userId"
        :edit-dialog-visible="editDialogVisible"
        @on-close="editDialogVisible = false"/>
    </el-dialog>
    <el-dialog
      class="delete-dialog"
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
    <el-dialog
      class="delete-dialog"
      width="400px"
      :visible.sync="statusDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认启用<b>{{ statusItem.name }}</b>吗</span>
      <template slot="footer">
        <el-button
          class="button-cancel"
          @click="statusDialogVisible = false">取 消</el-button>
        <el-button
          class="button-sure"
          :loading="settingStatus"
          @click="onEnableConfirm">确 定</el-button>
      </template>
    </el-dialog>
    <el-dialog
      class="delete-dialog"
      width="400px"
      :visible.sync="disablledStatusDialogVisible">
      <i class="iconfont icon-jinggao"/>
      <span>确认禁用<b>{{ disableItem.name }}</b>吗</span>
      <template slot="footer">
        <el-button
          class="button-cancel"
          @click="disablledStatusDialogVisible = false">取 消</el-button>
        <el-button
          class="button-sure"
          :loading="settingStatus"
          @click="onDisableConfirm">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import _ from 'lodash';
import userStatusService from '../service/user-status-service';
import UserRoleEdit from './user-role-edit';

export default {
  components: {
    'user-role-edit': UserRoleEdit
  },
  data() {
    return {
      userStatuses: [],
      filter: {},
      pagination: {
        page: 0,
        size: 10,
        sort: 'createdTime,desc'
      },
      currentPage: 1,
      loading: true,
      searching: false,
      editDialogVisible: false,
      userName: null,
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
    ...mapActions(['getPagedUsers', 'deleteUser', 'enableUser', 'disableUser']),
    onSearch() {
      this.searching = true;
      this.pagination.page = 0;
      this.search();
    },
    onPageChange(page) {
      this.pagination.page = page - 1;
      this.search();
    },
    onSelectRoles(row) {
      this.userName = row.username;
      this.userId = row.id;
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
          this.$message.success('启用成功');
          this.search();
        })
        .catch(error => {
          this.$errorMessage.show(error, '修改失败');
          this.statusDialogVisible = false;
        });
    },
    onDisableConfirm() {
      this.settingStatus = true;
      this.disableUser(this.disableItem.id)
        .then(res => {
          this.settingStatus = false;
          this.disablledStatusDialogVisible = false;
          this.$message.success('禁用成功');
          this.search();
        })
        .catch(error => {
          this.$errorMessage.show(error, '修改失败');
          this.disablledStatusDialogVisible = false;
        });
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteUser(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success('删除成功');
          this.search();
        })
        .catch(error => {
          this.$errorMessage.show(error, '删除失败');
          this.deleting = false;
        });
    },
    onSort(e) {
      if (!e.prop || !e.order) return;
      this.pagination.page = 0;
      this.pagination.sort = `${e.prop},${e.order.replace('ending', '')}`;
      this.search();
    },
    search() {
      this.loading = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedUsers(params)
        .then(() => {
          this.searching = false;
          this.loading = false;
        })
        .catch(() => {
          this.searching = false;
          this.loading = false;
        });
    },
    getFilter() {
      return _.transform(this.filter, (result, value, key) => {
        if (value) {
          result[key] = value;
        }
      });
    }
    // periMissionCheck() {
    //   const token = tokenStorage.getToken();
    //   let info = jwtDecode(token.access_token);
    //   console.log(token);
    //   console.log(info.authorities);
    //   exports.perimission = (el, value) => {
    //     if (info.indexOf(value) < 0) {
    //       el.parentNode.removeChild(el);
    //       console.log('123456移除BUTTON');
    //     }
    //   };
    // }
  }
};
</script>
<style lang="scss" scoped>
.container {
  .dialog {
    div div:nth-child(1) {
      margin-top: -30px;
      padding-bottom: 15px;
    }
  }
}

.cell {
  .button-status {
    vertical-align: baseline;
  }
}
</style>
