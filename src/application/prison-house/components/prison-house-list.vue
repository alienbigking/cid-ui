<template>
    <div class="container">
        <div class="card">
            <span class="um-title">查询监舍</span>
            <div class="filters">
                <div class="filter">
                    <el-input placeholder="监区名称" v-model="filter.name"></el-input>
                    <el-button class="searchbtn">查询</el-button>
                </div>
            </div>
            <template>
                <el-table class="my_table" :data="tableData" border :header-row-class-name="getHeaderClass">
                  <el-table-column prop="name" label="监舍名称">

                  </el-table-column>
                  <el-table-column prop="id" label="编号">

                  </el-table-column>
                  <el-table-column prop="makeDate" label="创建时间" sortable>

                  </el-table-column>
                  <el-table-column prop="updateDate" label="最后更新时间" sortable>

                  </el-table-column>
                  <el-table-column align="center" prop="opretion" label="操作">
                    <template slot-scope="scope">
                      <el-button type="text">修改</el-button>
                      <el-button type="text">明细</el-button>
                      <el-button type="text" @click="showDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="pagination-box">
                    <span>共1201条信息</span>
                    <el-pagination
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage"
                      :page-size="100"
                      layout="prev, pager, next, jumper"
                      :total="1000">
                    </el-pagination>
                </div>
            </template>
        </div>
        <el-dialog
            width="400px" :center="true" custom-class="noPadding"
          :visible.sync="deleteFlag"
          :before-close="handleDelete">
          <i class="iconfont icon-tishishuoming"></i>
          <span>确认删除<b style="margin: 0 10px;">{{ deleteItem.name }}</b>吗</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="deleteFlag = false">取 消</el-button>
            <el-button type="primary" @click="deleteFlag = false">确 定</el-button>
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
            // tableData: [
            //     {
            //         name: '十一监舍',
            //         id: 123,
            //         makeDate: '2019-10-11 12:12:12',
            //         updateDate: '2012-12-12 12:12:12'
            //     },
            //     {
            //         name: '十一监舍',
            //         id: 32345,
            //         makeDate: '2019-10-12 12:12:12',
            //         updateDate: '2012-12-11 12:12:12'
            //     }
            // ],
            tableData: _.cloneDeep(this.$store.state.tenant.tenantList),
            getHeaderClass(row, rowIndex) {
                return 'tableHeader';
            },
            currentPage: 1,
            deleteFlag: false,
            deleteItem: {}
        };
    },
    methods: {
        ...mapActions(["getPrisonHouseList"]),
        handleCurrentChange(e) {
            console.log(e);
        },
        showDelete(e, item) {
            this.deleteItem = item;
            this.deleteFlag = true;
        },
        handleDelete(done) {
            // 执行删除操作
            done(); // 关闭对话框
        }
    },
  created() {
    this.getPrisonHouseList().then(res => {
        if (!res) return false;
        this.tableData = res;
    });
  }
};
</script>
<style lang="scss" scoped>
.container{
    height: 100%;
    .card{
        height: 100%;
    }
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
        }
    }
    /deep/ .el-table__body-wrapper{
        overflow: inherit;
    }
}
.filters{
    padding: 20px 20px 23px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .filter{
        display: inline-flex;
        align-items: center;
    }
    .el-input,.el-select{
        width: 176px;
        margin-right: 20px;
    }
    .searchbtn{
        background: #29b0a3;
        color: #fff;
        width: 100px;
        border: 0;
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
