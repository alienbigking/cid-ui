<template>
  <div class="">
    <div class="filters">
      <el-button class="searchbtn w-px76">新增</el-button>
    </div>
    <div class="list-box">
      <el-table class="table40" :data="tableData" header-row-class-name="tableHeader40">
        <el-table-column prop="s" label="开始日期"> </el-table-column>
        <el-table-column prop="d" label="截至日期"> </el-table-column>
        <el-table-column prop="f" label="单位"> </el-table-column>
        <el-table-column prop="g" label="职业"> </el-table-column>
        <el-table-column prop="h" label="职务"> </el-table-column>
        <el-table-column prop="j" label="标记捕前单位"> </el-table-column>
        <el-table-column label="操作" min-width="122">
          <template slot-scope="scope">
            <el-button type="text" @click="onEdit(scope.row.a)">编辑</el-button>
            <el-button type="text" @click="onDelete(scope.row.a)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary">保存</el-button>
    </div>
    <el-dialog width="710px" :center="true" custom-class="noPadding" :visible.sync="deleteDialogVisible">
        <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w25" label="开始日期" prop="tixing">
              <el-date-picker v-model="criminal.chushengriqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="截至日期" prop="xuexing">
              <el-date-picker v-model="criminal.chushengriqi" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w25" label="职业" prop="lianxing">
              <el-select v-model="criminal.lianxing" placeholder="请选择性别" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w25" label="单位" prop="kouyin">
              <el-select v-model="criminal.kouyin" placeholder="请选择性别" clearable>
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="famale"></el-option>
              </el-select>
            </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      criminal: {},
      tableData: [{ a: "hhhhhhhh", s: "hhhhhhhh", d: "hhhhhhhh", f: "hhhhhhhh", g: "hhhhhhhh", h: "hhhhhhhh", j: "hhhhhhhh", k: "hhhhhhhh" }],
      deleteDialogVisible: true
    };
  }
};
</script>

<style lang="scss">
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
