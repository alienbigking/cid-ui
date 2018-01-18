import Vue from 'vue';
import app from './app';
import router from './router';
import store from './store/';
import ElementUI from 'element-ui';
import axios from 'axios';
import filters from './plugin/filters';
import validators from './plugin/validators';
import errorHander from './plugin/error-handler';
import tokenStorage from './utils/token/token-storage';
import { default as requestInterceptor } from './utils/interceptor/request-interceptor';
import { default as responseInterceptor } from './utils/interceptor/response-interceptor';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/style.scss';
import './assets/fonts/iconfont.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(filters);
Vue.use(validators);
Vue.use(errorHander);

requestInterceptor.config(axios);
responseInterceptor.config(axios, store, router);

// TODO:重构
router.beforeEach((to, from, next) => {
    if (!to.meta.requireAuth) {
        next();
        return;
    }
    if (tokenStorage.getToken()) {
        next();
    } else {
        const login = { path: '/login', query: { redirect: to.fullPath } };
        next(login);
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<app/>',
    components: { app }
});
