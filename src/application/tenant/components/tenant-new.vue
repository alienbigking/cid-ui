<template>
    <div class="card">
        <div class="um-title">
            <p>新增租户</p>
        </div>
        <el-form class="formPadding" :model="filter" :rules="rules" ref="formName" label-position="top">
            <el-form-item class="w50" label="租户名称" prop="name">
                <el-input v-model="filter.name"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="组织机构代码" prop="code">
                <el-input v-model="filter.code"></el-input>
            </el-form-item>
            <el-form-item class="w100 textarea" label="租户描述" prop="description">
                <el-input v-model="filter.description" type="textarea" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button type="primary" @click="handleAdd(filter)">新增</el-button>
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
            filter: {
                name: '',
                code: '',
                description: ''
            },
            rules: {}
        };
    },
    methods: {
        ...mapActions(["getAllTenant"]),
        handleAdd(e) {
            this.$refs["formName"].validate((valid) => {
                if (valid) {
                    let params = _.transform(e, (result, item, key) => {
                        if (item || item === 0) result[key] = item;
                    });
                    console.log(params);
                    this.getAllTenant();
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
