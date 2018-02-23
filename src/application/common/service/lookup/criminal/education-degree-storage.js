const EDUCATION_DEGREES = 'educationDegrees';

export default {
  getEducationDegrees() {
    const educationDegrees = JSON.parse(localStorage.getItem(EDUCATION_DEGREES));
    const version = process.env.VERSION;
    if (educationDegrees && educationDegrees.version === version) {
      return educationDegrees.value;
    }
  },
  setEducationDegrees(educationDegrees) {
    const version = process.env.VERSION;
    localStorage.setItem(EDUCATION_DEGREES, JSON.stringify({ version, value: educationDegrees }));
  },
  removeEducationDegrees() {
    localStorage.removeItem(EDUCATION_DEGREES);
  }
};
