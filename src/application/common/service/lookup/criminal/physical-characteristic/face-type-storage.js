const FACE_TYPES = "faceTypes";

export default {
  getFaceTypes() {
    const faceTypes = JSON.parse(localStorage.getItem(FACE_TYPES));
    const version = process.env.VERSION;
    if (faceTypes && faceTypes.version === version) {
      return faceTypes.value;
    }
  },
  setFaceTypes(faceTypes) {
    const version = process.env.VERSION;
    localStorage.setItem(FACE_TYPES, JSON.stringify({ version, value: faceTypes }));
  },
  removeFaceTypes() {
    localStorage.removeItem(FACE_TYPES);
  }
};
