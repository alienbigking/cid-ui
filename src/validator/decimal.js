function decimal1i2f(rule, value, callback) {
    let regExp = /^\d{1}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error("最多保留1位整数2位小数"));
    } else {
        callback();
    }
}

function decimal2i2f(rule, value, callback) {
    let regExp = /^\d{1,2}(\.\d{1,2})?$/;
    if (value !== undefined && value !== "") {
        if (regExp.test(value) === false) {
            callback(new Error("最多保留2位整数2位小数"));
        } else {
            callback();
        }
    }
}

function decimal3i2f(rule, value, callback) {
    let regExp = /^\d{1,3}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error("最多保留3位整数2位小数"));
    } else {
        callback();
    }
}

function decimal8i2f(rule, value, callback) {
    let regExp = /^\d{1,8}(\.\d{1,2})?$/;
    if (regExp.test(value) === false) {
        callback(new Error("最多保留8位整数2位小数"));
    } else {
        callback();
    }
}

function dataRange1t10d(rule, value, callback) {
    let regExp = /^((10)|[1-9])$/;
    if (regExp.test(value) === false) {
        callback(new Error("填写范围为1到10"));
    } else {
        callback();
    }
}

function IDCardRange15a18d(rule, value, callback) {
    let regExp = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if (regExp.test(value) === false) {
        callback(new Error("请输入正确的格式"));
    } else {
        callback();
    }
}

export { decimal1i2f, decimal2i2f, decimal3i2f, decimal8i2f, dataRange1t10d, IDCardRange15a18d };
