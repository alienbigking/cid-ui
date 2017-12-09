<template>
    <el-header style="height: 47px;">
        <div class="header-left">
            <i class="logo_img"></i>
            <span class="fs-16">罪犯数据库</span>
            <i class="collaspse" @click="test"></i>
        </div>
        <ul class="header-right">
            <li><router-link to="/index"><i class="setting"></i></router-link></li>
            <li><el-badge is-dot><router-link to="/index"><i class="message"></i></router-link></el-badge></li>
            <li><router-link to="/index"><img src="../../../assets/images/avatar.png" alt=""></router-link></li>
            <li><router-link to="/index">管理员</router-link></li>
            <li @click="logout"><i class="power"></i></li>
        </ul>
    </el-header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // loginState: true
    };
  },
  computed: {
    ...mapGetters(["collaspsed"])
  },
  methods: {
    ...mapActions(["handleCollapse"]),
    test() {
      this.handleCollapse({ index: 123, order: 222 });
    },
    // 注销
    logout() {
      window.sessionStorage.removeItem("access_token");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
.collaspse {
  background: url("../../../assets/images/menu.png") no-repeat;
  background-size: cover;
  background-position: center;
  height: 12px;
  width: 16px;
  display: block;
  cursor: pointer;
}

.header-left {
  display: flex;
  align-items: center;
  .logo_img {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 22px;
    background: url("../../../assets/images/logo-fff.png") no-repeat;
    background-size: cover;
    background-position: center;
  }
  .fs-16 {
    margin: 0 142px 0 10px;
  }
}
.header-right {
  display: flex;
  align-items: center;
  li {
    margin-left: 20px;
    i {
      display: block;
      height: 16px;
      width: 16px;
      font-size: 16px;
      // background: #fff;
    }
    a {
      color: #fff;
      font-size: 12px;
    }
    .message {
      background: url("../../../assets/images/message.png") no-repeat;
      background-size: cover;
      background-position: center;
    }
    .power {
      background: url("../../../assets/images/power.png") no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
