<template>
    <el-aside 
      :width="collapsed ? '55px' : '260px'" 
      :class="collapsed ? 'aside menu-collapsed' : 'aside menu-expanded'">
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
import { default as informationStorage } from "../service/information-storage";
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
    this.userName = informationStorage.decodeInformation().username;
    this.name = informationStorage.decodeInformation().name;
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
