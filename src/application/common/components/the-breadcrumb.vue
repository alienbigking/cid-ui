<template>
    <div>
        <el-breadcrumb 
          separator="/" 
          separator-class="separatorClass">
            <el-breadcrumb-item>
              <i class="iconfont icon-home" style="margin-right:5px;"></i>主页
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
.icon-home {
  font-size: 14px;
}
.el-container .el-breadcrumb {
  height: 41px;
  background: #fff;
  line-height: 40px;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
}
/deep/ .el-breadcrumb__item {
  overflow: hidden;
}
/deep/ .el-breadcrumb__inner,
/deep/ .el-breadcrumb__inner a {
  color: #333;
  font-weight: normal;
}
/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner,
/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: #999;
}
/deep/ .separatorClass {
  margin: 0 10px;
  &:after {
    content: "/";
  }
}
</style>
