<template>
  <div v-loading='loading'>
    <el-form class="form-criminal" :model="criminalOutInPrison" :rules="rules" ref="form" label-position="top">
        <el-form-item class="w-px180" label="出监日期" prop="outgoingDate">
          <el-date-picker v-model="criminalOutInPrison.outgoingDate" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item class="w-px180" label="入监日期" prop="entryDate">
          <el-date-picker v-model="criminalOutInPrison.entryDate" type="date"></el-date-picker>
        </el-form-item>
        <!-- <el-form-item class="w25" label="出监事由" prop="reasonCode">
              <el-select v-model="criminalOutInPrison.reasonCode" value-key="code" :loading="flag.reasonCode" placeholder="请选择出监事由" clearable>
                <el-option v-for="(item, index) in reasonCode" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
        </el-form-item> -->
        <el-form-item class="w-px180" label="出入事由" prop="reasonCode">
          <el-input v-model="criminalOutInPrison.reasonCode" ></el-input>
        </el-form-item>
        <div class="el-form-item el-form-item-div">
          <el-button @click="onClose">返回</el-button>
          <el-button type="primary" :loading="saving" @click="onSave">保存</el-button>
        </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  props: {
    criminalOutInPrisonId: {
      type: String
    },
    editDialogVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      criminalOutInPrison: _.cloneDeep(this.$store.state.criminal.criminalOutInPrison),
      rules: {
        startDate: [{ required: true, message: "请输入开始日期", trigger: "blur" }],
        endDate: [{ required: true, message: "请输入结束日期", trigger: "blur" }]
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
    criminalOutInPrison: {
      handler: _.debounce(function(criminalOutInPrison) {
        this.$store.commit("updateCriminalOutInPrison", criminalOutInPrison);
      }, 500),
      deep: true
    }
  },
  created() {
    this.render();
  },
  methods: {
    ...mapActions([
      "getCriminalOutInPrison",
      "addCriminalOutInPrison",
      "updateCriminalOutInPrison",
      "getAllCriminalOutInPrisons"
    ]),
    onClose() {
      this.$emit("on-close");
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminalOutInPrison.id) {
            // 修改
            this.saving = true;
            this.updateCriminalOutInPrison()
              .then(res => {
                this.saving = false;
                this.getAllCriminalOutInPrisons(this.$route.params.id);
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
            this.addCriminalOutInPrison()
              .then(res => {
                this.saving = false;
                this.getAllCriminalOutInPrisons(this.$route.params.id);
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
      if (!this.criminalOutInPrisonId) {
        this.criminalOutInPrison = { criminalId: this.$route.params.id };
        this.loading = false;
      } else {
        this.getCriminalOutInPrison(this.criminalOutInPrisonId).then(() => {
          this.criminalOutInPrison = _.cloneDeep(
            this.$store.state.criminal.criminalOutInPrison
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
  padding: 0 28px;
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
</style>
