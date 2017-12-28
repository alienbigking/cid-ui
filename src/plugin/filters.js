import * as filters from '../filter';

export default {
    install: (Vue, Option) => {
        Vue.filter('enumText', filters.enumText);
    }
};
