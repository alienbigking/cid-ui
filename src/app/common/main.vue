<template>
    <div class="box">
        <el-container class="flex-column">
            <v-header></v-header>
            <el-container>
                <v-aside></v-aside>
                <el-container class="flex-column">
                    <v-breadcrumb></v-breadcrumb>
                    <el-main>
                        <transition name="router-fade" mode="out-in">
                            <router-view :api="api"></router-view>
                        </transition>
                    </el-main>
                    <v-footer></v-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import vHeader from './header'
import vFooter from './footer'
import vAside from './sidebar'
import vBreadcrumb from './breadcrumb'
import { apiList as api } from '../api/index'
export default {
    data() {
        return {
            // loginState: true
            api
        }
    },
    components: { vHeader, vFooter, vAside, vBreadcrumb }
}
</script>
<style lang="scss" scoped>
</style>
