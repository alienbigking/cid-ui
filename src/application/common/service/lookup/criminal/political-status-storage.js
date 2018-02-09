const POLITICAL_STATUS = "politicalStatus";

export default {
  getPoliticalStatus() {
    const politicalStatus = JSON.parse(localStorage.getItem(POLITICAL_STATUS));
    const version = process.env.VERSION;
    if (politicalStatus && politicalStatus.version === version) {
      return politicalStatus.value;
    }
  },
  setPoliticalStatus(politicalStatus) {
    const version = process.env.VERSION;
    localStorage.setItem(POLITICAL_STATUS, JSON.stringify({ version, value: politicalStatus }));
  },
  removePoliticalStatus() {
    localStorage.removeItem(POLITICAL_STATUS);
  }
};
