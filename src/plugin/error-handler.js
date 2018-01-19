function showError(error, message) {
    const response = error.response;
    if (response && response.status === 400) {
        if (response.data && response.data.code) {
            this.$message.error(response.data.message);
        } else {
            this.$message.error(message);
        }
    }
}

export default {
    install: (Vue, Option) => {
        Vue.prototype.$showError = showError;
    }
};
