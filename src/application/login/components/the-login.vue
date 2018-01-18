<template>
    <div class="box container login">
      <the-login-header></the-login-header>
      <div class="login-box"><div>
          <i class="iconfont icon-yunshujukuRDS"></i>
          <el-form class="formPadding" :model="user" :rules="rules" ref="form" label-position="top">
              <el-form-item prop="username">
                  <el-input type="text" placeholder="请输入用户名" v-model="user.username" @keyup.enter.native="onSubmit">
                      <span slot="prefix" class="iconfont icon-people_fill"></span>
                  </el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input type="password" placeholder="请输入密码" v-model="user.password"  @keyup.enter.native="onSubmit">
                      <span slot="prefix" class="iconfont icon-lock_fill"></span>
                  </el-input>
              </el-form-item>
              <div class="form-input-submit">
                <el-checkbox label="记住我"></el-checkbox>
                <el-button @click="onSubmit">登 录</el-button>
              </div>
          </el-form>

          </div>
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
        username: [{ required: true, message: "用户名不能为空" }],
        password: [
          { required: true, message: "密码不能为空" },
          { min: 6, message: "密码必须大于6位" }
        ]
      }
    };
  },
  methods: {
    ...mapActions([ "login", "getPersonaInformation" ]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.login(this.user)
            .then(() => {
              this.getPersonaInformation().then(() => {
                logService.addLoginLog();
                let redirect = this.$route.query.redirect;
                if (!redirect) {
                  redirect = "/dashboard";
                }
                this.$router.push(redirect);
                });
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
.iconfont {
  font-size: 18px;
  color: #999999;
}
.icon-yunshujukuRDS {
  color: #37474f;
  font-size: 72px;
  display: block;
  text-align: center;
}
.container{
  height: 100%;
  background: url(../../../assets/images/background.png) no-repeat;
  background-position: top center;
  background-size: cover;
  box-sizing: border-box;
  .login-box{
    position: fixed;
    top: 47px;
    height: calc(100% - 47px);
    overflow-y: auto;
    width: 100%;
  }
}
.login-box{
  &>div{
    width: 322px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #FCFCFC;
    margin: 168px auto;
    padding: 36px 20px 16px 0;
    box-sizing: border-box;
  }
}
.formPadding{
  padding-top: 40px;
  &>div{ width: 100%;}
  .form-input-submit {
    label{
      margin-bottom: 20px;
    }
    button {
      width: 100%;
      background-color: #516671;
      border: 0;
      color: #fff;
    }
  }
}
</style>
