const COMMUTATION_SCALES = "commutationScales";

export default {
  getCommutationScales() {
    const commutationScales = JSON.parse(localStorage.getItem(COMMUTATION_SCALES));
    const version = process.env.VERSION;
    if (commutationScales && commutationScales.version === version) {
      return commutationScales.value;
    }
  },
  setCommutationScales(commutationScales) {
    const version = process.env.VERSION;
    localStorage.setItem(COMMUTATION_SCALES, JSON.stringify({ version, value: commutationScales }));
  },
  removeCommutationScales() {
    localStorage.removeItem(COMMUTATION_SCALES);
  }
};
