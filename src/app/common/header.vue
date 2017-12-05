<template>
    <el-header style="height: 46px;">
        <div class="header-left">
            <i class="logo_img"></i>
            <span class="fs-16">罪犯数据库</span>
            <i class="el-icon-menu"></i>
        </div>
        <ul class="header-right">
            <li><router-link to="/index"><i class="el-icon-setting"></i></router-link></li>
            <li><el-badge is-dot><router-link to="/index"><i class="el-icon-message"></i></router-link></el-badge></li>
            <li><router-link to="/index"><img src="../../assets/images/avatar.png" alt="">    </router-link></li>
            <li><router-link to="/index">管理员</router-link></li>
            <li><router-link to="/index"><i class="el-icon-remove-outline"></i></router-link></li>
        </ul>
    </el-header>
</template>
<script>
export default {
    data() {
        return {
            // loginState: true
        }
    }
}
</script>
<style lang="scss" scoped>
.header-left{
    display: flex;
    align-items: center;
    .logo_img{
        display: inline-block;
        vertical-align: middle;
        height: 20px;
        width: 22px;
        background: url(../../assets/images/logo-fff.png) no-repeat;
        background-size: cover;
        background-position: center;
    }
    .fs-16{
        margin: 0 142px 0 10px;
    }
}
.header-right{
    display: flex;
    align-items: center;
    li{
        margin-left: 20px;
        i{
            display: block;
            height: 20px;
            width: 20px;
            font-size: 20px;
            // background: #fff;
        }
        a{
            color: #fff;
            font-size: 12px;
        }
    }
}

</style>
