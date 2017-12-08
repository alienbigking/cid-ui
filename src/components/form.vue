<template>
    <el-form :ref="name" v-if="flag" :inline="inline" :rules="rules" :model="formData" :label-width="labelWidth">
        <formItem @on-Change="handleChange" v-for="(item, key, index) in formItems" :key="index" :options="item" :attribute="key">
        </formItem>
        <el-form-item style="display: block;" :label-width="labelWidth">
            <span slot="label"></span>
            <el-button type="primary" @click="onSubmit(name)">{{ btnText }}</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import formItem from './formItem'
export default {
    props: {
        formItems: Object,
        name: {
            type: String,
            default: 'myForm'
        },
        labelWidth: {
            type: String,
            default: '120px'
        },
        inline: {
            type: Boolean,
            default: true
        },
        btnText: {
            type: String,
            default: '提交'
        }
    },
    data() {
        var validateContent = (rule, value, callback) => {
            var reg = /^[a-zA-Z0-9]+$/
            if (value && !reg.test(value)) {
                callback(new Error('请输入字母/数字/下划线'))
            }
            else {
                callback()
            }
        }
        return {
            flag: false,
            formData: {},
            rules: {},
            message: {
                required: {
                    required: true,
                    message: '请输入*'
                },
                validateContent: {
                    validator: validateContent,
                    message: ''
                }
            }
        }
    },
    components: { formItem },
    methods: {
        handleChange(attribute, e) {
            this.formData[attribute] = e
        },
        render() {
            let rule = {}
            Object.keys(this.formItems).forEach(key => {
                this.formData[key] = this.formItems[key].value
                if (!this.formItems[key].rules) return
                rule[key] = this.addRules(key, this.formItems[key].rules, this.formItems[key])
            })
            this.rules = Object.assign({}, rule)
            this.flag = true
        },
        addRules(prop, rules, item) {
            let arr = [], setting = {}
            rules.forEach((rule, index) => {
                setting = {
                    trigger: 'change blur',
                    message: this.message[rule].message.replace('*', item.label)
                }
                arr.push(Object.assign({}, this.message[rule], setting))
            })
            return arr
        },
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    this.$emit('on-submit', false)
                }
                else {
                    this.$emit('on-submit', this.formData)
                }
            })
        }
    },
    mounted() {
        this.render()
    }
}
</script>
<style lang="scss" scoped>
</style>
