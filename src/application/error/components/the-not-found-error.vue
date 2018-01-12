<template>
  <div class="error">
    <the-error-header></the-error-header>
    <div class="error-box">
      <div class="error-left">
        <div class="error-number"></div>
        <p class="error-message">非常抱歉</p>
        <p class="error-reason">您访问的页面不存在或已删除</p>
        <p><el-button type="text" class="error-button" @click="onHome">回到主页 >></el-button></p>
      </div>
      <div class="error-right">
        <div class="error-image"></div>
      </div>
    </div>
    <the-error-footer></the-error-footer>
  </div>
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
.error {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  .error-box{
    display: flex;
    flex-direction: row;
    margin-top: 160px;
    width: 650px;
    box-sizing: content-box;
    .error-left{
      width:300px;
      margin-top: 50px;
      margin-left: 55px;
      .error-number{
        width:151px;
        height: 74px;
        background: url(../../../assets/images/not-found-number.png) 0 0 no-repeat;
        background-size: 151px 74px;
      }
      .error-message{
        font-size:18px;
        margin-top:33px;
      }
      .error-reason{
        font-size:18px;
        margin-top:12px;
        margin-bottom: 12px;
      }
      .error-button{
        color:red;
      }
    }
    .error-right{ 
      width:300px;
      height: 283px;
      margin-left:50px;
      .error-image{
        width:281px;
        height: 283px;
        background: url(../../../assets/images/not-found-icon.png) 0 0 no-repeat;
        background-size: 281px 283px;
      }
    }
  }
}
</style>

