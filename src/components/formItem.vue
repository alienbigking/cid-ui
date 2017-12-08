<template>
    <span class="commonForm">
        <el-form-item
            :class="((options.prepend || options.prefix) ? 'noLable' : '') + (options.class ? options.class : '')"
            :prop="attribute"
            :required="options.rules && options.rules.indexOf('required') > -1"
            :label="(options.prepend || options.prefix) ? '' : options.label">
            <template v-if="options.type === 'input' || options.type === 'password'">
                <el-input
                    :placeholder="'请输入'+options.label"
                    :type="options.type"
                    :disabled="options.disabled"
                    v-model="options.value"
                    @change="handleChange(attribute, $event)" auto-complete="off">
                        <i slot="prefix" v-if="options.prefix" :class="options.prefix"></i>
                        <i slot="prepend" v-if="options.prepend" :class="options.prepend"></i>
                        <i slot="suffix" v-if="options.suffix" :class="options.suffix.class" @click="options.suffix.func"></i>
                        <i slot="append" v-if="options.append" :class="options.append.class" @click="options.append.func"></i>
                </el-input>
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
        // width: 100%;
        // min-width: 360px;
        /deep/ .el-form-item__label{
            color: #333;
        }
        &.is-error /deep/ .el-input__inner{
            border-color: #d8dce5;
        }
        /deep/ .el-input__inner{
            padding: 0 10px;
            height: 36px;
        }
        /deep/ .el-input__prefix, .el-input__suffix{
            left: 0;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .el-input--prefix .el-input__inner{
            padding-left: 30px;
        }
        /deep/ .el-input.is-disabled .el-input__inner{
            color: #999;
            background: #F2F2F2;
        }
    }
}
</style>
