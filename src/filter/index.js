import enumText from './enum-text-filter';

export default {
    install: (Vue, Option) => {
        Vue.filter('enumText', enumText);
    }
};
