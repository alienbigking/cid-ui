<template>
    <div class="card">
        <div class="um-title">
            <p>新增租户</p>
        </div>
        <el-form class="formPadding" :model="tenant" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w50" label="租户名称" prop="name">
                <el-input v-model="tenant.name"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="组织机构代码" prop="code">
                <el-input v-model="tenant.code"></el-input>
            </el-form-item>
            <el-form-item class="w100 textarea" label="租户描述" prop="description">
                <el-input :maxlength="255" v-model="tenant.description" type="textarea" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button type="primary" :loading="adding" @click="onSubmit(tenant)">新增</el-button>
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
      tenant: {},
      rules: {
          name: [
            { required: true, message: "请输入租户名称", trigger: "blur" },
            { max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: "请输入组织结构代码", trigger: "blur" }
          ],
          description: [
            { max: 255, message: '255 个字符以内', trigger: 'blur' }
          ]
      },
      adding: false
    };
  },
  watch: {
    tenant: {
      handler: _.debounce(function(tenant) {
        this.$store.commit("updateTenant", tenant);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["addPrisonTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
            this.adding = true;
          this.addPrisonTenant()
            .then(res => {
                this.adding = false;
              this.$message.success("新增成功");
              this.$router.push(`/tenant/list`);
            })
            .catch(() => {
              this.$message.error("新增失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
