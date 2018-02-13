const COUNTIES = "counties";

export default {
  getCounties(cityCode) {
    const counties = JSON.parse(localStorage.getItem(`${COUNTIES}_${cityCode}`));
    const version = process.env.VERSION;
    if (counties && counties.version === version) {
      return counties.value;
    }
  },
  setCounties(cityCode, counties) {
    const version = process.env.VERSION;
    localStorage.setItem(`${COUNTIES}_${cityCode}`, JSON.stringify({ version, value: counties }));
  },
  removeCounties(cityCode) {
    localStorage.removeItem(`${COUNTIES}_${cityCode}`);
  }
};
