import * as types from './mutation-types';

export default {
    // 罪犯
    [types.SET_CRIMINAL](state, criminal) {
        state.criminal = criminal;
    },
    [types.UPDATE_CRIMINAL](state, criminal) {
        Object.assign(state.criminal, criminal);
    },
    [types.SET_PAGED_CRIMINALS](state, pagedCriminals) {
        state.pagedCriminals = pagedCriminals;
    },
    // 罪犯查找数据
    [types.SET_ALL_GENDERS](state, allGenders) {
        state.allGenders = allGenders;
    },
    [types.SET_ALL_ETHNICITIES](state, allEthnicities) {
        state.allEthnicities = allEthnicities;
    },
    [types.SET_ALL_NATIONALITIES](state, allNationalities) {
        state.allNationalities = allNationalities;
    },
    [types.SET_ALL_HOUSEHOLD_REGISTER_TYPES](state, allHouseholdRegisterTypes) {
        state.allHouseholdRegisterTypes = allHouseholdRegisterTypes;
    },
    [types.SET_ALL_POLITICAL_STATUSES](state, allPoliticalStatuses) {
        state.allPoliticalStatuses = allPoliticalStatuses;
    },
    [types.SET_ALL_EDUCATION_DEGREES](state, allEducationDegrees) {
        state.allEducationDegrees = allEducationDegrees;
    },
    [types.SET_ALL_FLED_TYPES](state, allFledTypes) {
        state.allFledTypes = allFledTypes;
    },
    [types.SET_ALL_SEPARATE_MANAGEMENT_LEVELS](state, allSeparateManagementLevels) {
        state.allSeparateManagementLevels = allSeparateManagementLevels;
    },
    [types.SET_ALL_SEPARATE_CUSTODY_TYPES](state, allSeparateCustodyTypes) {
        state.allSeparateCustodyTypes = allSeparateCustodyTypes;
    },
    [types.SET_ALL_COMMUTATION_SCALES](state, allCommutationScales) {
        state.allCommutationScales = allCommutationScales;
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
    // 罪犯体貌特征查找数据
    [types.SET_ALL_SOMATOTYPES](state, allSomatotypes) {
        state.allSomatotypes = allSomatotypes;
    },
    [types.SET_ALL_FACE_TYPES](state, allFaceTypes) {
        state.allFaceTypes = allFaceTypes;
    },
    [types.SET_ALL_BLOOD_TYPES](state, allBloodTypes) {
        state.allBloodTypes = allBloodTypes;
    },
    [types.SET_ALL_ACCENTS](state, allAccents) {
        state.allAccents = allAccents;
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
