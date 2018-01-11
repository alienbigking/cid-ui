<template>
    <div class="container">
        <div class="card">
            <span class="um-title">查询日志</span>
            <div class="filters">
                <div class="filter">
                    <el-input placeholder="操作人" v-model="filter.operator" @keyup.enter.native="onSearch"></el-input>
                    <el-select v-model="filter.type" @keyup.enter.native="onSearch" clearable placeholder="请选择类别">
                      <el-option v-for="item in logTypes" :key="item.value" :label="item.text" :value="item.value"></el-option>
                    </el-select>
                    <el-input placeholder="动作" v-model="filter.action" @keyup.enter.native="onSearch"></el-input>
                    <el-date-picker
                      v-model="filter.createdStartDate"
                      type="date" value-format="yyyy-MM-dd"
                      placeholder="创建开始日期" @keyup.enter.native="onSearch">
                    </el-date-picker>
                    <el-date-picker
                      v-model="filter.createdEndDate"
                      type="date" value-format="yyyy-MM-dd"
                      placeholder="创建结束日期" @keyup.enter.native="onSearch">
                    </el-date-picker>
                    <el-button class="button-search" :loading="searching" @click="onSearch">查 询</el-button>
                </div>
            </div>
            <template>
                <el-table class="my_table" :data="pagedLogs.content" v-loading='gettingLogs' border header-row-class-name="tableHeader">
                  <el-table-column prop="operator" label="操作人"> </el-table-column>
                  <el-table-column label="类别">
                    <template slot-scope="scope">
                      {{scope.row.type | enumText(logTypes)}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="action" label="动作"> </el-table-column>
                  <el-table-column prop="detail" label="详情" :show-overflow-tooltip="true"> </el-table-column>
                  <el-table-column label="创建时间">
                    <template slot-scope="scope">
                      {{scope.row.createdTime | moment}}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" @click="onView(scope.row.id)">明细</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="pagination-box">
                    <span>共{{ pagedLogs.totalElements }}条信息</span>
                    <el-pagination
                      @current-change="onPageChange"
                      :current-page.sync="currentPage"
                      :page-size="pagination.size"
                      layout="prev, pager, next, jumper"
                      :total="pagedLogs.totalElements">
                    </el-pagination>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { default as logTypeService } from "../service/log-type-service";
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
      gettingLogs: true,
      searching: false
    };
  },
  computed: {
    ...mapState({
      pagedLogs: state => state.log.pagedLogs
    })
  },
  created() {
      this.logTypes = logTypeService.getAll();
      this.search();
  },
  methods: {
    ...mapActions([
      "getPagedLogs",
      "deleteLog"
    ]),
    onSearch() {
      this.searching = true;
      this.pagination.page = 0;
      this.search();
    },
    onPageChange(page) {
      this.pagination.page = page - 1;
      this.gettingLogs = true;
      this.search();
    },
    onView(id) {
      this.$router.push(`/log/detail/${id}`);
    },
    search() {
      this.gettingLogs = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedLogs(params).then(() => {
        this.searching = false;
        this.gettingLogs = false;
      }).catch(() => { this.searching = false; this.gettingLogs = false; });
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
