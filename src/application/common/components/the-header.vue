<template>
  <el-header style="height: 47px;">
    <div class="header-left">
      <div @click="onNavigate('/dashboard')">
        <i
          class="iconfont icon-DB"
          style="font-size: 22px;"/>
        <span class="fs-16">罪犯数据库</span>
      </div>
      <i
        class="iconfont icon-caidan"
        @click="onCollapse"/>
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
          <span>{{ userName }}</span>
        </router-link>
      </li>
      <li @click="logouting">
        <i class="iconfont icon-tuichu"/>
      </li>
    </ul>
  </el-header>
</template>
<script>
import { mapActions } from "vuex";
import { default as profileStorage } from "../service/profile-storage";
export default {
  data() {
    return {
      userName: ""
    };
  },
  created() {
    this.userName = profileStorage.getMyProfile().username;
  },
  methods: {
    ...mapActions([
      "handleCollapse",
      "setActiveItem",
      "logout",
      "removeProfile"
    ]),
    logouting() {
      this.removeProfile();
      this.logout();
      this.$router.push("/login");
    },
    onNavigate(path) {
      this.setActiveItem(this.$store.state.common.menus[0].id);
      this.$router.push(path);
    },
    onCollapse() {
      this.handleCollapse();
    }
  }
};
</script>
<style lang="scss" scoped>
.iconfont {
  cursor: pointer;
}
.header-left {
  display: flex;
  align-items: center;
  height: 22px;
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .fs-16 {
    font-size: 16px;
    margin: 0 112px 0 10px;
  }
  .icon-caidan {
    font-size: 20px;
  }
}
.header-right {
  display: flex;
  align-items: center;
  li {
    margin-left: 20px;
    a {
      color: #fff;
    }
    img {
      margin-right: 7px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
  }
  li.hasImg a {
    display: flex;
    align-items: center;
  }
}
</style>
