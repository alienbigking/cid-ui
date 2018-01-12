<template>
  <div class="card">
    <div class="um-title">
      <p>新增角色</p>
    </div>
    <el-form :model="role" :rules="rules" ref="form" class="formPadding" label-position="top">
      <el-form-item class="w50" label="角色名称" prop="name" >
        <el-input v-model="role.name"></el-input>
      </el-form-item>
      <el-form-item class="w100 textarea" label="监舍描述" prop="description" >
        <el-input type="textarea" resize="none" v-model="role.description"></el-input>
      </el-form-item>
      <el-form-item class="hasButton">
          <el-button class="button-addInNew" :loading="saving" @click="onSubmit">新 增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      role: {},
      rules: {
        name: [
          { required: true, message: "请输入角色名称" },
          { min: 3, max: 5, message: "长度在 3 到 100 个字符" }
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
    this.$store.commit("updateRole", {});
  },
  methods: {
    ...mapActions(["addRole"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addRole()
            .then(res => {
              this.saving = false;
              this.$message.success("新增成功");
              this.$router.push(`/role/list`);
            })
            .catch(error => {
              this.saving = false;
              this.$handleError(error.response, "新增失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.labelInTop {
  padding-left: 20px;
  padding-top: 20px;
  .w100 {
    width: 100%;
    padding-right: 20px;
  }
}
</style>
