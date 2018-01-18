<template>
    <el-aside :width="collapsed ? '64px' : '260px'" class="aside"
      :class="collapsed ? 'menu-collapsed' : ''">
        <router-link to="/dashboard">
          <div
            class="avatar"
            :class="collapsed ? 'avatar-collapsed' : ''">
              <img src="../../../assets/images/avatar.png" alt="">
                <div class="avatar-right">
                    <span>{{userName}}</span>
                    <div class="">
                      <i class="el-icon-location"></i>
                      <span>{{name}}</span>
                    </div>
                </div>
          </div>
        </router-link>
        <the-sidebar-menu></the-sidebar-menu>
    </el-aside>
</template>
<script>
import { default as TheSidebarMenu } from "./the-sidebar-menu";
import { default as profileStorage } from "../service/profile-storage";
import { mapGetters } from "vuex";

export default {
  components: {
    "the-sidebar-menu": TheSidebarMenu
  },
  data() {
    return {
      menuText: "",
      userName: "",
      name: ""
    };
  },
  computed: {
    ...mapGetters(["collapsed"])
  },
  created() {
    this.userName = profileStorage.getProfile().username;
    this.name = profileStorage.getProfile().name;
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.aside {
  background: #263238;
  transition: width .3s linear;
}
.menu-collapsed{
  overflow: visible;
  .iconfont{margin-right: 30px;}
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
  }
  .avatar-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    & > span {
      margin-bottom: 10px;
    }
    i {
      margin-right: 6px;
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
