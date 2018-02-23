const OUT_IN_PRISON_REASONS = 'outInPrisonReasons';

export default {
  getOutInPrisonReasons() {
    const outInPrisonReasons = JSON.parse(localStorage.getItem(OUT_IN_PRISON_REASONS));
    const version = process.env.VERSION;
    if (outInPrisonReasons && outInPrisonReasons.version === version) {
      return outInPrisonReasons.value;
    }
  },
  setOutInPrisonReasons(outInPrisonReasons) {
    const version = process.env.VERSION;
    localStorage.setItem(OUT_IN_PRISON_REASONS, JSON.stringify({ version, value: outInPrisonReasons }));
  },
  removeOutInPrisonReasons() {
    localStorage.removeItem(OUT_IN_PRISON_REASONS);
  }
};
