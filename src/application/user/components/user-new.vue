<template>
  <div class="detail-card">
    <h3 class="title">新增用户</h3>
    <el-form
      class="form-padding"
      :model="user"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w50"
        label="账号"
        prop="username">
        <el-input v-model="user.username"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="密码"
        prop="password">
        <el-input
          v-model="user.password"
          type="password"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="姓名"
        prop="name">
        <el-input v-model="user.name"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="手机号码"
        prop="phoneNumber">
        <el-input v-model="user.phoneNumber"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="状态"
        prop="status">
        <el-select
          v-model="user.status"
          clearable
          placeholder="请选择使用状态">
          <el-option
            v-for="item in userStatuses"
            :key="item.value"
            :label="item.text"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <div class="has-right-button">
        <el-button @click="onBack">返 回</el-button>
        <el-button
          class="button-addInNew"
          :loading="saving"
          @click="onSubmit(user)">新 增</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import _ from 'lodash';
import userStatusService from '../service/user-status-service';

export default {
  data() {
    return {
      userStatuses: [],
      user: {},
      rules: {
        username: [{ required: true, message: '请输入用户账号' }, { max: 100, message: '长度在 100 个字符内' }],
        name: [{ required: true, message: '请输入姓名' }, { max: 100, message: '长度在 100 个字符内' }],
        password: [{ required: true, message: '请输入密码' }, { min: 6, message: '密码长度最少6位' }],
        phoneNumber: [{ required: true, message: '请输入手机号码' }, { validator: this.$validators.phoneNumber }],
        status: [{ required: true, message: '请选择状态' }],
        description: [{ max: 1000, message: '长度在 1000 个字符内' }]
      },
      saving: false
    };
  },
  watch: {
    user: {
      handler: _.debounce(function(user) {
        this.$store.commit('updateUser', user);
      }, 500),
      deep: true
    }
  },
  created() {
    this.userStatuses = userStatusService.getAll();
    this.$store.commit('setUser', {});
  },
  methods: {
    ...mapActions(['addUser']),
    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addUser()
            .then(res => {
              this.saving = false;
              this.$message.success('新增成功');
              this.$router.push(`/user/list`);
            })
            .catch(error => {
              this.$errorMessage.show(error, '新增失败');
              this.saving = false;
            });
        }
      });
    },
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
