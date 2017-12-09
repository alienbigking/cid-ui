import Vue from 'vue';
import app from './app';
import router from './router';
import store from './store/';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/style.scss';

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<app/>',
    components: { app }
});
