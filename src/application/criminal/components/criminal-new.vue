<template>
    <div class="card">
        <div class="um-title">
            <p>基本信息</p>
        </div>
        <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
          <div class="form-box">
            <el-form-item class="w25" label="编号" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="姓名" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="身份情况" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="真实姓名" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="别化名" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="性别" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="民族" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="出生日期" prop="name">
              <el-date-picker v-model="criminal.date" type="date"></el-date-picker>
            </el-form-item>
          </div>
          <div class="form-box">
            <el-form-item class="w25" label="编号" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="姓名" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="身份情况" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="真实姓名" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="别化名" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="性别" prop="name">
                <el-input v-model="criminal.name"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="民族" prop="code">
                <el-input v-model="criminal.code"></el-input>
            </el-form-item>
            <el-form-item class="w25" label="出生日期" prop="name">
              <el-date-picker v-model="criminal.date" type="date"></el-date-picker>
            </el-form-item>
          </div>

        </el-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      criminal: {},
      rules: {
        code: [
          { required: true, message: "请输入编号", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入租户名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
      },
      saving: false
    };
  },
  watch: {
    criminal: {
      handler: _.debounce(function(criminal) {
        this.$store.commit("updateTenant", criminal);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["addPrisonTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonTenant()
            .then(res => {
              this.saving = false;
              this.$message.success("新增成功");
              this.$router.push(`/criminal/list`);
            })
            .catch(() => {
              this.$message.error("新增失败");
              this.saving = false;
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
