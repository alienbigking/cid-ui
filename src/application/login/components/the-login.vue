<template>
    <div class="login" :span="24">
      <the-login-header></the-login-header>
      <div class="login-box" :span="6">
          <i class="iconfont icon-yunshujukuRDS"></i>
          <el-form class="login-input" :model="user" :rules="rules" ref="form">
              <el-form-item class="noLable" prop="username">
                  <el-input type="text" class="el-input-inner" placeholder="请输入用户名" v-model="user.username">
                      <span slot="prefix" class="iconfont icon-people_fill"></span>
                  </el-input>
              </el-form-item>
              <el-form-item class="noLable" prop="password">
                  <el-input type="password" class="el-input-inner" placeholder="请输入密码" v-model="user.password">
                      <span slot="prefix" class="iconfont icon-lock_fill"></span>
                  </el-input>
              </el-form-item>
              <el-form-item class="form-input-remember">
                  <el-checkbox label="记住我"></el-checkbox>
              </el-form-item>
              <div class="form-input-submit">
                <el-button type="info" @click="onSubmit">登 录</el-button>
              </div>
          </el-form>
      </div>
      <the-login-footer></the-login-footer>
    </div>
</template>
<script>
import TheLoginFooter from "./the-login-footer";
import TheLoginHeader from "./the-login-header";
import { default as logService } from "../../log/service/log-service";
import { mapActions } from "vuex";

export default {
  components: {
    "the-login-header": TheLoginHeader,
    "the-login-footer": TheLoginFooter
  },
  data() {
    return {
      user: {
        username: "prs0001",
        password: "Password@1"
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
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.login(this.user)
            .then(() => {
              logService.addLoginLog();
              this.$router.push("/dashboard");
            })
            .catch(error => {
              this.$handleError(error.response, "登陆失败");
            });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.iconfont{
  font-size: 18px;
  color: #999999;
}
.icon-yunshujukuRDS {
  color: #37474f;
  font-size: 72px;
  display: block;
  text-align: center;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(../../../assets/images/background.png) no-repeat;
  background-size: cover;
  .login-box {
    margin-top: 168px;
    width: 322px;
    padding-top: 36px;
    box-sizing: content-box;
    background: url(../../../assets/images/login.png) no-repeat;
    background-size: 100% 100%;
    background-position: center;
    .login-input {
      padding: 0 20px;
      margin-top: 38px;
      /deep/ .el-input__inner{
        color: #999;
      }
      .form-input-remember {
        margin-top: -5px;
        /deep/ .el-form-item__content {
          font-size: 14px;
          line-height: 1;
        }
      }
      .form-input-submit {
        margin-bottom: 37px;
        button {
          width: 100%;
          background-color: #516671;
          border: 0;
          color: #fff;
        }
      }
    }
  }
  /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
    color: #606266;
  }
  /deep/ .el-checkbox__inner:hover{
    border-color: #dcdfe6;
  }
  /deep/ .el-checkbox__input.is-checked .el-checkbox__inner{
    background: #999;
    border-color: #999;
  }
}
</style>
