<template>
    <el-aside :width="collaspsed ? '55px' : '260px'" :class="collaspsed ? 'aside menu-collapsed' : 'aside menu-expanded'">
        <div class="avatar" :class="collaspsed ? 'avatar-collapsed' : ''">
            <img src="../../../assets/images/avatar.png" alt="">
            <div class="avatar-right">
                <span>管理员</span>
                <div class="">
                    <i class="address"></i>
                    <span>管理员</span>
                </div>
            </div>
        </div>
        <the-menu></the-menu>
    </el-aside>
</template>
<script>
import { default as theMenu } from "./the-menu";
// import { mapGetters } from "vuex";

export default {
  data() {
    return {
      menuText: "",
      collaspsed: false
    };
  },
  components: {
    "the-menu": theMenu
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.aside {
  background: #263238;
  color: #fff;
  transition: all 0.2s linear;
  .base {
    border-right: 0;
    transition: all 0s linear;
    background: #263238;
  }
  .address {
    background: url("../../../assets/images/address.png") no-repeat;
    background-size: cover;
    background-position: center;
    height: 12px;
    width: 10px;
    display: inline-block;
    vertical-align: baseline;
  }
  .first {
    &.is-opened {
      background: #29b0a3;
      & > .el-submenu__title {
        &:hover {
          background: transparent;
        }
      }
    }
    .second:last-child {
      border-bottom: 1px solid #303b40;
    }
  }
  .second {
    background: #202a2f;
    &.is-active {
      background: #182125;
    }
    &.is-opened {
      .third:last-child {
        border-bottom: 1px solid #303b40;
      }
    }
  }
  .third {
    background: #182125;
    &.is-active {
      background: #13191c;
    }
  }
  .menuText {
    height: 43px;
    line-height: 43px;
    padding-left: 20px;
    font-size: 14px;
    background: #29b0a3;
    color: #fff;
  }
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
