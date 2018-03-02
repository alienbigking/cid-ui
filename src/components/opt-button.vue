<template>
  <el-button
    v-if="allowed"
    :type="type"
    :loading="loading"
    @click="handleClick"><slot /></el-button>
</template>
<script>
import jwtDecode from 'jwt-decode';
import tokenStorage from '../utils/token/token-storage';

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
      text: '',
      allowed: false
    };
  },
  mounted() {
    this.text = this.$el.innerText;
  },
  created() {
    const token = tokenStorage.getToken();
    let info = jwtDecode(token.access_token).authorities;
    this.allowed = info.indexOf(this.permission) > -1;
  },
  methods: {
    handleClick() {
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
