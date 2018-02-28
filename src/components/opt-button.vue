<template>
  <el-button
    :type="type"
    :loading="loading"
    @click="handleClick"><slot /></el-button>
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
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      text: ''
    };
  },
  mounted() {
    this.text = this.$el.innerText;
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>
<style lang="scss" scoped>
.button-success{
  color: #67C23A;
}
.button-danger{
  color: #F56C6C;
}
</style>
