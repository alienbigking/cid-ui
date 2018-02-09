<template>
  <div class="detail-card">
    <h3 class="card-title">新增监区</h3>
    <el-form
      class="formPadding"
      :model="prisonArea"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w50"
        label="编号"
        prop="code">
        <el-input v-model="prisonArea.code"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="名称"
        prop="name">
        <el-input v-model="prisonArea.name"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="上级监区"
        prop="parentPrisonAreaId">
        <el-select
          v-model="prisonArea.parentPrisonAreaId"
          clearable
          :loading="gettingAllPrisonAreas">
          <el-option
            v-for="(item, index) in allPrisonAreas"
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
          v-model="prisonArea.description"
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
import { mapActions, mapState } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      prisonArea: {},
      gettingAllPrisonAreas: true,
      saving: false,
      rules: {
        code: [
          { required: true, message: "请输入组织机构代码" },
          { max: 50, message: "长度在 1 到 50 个字符" }
        ],
        name: [
          { required: true, message: "请输入监区名称" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ],
        description: [{ max: 255, message: "255 个字符以内" }]
      }
    };
  },
  computed: {
    ...mapState({
      allPrisonAreas: state => state.prisonArea.allPrisonAreas
    })
  },
  watch: {
    prisonArea: {
      handler: _.debounce(function(prisonArea) {
        this.$store.commit("updatePrisonArea", prisonArea);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getAllPrisonAreas().then(() => {
      this.gettingAllPrisonAreas = false;
    });
    this.$store.commit("setPrisonArea", {});
  },
  methods: {
    ...mapActions(["addPrisonArea", "getAllPrisonAreas"]),
    onBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonArea()
            .then(res => {
              this.$message.success("新增成功");
              this.$router.push(`/prison-area/list`);
              this.saving = false;
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, "新增失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
