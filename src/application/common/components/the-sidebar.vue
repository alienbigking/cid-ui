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
        <el-menu class="base" router text-color="#d1d1d1" active-text-color="#fff" :default-active="$route.path" unique-opened :collapse="collaspsed">
            <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="item.path" v-if="item.children && item.children.length>0" class="first" @mouseenter.native="showMenu(index,item.name)">
                    <li class="menuText" :style="collaspsed ? 'display: block' : 'display: none'">{{ menuText }}</li>
                    <template slot="title"><i :class="item.icon"></i><span>{{item.name}}</span></template>
                    <template v-for="child in item.children">
                        <el-submenu :index="child.path" v-if="child.children && child.children.length>0" class="second">
                            <template slot="title">
                                <i :class="child.icon"></i>
                                <span>{{child.name}}</span>
                            </template>
                            <template v-for="third in child.children">
                                <el-menu-item :index="third.path" class="third">
                                    <i :class="third.icon"></i>
                                    <span>{{third.name}}</span>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                        <el-menu-item :index="child.path" v-else class="second">
                            <i :class="child.icon"></i>
                            <span>{{child.name}}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item :index="item.path" v-else class="el-menu-each">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-aside>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuText: ""
      // loginState: true
    };
  },
  computed: {
    ...mapGetters(["collaspsed"])
  },
  methods: {
    showMenu(e, status) {
      // console.log(status)
      let menuText = this.$router.options.routes[e].name;
      this.menuText = menuText;
    }
  }
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
