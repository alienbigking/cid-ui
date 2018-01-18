<template>
    <el-aside 
      :width="collapsed ? '55px' : '260px'" 
      :class="collapsed ? 'aside menu-collapsed' : 'aside menu-expanded'">
        <router-link to="/dashboard">
          <div 
            class="avatar" 
            :class="collapsed ? 'avatar-collapsed' : ''">
              <img src="../../../assets/images/face11.jpg" alt="">
                <div class="avatar-right">
                    <span>{{userName}}</span>
                    <span class="sidebar-name">{{name}}</span>
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
    this.userName = profileStorage.getMyProfile().username;
    this.name = profileStorage.getMyProfile().name;
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.aside {
  background: #263238;
  color: #fff;
  transition: all 0.2s linear;
}
.avatar {
  display: flex;
  padding: 20px 0 20px 7px;
  align-items: stretch;
  color: #fff;
  img {
    height: 38px;
    width: 38px;
    margin-right: 16px;
    border-radius: 50%;
  }
  .avatar-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    margin-top: 2px;
    & > span {
      margin-bottom: 8px;
    }
    .sidebar-name{
      font-size:12px;
      margin-top: 2px;
      color: #999999;
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
