<template>
    <div class="detail-card">
        <h3 class="card-title">修改部门</h3>
        <el-form class="formPadding" :model="prisonBureauDepartment" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w50" label="部门名称" prop="name" >
                <el-input v-model="prisonBureauDepartment.name"></el-input>
            </el-form-item>
            <el-form-item class="w50 the-disabled" label="上级部门名称">
                <span class="el-input__inner">{{  prisonBureauDepartment.parentDepartmentName }}</span>
            </el-form-item>
            <el-form-item class="w100 textarea" label="描述" prop="description">
                <el-input :maxlength="255" type="textarea" resize="none" v-model="prisonBureauDepartment.description"></el-input>
            </el-form-item>
            <div class="el-form-item-div">
                <el-button @click="onBack">返 回</el-button>
                <el-button class="button-confirm" :loading="saving" @click="onSubmit">确 认</el-button>
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
      prisonBureauDepartment: _.cloneDeep(this.$store.state.prisonBureauDepartment.prisonBureauDepartment),
      rules: {
        name: [
          { required: true, message: "请输入监狱局部门名称" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ],
        description: [{ max: 255, message: "255 个字符以内" }]
      },
      saving: false
    };
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
    this.getPrisonBureauDepartment(this.$route.params.id).then(() => {
      this.prisonBureauDepartment = _.cloneDeep(this.$store.state.prisonBureauDepartment.prisonBureauDepartment);
    });
  },
  methods: {
    ...mapActions(["getPrisonBureauDepartment", "updatePrisonBureauDepartment"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updatePrisonBureauDepartment()
            .then(res => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/prison-bureau-department/list`);
            })
            .catch(error => {
              this.saving = false;
              this.$showError(error, "修改失败");
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
