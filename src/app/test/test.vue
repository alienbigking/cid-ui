<template>
    <div class="hahaha">
        <span style="color: red;">this is test-view</span>
        <v-text style="margin-top: 50px;"></v-text>
        <div style="margin-top: 50px;">调接口方法：
            <pre>
                this.api.接口名称({配置项}).then(res => {
                    if (!res) return // 请求失败时会返回false
                    // 请求成功的操作
                    // 或者在src/api/index文件中添加接口，post请求和get请求已写好示例，其他请求可以自行封装也可调用otherType，参数中加入配置即可
                })
            </pre>
        </div>
        <my-form :formItems="formModel" @on-submit="onSubmit"></my-form>
    </div>
</template>
<script>
import vText from './components/text'
import { removeEmpty } from '@/utils/helper'
export default {
    data() {
        return {
            value: '',
            formModel: {
                name: {
                    type: 'input',
                    label: '姓名',
                    rules: ['required', 'validateContent']
                },
                phone: {
                    type: 'password',
                    label: '联系方式',
                    other: {
                        class: 'eye-open',
                        func: this.isShow
                    }
                }
            },
            isShowPwd: false
        }
    },
    props: ['api'],
    components: { vText },
    methods: {
        isShow() {
            this.isShowPwd = !this.isShowPwd
            this.formModel.phone.type = this.isShowPwd ? 'input' : 'password'
            this.formModel.phone.other.class = this.isShowPwd ? 'eye-open' : 'eye-close'
        },
        handleChange(e) {
            console.log(e)
        },
        render() {
            // console.log(123)
            this.api.testGet({ id: 1 }).then(res => {
                console.log(res)
            })
        },
        onSubmit(e) {
            if (!e) return
            // 需要的信息都保存在e里面了
            console.log(e, Object.assign({}, removeEmpty(e)))
        }
    },
    mounted() {
        this.render()
    }
}
</script>
<style lang="scss" scoped>
.hahaha{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
