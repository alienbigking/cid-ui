const POLITICAL_STATUSES = "politicalStatuses";

export default {
  getPoliticalStatuses() {
    const politicalStatuses = JSON.parse(localStorage.getItem(POLITICAL_STATUSES));
    const version = process.env.VERSION;
    if (politicalStatuses && politicalStatuses.version === version) {
      return politicalStatuses.value;
    }
  },
  setPoliticalStatuses(politicalStatuses) {
    const version = process.env.VERSION;
    localStorage.setItem(POLITICAL_STATUSES, JSON.stringify({ version, value: politicalStatuses }));
  },
  removePoliticalStatuses() {
    localStorage.removeItem(POLITICAL_STATUSES);
  }
};
