<template>
    <div class="login" :span="24">
      <single-header></single-header>
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
                  <el-checkbox label="记住我" v-model="remember"></el-checkbox>
              </el-form-item>
                <el-form-item class="form-input-submit">
                  <el-button type="info"  @click="onSubmit('ruleForm')">登录</el-button>
              </el-form-item>
          </el-form>
      </div>
      <single-footer></single-footer>   
    </div>
</template>
<script>
import { mapActions } from "vuex";
import singleFooter from './single-footer';
import singleHeader from './single-header';

export default {
    components: { singleFooter, singleHeader },
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      remember: false, // 记住我
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
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.user, this.remember);
          this.$router.push('dashboard');
        } else {
            alert('error submit!!');
            return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  %mt1{
    display: inline-block;
    width: 16px;
    height: 18px;
    position: absolute;
    left:10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .user{
    @extend %mt1;
    background: url(../../../assets/images/user.png) 0 0 no-repeat;
    background-size: 16px 18px;
  }
  .lock{
    @extend %mt1;
    background: url(../../../assets/images/lock.png) 0 0 no-repeat;
    background-size: 12px 18px;
  } 
  .login{
    width:100%;
    height:100%;
    background:url(../../../assets/images/background.png) 0 0 no-repeat;
    background-size:cover;
    .login-box{
      width: 322px;
      height: 362px;
      background:url(../../../assets/images/login.png) 0 0 no-repeat;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      .login-logo{
        margin:0 auto;
        margin-top:36px;
        width: 72px;
        height: 63px;
        background:url(../../../assets/images/login-logo.png) 0 0 no-repeat
      }
      .login-input{
          width:292px;
          margin:0 auto;
          .form-input-user{
            margin-top:38px;
            & /deep/ .el-input__inner{
              font-size:12px;
              color:#999999;
              padding-left:32px;
            }
          }
          .form-input-pwd{
            margin:20px 0 5px 0;
            & /deep/ .el-input__inner{
              font-size:12px;
              color:#999999;
              padding-left:32px;
            }
          }
          .form-input-remember /deep/ .el-checkbox__label{
            font-size:14px;
            color:#999;
          }
          .form-input-submit{
            margin:10px 0 0 0;
            button{
              width:292px;
              background-color:#516671;
            }
          }
      }
    }
  }
</style>
