<template>
  <div>
    <div class="card">
      <div class="um-title">
          <p>修改个人信息</p>
      </div>
      <el-form class="labelInTop" :model="userProfile" :rules="rules" ref="ruleForm">
        <!-- <div class="form"> -->
          <!-- <div class="form-left"> -->
            <el-form-item label="用户名" class="w50" prop="username">
              <el-input disabled v-model="userProfile.username"></el-input>
            </el-form-item>
            <el-form-item label="姓名" class="w50" prop="name">
                <el-input v-model="userProfile.name"></el-input>
            </el-form-item>
            <el-form-item label="创建时间" class="w50" prop="createdTime">
              <el-input disabled v-model="userProfile.createdTime"></el-input>
            </el-form-item>
          <!-- </div> -->
          <!-- <div class="form-right"> -->
            <el-form-item label="最后更新时间" class="w50" prop="lastUpdatedTime">
              <el-input disabled v-model="userProfile.lastUpdatedTime"></el-input>
            </el-form-item>

            <div class="el-form-item el-form-item-div">
              <el-button class="btn-return" @click="goBack">返回</el-button>
              <el-button type="primary" class="btn-confirm" @click="submitForm('ruleForm')">保存</el-button>
            </div>
          <!-- </div> -->
          <!-- <div style="clear:both;"></div> -->
        <!-- </div> -->
      </el-form>
    </div>
    <!--修改密码模块-->
    <div class="um-modifyPassword card">
      <p>修改密码</p>
      <span>安全性高的密码可以使账号更安全，密码长度要求超过6位以上的密码。</span>
      <router-link class="modififyPassword" to="pwdModification">修改</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userProfile: {
        username: '', // 用户名
        createdTime: '', // 创建时间
        name: '', // 姓名
        lastUpdatedTime: '' // 最后更新时间
      },
      rules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    this.getMyProfile();
  },
  // computed: {
  //   userProfile: {
  //     get() {
  //       return this.$store.state.userProfile;
  //     },
  //     set(value) {
  //       this.$store.commit('getMyProfile', value);
  //     }
  //   }
  // },
  methods: {
    ...mapActions(["getMyProfile", "updateMyProfile"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateMyProfile(this.userProfile);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 返回上一级
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
  .card{
    .labelInTop{
      margin:26px 0 0 21px;
    }
  }
  .um-modifyPassword{
    padding:20px 22px 20px 20px;
    font-size: 14px;
    color: #333;
    line-height: 1;
    p{
      display:inline-block;
      margin-right:40px;

    }
    span{
          font-size: 12px;
          color: #999;
    }
    .modififyPassword{
      float: right;
      font-size:12px;
      color:#2196f3;
    }
  }
</style>
