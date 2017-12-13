<template>
    <div>
        <div class="card">
            <span class="um-title">修改租户</span>
            <!-- <div class="form-container"> -->
                    <el-form class="labelInTop">
                        <el-form-item label="租户名称" class="w50">
                          <el-input v-model="user.username"></el-input>
                        </el-form-item>
                    <!-- </el-form> -->
            <!-- </div> -->
        <!-- </div> -->
        <!-- <div class="card"> -->
            <!-- <el-form class="labelInTop"> -->
                <el-form-item class="w100 textarea" label="租户描述">
                  <el-input type="textarea" resize="none"></el-input>
                </el-form-item>
                <el-form-item class="hasButton">
                    <el-button>返 回</el-button>
                    <el-button type="primary">确 认</el-button>
                </el-form-item>
            </el-form>
            <!-- <el-button>返回</el-button> -->
        </div>
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

.labelInTop{
  padding-left: 20px;
  padding-top: 20px;
  .w100{
      width: 100%;
      padding-right: 20px;
  }

}
</style>
