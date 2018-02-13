<template>
  <el-aside
    :width="menuCollapsed ? '64px' : '230px'"
    class="aside"
    :class="menuCollapsed ? 'menu-collapsed' : ''">
    <router-link to="/dashboard">
      <div
        class="avatar"
        :class="menuCollapsed ? 'avatar-collapsed' : ''">
        <img src="../../../assets/images/avatar.jpg">
        <div class="avatar-right">
          <span>{{ userName }}</span>
          <span class="sidebar-name">{{ name }}</span>
        </div>
      </div>
    </router-link>
    <the-sidebar-menu/>
  </el-aside>
</template>
<script>
import TheSidebarMenu from "./the-sidebar-menu";
import profileStorage from "../service/profile-storage";
import { mapState } from "vuex";

export default {
  components: {
    "the-sidebar-menu": TheSidebarMenu
  },
  data() {
    return {
      userName: "",
      name: ""
    };
  },
  computed: {
    ...mapState({
      menuCollapsed: state => state.common.menuCollapsed
    })
  },
  created() {
    const myProfile = profileStorage.getMyProfile();
    this.userName = myProfile.username;
    this.name = myProfile.name;
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.aside {
  background: #263238;
  transition: width 0.3s linear;
}
.menu-collapsed {
  overflow: visible;
  .iconfont {
    margin-right: 30px;
  }
}
.avatar {
  display: flex;
  padding: 20px 0 20px 11px;
  align-items: stretch;
  color: #fff;
  height: 78px;
  overflow: hidden;
  box-sizing: border-box;
  img {
    height: 38px;
    width: 38px;
    margin-right: 16px;
    flex-shrink: 0;
    border-radius: 50%;
  }
  .avatar-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2px;
    & > span {
      margin-bottom: 8px;
    }
    .sidebar-name {
      margin-top: 2px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  &.avatar-collapsed {
    img {
      margin: 0;
    }
    .avatar-right {
      display: none;
    }
  }
}
</style>
