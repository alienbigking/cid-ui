<template>
  <div class="">
    <div class="filters">
      <el-button class="searchbtn w-px76" @click="editDialogVisible=true;criminal={}">新增</el-button>
    </div>
    <div class="list-box">
      <el-table class="table40" :data="criminalResume.content" header-row-class-name="tableHeader40">
        <el-table-column prop="startDate" label="开始日期"> </el-table-column>
        <el-table-column prop="endDate" label="结束日期"> </el-table-column>
        <el-table-column prop="company" label="公司"> </el-table-column>
        <el-table-column prop="occupation" label="职业"> </el-table-column>
        <el-table-column prop="duty" label="职位"> </el-table-column>
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
      <el-button type="primary">保存</el-button>
    </div>
    <el-dialog class="dialog" width="710px" :center="true" custom-class="noPadding" :visible.sync="editDialogVisible">
        <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w-px180" label="开始日期" prop="tixing">
              <el-date-picker v-model="criminal.startDate" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w-px180" label="结束日期" prop="xuexing">
              <el-date-picker v-model="criminal.endDate" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item class="w-px180" label="公司" prop="lianxing">
              <el-input v-model="criminal.company"></el-input>
            </el-form-item>
            <el-form-item class="w-px180" label="职业" prop="kouyin">
              <el-input v-model="criminal.occupation"></el-input>
            </el-form-item>
            <el-form-item class="w-px180" label="职位" prop="kouyin">
              <el-input v-model="criminal.duty"></el-input>
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
      criminalResume: state => state.criminal.criminalResume
    })
  },
  watch: {
    criminalResume: {
      handler: _.debounce(function(criminalResume) {
        this.$store.commit("updateCriminalResume", criminalResume);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions([ "addCriminalResume", "updateCriminalResume", "getPagedCriminalResumes", "deleteCriminalResume" ]),
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
      this.deleteCriminalResume(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.getList();
        })
        .catch(() => {
          this.$message.error("删除失败");
          this.deleting = false;
        });
    },
    getList() {
      // 获取简历列表
      this.getPagedCriminalResumes({criminalId: this.$route.params.id});
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminal.id) {
            // 修改
            this.saving = true;
            this.updateCriminalResume()
              .then(res => {
                this.saving = false;
                this.getList();
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
            this.addCriminalResume()
              .then(res => {
                this.saving = false;
                this.getList();
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
    }
  }
};
</script>

<style lang="scss" scoped>
.form-criminal{
  padding: 0 28px;
  .w-px180{
    width: 180px;
    float: left;
    margin-right: 20px;
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
