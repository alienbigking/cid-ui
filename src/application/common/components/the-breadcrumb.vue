<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item>
        <i
          class="iconfont icon-zhuye"
          style="margin-right:5px;"/>主页
      </el-breadcrumb-item>
      <el-breadcrumb-item
        :key="index"
        v-for="(item, index) in breadcrumbs"
        v-if="item.name">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadcrumbs: []
    };
  },
  watch: {
    $route(to, from) {
      this.breadcrumbs = to.matched;
    }
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      let breadcrumbs = this.$route.matched;
      this.breadcrumbs = breadcrumbs;
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
