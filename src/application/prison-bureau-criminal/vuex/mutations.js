import * as types from './mutation-types';

export default {
    // 罪犯
    [types.SET_PRISON_BUREAU_CRIMINAL](state, criminal) {
        state.criminal = criminal;
    },
    [types.SET_PAGED_PRISON_BUREAU_CRIMINALS](state, pagedCriminals) {
        state.pagedCriminals = pagedCriminals;
    },
    // 罪犯犯罪记录
    [types.SET_PRISON_BUREAU_CRIMINAL_RECORD](state, criminalRecord) {
        state.criminalRecord = criminalRecord;
    },
    [types.SET_ALL_PRISON_BUREAU_CRIMINAL_RECORDS](state, allCriminalRecords) {
        state.allCriminalRecords = allCriminalRecords;
    },
    // 罪犯简历
    [types.SET_PRISON_BUREAU_CRIMINAL_RESUME](state, criminalResume) {
        state.criminalResume = criminalResume;
    },
    [types.SET_ALL_PRISON_BUREAU_CRIMINAL_RESUMES](state, allCriminalResumes) {
        state.allCriminalResumes = allCriminalResumes;
    },
    // 罪犯体貌特征
    [types.SET_PRISON_BUREAU_CRIMINAL_PHYSICAL_CHARACTERISTIC](state, criminalPhysicalCharacteristic) {
        state.criminalPhysicalCharacteristic = criminalPhysicalCharacteristic;
    },
    [types.SET_ALL_PRISON_BUREAU_CRIMINAL_PHYSICAL_CHARACTERISTICS](state, allCriminalPhysicalCharacteristics) {
        state.allCriminalPhysicalCharacteristics = allCriminalPhysicalCharacteristics;
    },
    // 罪犯社会关系
    [types.SET_PRISON_BUREAU_CRIMINAL_SOCIAL_RELATION](state, criminalSocialRelation) {
        state.criminalSocialRelation = criminalSocialRelation;
    },
    [types.SET_ALL_PRISON_BUREAU_CRIMINAL_SOCIAL_RELATIONS](state, allCriminalSocialRelations) {
        state.allCriminalSocialRelations = allCriminalSocialRelations;
    },
    // 罪犯罚金管理
    [types.SET_PRISON_BUREAU_CRIMINAL_FORFEIT](state, criminalForfeit) {
        state.criminalForfeit = criminalForfeit;
    },
    [types.SET_ALL_PRISON_BUREAU_CRIMINAL_FORFEITS](state, allCriminalForfeits) {
        state.allCriminalForfeits = allCriminalForfeits;
    },
    // 罪犯出入监管理
    [types.SET_PRISON_BUREAU_CRIMINAL_OUTINPRISON](state, criminalOutInPrison) {
        state.criminalOutInPrison = criminalOutInPrison;
    },
    [types.SET_ALL_PRISON_BUREAU_CRIMINAL_OUTINPRISONS](state, allCriminalOutInPrisons) {
        state.allCriminalOutInPrisons = allCriminalOutInPrisons;
    }
};
