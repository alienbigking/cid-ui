import * as types from './mutation-types';
import _ from "lodash";

export default {
    // 罪犯
    [types.SET_CRIMINAL](state, criminal) {
        state.criminal = criminal;
    },
    [types.UPDATE_CRIMINAL](state, criminal) {
        state.criminal = _.cloneDeep(criminal);
    },
    [types.SET_PAGED_CRIMINALS](state, pagedCriminals) {
        state.pagedCriminals = pagedCriminals;
    },
    // 罪犯犯罪记录
    [types.SET_CRIMINAL_RECORD](state, criminalRecord) {
        state.criminalRecord = criminalRecord;
    },
    [types.UPDATE_CRIMINAL_RECORD](state, criminalRecord) {
        state.criminalRecord = _.cloneDeep(criminalRecord);
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
        state.criminalResume = _.cloneDeep(criminalResume);
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
        state.criminalPhysicalCharacteristic = _.cloneDeep(criminalPhysicalCharacteristic);
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
        state.criminalSocialRelation = _.cloneDeep(criminalSocialRelation);
    },
    [types.SET_ALL_CRIMINAL_SOCIAL_RELATIONS](state, allCriminalSocialRelations) {
        state.allCriminalSocialRelations = allCriminalSocialRelations;
    },
    [types.SET_PAGED_CRIMINAL_SOCIAL_RELATIONS](state, pagedCriminalSocialRelations) {
        state.pagedCriminalSocialRelations = pagedCriminalSocialRelations;
    },
    // 罪犯罚金管理
    [types.SET_CRIMINAL_FORFEIT](state, criminalForfeit) {
        state.criminalForfeit = criminalForfeit;
    },
    [types.UPDATE_CRIMINAL_FORFEIT](state, criminalForfeit) {
        state.criminalForfeit = _.cloneDeep(criminalForfeit);
    },
    [types.SET_ALL_CRIMINAL_FORFEITS](state, allCriminalForfeits) {
        state.allCriminalForfeits = allCriminalForfeits;
    },
    [types.SET_PAGED_CRIMINAL_FORFEITS](state, pagedCriminalForfeits) {
        state.pagedCriminalForfeits = pagedCriminalForfeits;
    },
    // 罪犯出入监管理
    [types.SET_CRIMINAL_OUTINPRISON](state, criminalOutInPrison) {
        state.criminalOutInPrison = criminalOutInPrison;
    },
    [types.UPDATE_CRIMINAL_OUTINPRISON](state, criminalOutInPrison) {
        state.criminalOutInPrison = _.cloneDeep(criminalOutInPrison);
    },
    [types.SET_ALL_CRIMINAL_OUTINPRISONS](state, allCriminalOutInPrisons) {
        state.allCriminalOutInPrisons = allCriminalOutInPrisons;
    },
    [types.SET_PAGED_CRIMINAL_OUTINPRISONS](state, pagedCriminalOutInPrisons) {
        state.pagedCriminalOutInPrisons = pagedCriminalOutInPrisons;
    }
};
