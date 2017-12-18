<template>
    <div>
        <div class="card">
            <span class="um-title">修改租户</span>
            <el-form class="formPadding" :model="tenant" :rules="rules" ref="form" label-position="top">
                <el-form-item label="租户名称" class="w50">
                    <el-input v-model="tenant.name"></el-input>
                </el-form-item>
                <el-form-item label="组织机构代码" class="w50">
                    <el-input v-model="tenant.code"></el-input>
                </el-form-item>
                <el-form-item class="w100 textarea" label="租户描述">
                    <el-input :maxlength="255" type="textarea" resize="none" v-model="tenant.description"></el-input>
                </el-form-item>
                <el-form-item class="hasButton">
                    <el-button @click="onBack">返 回</el-button>
                    <el-button type="primary" :loading="editing" @click="onSubmit">确 认</el-button>
                </el-form-item>
            </el-form>
        </div>
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
          name: [
            { required: true, message: "请输入租户名称", trigger: "blur" },
            { max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: "请输入组织结构代码", trigger: "blur" }
          ],
          description: [
            { max: 255, message: '255 个字符以内', trigger: 'blur' }
          ]
      },
      editing: false
    };
  },
  created() {
    this.getTenant(this.$route.params.id).then(() => {
      this.tenant = _.cloneDeep(this.$store.state.tenant.tenant);
    });
  },
  watch: {
    tenant: {
      handler: _.debounce(function(tenant) {
        this.$store.commit("updateTenant", tenant);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["getTenant", "updatePrisonTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.updatePrisonTenant()
            .then(res => {
              this.$message.success("修改成功");
              this.$router.push(`/tenant/list`);
            })
            .catch(() => {
              this.$message.error("修改失败");
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
.labelInTop {
  padding-left: 20px;
  padding-top: 20px;
  .w100 {
    width: 100%;
    padding-right: 20px;
  }
}
</style>
