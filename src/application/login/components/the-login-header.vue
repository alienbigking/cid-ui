<template>
  <el-header style="height: 47px; position: fixed; z-index: 100;">
    <div class="header-left">
        <i class="iconfont icon-yunshujukuRDS" style="font-size: 22px;"></i>
        <span class="fs-16">罪犯数据库</span>
    </div>
    <div class="header-right">您好，请登录！</router-link></li></div>
  </el-header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-left {
  display: flex;
  align-items: center;
  .fs-16 {
    font-size: 16px;
    margin-left: 10px;
  }
}
.header-right {
  font-size: 14px;
  
}
</style>
