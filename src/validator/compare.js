function equalTo(rule, value, callback) {
    const compareTo = rule.model[rule.compareTo];
    if (compareTo && value !== compareTo) {
        callback(new Error(rule.message));
    } else {
        callback();
    }
}

export { equalTo };
