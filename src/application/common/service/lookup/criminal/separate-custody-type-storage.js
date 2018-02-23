const SEPARATE_CUSTODY_TPYES = 'separateCustodyTypes';

export default {
  getSeparateCustodyTypes() {
    const separateCustodyTypes = JSON.parse(localStorage.getItem(SEPARATE_CUSTODY_TPYES));
    const version = process.env.VERSION;
    if (separateCustodyTypes && separateCustodyTypes.version === version) {
      return separateCustodyTypes.value;
    }
  },
  setSeparateCustodyTypes(separateCustodyTypes) {
    const version = process.env.VERSION;
    localStorage.setItem(SEPARATE_CUSTODY_TPYES, JSON.stringify({ version, value: separateCustodyTypes }));
  },
  removeSeparateCustodyTypes() {
    localStorage.removeItem(SEPARATE_CUSTODY_TPYES);
  }
};
