<template>
    <el-form :ref="name" v-if="flag" :inline="inline" :rules="rules" :model="formData" :label-width="labelWidth" :label-position="labelPosition" :class="formClass">
        <formItem @on-Change="handleChange" v-for="(item, key, index) in formItems" :key="index" :options="item" :attribute="key">
        </formItem>
        <div class="el-form-item el-form-item-div">
            <slot name="btnBefore"></slot>
            <el-button type="primary" @click="onSubmit(name)" :class="buttonClass">{{ btnText }}</el-button>
            <el-button v-if="showCancel" @click="onCancel(name)">{{ cancelText }}</el-button>
            <el-button v-if="showRest" @click="onRest(name)">重置</el-button>
        </div>
    </el-form>
</template>
<script>
import formItem from './formItem'
let limit = value => {
    let min = parseInt(value.split('-')[0]),
        max = parseInt(value.split('-')[1]),
        message
    if (min === max) {
        message = `请输入${ min }个字符`
    }
    else if (min && max) {
        message = `请输入${ min }到${ max }个字符`
    }
    else if (min && !max) {
        message = `请输入${ min }个以上字符`
    }
    else if (!min && max) {
        message = `请输入${ max }个以下字符`
    }
    return {
        min: min,
        max: max,
        message: message
    }
}
export default {
    props: {
        cancelText: {
            type: String,
            default: '取消'
        },
        formClass: String,
        labelPosition: {
            type: String,
            default: 'right'
        },
        showCancel: {
            type: Boolean,
            default: false
        },
        showRest: {
            type: Boolean,
            default: false
        },
        buttonClass: String,
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
                console.log(this.formData)
                var reg = /^[a-zA-Z0-9]+$/
                if (value && !reg.test(value)) {
                    callback(new Error('请输入字母/数字/下划线'))
                }
                else {
                    callback()
                }
            },
            validateCheckSame = (rule, value, callback) => {
                let field = rule.fullField.substring(rule.fullField.indexOf('check') + 5)
                if (value !== this.formData[field]) {
                    callback(new Error('两次*不一致!'))
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
                content: {
                    validator: validateContent,
                    message: ''
                },
                checkSame: {
                    validator: validateCheckSame,
                    message: '两次*不一致!'
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
            let arr = [], setting = {}, check
            rules.forEach((rule, index) => {
                if (rule.indexOf('-') > -1) arr.push(limit(rule))
                else {
                    check = prop.indexOf('check') > -1 ? prop.substring(prop.indexOf('check') + 5) : prop
                    setting = {
                        trigger: 'change blur',
                        message: this.message[rule].message.replace('*', this.formItems[check].label)
                    }
                    arr.push(Object.assign({}, this.message[rule], setting))
                }
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
        },
        onCancel(formName) {
            this.$refs[formName].clearValidate()
            this.$emit('on-cancel')
        },
        onRest(formName) {
            this.$refs[formName].resetFields()
        }
    },
    mounted() {
        this.render()
    }
}
</script>
<style lang="scss" scoped>
.el-form-item-div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
    /deep/ button{
        height: 36px;
        font-size: 12px;
        margin-left: 0;
        margin-right: 22px;
    }
}
</style>
