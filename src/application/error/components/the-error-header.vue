<template>
  <el-header style="height: 47px; position: fixed; z-index: 100;">
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
      <li @click="logout">
        <i class="iconfont icon-tuichu"/>
      </li>
    </ul>
  </el-header>
</template>
<script>
import { default as profileStorage } from "../../common/service/profile-storage";
import { default as tokenStorage } from "@/utils/token/token-storage";

export default {
  methods: {
    logout() {
      profileStorage.removeMyProfile();
      tokenStorage.removeToken();
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./error";
</style>
