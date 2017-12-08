<template>
    <div style="border:0;background:#f5f5f5;">
        <div class="user_modification">
            <div class="um-title">
                <p>修改个人信息</p>
            </div>
            <my-form formClass="labelInTop" class="um-form" :formItems="formModel" btnText="保存" buttonClass="form-input-submit" labelPosition="left" @on-submit="onSubmit">
                <el-button slot="btnBefore" @click="goBack" style="color:#666;margin-right: 20px;">返回</el-button>
            </my-form>
        </div>
        <!--修改密码模块-->
        <div class="um-modifyPassword">
            <p class="">修改密码</p>
            <p>安全性高的密码可以使账号更安全，密码长度要求超过6位以上的密码。</p>
            <router-link class="modififyPassword" to="/user/pwd_modification">修改</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formModel: {
                    userName: {
                        type: 'input',
                        label: '用户名',
                        disabled: true,
                        class: 'w50'
                    },
                    name: {
                        type: 'input',
                        class: 'w50',
                        label: '姓名',
                        rules: ['required']
                    },
                    createdTime: {
                        type: 'input',
                        class: 'w50',
                        disabled: true,
                        label: '创建时间'
                    },
                    lastUpdatedTime: {
                        type: 'input',
                        class: 'w50',
                        disabled: true,
                        label: '最后更新时间'
                    }
                }
            }
        },
        methods: {
            onSubmit(e) {
                if (!e) return
                console.log(e)
            },
            // 返回上一级
            goBack() {
                this.$router.go(-1)
            }
        }

    }
</script>


<style lang="scss" scoped type="text/css">
    .user_modification{
        border: 1px solid #ddd;
        border-radius: 5px;
        background:white;
        .el-input{
            width:98%;
        }
        .um-title{
            padding:20px;
            border-bottom:1px solid #DDD;
            p{
                font-size:14px;
                color: #333;
            }
        }
        .um-form{
            padding: 26px 0 26px 22px;
            .form{
                & /deep/ .el-input__inner{
                    font-size:12px;
                    color:#999999;
                    padding-left:12px;
                }
                & /deep/ .el-form-item__label{
                    color:#000;
                    font-size:12px;
                }
                .form-left{
                    width:50%;
                    float: left;
                    position: relative;
                    .el-button{
                        float:right;
                        margin-right:12px;
                        margin-top:30px;
                        margin-bottom:30px;
                    }
                }
                .form-right{
                    width:50%;
                    float: left;
                    position: relative;
                    .el-button{
                        margin-top:30px;
                    }
                }
            }
        }
    }
    .um-modifyPassword{
        background:white;
        margin-top:20px;
        padding:20px 22px 20px 20px;
        font-size: 14px;
        color: #333;
        height: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        >p{
            display:inline-block;
            &:nth-child(2){
                font-size: 12px;
                color: #999;
                margin-left:40px;
            }
        }
        .modififyPassword{
            display: inline-block;
            float: right;
            font-size:12px;
            color:#2196f3;
        }
    }

</style>
