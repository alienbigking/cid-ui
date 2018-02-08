function iDCardRange18w(rule, value, callback) {
  let regExp = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (regExp.test(value) === false) {
    callback(new Error("请输入正确的格式"));
  } else {
    callback();
  }
}

export { iDCardRange18w };
