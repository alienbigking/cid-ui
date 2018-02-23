const GENDERS = 'genders';

export default {
  getGenders() {
    const genders = JSON.parse(localStorage.getItem(GENDERS));
    const version = process.env.VERSION;
    if (genders && genders.version === version) {
      return genders.value;
    }
  },
  setGenders(genders) {
    const version = process.env.VERSION;
    localStorage.setItem(GENDERS, JSON.stringify({ version, value: genders }));
  },
  removeGenders() {
    localStorage.removeItem(GENDERS);
  }
};
