<template>
  <el-button
    :type="type"
    :loading="loading"
    @click="onClick"><slot /></el-button>
</template>
<script>
import tokenStorage from '../utils/token/token-storage';
import jwtDecode from 'jwt-decode';

export default {
  props: {
    permission: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasPermission: false
    };
  },
  created() {
    const token = tokenStorage.getToken();
    const permissions = jwtDecode(token.access_token).authorities;
    this.hasPermission = permissions.some(p => p === this.permission);
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
<style lang="scss" scoped>
.button-success {
  color: #67c23a;
}
.button-danger {
  color: #f56c6c;
}
</style>
