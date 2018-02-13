<template>
  <div class="self-box">
    <div class="list-card">
      <h3 class="title">查询租户</h3>
      <div class="filters">
        <el-input
          placeholder="编号"
          v-model="filter.code"
          @keyup.enter.native="onSearch"/>
        <el-input
          placeholder="租户名称"
          v-model="filter.name"
          @keyup.enter.native="onSearch"/>
        <el-select
          v-model="filter.status"
          placeholder="请选择使用状态"
          clearable
          @keyup.enter.native="onSearch">
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
          @click="onNew">新 增</el-button>
      </div>
      <el-table
        class="table45"
        :data="pagedTenants.content"
        :default-sort="{ prop: 'createdTime', order: 'descending' }"
        v-loading="loading"
        border
        header-row-class-name="table-header"
        @sort-change="onSort">
        <el-table-column
          prop="code"
          label="编号"
          sortable="custom"/>
        <el-table-column
          prop="name"
          label="名称"
          sortable="custom"/>
        <el-table-column
          label="用户状态"
          sortable="custom">
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
          prop="createdTime"
          label="创建时间"
          sortable="custom">
          <template slot-scope="scope">
            {{ scope.row.createdTime | moment }}
          </template>
        </el-table-column>
        <el-table-column
          prop="lastUpdatedTime"
          label="最后更新时间"
          sortable="custom">
          <template slot-scope="scope">
            {{ scope.row.lastUpdatedTime | moment }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="opretion"
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
        <span>共{{ pagedTenants.totalElements }}条信息</span>
        <el-pagination
          @current-change="onPageChange"
          :current-page.sync="currentPage"
          :page-size="pagination.size"
          layout="prev, pager, next, jumper"
          :total="pagedTenants.totalElements"/>
      </div>
    </div>
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
      <i class="iconfont icon-jinggao" />
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
      <i class="iconfont icon-jinggao" />
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
import { mapState, mapActions } from "vuex";
import userStatusService from "../../user/service/user-status-service";
import _ from "lodash";

export default {
  data() {
    return {
      filter: {},
      userStatuses: [],
      pagination: {
        page: 0,
        size: 10,
        sort: "createdTime,desc"
      },
      currentPage: 1,
      loading: true,
      searching: false,
      deleting: false,
      settingStatus: false,
      deleteDialogVisible: false,
      statusDialogVisible: false,
      disablledStatusDialogVisible: false,
      statusItem: {},
      disableItem: {},
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      pagedTenants: state => state.tenant.pagedTenants
    })
  },
  created() {
    this.userStatuses = userStatusService.getAll();
  },
  methods: {
    ...mapActions(["getPagedTenants", "deleteTenant", "enableTenant", "disableTenant"]),
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
      this.$router.push(`/tenant/detail/${id}`);
    },
    onEdit(id) {
      this.$router.push(`/tenant/edit/${id}`);
    },
    onEnable(item) {
      this.statusItem = item;
      this.statusDialogVisible = true;
    },
    onEnableConfirm() {
      this.settingStatus = true;
      this.enableTenant(this.statusItem.id)
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
    onDisable(item) {
      this.disableItem = item;
      this.disablledStatusDialogVisible = true;
    },
    onDisableConfirm() {
      this.settingStatus = true;
      this.disableTenant(this.disableItem.id)
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
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onNew() {
      this.$router.push(`/tenant/new`);
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteTenant(this.deleteItem.id)
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
    onSort(e) {
      if (!e.prop || !e.order) return;
      this.pagination.page = 0;
      this.pagination.sort = `${e.prop},${e.order.replace("ending", "")}`;
      this.search();
    },
    search() {
      this.loading = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedTenants(params).then(() => {
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
  .button-status{
    vertical-align: baseline;
  }
}
</style>
