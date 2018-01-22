<template>
  <el-container class="flex-column">
    <the-error-header></the-error-header>
    <el-main class="error-box">
      <div class="error-left">
        <div class="error-number"></div>
        <p class="error-message">非常抱歉</p>
        <p class="error-reason">您访问的页面不存在或已删除</p>
        <el-button type="text" class="error-button" @click="onHome">回到主页 >></el-button>
      </div>
      <div class="error-right"></div>
    </el-main>
    <the-error-footer></the-error-footer>
  </el-container>
</template>

<script>
import TheErrorHeader from './the-error-header';
import TheErrorFooter from './the-error-footer';
export default {
  components: {
    "the-error-header": TheErrorHeader,
    "the-error-footer": TheErrorFooter
  },
  methods: {
    onHome() {
      this.$router.push(`/dashboard`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./error";
.error-number{
  background: url(../../../assets/images/not-found-number.png) 0 0 no-repeat;
  background-size: 151px 74px;
}

.error-right{
  background: url(../../../assets/images/not-found-icon.png) 0 0 no-repeat;
  background-size: 281px 283px;
}
</style>
