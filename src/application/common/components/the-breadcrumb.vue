<template>
    <div>
        <el-breadcrumb separator="/" separator-class="separatorClass">
            <el-breadcrumb-item><i class="home" style="margin-right:5px;"></i>主页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" v-if="item.name">{{ item.name }}</el-breadcrumb-item>
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
  methods: {
    render() {
      let breadcrumbs = this.$route.matched;
      this.breadcrumbs = breadcrumbs;
    }
  },
  watch: {
    $route(to, from) {
      this.breadcrumbs = to.matched;
    }
  },
  mounted() {
    this.render();
  }
};
</script>
<style lang="scss">
.home {
  background: url("../../../assets/images/home.png") no-repeat;
  background-size: cover;
  display: inline-block;
  height: 14px;
  width: 14px;
  background-position: center;
}
.el-breadcrumb {
  height: 40px;
  background: #fff;
  line-height: 40px;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
}
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  color: #333;
  font-weight: normal;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: #999;
}
.separatorClass {
  margin: 0 10px;
  &:after {
    content: "/";
  }
}
</style>
