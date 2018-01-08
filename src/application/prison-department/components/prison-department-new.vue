<template>
    <div class="card">
        <div class="um-title">
            <p>新增监狱部门</p>
        </div>
        <el-form class="formPadding" :model="prisonDepartment" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w50" label="名称" prop="name">
            <el-input v-model="prisonDepartment.name"></el-input>
          </el-form-item>
          <el-form-item class="w50" label="上级监狱部门" prop="parentDepartmentId">
            <el-select v-model="prisonDepartment.parentDepartmentId" clearable :loading="gettingAllPrisonDepartments">
              <el-option v-for="(item, index) in allPrisonDepartments" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w100 textarea" label="描述" prop="description">
            <el-input v-model="prisonDepartment.description" type="textarea" :maxlength="255" resize="none"></el-input>
          </el-form-item>
          <el-form-item class="hasButton">
            <el-button @click="onBack">返 回</el-button>
            <el-button type="primary" :loading="saving" @click="onSubmit">新增</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      prisonDepartment: {},
      gettingAllPrisonDepartments: true,
      saving: false,
      rules: {
        name: [
          { required: true, message: "请输入监狱部门名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
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
        this.$store.commit("updatePrisonDepartment", prisonDepartment);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getAllPrisonDepartments().then(() => {
      this.gettingAllPrisonDepartments = false;
    });
    this.prisonDepartment = {};
  },
  methods: {
    ...mapActions(["addPrisonDepartment", "getAllPrisonDepartments"]),
    onBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonDepartment()
            .then(res => {
              this.$message.success("新增成功");
              this.$router.push(`/prison-department/list`);
              this.saving = false;
            })
            .catch(error => {
              this.saving = false;
              this.$handleError(error.response, "新增失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
