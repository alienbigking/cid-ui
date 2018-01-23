function equalTo(rule, value, callback, source, options) {
    if (value !== rule.compareTo[rule.attr]) {
        callback(new Error(rule.message));
    } else {
        callback();
    }
};
export {
    equalTo
};
