<template>
  <div class="detail-card">
    <h3 class="title">新增部门</h3>
    <el-form
      class="form-padding"
      :model="prisonDepartment"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w50"
        label="名称"
        prop="name">
        <el-input v-model="prisonDepartment.name"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="上级部门"
        prop="parentDepartmentId">
        <el-select
          v-model="prisonDepartment.parentDepartmentId"
          clearable
          :loading="gettingAllPrisonDepartments">
          <el-option
            v-for="(item, index) in allPrisonDepartments"
            :key="index"
            :label="item.name"
            :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w100 textarea"
        label="描述"
        prop="description">
        <el-input
          v-model="prisonDepartment.description"
          type="textarea"
          :maxlength="255"
          resize="none"/>
      </el-form-item>
      <div class="has-right-button">
        <el-button @click="onBack">返 回</el-button>
        <el-button
          class="button-addInNew"
          :loading="saving"
          @click="onSubmit">新 增</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import _ from 'lodash';

export default {
  data() {
    return {
      prisonDepartment: {},
      gettingAllPrisonDepartments: true,
      saving: false,
      rules: {
        name: [{ required: true, message: '请输入监狱部门名称' }, { max: 100, message: '长度在 1 到 100 个字符' }],
        description: [{ max: 255, message: '255 个字符以内' }]
      }
    };
  },
  computed: {
    ...mapState({
      allPrisonDepartments: state => state.prisonDepartment.allPrisonDepartments
    })
  },
  watch: {
    prisonDepartment: {
      handler: _.debounce(function(prisonDepartment) {
        this.$store.commit('updatePrisonDepartment', prisonDepartment);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getAllPrisonDepartments().then(() => {
      this.gettingAllPrisonDepartments = false;
    });
    this.$store.commit('setPrisonDepartment', {});
  },
  methods: {
    ...mapActions(['addPrisonDepartment', 'getAllPrisonDepartments']),
    onBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonDepartment()
            .then(res => {
              this.$message.success('新增成功');
              this.$router.push(`/prison-department/list`);
              this.saving = false;
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, '新增失败');
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
