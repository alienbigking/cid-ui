<template>
  <el-container class="flex-column">
    <the-header/>
    <el-container class="content-box">
      <the-sidebar v-if="!$route.meta||!$route.meta.noSide"/>
      <el-container class="flex-column">
        <el-main :style="!$route.meta||!$route.meta.noSide?'':'padding:0'">
          <the-breadcrumb v-if="!$route.meta||!$route.meta.noSide"/>
          <div class="hhhhh">
            <transition
              name="router-fade"
              mode="out-in">
              <router-view/>
            </transition>
          </div>
        </el-main>
        <the-footer v-if="!$route.meta||!$route.meta.noSide"/>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import * as commonComponents from "./common/components";

export default {
  components: {
    "the-header": commonComponents.TheHeader,
    "the-sidebar": commonComponents.TheSidebar,
    "the-breadcrumb": commonComponents.TheBreadcrumb,
    "the-footer": commonComponents.TheFooter
  }
};
</script>
<style lang="scss" scoped>
.flex-column {
  flex-direction: column;
}
.content-box{
  height: calc(100% - 47px);
  flex-shrink: 0;
  overflow: auto;
}
</style>
