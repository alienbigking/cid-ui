<template>
    <div>
        hahaha
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码必须大于6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
       this.login(this.user);
       this.$router.push('dashboard');
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
