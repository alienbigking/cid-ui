<template>
    <div class="container">
        <div class="card">
            <span class="um-title">查询监舍</span>
            <div class="filters">
                <div class="filter">
                    <el-input placeholder="监舍名称" v-model="filter.name" @keyup.enter.native="handleSearch"></el-input>
                    <el-button class="searchbtn" :loading="searching" @click="handleSearch">查询</el-button>
                </div>
            </div>
            <template>
                <el-table class="my_table" :data="tableData" border header-row-class-name="tableHeader">
                  <el-table-column prop="name" label="监舍名称">

                  </el-table-column>
                  <el-table-column prop="code" label="编号">

                  </el-table-column>
                  <el-table-column prop="createdTime" label="创建时间" sortable>

                  </el-table-column>
                  <el-table-column prop="lastUpdatedTime" label="最后更新时间" sortable>

                  </el-table-column>
                  <el-table-column align="center" prop="opretion" label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" @click="goEdit(scope.row.id)">修改</el-button>
                      <el-button type="text" @click="goDetail(scope.row.id)">明细</el-button>
                      <el-button type="text" @click="showDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="pagination-box">
                    <span>共{{ totalElements }}条信息</span>
                    <el-pagination
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage"
                      :page-size="pagination.size"
                      layout="prev, pager, next, jumper"
                      :total="totalElements">
                    </el-pagination>
                </div>
            </template>
        </div>
        <el-dialog width="400px" :center="true" custom-class="noPadding" :visible.sync="deleteFlag">
          <i class="iconfont icon-tishishuoming"></i>
          <span>确认删除<b style="margin: 0 10px;">{{ deleteItem.name }}</b>吗</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="deleteFlag = false">取 消</el-button>
            <el-button type="primary" @click="handleDelete" :loading="deleting">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
    data() {
        return {
            filter: {
                name: ''
            },
            pagination: {
                page: 0,
                size: 10,
                sort: 'createdTime,asc'
            },
            totalElements: 0,
            searching: false,
            deleting: false,
            tableData: _.cloneDeep(this.$store.state.prisonHouse.prisonHouses.content),
            currentPage: 1,
            deleteFlag: false,
            deleteItem: {}
        };
    },
    methods: {
        ...mapActions(["getAllPrisonHouses", "deletePrisonHouse"]),
        handleSearch(e) {
            this.searching = true;
            this.pagination.page = 0;
            this.render();
        },
        handleCurrentChange(e) {
            this.pagination.page = e - 1;
            this.render();
        },
        showDelete(e, item) {
            this.deleteItem = item;
            this.deleteFlag = true;
        },
        handleDelete() {
            this.deleting = true;
            this.deletePrisonHouse(this.deleteItem.id).then(res => {
                this.$message.success("删除成功");
                this.deleting = false;
                this.deleteFlag = false;
                this.render();
            });
            // 执行删除操作
        },
        render() {
            let params = _.transform(Object.assign({}, this.filter, this.pagination), (result, item, key) => {
                if (item || item === 0) result[key] = item;
            });
            this.getAllPrisonHouses(params).then(res => {
                console.log(this.$store.state.prisonHouse.prisonHouses.content);
                this.tableData = this.$store.state.prisonHouse.prisonHouses.content;
                this.totalElements = this.$store.state.prisonHouse.prisonHouses.totalElements;
                this.currentPage = this.$store.state.prisonHouse.prisonHouses.number + 1;
                this.searching = false;
            });
        },
        goDetail(e) {
            this.$router.push('/prison-house/detail/' + e);
        },
        goEdit(e) {
            this.$router.push('/prison-house/edit/' + e);
        }
    },
    created() {
        this.render();
    }
};
</script>
<style lang="scss" scoped>
.container{
    height: 100%;
    /deep/ .el-dialog__body{
        color: #333;
        text-align: center;
        padding-bottom: 0;
        b{
            font-weight: bold;
        }
        .icon-tishishuoming{
            color: #E82E21;
            font-size: 80px;
            display: block;
            line-height: 80px;
            margin-bottom: 27px;
            &+span{
                line-height: 1;
            }
        }
    }
    /deep/ .el-dialog__footer{
        padding-top: 30px;
        button{
            width: 76px;
            background: #FCFCFC;
            color: #666;
            &+button{
                margin-left: 20px;
                color: #fff;
                background: #085EB5;
                border-color: #085EB5;
            }
        }
    }
    /deep/ .el-table__body-wrapper{
        overflow: inherit;
    }
}

.cell{
    button:nth-child(1){
        color: #2196f3;
    }
    button:nth-child(2){
        color: #29b0a3;
        margin-left: 20px;
    }
    button:nth-child(3){
        color: #F44336;
        margin-left: 20px;
    }
}

</style>