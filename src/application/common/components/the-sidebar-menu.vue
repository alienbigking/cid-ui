<template>
  <el-menu
    :default-active="activeMenuId"
    :collapse="collapsed"
    background-color="#263238"
    text-color="#D1D1D1"
    active-text-color="#FFFFFF"
    class="sidebar-menu"
    unique-opened>
    <template v-for="(first, idx1) in menus">
      <el-submenu
        v-if="first.children.length>0"
        :index="first.id"
        :key="idx1"
        class="first">
        <template slot="title">
          <i
            class="iconfont"
            :class="first.icon"/>
          <span slot="title">{{ first.name }}</span>
        </template>
        <li
          class="el-menu-item first"
          :style="collapsed ? 'display: block' : 'display: none'">
          {{ first.name }}
        </li>
        <el-menu-item
          v-for="(second, idx2) in first.children"
          :key="idx2"
          :index="second.id"
          class="second"
          @click="onNavigate(second.path)">{{ second.name }}</el-menu-item>
      </el-submenu>
      <el-menu-item
        v-else
        :index="first.id"
        :key="idx1"
        class="first"
        @click="onNavigate(first.path)">
        <i
          class="iconfont"
          :class="first.icon"/>
        <span slot="title">{{ first.name }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      menus: state => state.common.menus,
      activeMenuId: state => state.common.activeMenuId,
      collapsed: state => state.common.menuCollapsed
    })
  },
  watch: {
    $route(to, from) {
      this.changeActiveMenu(to.path);
    }
  },
  created() {
    this.getMenus().then(res => {
      this.changeActiveMenu(this.$route.path);
    });
  },
  methods: {
    ...mapActions(["getMenus", "setActiveMenu"]),
    onNavigate(path) {
      this.$router.push(path);
    },
    changeActiveMenu(path) {
      const menu = this.findMenu(this.menus, path);
      if (menu) {
        this.setActiveMenu(menu.id);
      } else {
        this.setActiveMenu("");
      }
    },
    findMenu(menus, path) {
      for (let menu of menus) {
        if (menu.path === path) {
          return menu;
        }
        const child = this.findMenu(menu.children, path);
        if (child) {
          return child;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.iconfont {
  color: #d1d1d1;
}
</style>
