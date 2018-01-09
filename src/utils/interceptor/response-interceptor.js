export default {
    config(axios, store, router) {
        axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            store.dispatch('logout');
                            router.replace({
                                path: '/login',
                                query: { redirect: router.currentRoute.fullPath }
                            });
                            break;
                        case 403:
                            // TODO:跳转到403页面
                            router.push(`/not-found-resource`);
                            break;
                        case 404:
                            // TODO:跳转到404页面
                            router.push(`/not-found`);
                            return;
                        // break;
                        case 500:
                            // TODO:跳转到错误页面
                            router.push(`/server-error`);
                            break;
                    }
                }
                return Promise.reject(error);
            });
    }
};
