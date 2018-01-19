<template>
    <div class="detail-card">
        <h3 class="card-title">新增用户</h3>
        <el-form class="formPadding" :model="user" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w50" label="账号" prop="username">
                <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="名称" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="密码" prop="password">
                <el-input v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="状态" prop="status">
            <el-select v-model="user.status"   clearable placeholder="请选择使用状态">
                <el-option v-for="item in userStatuses" :key="item.value" :label="item.text" :value="item.value"></el-option>
            </el-select>
            </el-form-item>
            <div class="el-form-item-div">
                <el-button @click="goBack">返 回</el-button>
                <el-button class="button-addInNew" :loading="saving" @click="onSubmit(user)">新 增</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
import { default as userStatusService } from "../service/user-status-service";

export default {
  data() {
    return {
      userStatuses: [],
      user: {},
      rules: {
        username: [
          { required: true, message: "请输入用户账号" },
          { max: 50, message: "长度在 1 到 50 个字符" }
        ],
        name: [
          { required: true, message: "请输入租户名称" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ],
        password: [
          { required: true, message: "请输入密码" },
          { max: 100, message: "长度在 6 个字符" }
        ],
        status: ["required"],
        description: [{ max: 255, message: "255 个字符以内" }]
      },
      saving: false
    };
  },
  watch: {
    user: {
      handler: _.debounce(function(user) {
        this.$store.commit("updateUser", user);
      }, 500),
      deep: true
    }
  },
  created() {
    this.userStatuses = userStatusService.getAll();
    this.$store.commit("setUser", {});
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addUser()
            .then(res => {
              this.saving = false;
              this.$message.success("新增成功");
              this.$router.push(`/user/list`);
            })
            .catch(error => {
              this.$errorMessage.show(error, "新增失败");
              this.saving = false;
            });
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
