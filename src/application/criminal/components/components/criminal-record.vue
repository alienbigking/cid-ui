<template>
  <div class="">
    <div class="filters">
      <el-button class="searchbtn w-px76">新增</el-button>
    </div>
    <div class="list-box">
      <el-table class="table40" :data="tableData" header-row-class-name="tableHeader40">
        <el-table-column prop="a" label="类别"> </el-table-column>
        <el-table-column prop="s" label="开始日期"> </el-table-column>
        <el-table-column prop="d" label="截至日期"> </el-table-column>
        <el-table-column prop="f" label="罪名"> </el-table-column>
        <el-table-column prop="g" label="判处日期"> </el-table-column>
        <el-table-column prop="h" label="刑期"> </el-table-column>
        <el-table-column prop="j" label="关押"> </el-table-column>
        <el-table-column prop="k" label="备注"> </el-table-column>
        <el-table-column label="操作" min-width="122">
          <template slot-scope="scope">
            <el-button type="text" @click="onEdit(scope.row.a)">编辑</el-button>
            <el-button type="text" @click="onDelete(scope.row.a)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ a: "hhhhhhhh", s: "hhhhhhhh", d: "hhhhhhhh", f: "hhhhhhhh", g: "hhhhhhhh", h: "hhhhhhhh", j: "hhhhhhhh", k: "hhhhhhhh" }]
    };
  }
};
</script>

<style lang="scss" scoped>
.cell {
  button:nth-child(1) {
    color: #2196f3;
  }
  button:nth-child(2) {
    color: #f44336;
    margin-left: 30px;
  }
}
</style>
