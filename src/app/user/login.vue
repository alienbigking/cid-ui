<template>
    <div id="login" :span="24">
        <div class="login-box" :span="6">
            <div class="login-logo"></div>
            <el-form class="login-input" :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item class="form-input-user" prop="userName">
                    <el-input type="text" class="el-input-inner" placeholder="请输入用户名" v-model="ruleForm.userName" />
                    <span class="user"></span>
                </el-form-item>
                <el-form-item class="form-input-pwd" prop="password">
                    <el-input type="password" class="el-input-inner" placeholder="请输入密码" v-model="ruleForm.password" />
                    <span class="lock"></span>
                </el-form-item>
                <el-form-item class="form-input-remember">
                    <el-checkbox label="记住我"></el-checkbox>
                </el-form-item>
                 <el-form-item class="form-input-submit">
                    <el-button type="info"  @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>    
            </el-form>
        </div>
        <div class="login-foot">
            <span>Copyright &copy; 2006-2017 罪犯数据库</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, message: '密码必须大于6位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                }
                else {
                    alert('error submit!!')
                    return false
                }
            })
        }
    }
}
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
        background: url(../../assets/images/user.png) 0 0 no-repeat;
        background-size: 16px 18px;
    }
    .lock{
        @extend %mt1;
        background: url(../../assets/images/lock.png) 0 0 no-repeat;
        background-size: 12px 18px;
    }
    #login{
        background:url(../../assets/images/background.png) 0 0 no-repeat;
        background-size:cover;
        .login-box{
            width: 322px;
            height: 362px;
            background:url(../../assets/images/login.png) 0 0 no-repeat;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            .login-logo{
                margin:0 auto;
                margin-top:36px;
                width: 72px;
                height: 63px;
                background:url(../../assets/images/login-logo.png) 0 0 no-repeat
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
        .login-foot{
            line-height: 40px;
            font-size: 12px;
            color: #a3a6ab;
            position: absolute;
            bottom:0;
            left:50%;
            transform: translateX(-50%);
        }
    }       
</style>

