<template>
    <div class="login" :span="24">
        <div class="login-box" :span="6">
            <div class="login-logo"></div>
            <my-form class="login-input" :inline="false" :formItems="formModel" @on-submit="onSubmit" labelWidth="0" btnText="登录" buttonClass="form-input-submit"></my-form>
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
            formModel: {
                username: {
                    type: 'input',
                    label: '用户名',
                    prefix: 'user',
                    rules: ['required']
                },
                password: {
                    type: 'password',
                    label: '密码',
                    prefix: 'lock',
                    rules: ['required', '6-']
                }
            }
        }
    },
    props: ['api'],
    methods: {
        onSubmit(e) {
            if (!e) return
            // console.log(e)
            let params = new URLSearchParams()
            Object.keys(e).forEach(key => {
                params.append(key, e[key])
            })
            params.append('grant_type', 'password')
            this.api.login(params).then(res => {
                if (!res) return
                sessionStorage.setItem('access_token', res.access_token)
                sessionStorage.setItem('refresh_token', res.refresh_token)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    %mt1{
        display: block;
        width: 16px;
        height: 18px;
    }
    .el-main>.login{
        background:url(../../assets/images/background.png) 0 0 no-repeat;
        background-size:cover;
        /deep/ .user{
            @extend %mt1;
            background: url(../../assets/images/user.png) 0 0 no-repeat;
            background-size: 16px 18px;
        }
        /deep/ .lock{
            @extend %mt1;
            background: url(../../assets/images/lock.png) 0 0 no-repeat;
            background-size: 12px 18px;
        }
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
                margin-top:46px;
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
                /deep/ .form-input-submit{
                    margin:10px 0 0 0;
                    // button{
                        width:292px;
                        background-color:#516671;
                    // }
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
