<template>
  <div class="detail-card">
    <h3 class="title">修改监区</h3>
    <el-form
      class="form-padding"
      :model="prisonArea"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w50"
        label="编号"
        prop="code" >
        <el-input v-model="prisonArea.code"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="名称"
        prop="name" >
        <el-input v-model="prisonArea.name"/>
      </el-form-item>
      <el-form-item
        class="w50 the-disabled"
        label="上级监区">
        <span class="el-input__inner">{{ prisonArea.parentPrisonAreaName }}</span>
      </el-form-item>
      <el-form-item
        class="w100 textarea"
        label="描述"
        prop="description">
        <el-input
          :maxlength="255"
          type="textarea"
          resize="none"
          v-model="prisonArea.description"/>
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
import { mapActions } from 'vuex';
import _ from 'lodash';

export default {
  data() {
    return {
      prisonArea: _.cloneDeep(this.$store.state.prisonArea.prisonArea),
      rules: {
        code: [{ required: true, message: '请输入组织结构代码' }, { max: 50, message: '长度在 1 到 50 个字符' }],
        name: [{ required: true, message: '请输入监区名称' }, { max: 100, message: '长度在 1 到 100 个字符' }],
        description: [{ max: 255, message: '255 个字符以内' }]
      },
      saving: false
    };
  },
  watch: {
    prisonArea: {
      handler: _.debounce(function(prisonArea) {
        this.$store.commit('updatePrisonArea', prisonArea);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getPrisonArea(this.$route.params.id).then(() => {
      this.prisonArea = _.cloneDeep(this.$store.state.prisonArea.prisonArea);
    });
  },
  methods: {
    ...mapActions(['getPrisonArea', 'updatePrisonArea']),
    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updatePrisonArea()
            .then(res => {
              this.saving = false;
              this.$message.success('修改成功');
              this.$router.push(`/prison-area/list`);
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, '修改失败');
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
