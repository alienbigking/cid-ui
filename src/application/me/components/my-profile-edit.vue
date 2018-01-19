<template>
  <div>
    <div class="detail-card">
      <h3 class="card-title">修改个人信息</h3>
      <el-form class="formPadding" :model="userProfile" :rules="rules" ref="form" label-position="top">
          <el-form-item label="用户名" class="w50 the-disabled">
              <span class="el-input__inner">{{ userProfile.username }}</span>
          </el-form-item>
          <el-form-item label="姓名" class="w50" prop="name">
              <el-input v-model="userProfile.name"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" class="w50 the-disabled">
              <span class="el-input__inner">{{ userProfile.createdTime | moment }}</span>
          </el-form-item>
          <el-form-item label="最后更新时间" class="w50 the-disabled">
              <span class="el-input__inner">{{ userProfile.lastUpdatedTime | moment }}</span>
          </el-form-item>

          <div class="el-form-item-div">
            <el-button @click="goBack">返 回</el-button>
            <el-button class="button-confirm" :loading="saving" @click="onSubmit">保 存</el-button>
          </div>
      </el-form>
    </div>
    <div class="detail-card">修改密码
      <span>安全性高的密码可以使账号更安全，密码长度要求超过6位以上的密码。</span>
      <router-link class="modififyPassword" to="/me/password">修改</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      userProfile: _.cloneDeep(this.$store.state.me.userProfile),
      rules: {
        name: [{ required: true, message: "姓名不能为空" }]
      },
      saving: false
    };
  },
  watch: {
    userProfile: {
      handler: _.debounce(function(userProfile) {
        this.$store.commit("updateUserProfile", userProfile);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getMyProfile().then(() => {
      this.userProfile = _.cloneDeep(this.$store.state.me.userProfile);
    });
  },
  methods: {
    ...mapActions(["getMyProfile", "updateMyProfile"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateMyProfile()
            .then(() => {
              this.saving = false;
              this.$message.success("修改成功");
            })
            .catch(error => {
              this.saving = false;
              this.$showError(error, "修改失败");
            });
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-card + .detail-card {
  padding: 20px;
  font-size: 14px;
  color: #333;
  line-height: 1;
  span {
    margin-left: 40px;
    font-size: 12px;
    color: #999;
  }
  .modififyPassword {
    float: right;
    font-size: 12px;
    color: #2196f3;
  }
}
.el-form-item-div{ margin-bottom: 0; }
</style>
