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
    </div>
</template>
<script>
import vText from './components/text'
export default {
    data() {
        return {
            // loginState: true
        }
    },
    props: ['api'],
    components: { vText },
    methods: {
        render() {
            // console.log(123)
            this.api.testGet().then(res => {
                console.log(res)
            })
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
