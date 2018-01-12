<template>
  <div>
    <div class="card">
      <div class="um-title">
          <p>修改用户信息</p>
      </div>
      <el-form class="formPadding" :model="user" :rules="rules" ref="form" label-position="top">
          <el-form-item label="账号名称" class="w50 the-disabled" prop="username">
              <span class="el-input__inner">{{user.username}}</span>
          </el-form-item>
          <el-form-item label="姓名" class="w50" prop="name">
              <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" class="w50 the-disabled">
              <span class="el-input__inner">{{ user.createdTime }}</span>
          </el-form-item>
          <el-form-item label="最后更新时间" class="w50 the-disabled">
              <span class="el-input__inner">{{ user.lastUpdatedTime }}</span>
          </el-form-item>

          <div class="el-form-item el-form-item-div">
            <el-button @click="goBack">返 回</el-button>
            <el-button class="button-confirm" :loading="saving" @click="onSubmit">保 存</el-button>
          </div>
      </el-form>
    </div>
    <div class="um-modifyPassword card">
      <p>修改密码</p>
      <span>安全性高的密码可以使账号更安全，密码长度要求超过6位以上的密码。</span>
      <!-- <router-link class="modififyPassword" to="/user/password">修改</router-link> -->
      <el-button @click="updatePassword">修改密码</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      user: _.cloneDeep(this.$store.state.user.user),
      rules: {
        name: [{ required: true, message: "姓名不能为空" }]
      },
      saving: false
    };
  },
  watch: {
    user: {
      handler: _.debounce(function(user) {
        this.$store.commit("updateUser", user);
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
    ...mapActions(["getUser", "updateUser"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateUser()
            .then(() => {
              this.saving = false;
              this.$message.success("修改成功");
            })
            .catch(error => {
              this.saving = false;
              this.$handleError(error.response, "修改失败");
            });
        }
      });
    },
    updatePassword() {
      let params = this.$route.params.id;
      this.$router.push(`/user/password-edit/${params}`);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.um-modifyPassword {
  padding: 20px 22px 20px 20px;
  font-size: 14px;
  color: #333;
  line-height: 1;
  p {
    display: inline-block;
    margin-right: 40px;
  }
  span {
    font-size: 12px;
    color: #999;
  }
  .modififyPassword {
    float: right;
    font-size: 12px;
    color: #2196f3;
  }
}
</style>
