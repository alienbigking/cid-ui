const COMMUTATION_SCALE = "commutationScale";

export default {
  getCommutationScale() {
    const commutationScale = JSON.parse(localStorage.getItem(COMMUTATION_SCALE));
    const version = process.env.VERSION;
    if (commutationScale && commutationScale.version === version) {
      return commutationScale.value;
    }
  },
  setCommutationScale(commutationScale) {
    const version = process.env.VERSION;
    localStorage.setItem(COMMUTATION_SCALE, JSON.stringify({ version, value: commutationScale }));
  },
  removeCommutationScale() {
    localStorage.removeItem(COMMUTATION_SCALE);
  }
};
