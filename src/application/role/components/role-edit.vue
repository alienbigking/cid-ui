<template>
  <div>
      <div class="card">
          <span class="um-title">修改角色</span>
          <el-form class="formPadding" :model="role" :rules="rules" ref="form" label-position="top">
              <el-form-item label="角色名称" class="w50" prop="name" >
                  <el-input v-model="role.name"></el-input>
              </el-form-item>
              <el-form-item class="w100 textarea" label="角色描述" prop="description" >
                  <el-input :maxlength="255" type="textarea" resize="none" v-model="role.description"></el-input>
              </el-form-item>
              <el-form-item class="hasButton">
                  <el-button @click="onBack">返 回</el-button>
                  <el-button type="primary" @click="onSubmit">确 认</el-button>
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
      role: _.cloneDeep(this.$store.state.role.role),
      rules: {
        name: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        description: [
          { min: 5, max: 255, message: "长度在 5 到 255 个字符", trigger: "blur" }
        ]
      }
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
          this.updateRole()
            .then(res => {
              this.$message.success("修改成功");
              this.$router.push(`/role/list`);
            })
            .catch(() => {
              this.$handleError("修改失败");
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
.labelInTop {
  padding-left: 20px;
  padding-top: 20px;
  .w100 {
    width: 100%;
    padding-right: 20px;
  }
}
</style>
