function checkOtherField(rule, value, callback) {
    const otherValue = rule.model[rule.otherField];
    if (value && otherValue) {
        rule.refs[rule.form].validateField(rule.otherField);
    }
    callback();
}

export { checkOtherField };
