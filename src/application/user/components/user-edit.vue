<template>
  <div>
    <div class="detail-card">
      <h3 class="title">修改用户信息</h3>
      <el-form
        class="form-padding"
        :model="user"
        :rules="rules"
        ref="form"
        label-position="top">
        <el-form-item
          label="账号"
          class="w50 the-disabled"
          prop="username">
          <span class="el-input__inner">{{ user.username }}</span>
        </el-form-item>
        <el-form-item
          label="姓名"
          class="w50"
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
          label="创建时间"
          class="w50 the-disabled">
          <span class="el-input__inner">{{ user.createdTime | moment }}</span>
        </el-form-item>
        <el-form-item
          label="最后更新时间"
          class="w50 the-disabled">
          <span class="el-input__inner">{{ user.lastUpdatedTime | moment }}</span>
        </el-form-item>
        <div class="has-right-button">
          <el-button @click="onBack">返 回</el-button>
          <el-button
            class="button-confirm"
            :loading="saving"
            @click="onSubmit">保 存</el-button>
        </div>
      </el-form>
    </div>
    <div class="detail-card">修改密码
      <span>安全性高的密码可以使账号更安全，密码长度要求至少6位。</span>
      <span
        class="modififyPassword"
        @click="updatePassword">修改</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import _ from 'lodash';

export default {
  data() {
    return {
      user: _.cloneDeep(this.$store.state.user.user),
      rules: {
        name: [{ required: true, message: '姓名不能为空' }, { max: 100, message: '长度在 100 个字符内' }],
        phoneNumber: [{ required: true, message: '请输入手机号码' }, { validator: this.$validators.phoneNumber }]
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
    this.getUser(this.$route.params.id).then(() => {
      this.user = _.cloneDeep(this.$store.state.user.user);
    });
  },
  methods: {
    ...mapActions(['getUser', 'updateUser']),
    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateUser()
            .then(() => {
              this.saving = false;
              this.$message.success('修改成功');
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, '修改失败');
            });
        }
      });
    },
    updatePassword() {
      let params = this.$route.params.id;
      this.$router.push(`/user/password-edit/${params}`);
    },
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-card + .detail-card {
  padding: 20px;
  color: #333;
  line-height: 1;
  span {
    margin-left: 40px;
    color: #999;
  }
  .modififyPassword {
    float: right;
    color: #2196f3;
    cursor: pointer;
  }
}
</style>
