const FLED_TYPES = 'fledTypes';

export default {
  getFledTypes() {
    const fledTypes = JSON.parse(localStorage.getItem(FLED_TYPES));
    const version = process.env.VERSION;
    if (fledTypes && fledTypes.version === version) {
      return fledTypes.value;
    }
  },
  setFledTypes(fledTypes) {
    const version = process.env.VERSION;
    localStorage.setItem(FLED_TYPES, JSON.stringify({ version, value: fledTypes }));
  },
  removeFledTypes() {
    localStorage.removeItem(FLED_TYPES);
  }
};
