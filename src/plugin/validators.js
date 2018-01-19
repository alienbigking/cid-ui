import * as validators from '../validator';

export default {
    install: (Vue, Option) => {
        Vue.prototype.$validators = {
            decimal1i2f: validators.decimal1i2f,
            decimal2i2f: validators.decimal2i2f,
            decimal3i2f: validators.decimal3i2f,
            decimal8i2f: validators.decimal8i2f,
            dataRange1t10d: validators.dataRange1t10d,
            equalTo: validators.equalTo
        };
    }
};
