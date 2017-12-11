<template>
    <div id="login" :span="24">
        <div class="login-box" :span="6">
            <div class="login-logo"></div>
            <el-form class="login-input" :model="user" :rules="rules" ref="ruleForm">
                <el-form-item class="form-input-user" prop="username">
                    <el-input type="text" class="el-input-inner" placeholder="请输入用户名" v-model="user.username" />
                    <span class="user"></span>
                </el-form-item>
                <el-form-item class="form-input-pwd" prop="password">
                    <el-input type="password" class="el-input-inner" placeholder="请输入密码" v-model="user.password" />
                    <span class="lock"></span>
                </el-form-item>
                <el-form-item class="form-input-remember">
                    <el-checkbox label="记住我"></el-checkbox>
                </el-form-item>
                 <el-form-item class="form-input-submit">
                    <el-button type="info" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="login-foot">
            <span>Copyright &copy; 2006-2017 罪犯数据库</span>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码必须大于6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
       this.login(this.user);
       this.$router.push('dashboard');
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
