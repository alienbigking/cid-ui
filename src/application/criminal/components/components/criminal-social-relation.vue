<template>
  <div class="container">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="onNew">新增</el-button>
    </div>
    <div class="list-box">
      <template>
        <el-table class="table40" :data="criminalSocialRelation.content" header-row-class-name="tableHeader40">
          <el-table-column prop="appellation" label="称谓"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="age" label="年龄"> </el-table-column>
          <el-table-column prop="company" label="公司"> </el-table-column>
          <el-table-column prop="occupation" label="职业"> </el-table-column>
          <el-table-column prop="politicalStatusName" label="政治面貌"> </el-table-column>
          <el-table-column prop="criminalName" label="罪犯姓名"> </el-table-column>
          <el-table-column prop="createdTime" label="创建时间"> </el-table-column>
          <el-table-column prop="lastUpdatedTime" label="最后更新时间"> </el-table-column>
          <el-table-column label="操作" min-width="122">
            <template slot-scope="scope">
              <el-button type="text" @click="onEdit(scope.row)">编辑</el-button>
              <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-button type="primary">保存</el-button>
    </div>
    <el-dialog width="950px" :center="true" custom-class="noPadding" :visible.sync="editDialogVisible">
      <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w25" label="称谓" prop="appellation">
            <el-input v-model="criminal.appellation"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="姓名" prop="name">
            <el-input v-model="criminal.name"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="年龄" prop="age">
            <el-input v-model="criminal.age"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="公司" prop="company">
            <el-input v-model="criminal.company"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="职业" prop="occupation">
            <el-input v-model="criminal.occupation"></el-input>
          </el-form-item>
          <el-form-item class="w25" label="政治面貌" prop="face">
            <el-select v-model="criminal.politicalStatusCode" placeholder="请选择政治面貌">
              <el-option label="党员" value="党员"></el-option>
              <el-option label="团员" value="团员"></el-option>
            </el-select>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" :loading="saving" @click="onSave">确 定</el-button>
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
import { mapState, mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      criminal: {},
      rules: {
        appellation: [
          { required: true, message: "请输入称谓", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ]
      },
      editDialogVisible: false,
      deleteDialogVisible: false,
      deleting: false,
      saving: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      criminalSocialRelation: state => state.criminal.criminalSocialRelation
    })
  },
  watch: {
    criminalSocialRelation: {
      handler: _.debounce(function(criminalSocialRelation) {
        this.$store.commit("updateCriminalSocialRelation", criminalSocialRelation);
      }, 500),
      deep: true
    }
  },
  created() {
    this.search();
  },
  methods: {
    ...mapActions([ "addCriminalSocialRelation", "updateCriminalSocialRelation", "getPagedCriminalSocialRelations", "deleteCriminalSocialRelation" ]),
    onNew() {
      this.editDialogVisible = true;
      this.criminal = {};
    },
    onEdit(data) {
      this.criminal = data;
      this.editDialogVisible = true;
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteCriminalSocialRelation(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.search();
        })
        .catch(() => {
          this.$message.error("删除失败");
          this.deleting = false;
        });
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminal.id) {
            // 修改
            this.saving = true;
            this.updateCriminalSocialRelation()
              .then(res => {
                this.saving = false;
                this.search();
                this.$message.success("修改成功");
                this.editDialogVisible = false;
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("修改失败");
              });
          } else {
            // 新增
            this.saving = true;
            this.addCriminalSocialRelation()
              .then(res => {
                this.saving = false;
                this.search();
                this.$message.success("新增成功");
                this.editDialogVisible = false;
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("新增失败");
              });
          }
        }
      });
    },
    search() {
      this.getPagedCriminalSocialRelations({criminalId: this.$route.params.id});
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

