<template>
  <el-menu :default-active="activeItem" :collapse="collapsed" background-color="#263238" text-color="#D1D1D1" active-text-color="#FFFFFF" class="sidebar-menu" unique-opened @select="onSelected">
    <template v-for="(first, idx1) in menus">
      <el-submenu v-if="first.children" :index="first.index" :key="idx1" class="first">
        <template slot="title">
          <i class="iconfont icon-shezhi"></i>
          <span slot="title">{{ first.name }}</span>
        </template>
        <li class="el-menu-item first"
          :style="collapsed ? 'display: block' : 'display: none'">
          {{ first.name }}
        </li>
        <el-menu-item v-for="(second, idx2) in first.children" :key="idx2" :index="second.index" class="second" @click="onNavigate(second.path)">{{ second.name }}</el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="first.index" :key="idx1" :route="first" class="first" @click="onNavigate(first.path)">
        <i class="iconfont icon-shezhi"></i>
        <span slot="title">{{ first.name }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      activeItem: ''
    };
  },
  computed: {
    ...mapState({
      menus: state => state.common.menus
    }),
    ...mapGetters(["collapsed"])
  },
  created() {
    this.getMenus().then(res => {
      if (sessionStorage.getItem("activeItem")) {
        this.activeItem = sessionStorage.getItem("activeItem");
      } else if (!this.menus[0].children) {
        this.activeItem = this.menus[0].index;
      } else {
        this.activeItem = this.menus[0].children[0].index;
      }
    });
  },
  methods: {
    ...mapActions(["getMenus"]),
    onNavigate(path) {
      this.$router.push(path);
    },
    // setActive() {
    //   let urlPath = this.$route.matched[this.$route.matched.length - 1].path;
    //   let matched;
    //   if (urlPath.split("/").length === 2) {
    //     matched = this.menus.find(menu => {
    //       return menu.path === urlPath;
    //     });
    //   } else if (urlPath.split("/").length === 3) {
    //     this.menus.forEach(menu => {
    //       if (menu.children && menu.children.find(child => { return child.path === urlPath; })) {
    //         matched = menu.children.find(child => { return child.path === urlPath });
    //       }
    //     });
    //   } else if (urlPath.split("/").length >= 4) {
    //     let url = `${ urlPath.replace("/", "*").split("/")[0].replace("*", "/") }/list`;
    //     this.menus.forEach(menu => {
    //       if (menu.children && menu.children.find(child => { return child.path === url; })) {
    //         matched = menu.children.find(child => { return child.path === url });
    //       }
    //     });
    //   }
    //   this.activeItem = matched.index;
    // },
    onSelected(a) {
      sessionStorage.setItem("activeItem", a);
    }
  }
};
</script>
<style lang="scss" scoped>
.iconfont{ color: #D1D1D1; }
</style>
