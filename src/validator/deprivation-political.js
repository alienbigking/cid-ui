function deprivationPolitical(rule, value, callback) {
  let regExp = /^((10)|[1-9])$/;
  if (regExp.test(value) === false) {
    callback(new Error("填写范围为1到10"));
  } else {
    callback();
  }
}

export { deprivationPolitical };
