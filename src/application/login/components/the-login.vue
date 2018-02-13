<template>
  <el-container class="flex-column">
    <the-login-header/>
    <el-main class="login-box">
      <div>
        <i class="iconfont icon-DB"/>
        <el-form
          class="form-padding"
          :model="user"
          :rules="rules"
          ref="form"
          label-position="top">
          <el-form-item prop="username">
            <el-input
              type="text"
              placeholder="请输入用户名"
              v-model="user.username"
              @keyup.enter.native="onSubmit">
              <span
                slot="prefix"
                class="iconfont icon-people_fill"/>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="user.password"
              @keyup.enter.native="onSubmit">
              <span
                slot="prefix"
                class="iconfont icon-lock_fill"/>
            </el-input>
          </el-form-item>
          <div class="form-input-submit">
            <el-button @click="onSubmit">登 录</el-button>
          </div>
        </el-form>
      </div>
    </el-main>
    <the-login-footer/>
  </el-container>
</template>
<script>
import TheLoginFooter from "./the-login-footer";
import TheLoginHeader from "./the-login-header";
import logService from "../../log/service/log-service";
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
          { min: 6, message: "密码长度最少6位" }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["login", "getMyProfile", "getMenus"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.login(this.user)
            .then(() => {
              sessionStorage.removeItem("myMenus");
              sessionStorage.removeItem("myProfile");
              Promise.all([this.getMyProfile(), this.getMenus()]).then(() => {
                logService.addLoginLog();
                let redirect = this.$route.query.redirect;
                if (!redirect) {
                  redirect = "/dashboard";
                }
                this.$router.push(redirect);
              });
            })
            .catch(error => {
              this.$errorMessage.show(error, "登陆失败");
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
.icon-DB {
  color: #37474f;
  font-size: 72px;
  display: block;
  text-align: center;
}
.login-box {
  & > div {
    width: 322px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fcfcfc;
    margin: 168px auto;
    padding: 36px 20px 16px 0;
    box-sizing: border-box;
  }
}
.form-padding {
  padding-top: 40px;
  & > div {
    width: 100%;
  }
  .form-input-submit {
    button {
      width: 100%;
      background-color: #516671;
      border: 0;
      color: #fff;
    }
  }
}
.flex-column {
  flex-direction: column;
  background: url("../../../assets/images/backgroud.jpg") no-repeat;
  background-position: top center;
  background-size: cover;
}
</style>
