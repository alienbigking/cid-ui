function decimal1i2f(rule, value, callback) {
    let regExp = /^\d{1}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error('请输入正确的数值，最多保留1位整数2位小数'));
    } else {
        callback();
    }
};

function decimal2i2f(rule, value, callback) {
    let regExp = /^\d{2}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error('请输入正确的数值，最多保留1位整数2位小数'));
    } else {
        callback();
    }
};

function decimal3i2f(rule, value, callback) {
    let regExp = /^\d{3}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error('请输入正确的数值，最多保留1位整数2位小数'));
    } else {
        callback();
    }
};

export {
    decimal1i2f,
    decimal2i2f,
    decimal3i2f
};
