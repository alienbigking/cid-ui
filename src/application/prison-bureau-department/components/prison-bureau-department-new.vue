<template>
  <div class="detail-card">
    <h3 class="card-title">新增部门</h3>
    <el-form
      class="formPadding"
      :model="prisonBureauDepartment"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w50"
        label="名称"
        prop="name">
        <el-input v-model="prisonBureauDepartment.name"/>
      </el-form-item>
      <el-form-item
        class="w50"
        label="上级部门"
        prop="parentDepartmentId">
        <el-select
          v-model="prisonBureauDepartment.parentDepartmentId"
          clearable
          :loading="gettingAllPrisonBureauDepartments">
          <el-option
            v-for="(item, index) in allPrisonBureauDepartments"
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
          v-model="prisonBureauDepartment.description"
          type="textarea"
          :maxlength="255"
          resize="none"/>
      </el-form-item>
      <div class="el-form-item-div">
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
      prisonBureauDepartment: {},
      gettingAllPrisonBureauDepartments: true,
      saving: false,
      rules: {
        name: [
          { required: true, message: "请输入监狱局部门名称" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ],
        description: [{ max: 255, message: "255 个字符以内" }]
      }
    };
  },
  computed: {
    ...mapState({
      allPrisonBureauDepartments: state => state.prisonBureauDepartment.allPrisonBureauDepartments
    })
  },
  watch: {
    prisonBureauDepartment: {
      handler: _.debounce(function(prisonBureauDepartment) {
        this.$store.commit("updatePrisonBureauDepartment", prisonBureauDepartment);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getAllPrisonBureauDepartments().then(() => {
      this.gettingAllPrisonBureauDepartments = false;
    });
    this.$store.commit("setPrisonBureauDepartment", {});
  },
  methods: {
    ...mapActions(["addPrisonBureauDepartment", "getAllPrisonBureauDepartments"]),
    onBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonBureauDepartment()
            .then(res => {
              this.$message.success("新增成功");
              this.$router.push(`/prison-bureau-department/list`);
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
