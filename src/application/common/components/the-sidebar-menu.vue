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
        :index="first.index"
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
          :index="second.index"
          class="second"
          @click="onNavigate(second.path)">{{ second.name }}</el-menu-item>
      </el-submenu>
      <el-menu-item
        v-else
        :index="first.index"
        :key="idx1"
        :route="first"
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
      activeItem: ""
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
      } else if (this.menus[0].children.length === 0) {
        this.activeItem = this.menus[0].index;
      } else {
        console.log(this.menus);
        this.activeItem = this.menus[0].children[0].index;
      }
    });
  },
  methods: {
    ...mapActions(["getMenus"]),
    onNavigate(path) {
      this.$router.push(path);
    },
    onSelected(a) {
      sessionStorage.setItem("activeItem", a);
    }
  }
};
</script>
<style lang="scss" scoped>
.iconfont {
  color: #d1d1d1;
}
</style>
