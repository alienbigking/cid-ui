import Vue from 'vue';
import app from './app';
import router from './router';
import store from './store/';
import ElementUI from 'element-ui';
import axios from 'axios';
import filters from './filter';
import errorHander from './plugin/error-handler';
import { default as oauthRequestInterceptor } from './utils/oauth-request-interceptor';
import { default as errorResponseInterceptor } from './utils/error-response-interceptor';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/style.scss';
import './assets/fonts/iconfont.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(filters);
Vue.use(errorHander);

oauthRequestInterceptor.config(axios);
errorResponseInterceptor.config(axios, store, router);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<app/>',
    components: { app }
});
