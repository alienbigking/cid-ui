<template>
  <el-button
    :class="[
      {
        'delete': text === '删除',
        'edit': text === '修改',
        'view': text === '查看'
      }
    ]"
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
