<template>
    <div>
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // loginState: true
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
