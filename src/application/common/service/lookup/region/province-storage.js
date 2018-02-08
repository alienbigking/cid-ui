const PROVINCES = "provinces";

export default {
  getProvinces(countryCode) {
    const provinces = JSON.parse(localStorage.getItem(`${PROVINCES}_${countryCode}`));
    const version = process.env.VERSION;
    if (provinces && provinces.version === version) {
      return provinces.value;
    }
  },
  setProvinces(countryCode, provinces) {
    const version = process.env.VERSION;
    localStorage.setItem(`${PROVINCES}_${countryCode}`, JSON.stringify({ version, value: provinces }));
  },
  removeProvinces(countryCode) {
    localStorage.removeItem(`${PROVINCES}_${countryCode}`);
  }
};
