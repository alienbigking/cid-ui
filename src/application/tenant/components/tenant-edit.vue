<template>
  <div class="detail-card">
    <h3 class="title">修改租户</h3>
    <el-form
      class="form-padding"
      :model="tenant"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        label="编号"
        class="w50"
        prop="code">
        <el-input v-model="tenant.code"/>
      </el-form-item>
      <el-form-item
        label="名称"
        class="w50"
        prop="name">
        <el-input v-model="tenant.name"/>
      </el-form-item>
      <el-form-item
        class="w100 textarea"
        label="描述"
        prop="description">
        <el-input
          :maxlength="255"
          type="textarea"
          resize="none"
          v-model="tenant.description"/>
      </el-form-item>
      <div class="has-right-button">
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
      tenant: _.cloneDeep(this.$store.state.tenant.tenant),
      rules: {
        code: [
          { required: true, message: "请输入编号" },
          { max: 50, message: "长度在 1 到 50 个字符" }
        ],
        name: [
          { required: true, message: "请输入租户名称" },
          { max: 100, message: "长度在 100 个字符内" }
        ],
        description: [{ max: 1000, message: "长度在 1000 个字符内" }]
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
    this.getTenant(this.$route.params.id).then(() => {
      this.tenant = _.cloneDeep(this.$store.state.tenant.tenant);
    });
  },
  methods: {
    ...mapActions(["getTenant", "updateTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateTenant()
            .then(res => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/tenant/list`);
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
