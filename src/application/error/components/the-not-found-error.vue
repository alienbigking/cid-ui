<template>
  <el-container class="flex-column">
    <the-error-header/>
    <el-main class="error-box">
      <div class="error-contianer">
        <div class="error-number"/>
        <div class="error-message">
          <div>
            <span>ERROR 404 -</span>
            <span class="error-message-right">您访问的页面不存在</span>
            <a
              class="error-link"
              @click="onHome">回到主页 >></a>
          </div>
        </div>
      </div>
    </el-main>
    <the-error-footer/>
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
  background: url(../../../assets/images/404.png) 0 0 no-repeat;
  background-size: 585px 318px;
}
</style>
