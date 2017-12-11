<template>
  <div>
    <div class="pwd_modification card">
      <div class="um-title">
        <p>修改密码</p>
      </div>
      <el-form class="um-form" :model="userPassword" :rules="rules" ref="ruleForm">
          <div class="form-box">
              <el-form-item class="form-input-top" prop="oldPassword">
                  <el-input type="password" class="el-input-inner" placeholder="原始密码" v-model="userPassword.oldPassword" />
              </el-form-item>
              <el-form-item class="form-input-middle" prop="newPassword">
                  <el-input class="el-input-inner" :type="isShowPwd?'text':'password'" placeholder="请输入新密码" v-model="userPassword.newPassword" />
                  <span :class="isShowPwd?'eye-open':'eye-close'" @click="isShow"></span>
              </el-form-item>
              <el-form-item class="form-input-bottom" prop="checkPassword">
                  <el-input class="el-input-inner" :type="isShowPwd_again?'text':'password'" placeholder="请再次输入新密码" v-model="userPassword.checkPassword" />
                  <span :class="isShowPwd_again?'eye-open':'eye-close'" @click="isShow_again"></span>
              </el-form-item>
              <el-form-item class="form-btn">
                  <el-button class="btn-return" @click="goBack">返回</el-button>
                  <el-button type="primary" class="btn-confirm" @click="submitForm('ruleForm')">确认</el-button>
              </el-form-item>
          </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.userPassword.checkPassword !== '') {
          this.$refs.ruleForm.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.userPassword.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      userPassword: {
        oldPassword: '',
        newPassword: '',
        checkPassword: ''
      },
      rules: {
        oldPassword: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, message: '密码必须大于6位', trigger: 'blur' }
        ],
        newPassword: [
          { validator: validatePass, trigger: 'blur' },
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, message: '密码必须大于6位', trigger: 'blur' }
        ],
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' },
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, message: '密码必须大于6位', trigger: 'blur' }
        ]
      },
      isShowPwd: false,
      isShowPwd_again: false
    };
  },
  methods: {
    ...mapActions(["updateMyPassword"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateMyPassword(this.userPassword);
          alert('submit!');
        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    isShow() {
      this.isShowPwd = !this.isShowPwd;
    },
    isShow_again() {
      this.isShowPwd_again = !this.isShowPwd_again;
    },
    // 返回上一级
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
  %mt1{
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    right:10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .eye-open{
    @extend %mt1;
    background: url(../../../assets/images/eye-open.png) 0 0 no-repeat;
    background-size: 20px 20px; 
  }
  .eye-close{
    @extend %mt1;
    background: url(../../../assets/images/eye-close.png) 0 0 no-repeat;
    background-size: 20px 20px;   
  }
  .el-input-inner /deep/ .el-input__inner{
    padding-right:35px;
    background: #F5F5F5;
    font-size:12px;
    &:focus{
      background: #ffffff;
    }
  }
  .pwd_modification{
    .um-form{
      .form-box{
        width:340px;
        margin:0 auto;
        .form-input-top{
          padding-top:30px;
          margin-bottom:20px;
        }
        .form-input-middle{
          margin-bottom:20px;
          position: relative;
        }
        .form-input-bottom{
          margin-bottom:30px;
          position: relative;
        }
        .form-btn{
          width:340px;
          margin-bottom:30px;
          .btn-return{
            width:160px;
          }
          .btn-confirm{
            width:160px;
            margin-left:12px;
          }
        }
      }
    }
  }
</style>
