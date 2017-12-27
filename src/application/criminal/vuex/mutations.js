import * as types from './mutation-types';

export default {
    // 罪犯
    [types.SET_CRIMINAL](state, criminal) {
        state.criminal = criminal;
    },
    [types.UPDATE_CRIMINAL](state, criminal) {
      console.log(criminal);
        Object.assign(state.criminal, criminal);
    },
    [types.SET_PAGED_CRIMINALS](state, pagedCriminals) {
        state.pagedCriminals = pagedCriminals;
    },
    // 罪犯犯罪记录
    [types.SET_CRIMINAL_RECORD](state, criminalRecord) {
        state.criminalRecord = criminalRecord;
    },
    [types.UPDATE_CRIMINAL_RECORD](state, criminalRecord) {
        Object.assign(state.criminalRecord, criminalRecord);
    },
    [types.SET_ALL_CRIMINAL_RECORDS](state, allCriminalRecords) {
        state.allCriminalRecords = allCriminalRecords;
    },
    [types.SET_PAGED_CRIMINAL_RECORDS](state, pagedCriminalRecords) {
        state.pagedCriminalRecords = pagedCriminalRecords;
    },
    // 罪犯简历
    [types.SET_CRIMINAL_RESUME](state, criminalResume) {
        state.criminalResume = criminalResume;
    },
    [types.UPDATE_CRIMINAL_RESUME](state, criminalResume) {
        Object.assign(state.criminalResume, criminalResume);
    },
    [types.SET_ALL_CRIMINAL_RESUMES](state, allCriminalResumes) {
        state.allCriminalResumes = allCriminalResumes;
    },
    [types.SET_PAGED_CRIMINAL_RESUMES](state, pagedCriminalResumes) {
        state.pagedCriminalResumes = pagedCriminalResumes;
    },
    // 罪犯体貌特征
    [types.SET_CRIMINAL_PHYSICAL_CHARACTERISTIC](state, criminalPhysicalCharacteristic) {
        state.criminalPhysicalCharacteristic = criminalPhysicalCharacteristic;
    },
    [types.UPDATE_CRIMINAL_PHYSICAL_CHARACTERISTIC](state, criminalPhysicalCharacteristic) {
        Object.assign(state.criminalPhysicalCharacteristic, criminalPhysicalCharacteristic);
    },
    [types.SET_ALL_CRIMINAL_PHYSICAL_CHARACTERISTICS](state, allCriminalPhysicalCharacteristics) {
        state.allCriminalPhysicalCharacteristics = allCriminalPhysicalCharacteristics;
    },
    [types.SET_PAGED_CRIMINAL_PHYSICAL_CHARACTERISTICS](state, pagedCriminalPhysicalCharacteristics) {
        state.pagedCriminalPhysicalCharacteristics = pagedCriminalPhysicalCharacteristics;
    },
    // 罪犯社会关系
    [types.SET_CRIMINAL_SOCIAL_RELATION](state, criminalSocialRelation) {
        state.criminalSocialRelation = criminalSocialRelation;
    },
    [types.UPDATE_CRIMINAL_SOCIAL_RELATION](state, criminalSocialRelation) {
        Object.assign(state.criminalSocialRelation, criminalSocialRelation);
    },
    [types.SET_ALL_CRIMINAL_SOCIAL_RELATIONS](state, allCriminalSocialRelations) {
        state.allCriminalSocialRelations = allCriminalSocialRelations;
    },
    [types.SET_PAGED_CRIMINAL_SOCIAL_RELATIONS](state, pagedCriminalSocialRelations) {
        state.pagedCriminalSocialRelations = pagedCriminalSocialRelations;
    }
};
