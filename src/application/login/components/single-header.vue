<template>
  <el-header style="height: 47px;">
    <div class="header-left">
        <i class="logo_img"></i>
        <span class="fs-16">罪犯数据库</span>
    </div>
    <ul class="header-right">
        <li><router-link to="/index"><i class="setting"></i></router-link></li>
        <li><router-link to="/login">您好，请登录！</router-link></li>
    </ul>
    </el-header>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" scoped>
.header-left {
  display: flex;
  align-items: center;
  .logo_img {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 22px;
    background: url("../../../assets/images/logo-fff.png") no-repeat;
    background-size: cover;
    background-position: center;
  }
  .fs-16 {
    margin: 0 142px 0 10px;
  }
}
.header-right {
  display: flex;
  align-items: center;
  li {
    margin-left: 20px;
    i {
      display: block;
      height: 16px;
      width: 16px;
      font-size: 16px;
    }
    a {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>