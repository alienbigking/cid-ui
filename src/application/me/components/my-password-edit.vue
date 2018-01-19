<template>
    <div class="detail-card">
      <h3 class="card-title">修改密码</h3>
      <el-form class="w340" :model="userPassword" :rules="rules" ref="form" label-position="top">
          <el-form-item prop="oldPassword">
              <el-input type="password" class="gray-inner" placeholder="原始密码" v-model="userPassword.oldPassword" />
          </el-form-item>
          <el-form-item prop="newPassword">
              <el-input class="gray-inner" :type="isShowPwd?'text':'password'" placeholder="请输入新密码" v-model="userPassword.newPassword">
                  <span slot="suffix" class="iconfont" :class="isShowPwd?'icon-kejian':'icon-attentionforbid'" @click="isShow"></span>
              </el-input>
          </el-form-item>
          <el-form-item prop="checkPassword">
              <el-input class="gray-inner" :type="isShowPwd_again?'text':'password'" placeholder="请再次输入新密码" v-model="userPassword.checkPassword">
                <span slot="suffix" class="iconfont" :class="isShowPwd_again?'icon-kejian':'icon-attentionforbid'" @click="isShow_again"></span>
              </el-input>
          </el-form-item>
          <div class="form-btn">
              <el-button @click="goBack">返 回</el-button>
              <el-button class="button-confirm" :loading="saving" @click="onSubmit">确 认</el-button>
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
      isShowPwd: false,
      isShowPwd_again: false
    };
  },
  computed: {
    rules() {
      return {
        oldPassword: [
          { required: true, message: "密码不能为空" },
          { min: 6, message: "密码必须大于6位" }
        ],
        newPassword: [
          { required: true, message: "密码不能为空" },
          { min: 6, message: "密码必须大于6位" }
        ],
        checkPassword: [
          {
            validator: this.$validators.equalTo,
            compareTo: this.userPassword.newPassword,
            message: "密码不匹配"
          }
        ]
      };
    }
  },
  methods: {
    ...mapActions(["updateMyPassword"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateMyPassword(this.userPassword)
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
    isShow() {
      this.isShowPwd = !this.isShowPwd;
    },
    isShow_again() {
      this.isShowPwd_again = !this.isShowPwd_again;
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.w340 {
  width: 340px;
  margin: 30px auto;
  &>div{ width: 100%;}
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
