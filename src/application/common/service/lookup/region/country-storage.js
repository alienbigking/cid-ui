const ALL_COUNTRIES = "allCountries";

export default {
  getAllCountries() {
    const allCountries = JSON.parse(localStorage.getItem(ALL_COUNTRIES));
    const version = process.env.VERSION;
    if (allCountries && allCountries.version === version) {
      return allCountries.value;
    }
  },
  setAllCountries(allCountries) {
    const version = process.env.VERSION;
    localStorage.setItem(ALL_COUNTRIES, JSON.stringify({ version, value: allCountries }));
  },
  removeAllCountries() {
    localStorage.removeItem(ALL_COUNTRIES);
  }
};
