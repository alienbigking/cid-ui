export default {
    config(axios, store, router) {
        console.log(...arguments);
        axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                console.log(error);
                if (error.response) {
                    console.log(error.response.status);
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
                            router.push({
                                path: "/not-found-resource"
                              });
                            break;
                        case 404:
                            // TODO:跳转到404页面
                            router.push({
                                path: "/not-found"
                              });
                            break;
                        case 500:
                            // TODO:跳转到错误页面
                            router.push({
                                path: "/server-error"
                              });
                            break;
                    }
                }
                return Promise.reject(error);
            });
    }
};
