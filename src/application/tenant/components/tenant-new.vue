<template>
  <div class="detail-card">
    <div class="card-title">新增租户</div>
    <el-form
      class="formPadding"
      :model="tenant"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w50"
        label="编号"
        prop="code">
        <el-input v-model="tenant.code"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="名称"
        prop="name">
        <el-input v-model="tenant.name"/>
      </el-form-item>
      <el-form-item
        class="w100 textarea"
        label="描述"
        prop="description">
        <el-input
          :maxlength="255"
          v-model="tenant.description"
          type="textarea"
          resize="none"/>
      </el-form-item>
      <div class="el-form-item-div">
        <el-button
          class="button-addInNew"
          :loading="saving"
          @click="onSubmit(tenant)">新 增</el-button>
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
      tenant: {},
      rules: {
        code: [
          { required: true, message: "请输入编号" },
          { max: 50, message: "长度在 1 到 50 个字符" }
        ],
        name: [
          { required: true, message: "请输入租户名称" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ],
        description: [{ max: 255, message: "255 个字符以内" }]
      },
      saving: false
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
  created() {
    this.$store.commit("setTenant", {});
  },
  methods: {
    ...mapActions(["addPrisonTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonTenant()
            .then(res => {
              this.saving = false;
              this.$message.success("新增成功");
              this.$router.push(`/tenant/list`);
            })
            .catch(error => {
              this.$errorMessage.show(error, "新增失败");
              this.saving = false;
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
