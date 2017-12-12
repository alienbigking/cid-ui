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
                                path: 'login',
                                query: { redirect: router.currentRoute.fullPath }
                            });
                            break;
                        case 400:
                            console.log(400);
                    }
                }
                return Promise.reject(error);
            });
    }
};
