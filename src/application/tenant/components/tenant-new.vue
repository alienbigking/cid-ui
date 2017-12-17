<template>
    <div class="card">
        <div class="um-title">
            <p>新增租户</p>
        </div>
        <el-form class="formPadding" :model="tenant" :rules="rules" ref="formName" label-position="top">
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
                <el-button type="primary" :loading="adding" @click="handleAdd(tenant)">新增</el-button>
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
      rules: {}
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
    ...mapActions(["addTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.addTenant()
            .then(res => {
              this.$message.success("新增成功");
              this.$router.push(`/prison-tenant/list`);
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
