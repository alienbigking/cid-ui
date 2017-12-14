<template>
    <div>
        <div class="card">
            <span class="um-title">{{ tenant.name }} - 明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>编号：</label><span>{{ tenant.code }}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>创建时间：</label><span>{{ tenant.createdTime }}</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>最后更新时间：</label><span>{{ tenant.lastUpdatedTime }}</span>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="card padding20">
            <div class="form-container">
                <label class="title">租户描述：</label>
                <div>{{ tenant.description }}</div>
            </div>
            <el-button @click="goBack">返回</el-button>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            tenant: {
                name: "",
                code: "",
                createdTime: "",
                lastUpdatedTime: "",
                description: ''
            },
            flag: '' // 是否加载完成
        };
    },
    methods: {
        ...mapActions(["getTenant"]),
        goBack() {
           this.$router.push(`/tenant/list`);
        },
        render() {
            let tenantId = this.$route.params.id;
            this.getTenant(tenantId).then(res => {
                this.tenant = this.$store.state.tenant.tenant;
                this.flag.close();
            });
        }
    },
    created() {
        this.flag = this.$loading({ target: ".el-main" });
        this.render();
    }
};
</script>
<style lang="scss" scoped>
.form-container{
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding: 20px 20px 20px 41px;
    font-size: 14px;
    label{
        font-weight: bold;
        color: #333;
        display: inline-block;
        width: 148px;
        box-sizing: border-box;
    }
    span{
        display: inline-block;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        padding-bottom: 19px;
        padding-top: 20px;
        width: calc(100% - 148px);
        color: #333;
    }
    .el-row .el-col-12:first-child{
        span{
            width: calc(100% - 198px);
        }
    }
    .title{
        display: block;
        margin-bottom: 10px;
        &+div{
            line-height: 24px;
        }
    }
}
.padding20{
    padding-bottom: 20px;
    padding-right: 20px;
    overflow: hidden;
    button{
        float: right;
    }
}
</style>
