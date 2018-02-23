const SEPARATE_MANAGEMENT_LEVELS = 'separateManagementLevels';

export default {
  getSeparateManagementLevels() {
    const separateManagementLevels = JSON.parse(localStorage.getItem(SEPARATE_MANAGEMENT_LEVELS));
    const version = process.env.VERSION;
    if (separateManagementLevels && separateManagementLevels.version === version) {
      return separateManagementLevels.value;
    }
  },
  setSeparateManagementLevels(separateManagementLevels) {
    const version = process.env.VERSION;
    localStorage.setItem(SEPARATE_MANAGEMENT_LEVELS, JSON.stringify({ version, value: separateManagementLevels }));
  },
  removeSeparateManagementLevels() {
    localStorage.removeItem(SEPARATE_MANAGEMENT_LEVELS);
  }
};
