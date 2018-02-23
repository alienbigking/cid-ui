const ACCENTS = 'accents';

export default {
  getAccents() {
    const accents = JSON.parse(localStorage.getItem(ACCENTS));
    const version = process.env.VERSION;
    if (accents && accents.version === version) {
      return accents.value;
    }
  },
  setAccents(accents) {
    const version = process.env.VERSION;
    localStorage.setItem(ACCENTS, JSON.stringify({ version, value: accents }));
  },
  removeAccents() {
    localStorage.removeItem(ACCENTS);
  }
};
