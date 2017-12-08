<template>
    <span class="commonForm">
        <el-form-item :class="options.class" :label="options.label" :prop="attribute" :required="options.rules && options.rules.indexOf('required') > -1">
            <template v-if="options.type === 'input' || options.type === 'password'">
                <el-input :type="options.type" v-model="options.value" @change="handleChange(attribute, $event)" auto-complete="off"></el-input>
                <span v-if="options.other" :class="options.other.class" @click="options.other.func"></span>
            </template>
            <!-- <template v-if="options.type === 'password'">
                <el-input type="password" v-model="options.value" @change="handleChange(attribute, $event)"></el-input>
            </template> -->
        </el-form-item>
    </span>
</template>
<script>
export default {
    props: {
        options: {
            type: Object,
            default: () => {
                return {
                    type: 'input'
                }
            }
        },
        attribute: String
    },
    methods: {
        handleChange(attribute, e) {
            // console.log(e)
            this.$emit('on-Change', attribute, e)
        }
    },
    mounted() {
        // console.log()
    }
}
</script>
<style lang="scss" scoped>
.commonForm{
    /deep/ .el-form-item{
        width: 480px;
        &.is-error /deep/ .el-input__inner{
            border-color: #d8dce5;
        }
        /deep/ .el-input__inner{
            padding: 0 10px;
            height: 36px;
        }
        /deep/ .el-form-item__content{
            width: calc(100% - 120px);
        }
    }
}
</style>
