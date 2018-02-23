<template>
  <el-header height="47px">
    <div class="header-left">
      <i
        class="iconfont icon-DB"
        style="font-size: 22px;"/>
      <span class="fs-16">罪犯数据库</span>
    </div>
    <ul class="header-right">
      <li>
        <router-link to="/">
          <i class="iconfont icon-settings"/>
        </router-link>
      </li>
      <li>
        <el-badge is-dot>
          <router-link to="/">
            <i class="iconfont icon-comment"/>
          </router-link>
        </el-badge>
      </li>
      <li class="hasImg">
        <router-link to="/me">
          <img src="../../../assets/images/avatar.jpg">
          <span>管理员</span>
        </router-link>
      </li>
      <li @click="onLogout">
        <i class="iconfont icon-tuichu"/>
      </li>
    </ul>
  </el-header>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['logout']),
    onLogout() {
      this.logout();
      this.$router.push('/login');
    }
  }
};
</script>
<style lang="scss" scoped>
@import './error';
</style>
