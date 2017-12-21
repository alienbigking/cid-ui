<template>
  <div class="">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="editDialogVisible=true;criminal={}">新增</el-button>
    </div>
    <div class="list-box">
      <el-table class="table40" :data="tableData" header-row-class-name="tableHeader40">
        <el-table-column prop="a" label="开始日期"> </el-table-column>
        <el-table-column prop="s" label="截至日期"> </el-table-column>
        <el-table-column prop="d" label="单位"> </el-table-column>
        <el-table-column prop="f" label="职业"> </el-table-column>
        <el-table-column prop="g" label="职务"> </el-table-column>
        <el-table-column prop="h" label="标记捕前单位"> </el-table-column>
        <el-table-column label="操作" min-width="122">
          <template slot-scope="scope">
            <el-button type="text" @click="onEdit(scope.row)">编辑</el-button>
            <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary">保存</el-button>
    </div>
    <el-dialog class="dialog" width="710px" :center="true" custom-class="noPadding" :visible.sync="editDialogVisible">
        <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w-px180" label="开始日期" prop="tixing">
              <el-date-picker v-model="criminal.a" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w-px180" label="截至日期" prop="xuexing">
              <el-date-picker v-model="criminal.s" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w-px180" label="职业" prop="lianxing">
              <el-input v-model="criminal.f"></el-input>
            </el-form-item>
            <el-form-item class="w-px382" label="单位" prop="kouyin">
              <el-input v-model="criminal.f"></el-input>
            </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">返回</el-button>
        <el-button type="primary" @click="onSave">保存</el-button>
      </span>
    </el-dialog>
    <el-dialog class="deleteDialog" width="400px" :center="true" custom-class="noPadding" :visible.sync="deleteDialogVisible">
      <i class="iconfont icon-tishishuoming"></i>
      <span>确认删除<b style="margin: 0 10px;">{{ deleteItem.d }}</b>吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onDeleteConfirm" :loading="deleting">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
// import _ from "lodash";
export default {
  data() {
    return {
      criminal: {},
      rules: {},
      tableData: [{ a: "2017-11-11", s: "2018-11-11", d: "hhhhhhhh", f: "hhhhhhhh", g: "hhhhhhhh", h: "hhhhhhhh" }],
      editDialogVisible: false,
      deleteDialogVisible: false,
      deleting: false,
      deleteItem: {}
    };
  },
  methods: {
    onEdit(e) {
      this.criminal = e;
      this.editDialogVisible = true;
    },
    onDelete(e) {
      this.deleteItem = e;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      // 确定删除
    },
    getList() {
      // 获取简历列表
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          if (this.criminal.id) {
            // 修改
          } else {
            // 新增
          }
        }
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
.form-criminal{
  padding: 0 28px;
  .w-px180{
    width: 180px;
    float: left;
    &:nth-child(1){
      margin-right: 20px;
    }
    &:nth-child(2){
      margin-right: 40px;
    }
  }
  .w-px382{
    width: 382px;
  }
}
.dialog{
  &>div>div:nth-child(2){
    padding-bottom: 0;
  }
}
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
