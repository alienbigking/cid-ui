const HOUSEHOLD_REGISTER_TYPES = 'householdRegisterTypes';

export default {
  getHouseholdRegisterTypes() {
    const householdRegisterTypes = JSON.parse(localStorage.getItem(HOUSEHOLD_REGISTER_TYPES));
    const version = process.env.VERSION;
    if (householdRegisterTypes && householdRegisterTypes.version === version) {
      return householdRegisterTypes.value;
    }
  },
  setHouseholdRegisterTypes(householdRegisterTypes) {
    const version = process.env.VERSION;
    localStorage.setItem(HOUSEHOLD_REGISTER_TYPES, JSON.stringify({ version, value: householdRegisterTypes }));
  },
  removeHouseholdRegisterTypes() {
    localStorage.removeItem(HOUSEHOLD_REGISTER_TYPES);
  }
};
