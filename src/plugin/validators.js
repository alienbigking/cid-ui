import * as validators from '../validator';

export default {
    install: (Vue, Option) => {
        Vue.prototype.$validators = {
            decimal1i2f: validators.decimal1i2f,
            decimal2i2f: validators.decimal2i2f,
            decimal3i2f: validators.decimal3i2f
        };
    }
};
