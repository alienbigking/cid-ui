<template>
  <el-menu
    :default-active="activeItem"
    :collapse="collapsed"
    background-color="#263238"
    text-color="#D1D1D1"
    active-text-color="#FFFFFF"
    class="sidebar-menu"
    unique-opened
    @select="onSelected">
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
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      // activeItem: ""
    };
  },
  computed: {
    ...mapState({
      menus: state => state.common.menus,
      activeItem: state => state.common.activeItem
    }),
    ...mapGetters(["collapsed"])
  },
  created() {
    let activeItem = "";
    this.getMenus().then(res => {
      if (this.$route.path === "/dashboard") {
        activeItem = this.menus[0].id;
      } else if (sessionStorage.getItem("activeItem")) {
        activeItem = sessionStorage.getItem("activeItem");
      } else if (this.menus[0].children.length === 0) {
        activeItem = this.menus[0].id;
      } else {
        activeItem = this.menus[0].children[0].id;
      }
      this.setActiveItem(activeItem);
    });
  },
  methods: {
    ...mapActions(["getMenus", "setActiveItem"]),
    onNavigate(path) {
      this.$router.push(path);
    },
    onSelected(activeItem) {
      this.setActiveItem(activeItem);
    }
  }
};
</script>
<style lang="scss" scoped>
.iconfont {
  color: #d1d1d1;
}
</style>
