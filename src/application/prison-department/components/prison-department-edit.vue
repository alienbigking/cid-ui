<template>
    <div class="card">
        <div class="um-title">
            <p>修改监狱部门</p>
        </div>
        <el-form class="formPadding" :model="prisonDepartment" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w50" label="名称" prop="name" >
                <el-input v-model="prisonDepartment.name"></el-input>
            </el-form-item>
            <el-form-item class="w50 the-disabled" label="上级部门" prop="parentDepartmentName">
                <span class="el-input__inner">{{prisonDepartment.parentDepartmentName}}</span>
            </el-form-item>
            <el-form-item class="w100 textarea" label="描述" prop="description">
                <el-input :maxlength="255" type="textarea" resize="none" v-model="prisonDepartment.description"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button @click="onBack">返 回</el-button>
                <el-button class="button-confirm" :loading="saving" @click="onSubmit">确 认</el-button>
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
      prisonDepartment: _.cloneDeep(this.$store.state.prisonDepartment.prisonDepartment),
      rules: {
        name: [
          { required: true, message: "请输入监狱部门名称" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ],
        description: [{ max: 255, message: "255 个字符以内" }]
      },
      saving: false
    };
  },
  watch: {
    prisonDepartment: {
      handler: _.debounce(function(prisonDepartment) {
        this.$store.commit("updatePrisonDepartment", prisonDepartment);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getPrisonDepartment(this.$route.params.id).then(() => {
      this.prisonDepartment = _.cloneDeep(this.$store.state.prisonDepartment.prisonDepartment);
    });
  },
  methods: {
    ...mapActions(["getPrisonDepartment", "updatePrisonDepartment"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updatePrisonDepartment()
            .then(res => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/prison-department/list`);
            })
            .catch(error => {
              this.saving = false;
              this.$handleError(error.response, "修改失败");
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
