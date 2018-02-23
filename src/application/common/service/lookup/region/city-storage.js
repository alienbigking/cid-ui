const CITIES = 'cities';

export default {
  getCities(provinceCode) {
    const cities = JSON.parse(localStorage.getItem(`${CITIES}_${provinceCode}`));
    const version = process.env.VERSION;
    if (cities && cities.version === version) {
      return cities.value;
    }
  },
  setCities(provinceCode, cities) {
    const version = process.env.VERSION;
    localStorage.setItem(`${CITIES}_${provinceCode}`, JSON.stringify({ version, value: cities }));
  },
  removeCities(provinceCode) {
    localStorage.removeItem(`${CITIES}_${provinceCode}`);
  }
};
