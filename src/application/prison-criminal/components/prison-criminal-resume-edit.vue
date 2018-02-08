<template>
  <el-form
    class="form-criminal"
    v-loading='loading'
    :model="criminalResume"
    :rules="rules"
    ref="form"
    label-position="top">
    <el-form-item
      class="w-px180"
      label="开始日期"
      prop="startDate">
      <el-date-picker
        v-model="criminalResume.startDate"
        type="date"
        :picker-options="pickerBeginDateBefore"/>
    </el-form-item>
    <el-form-item
      class="w-px180 margin-left40"
      label="结束日期"
      prop="endDate">
      <el-date-picker
        v-model="criminalResume.endDate"
        type="date"
        :picker-options="pickerBeginDateAfter"/>
    </el-form-item>
    <el-form-item
      class="w-px180 margin-left40"
      label="公司"
      prop="company">
      <el-input v-model="criminalResume.company"/>
    </el-form-item>
    <el-form-item
      class="w-px180"
      label="职业"
      prop="occupation">
      <el-input v-model="criminalResume.occupation"/>
    </el-form-item>
    <el-form-item
      class="w-px180 margin-left40"
      label="职位"
      prop="duty">
      <el-input v-model="criminalResume.duty"/>
    </el-form-item>
    <div class="el-form-item-div">
      <el-button
        class="button-cancel"
        @click="onClose">返 回</el-button>
      <el-button
        class="button-confirm"
        :loading="saving"
        @click="onSave">保 存</el-button>
    </div>
  </el-form>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
export default {
  props: {
    criminalResumeId: {
      type: String,
      default: ""
    },
    editDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      criminalResume: _.cloneDeep(this.$store.state.prisonCriminal.criminalResume),
      rules: {
        startDate: [{ required: true, message: "请输入开始日期" }],
        endDate: [{ required: true, message: "请输入结束日期" }],
        company: [{ required: true, message: "请输入公司" }]
      },
      pickerBeginDateBefore: {
        disabledDate: (time) => {
          let beginDateVal = this.criminalResume.endDate;
          if (beginDateVal) {
              return time.getTime() > beginDateVal;
          }
        }
      },
      pickerBeginDateAfter: {
        disabledDate: (time) => {
          let beginDateVal = this.criminalResume.startDate;
          if (beginDateVal) {
              return time.getTime() < beginDateVal;
          }
        }
      },
      loading: true,
      saving: false
    };
  },
  watch: {
    editDialogVisible(val) {
      if (val) {
        this.loading = true;
        this.$refs.form.resetFields();
        this.render();
      }
    },
    criminalResume: {
      handler: _.debounce(function(criminalResume) {
        this.$store.commit("updatePrisonCriminalResume", criminalResume);
      }, 500),
      deep: true
    }
  },
  created() {
    this.render();
  },
  methods: {
    ...mapActions([
      "getPrisonCriminalResume",
      "addPrisonCriminalResume",
      "updatePrisonCriminalResume",
      "getAllPrisonCriminalResumes"
    ]),
    onClose() {
      this.$emit("on-close");
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminalResume.id) {
            // 修改
            this.saving = true;
            this.updatePrisonCriminalResume()
              .then(res => {
                this.saving = false;
                this.getAllPrisonCriminalResumes(this.$route.params.id);
                this.$message.success("修改成功");
                this.$emit("on-close");
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("修改失败");
              });
          } else {
            // 新增
            this.saving = true;
            this.addPrisonCriminalResume()
              .then(res => {
                this.saving = false;
                this.getAllPrisonCriminalResumes(this.$route.params.id);
                this.$message.success("新增成功");
                this.$emit("on-close");
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("新增失败");
              });
          }
        }
      });
    },
    render() {
      if (!this.criminalResumeId) {
        this.$store.commit("setPrisonCriminalResume", { criminalId: this.$route.params.id });
        this.criminalResume = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalResume
          );
        this.loading = false;
      } else {
        this.getPrisonCriminalResume(this.criminalResumeId).then(() => {
          this.criminalResume = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalResume
          );
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-criminal {
  padding: 0 8px 0 28px;
  .w-px180 {
    width: 180px;
    float: left;
    margin-right: 20px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  .margin-left40 {
    margin-left: 20px;
  }
}
.el-form .el-form-item.el-form-item-div {
    justify-content: flex-end;
}
</style>
