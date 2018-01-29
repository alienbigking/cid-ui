<template>
  <div class="detail-card">
    <h3 class="card-title">修改</h3>
    <el-form
      class="formPadding"
      :model="role"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        label="名称"
        class="w50"
        prop="name" >
        <el-input v-model="role.name"/>
      </el-form-item>
      <el-form-item
        class="w100 textarea"
        label="描述"
        prop="description" >
        <el-input
          :maxlength="255"
          type="textarea"
          resize="none"
          v-model="role.description"/>
      </el-form-item>
      <div class="el-form-item-div">
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
import _ from "lodash";

export default {
  data() {
    return {
      role: _.cloneDeep(this.$store.state.role.role),
      rules: {
        name: [
          { required: true, message: "请输入角色名称" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符" }
        ],
        description: [
          { min: 5, max: 255, message: "长度在 5 到 255 个字符" }
        ]
      },
      saving: false
    };
  },
  watch: {
    role: {
      handler: _.debounce(function(role) {
        this.$store.commit("updateRole", role);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getRole(this.$route.params.id).then(() => {
      this.role = _.cloneDeep(this.$store.state.role.role);
    });
  },
  methods: {
    ...mapActions(["getRole", "updateRole"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateRole()
            .then(res => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/role/list`);
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, "修改失败");
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
