<template>
  <el-menu unique-opened :collapse="isCollapse">
    <template v-for="(menu, index) in menus">
      <el-submenu :index="menu.index" v-if="menu.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{menu.name}}</span>
          </template>
          <template v-for="submenu in menu.children">
              <el-submenu :index="submenu.index" v-if="submenu.children">
                  <template slot="title">
                      <span>{{submenu.name}}</span>
                  </template>
                  <template v-for="item in submenu.children">
                      <el-menu-item :index="item.index" @click.native="onNavigate(item.path)">
                          <span slot="title">{{item.name}}</span>
                      </el-menu-item>
                  </template>
              </el-submenu>
              <el-menu-item :index="submenu.index" v-else @click.native="onNavigate(submenu.path)">
                  <span slot="title">{{submenu.name}}</span>
              </el-menu-item>
          </template>
      </el-submenu>
      <el-menu-item :index="menu.index" v-else @click.native="onNavigate(menu.path)">
          <i class="el-icon-location"></i>
          <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { default as menus } from "../service/menu-service";
export default {
  data() {
    return {
      menus: menus,
      isCollapse: false
    };
  },
  methods: {
    onNavigate(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
