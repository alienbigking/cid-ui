<template>
  <div>
    <div class="detail-card">
      <h3 class="title">修改个人信息</h3>
      <el-form
        class="form-padding"
        :model="myProfile"
        :rules="rules"
        ref="form"
        label-position="top">
        <el-form-item
          label="用户名"
          class="w50 the-disabled">
          <span class="el-input__inner">{{ myProfile.username }}</span>
        </el-form-item>
        <el-form-item
          label="姓名"
          class="w50"
          prop="name">
          <el-input v-model="myProfile.name"/>
        </el-form-item>
        <el-form-item
          label="创建时间"
          class="w50 the-disabled">
          <span class="el-input__inner">{{ myProfile.createdTime | moment }}</span>
        </el-form-item>
        <el-form-item
          label="最后更新时间"
          class="w50 the-disabled">
          <span class="el-input__inner">{{ myProfile.lastUpdatedTime | moment }}</span>
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
      <router-link
        class="modififyPassword"
        to="/me/password">修改</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import _ from 'lodash';

export default {
  data() {
    return {
      myProfile: _.cloneDeep(this.$store.state.me.myProfile),
      rules: {
        name: [{ required: true, message: '姓名不能为空' }]
      },
      saving: false
    };
  },
  watch: {
    myProfile: {
      handler: _.debounce(function(myProfile) {
        this.$store.commit('updateMyProfile', myProfile);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getMyProfile().then(() => {
      this.myProfile = _.cloneDeep(this.$store.state.me.myProfile);
    });
  },
  methods: {
    ...mapActions(['getMyProfile', 'updateMyProfile']),
    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateMyProfile()
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
  }
}
.has-right-button {
  margin-bottom: 0;
}
</style>
