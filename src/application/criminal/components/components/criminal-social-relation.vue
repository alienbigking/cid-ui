<template>
  <div class="container">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="onNew">新增</el-button>
    </div>
    <div class="list-box">
      <el-table class="table40" :data="tableData" header-row-class-name="tableHeader40">
        <el-table-column prop="s" label="称谓"> </el-table-column>
        <el-table-column prop="d" label="姓名"> </el-table-column>
        <el-table-column prop="f" label="年龄"> </el-table-column>
        <el-table-column prop="g" label="所在单位"> </el-table-column>
        <el-table-column prop="h" label="家庭住址"> </el-table-column>
        <el-table-column prop="j" label="职业"> </el-table-column>
        <el-table-column prop="j" label="面貌"> </el-table-column>
        <el-table-column prop="j" label="电话"> </el-table-column>
        <el-table-column prop="j" label="标记主联系人"> </el-table-column>
        <el-table-column label="操作" min-width="122">
          <template slot-scope="scope">
            <el-button type="text" @click="onEdit(scope.row.id)">编辑</el-button>
            <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary">保存</el-button>
    </div>
    <el-dialog width="950px" :center="true" custom-class="noPadding" :visible.sync="editDialogVisible">
      <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w25" label="称谓" prop="chengwei">
            <el-select v-model="criminal.chengwei" placeholder="请选择称谓" clearable>
              <el-option value="">你的</el-option>
              <el-option value="">我的</el-option>
              <el-option value="">他的</el-option>              
            </el-select>
          </el-form-item>
          <el-form-item class="w25" label="姓名" prop="name">
            <el-input v-model="criminal.name"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="年龄" prop="age">
            <el-input v-model="criminal.age"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="职业" prop="work">
            <el-input v-model="criminal.work"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="电话" prop="phone">
            <el-input v-model="criminal.phone"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="面貌" prop="face">
            <el-input v-model="criminal.face"></el-input>
          </el-form-item>
          <div class="w25"></div>
          <el-form-item class="w50" label="家庭住址" prop="adress">
            <el-input v-model="criminal.adress"></el-input>
          </el-form-item>
          <el-form-item class="w50" label="所在单位" prop="danwei">
            <el-input v-model="criminal.danwei"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog class="deleteDialog" width="400px" :center="true" custom-class="noPadding" :visible.sync="deleteDialogVisible">
        <i class="iconfont icon-tishishuoming"></i>
        <span>确认删除<b style="margin: 0 10px;"></b>吗</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="onDeleteConfirm" :loading="deleting">确 定</el-button>
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
      rules: {},
      editDialogVisible: false,
      deleteDialogVisible: false,
      deleting: false,
      deleteItem: {}
    };
  },
  methods: {
    onNew() {
      this.editDialogVisible = true;
    },
    onEdit() {
      this.editDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleteDialogVisible = false;
      console.log('确认删除');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .deleteDialog{
    /deep/ .el-dialog__body {
      color: #333;
      text-align: center;
      padding-bottom: 0;
      b {
        font-weight: bold;
      }
      .icon-tishishuoming {
        color: #e82e21;
        font-size: 80px;
        display: block;
        line-height: 80px;
        margin-bottom: 27px;
        & + span {
          line-height: 1;
        }
      }
    }
    /deep/ .el-dialog__footer {
      padding-top: 30px;
      button {
        width: 76px;
        background: #fcfcfc;
        color: #666;
        & + button {
          margin-left: 20px;
          color: #fff;
          background: #085eb5;
          border-color: #085eb5;
        }
      }
    }
    /deep/ .el-table__body-wrapper {
      overflow: inherit;
    }
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
.form-criminal .w50 .el-form-item__content > [class^="el-"]:not(.el-textarea):nth-last-child(1) {
  width:100%;
}
.el-form .el-form-item.w50{
  padding-right: 0;
}

</style>

