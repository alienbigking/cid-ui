function handleError(response, text) {
    if (response && response.status === 400) {
        if (response.data && response.data.code) {
            this.$message.error(response.data.message);
            return;
        }
    }
    this.$message.error(text);
};

export default {
    install: (Vue, Option) => {
        Vue.prototype.$handleError = handleError;
    }
};
