<template>
    <el-header style="height: 47px; position: fixed; z-index: 100;">
        <div class="header-left">
            <i class="iconfont icon-yunshujukuRDS" style="font-size: 22px;"></i>
            <span class="fs-16">罪犯数据库</span>
        </div>
        <ul class="header-right">
            <li>
              <router-link to="/">
                <i class="iconfont icon-shezhi"></i>
              </router-link>
            </li>
            <li>
              <el-badge is-dot>
                <router-link to="/">
                  <i class="iconfont icon-xiaoxizhongxin"></i>
                </router-link>
              </el-badge>
            </li>
            <li class="hasImg">
              <router-link to="/me">
                <img src="../../../assets/images/face11.jpg" alt="">
                <span>管理员</span>
              </router-link>
            </li>
            <li @click="logout">
              <i class="iconfont icon-tuichu"></i>
            </li>
        </ul>
    </el-header>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["handleCollapse"]),
    test() {
      this.handleCollapse();
    },
    logout() {
      window.localStorage.removeItem("TOKEN");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./error";
</style>
