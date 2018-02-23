<template>
  <el-container class="flex-column">
    <the-error-header/>
    <el-main class="error-box">
      <div class="error-content">
        <img src="../../../assets/images/500.png">
        <div>
          <p>ERROR 500 - 内部服务器错误</p>
          <a @click.prevent="onHome">回到主页 >></a>
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
    'the-error-header': TheErrorHeader,
    'the-error-footer': TheErrorFooter
  },
  methods: {
    onHome() {
      this.$router.push(`/dashboard`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './error';
</style>
