<template>
  <div class="detail-card">
    <h3 class="card-title">修改密码</h3>
    <el-form
      class="w340"
      :model="userPassword"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item prop="oldPassword">
        <el-input
          type="password"
          placeholder="原始密码"
          v-model="userPassword.oldPassword" />
      </el-form-item>
      <el-form-item prop="newPassword">
        <el-input
          :type="showNewPassword?'text':'password'"
          placeholder="请输入新密码"
          v-model="userPassword.newPassword">
          <span
            slot="suffix"
            class="iconfont"
            :class="showNewPassword?'icon-kejian':'icon-bukejian'"
            @click="onSwitchShowNewPassword"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <el-input
          :type="showCheckPassword?'text':'password'"
          placeholder="请再次输入新密码"
          v-model="userPassword.checkPassword">
          <span
            slot="suffix"
            class="iconfont"
            :class="showCheckPassword?'icon-kejian':'icon-bukejian'"
            @click="onSwitchShowCheckPassword"/>
        </el-input>
      </el-form-item>
      <div class="form-btn">
        <el-button @click="onBack">返 回</el-button>
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSubmit">确 认</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userPassword: {
        oldPassword: "",
        newPassword: "",
        checkPassword: ""
      },
      saving: false,
      showNewPassword: false,
      showCheckPassword: false
    };
  },
  computed: {
    rules() {
      return {
        oldPassword: [
          { required: true, message: "密码不能为空" },
          { min: 6, message: "密码长度最少6位" }
        ],
        newPassword: [
          { required: true, message: "密码不能为空" },
          { min: 6, message: "密码长度最少6位" },
          {
            validator: this.$validators.checkOtherField,
            form: "form",
            otherField: "checkPassword",
            model: this.userPassword,
            refs: this.$refs
          }
        ],
        checkPassword: [
          { required: true, message: "确认密码不能为空" },
          {
            validator: this.$validators.equalTo,
            compareTo: "newPassword",
            message: "密码不匹配",
            model: this.userPassword
          }
        ]
      };
    }
  },
  methods: {
    ...mapActions(["updatePassword"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          const params = {
            id: this.$route.params.id,
            userPassword: this.userPassword
          };
          this.updatePassword(params)
            .then(() => {
              this.saving = false;
              this.$message.success("修改成功");
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, "修改失败");
            });
        }
      });
    },
    onSwitchShowNewPassword() {
      this.showNewPassword = !this.showNewPassword;
    },
    onSwitchShowCheckPassword() {
      this.showCheckPassword = !this.showCheckPassword;
    },
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-title {
  border-bottom: 1px solid #ddd;
  & + form {
    border-top: 0;
  }
}
.w340 {
  width: 340px;
  margin: 30px auto;
  & > div {
    width: 100%;
  }
  .form-btn {
    display: flex;
    justify-content: space-between;
    [class*="button-"] {
      width: 160px;
    }
  }
  .iconfont {
    font-size: 20px;
    color: #666;
  }
}
</style>
