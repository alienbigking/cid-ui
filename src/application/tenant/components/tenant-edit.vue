<template>
    <div>
        <div class="card">
            <span class="um-title">修改租户</span>
            <el-form class="formPadding" :model="tenant" :rules="rules" ref="formName" label-position="top">
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
                    <el-button @click="goBack">返 回</el-button>
                    <el-button type="primary" :loading="editing" @click="onSubmit(tenant)">确 认</el-button>
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
            tenant: {
                name: "",
                description: '',
                code: ''
            },
            tenantId: '',
            rules: {},
            editing: false,
            flag: ''
        };
    },
    methods: {
        ...mapActions(["getTenant", "updatePrisonTenant"]),
        goBack() {
           this.$router.push(`/tenant/list`);
        },
        onSubmit(e) {
            this.$refs["formName"].validate((valid) => {
                if (valid) {
                    this.editing = true;
                    let params = {
                        id: this.tenantId,
                        name: e.name,
                        description: e.description,
                        code: e.code
                    };
                    this.updatePrisonTenant(params).then(res => {
                        this.editing = false;
                        this.$message.success('修改成功');
                        this.$router.push(`/tenant/list`);
                    });
                }
            });
       },
       render() {
           this.getTenant(this.tenantId).then(res => {
               this.tenant = _.cloneDeep(this.$store.state.tenant.tenant);
               this.flag.close();
           });
       }
    },
    created() {
        this.flag = this.$loading({ target: ".el-main" });
        this.tenantId = this.$route.params.id;
        this.render();
    }
};
</script>
<style lang="scss" scoped>

.labelInTop{
  padding-left: 20px;
  padding-top: 20px;
  .w100{
      width: 100%;
      padding-right: 20px;
  }

}
</style>
