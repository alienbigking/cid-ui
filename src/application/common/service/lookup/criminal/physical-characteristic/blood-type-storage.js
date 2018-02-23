const BLOOD_TYPES = 'bloodTypes';

export default {
  getBloodTypes() {
    const bloodTypes = JSON.parse(localStorage.getItem(BLOOD_TYPES));
    const version = process.env.VERSION;
    if (bloodTypes && bloodTypes.version === version) {
      return bloodTypes.value;
    }
  },
  setBloodTypes(bloodTypes) {
    const version = process.env.VERSION;
    localStorage.setItem(BLOOD_TYPES, JSON.stringify({ version, value: bloodTypes }));
  },
  removeBloodTypes() {
    localStorage.removeItem(BLOOD_TYPES);
  }
};
