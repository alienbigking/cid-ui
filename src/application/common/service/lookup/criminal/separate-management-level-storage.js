const SEPARATE_MANAGEMENT_LEVEL = "separateManagementLevel";

export default {
  getSeparateManagementLevel() {
    const separateManagementLevel = JSON.parse(localStorage.getItem(SEPARATE_MANAGEMENT_LEVEL));
    const version = process.env.VERSION;
    if (separateManagementLevel && separateManagementLevel.version === version) {
      return separateManagementLevel.value;
    }
  },
  setSeparateManagementLevel(separateManagementLevel) {
    const version = process.env.VERSION;
    localStorage.setItem(SEPARATE_MANAGEMENT_LEVEL, JSON.stringify({ version, value: separateManagementLevel }));
  },
  removeSeparateManagementLevel() {
    localStorage.removeItem(SEPARATE_MANAGEMENT_LEVEL);
  }
};
