function decimal1i2f(rule, value, callback) {
    let regExp = /^\d{1}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error('最多保留1位整数2位小数'));
    } else {
        callback();
    }
};

function decimal2i2f(rule, value, callback) {
    let regExp = /^\d{1,2}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error('最多保留2位整数2位小数'));
    } else {
        callback();
    }
};

function decimal3i2f(rule, value, callback) {
    let regExp = /^\d{1,3}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error('最多保留3位整数2位小数'));
    } else {
        callback();
    }
};

export {
    decimal1i2f,
    decimal2i2f,
    decimal3i2f
};
