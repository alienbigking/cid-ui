<template>
  <div class="container">
    <div class="card">
      <span class="um-title">查询监区</span>
      <div class="filters">
        <el-input
          placeholder="编号"
          v-model="filter.code"
          @keyup.enter.native="onSearch"/>
        <el-input
          placeholder="监区名称"
          v-model="filter.name"
          @keyup.enter.native="onSearch"/>
        <el-select
          v-model="filter.parentPrisonAreaId"
          clearable
          :loading="gettingPrisonAreas">
          <el-option
            v-for="(item, index) in allPrisonAreas"
            :key="index"
            :label="item.name"
            :value="item.id"/>
        </el-select>
        <el-button
          class="button-search"
          :loading="searching"
          @click="onSearch">查 询</el-button>
        <el-button
          class="button-addInList"
          @click="onNew">新 增</el-button>
      </div>
      <template>
        <el-table
          class="my_table"
          :data="pagedPrisonAreas.content"
          v-loading="loading"
          border
          header-row-class-name="tableHeader">
          <el-table-column
            prop="code"
            label="编号"/>
          <el-table-column
            prop="name"
            label="监区名称"/>
          <el-table-column
            prop="parentPrisonAreaName"
            label="上级监区"/>
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
          <span>共{{ pagedPrisonAreas.totalElements }}条信息</span>
          <el-pagination
            @current-change="onPageChange"
            :current-page.sync="currentPage"
            :page-size="pagination.size"
            layout="prev, pager, next, jumper"
            :total="pagedPrisonAreas.totalElements"/>
        </div>
      </template>
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
      gettingPrisonAreas: false,
      loading: true,
      searching: false,
      deleting: false,
      deleteDialogVisible: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      allPrisonAreas: state => state.prisonArea.allPrisonAreas,
      pagedPrisonAreas: state => state.prisonArea.pagedPrisonAreas
    })
  },
  created() {
    this.getAllPrisonAreas().then(() => {
      this.gettingPrisonAreas = false;
      this.search();
    });
  },
  methods: {
    ...mapActions([
      "getAllPrisonAreas",
      "getPagedPrisonAreas",
      "deletePrisonArea"
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
      this.$router.push(`/prison-area/detail/${id}`);
    },
    onEdit(id) {
      this.$router.push(`/prison-area/edit/${id}`);
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deletePrisonArea(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.search();
        })
        .catch(error => {
          this.deleting = false;
          this.$errorMessage.show(error, "删除失败");
        });
    },
    search() {
      this.loading = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedPrisonAreas(params).then(() => {
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
    },
    onNew() {
      this.$router.push(`/prison-area/new`);
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
