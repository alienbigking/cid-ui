<template>
    <div>
        this is test-view
    </div>
</template>
<script>
export default {
    data() {
        return {
            // loginState: true
        }
    },
    props: ['api'],
    mounted() {
        console.log(this.api)
    }
}
</script>
<style lang="scss" scoped>
</style>
