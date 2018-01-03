<template>
    <div class="card">
        <div class="um-title">
            <p>新增用户</p>
        </div>
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
            <el-form-item class="hasButton">
                <el-button type="primary" :loading="saving" @click="onSubmit(user)">新增</el-button>
            </el-form-item>
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
          { required: true, message: "请输入用户账号", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入租户名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 100, message: "长度在 6 个字符", trigger: "blur" }
        ],
        status: ["required"],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
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
    this.user = {};
    this.userStatuses = userStatusService.getAll();
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
              this.$handleError(error.response, "新增失败");
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
