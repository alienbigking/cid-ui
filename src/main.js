import Vue from 'vue';
import app from './app';
import router from './router';
import store from './store/';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueMoment from 'vue-moment';
import filters from './plugin/filters';
import validators from './plugin/validators';
import errorHander from './plugin/error-handler';
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
Vue.use(VueMoment);

requestInterceptor.config(axios);
responseInterceptor.config(axios, store, router);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<app/>',
    components: { app }
});
