<template>
    <div class="card">
        <div class="um-title">
            <p>新增租户</p>
        </div>
        <el-form class="formPadding" :model="tenant" :rules="rules" ref="formName" label-position="top">
            <el-form-item class="w50" label="租户名称" prop="name">
                <el-input v-model="tenant.name"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="组织机构代码" prop="code">
                <el-input v-model="tenant.code"></el-input>
            </el-form-item>
            <el-form-item class="w100 textarea" label="租户描述" prop="description">
                <el-input :maxlength="255" v-model="tenant.description" type="textarea" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button type="primary" :loading="adding" @click="handleAdd(tenant)">新增</el-button>
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
            tenant: {
                name: '',
                code: '',
                description: ''
            },
            rules: {},
            adding: false
        };
    },
    methods: {
        ...mapActions(["addPrisonTenant"]),
        handleAdd(e) {
            this.$refs["formName"].validate((valid) => {
                if (valid) {
                    this.adding = true;
                    let params = _.transform(e, (result, item, key) => {
                        if (item || item === 0) result[key] = item;
                    });
                    this.addPrisonTenant(params).then(res => {
                        this.adding = false;
                        this.$router.push("/tenant/list");
                    });
                    // this.getAllTenant(params).then(res => {
                    //     console.log(res);
                    //     // if (!res) return false;
                    //     // this.tableData = res;
                    // });
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
