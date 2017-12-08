<template>
    <div>
        <div id="user_modification">
            <div class="um-title">
                <p>修改个人信息</p>
            </div>
            <el-form class="um-form">
                <el-row class="content-up" :span="24">
                    <el-col :span="11">
                        <el-form-item class="content-up-left">
                            <label for="userName">用户名</label>
                            <el-input id="userName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="0">
                        <el-form-item class="content-up-right">
                            <label for="name">姓名</label>
                            <el-input id="name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="content-down" :span="24">
                    <el-col :span="11">
                        <el-form-item class="content-up-left">
                            <label for="createdTime">创建时间</label>
                            <el-input id="createdTime"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="0">
                        <el-form-item class="content-up-right">
                            <label for="updatedTime">最后更新时间</label>
                            <el-input id="updatedTime"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>


<style lang="scss" scoped type="text/css">
    #user_modification{
        .um-title{
            padding:20px;
            border-bottom:1px solid #DDD;
            p{
                font-size:14px;
                color: #333;
            }
        }
        .um-form{
            margin:0 22px 0 21px;
        }
    }
</style>