<template>
  <el-button
    v-if="allowed"
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
.view {
  color: #29b0a3;
}
.edit {
  color: #2196f3;
}
.delete {
  color: #f44336;
}
</style>
