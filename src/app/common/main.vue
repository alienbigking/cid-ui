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
                            <router-view></router-view>
                        </transition>
                    </el-main>
                    <v-footer></v-footer>
                </el-container>
            </el-container>
        </el-container>


        <!-- <v-header></v-header>
        <v-sidebar></v-sidebar>
        <v-breadcrumb></v-breadcrumb>
        <section class="container">
            <div class="content">
                <transition name="router-fade" mode="out-in">
                    <router-view>
                        <transition name="router-fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </router-view>
                </transition>
            </div>
        </section>
        <v-footer></v-footer> -->
    </div>
</template>
<script>
import vHeader from './header'
import vFooter from './footer'
import vAside from './sidebar'
import vBreadcrumb from './breadcrumb'
export default {
    data() {
        return {
            // loginState: true
        }
    },
    components: { vHeader, vFooter, vAside, vBreadcrumb }
}
</script>
<style lang="scss" scoped>
</style>
