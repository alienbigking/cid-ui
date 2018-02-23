const SOMATO_TYPES = 'somatoTypes';

export default {
  getSomatoTypes() {
    const somatoTypes = JSON.parse(localStorage.getItem(SOMATO_TYPES));
    const version = process.env.VERSION;
    if (somatoTypes && somatoTypes.version === version) {
      return somatoTypes.value;
    }
  },
  setSomatoTypes(somatoTypes) {
    const version = process.env.VERSION;
    localStorage.setItem(SOMATO_TYPES, JSON.stringify({ version, value: somatoTypes }));
  },
  removeSomatoTypes() {
    localStorage.removeItem(SOMATO_TYPES);
  }
};
