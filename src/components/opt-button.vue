<template>
  <span>
    <template>
      <el-button
        :class="className"
        :type="type"
        :loading="loading"
        @click="onClick">{{ text }}</el-button>
    </template>
  </span>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    };
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
