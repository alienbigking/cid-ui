<template>
    <div>
        <div class="card">
            <span class="um-title">修改用户</span>
            <el-form class="formPadding" :model="user" :rules="rules" ref="form" label-position="top">
                <el-form-item label="编号" class="w50" prop="code">
                    <el-input v-model="user.code"></el-input>
                </el-form-item>
                <el-form-item label="名称" class="w50" prop="name">
                    <el-input v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item class="w100 textarea" label="描述" prop="description">
                    <el-input :maxlength="255" type="textarea" resize="none" v-model="user.description"></el-input>
                </el-form-item>
                <el-form-item class="hasButton">
                    <el-button @click="onBack">返 回</el-button>
                    <el-button type="primary" :loading="saving" @click="onSubmit">确 认</el-button>
                </el-form-item>
            </el-form>
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
        code: [
          { required: true, message: "请输入编号", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入租户名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
      },
      saving: false
    };
  },
  created() {
    this.getUser(this.$route.params.id).then(() => {
      this.user = _.cloneDeep(this.$store.state.user.user);
    });
  },
  watch: {
    user: {
      handler: _.debounce(function(user) {
        this.$store.commit("updateUser", user);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["getUser", "updateUser"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateUser()
            .then(res => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/user/list`);
            })
            .catch(() => {
              this.saving = false;
              this.$message.error("修改失败");
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
