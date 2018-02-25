<template>
  <el-button
    :class="[
      className,
      {
        'delete': text === '删除',
        'edit': text === '修改',
        'view': text === '查看'
      }
    ]"
    :type="type"
    :loading="loading"
    @click="handleClick">{{ text }}</el-button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('onClick');
    }
  }
};
</script>
<style lang="scss" scoped>
.view{
  color: #29b0a3;
}
.edit{
  color: #2196f3;
}
.delete{
  color: #f44336;
}
</style>
