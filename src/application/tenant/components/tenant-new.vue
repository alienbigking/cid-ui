<template>
  <div class="detail-card">
    <div class="title">新增租户</div>
    <el-form
      class="form-padding"
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
        class="w50"
        label="状态"
        prop="status">
        <el-select
          v-model="tenant.status"
          clearable
          placeholder="请选择使用状态">
          <el-option
            v-for="item in userStatuses"
            :key="item.value"
            :label="item.text"
            :value="item.value"/>
        </el-select>
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
      <div class="has-right-button">
        <el-button
          class="button-addInNew"
          :loading="saving"
          @click="onSubmit(tenant)">新 增</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import userStatusService from '../../user/service/user-status-service';
import _ from 'lodash';
export default {
  data() {
    return {
      userStatuses: [],
      tenant: {},
      rules: {
        code: [{ required: true, message: '请输入编号' }, { max: 50, message: '长度在 1 到 50 个字符' }],
        name: [{ required: true, message: '请输入租户名称' }, { max: 100, message: '长度在 100 个字符内' }],
        status: [{ required: true, message: '请选择状态' }],
        description: [{ max: 1000, message: '长度在 1000 个字符内' }]
      },
      saving: false
    };
  },
  watch: {
    tenant: {
      handler: _.debounce(function(tenant) {
        this.$store.commit('updateTenant', tenant);
      }, 500),
      deep: true
    }
  },
  created() {
    this.userStatuses = userStatusService.getAll();
    this.$store.commit('setTenant', {});
  },
  methods: {
    ...mapActions(['addPrisonTenant']),
    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonTenant()
            .then(res => {
              this.saving = false;
              this.$message.success('新增成功');
              this.$router.push(`/tenant/list`);
            })
            .catch(error => {
              this.$errorMessage.show(error, '新增失败');
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
