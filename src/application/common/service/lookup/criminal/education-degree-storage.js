const EDUCATION_DEGREE = "educationDegree";

export default {
  getEducationDegree() {
    const educationDegree = JSON.parse(localStorage.getItem(EDUCATION_DEGREE));
    const version = process.env.VERSION;
    if (educationDegree && educationDegree.version === version) {
      return educationDegree.value;
    }
  },
  setEducationDegree(educationDegree) {
    const version = process.env.VERSION;
    localStorage.setItem(EDUCATION_DEGREE, JSON.stringify({ version, value: educationDegree }));
  },
  removeEducationDegree() {
    localStorage.removeItem(EDUCATION_DEGREE);
  }
};
