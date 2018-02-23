function phoneNumber(rule, value, callback) {
  let regExp = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (regExp.test(value) === false) {
    callback(new Error('请输入正确的手机号码格式'));
  } else {
    callback();
  }
}

export { phoneNumber };
