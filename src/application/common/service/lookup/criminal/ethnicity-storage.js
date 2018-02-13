const ETHNICITIES = "ethnicities";

export default {
  getEthnicities() {
    const ethnicities = JSON.parse(localStorage.getItem(ETHNICITIES));
    const version = process.env.VERSION;
    if (ethnicities && ethnicities.version === version) {
      return ethnicities.value;
    }
  },
  setEthnicities(ethnicities) {
    const version = process.env.VERSION;
    localStorage.setItem(ETHNICITIES, JSON.stringify({ version, value: ethnicities }));
  },
  removeEthnicities() {
    localStorage.removeItem(ETHNICITIES);
  }
};
