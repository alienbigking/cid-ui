import * as types from './mutation-types';
import { default as criminalService } from '../service/criminal-service';
import { default as criminalLookupService } from '../service/criminal-lookup-service';
import { default as criminalRecordService } from '../service/criminal-record-service';
import { default as criminalResumeService } from '../service/criminal-resume-service';
import { default as criminalPhysicalCharacteristicService } from '../service/criminal-physical-characteristic-service';
import { default as criminalPhysicalCharacteristicLookupService } from '../service/criminal-physical-characteristic-lookup-service';
import { default as criminalSocialRelationService } from '../service/criminal-social-relation-service';

export default {
    // 罪犯
    getCriminal({ commit, state }, id) {
        return criminalService.get(id).then(criminal => {
            commit(types.SET_CRIMINAL, criminal);
        });
    },
    getPagedCriminals({ commit, state }, params) {
        return criminalService.getPaged(params).then(pagedCriminals => {
            commit(types.SET_PAGED_CRIMINALS, pagedCriminals);
        });
    },
    addCriminal({ commit, state }) {
        return criminalService.add(state.criminal);
    },
    updateCriminal({ commit, state }) {
        return criminalService.update(state.criminal);
    },
    deleteCriminal({ commit }, id) {
        return criminalService.delete(id);
    },
    // 罪犯查找数据
    getAllGenders({ commit, state }, params) {
        return criminalLookupService.getAllGenders(params).then(allGenders => {
            commit(types.SET_ALL_GENDERS, allGenders);
        });
    },
    getAllEthnicities({ commit, state }, params) {
        return criminalLookupService.getAllEthnicities(params).then(allEthnicities => {
            commit(types.SET_ALL_ETHNICITIES, allEthnicities);
        });
    },
    getAllNationalities({ commit, state }, params) {
        return criminalLookupService.getAllNationalities(params).then(allNationalities => {
            commit(types.SET_ALL_NATIONALITIES, allNationalities);
        });
    },
    getAllHouseholdRegisterTypes({ commit, state }, params) {
        return criminalLookupService.getAllHouseholdRegisterTypes(params).then(allHouseholdRegisterTypes => {
            commit(types.SET_ALL_HOUSEHOLD_REGISTER_TYPES, allHouseholdRegisterTypes);
        });
    },
    getAllPoliticalStatuses({ commit, state }, params) {
        return criminalLookupService.getAllPoliticalStatuses(params).then(allPoliticalStatuses => {
            commit(types.SET_ALL_POLITICAL_STATUSES, allPoliticalStatuses);
        });
    },
    getAllEducationDegrees({ commit, state }, params) {
        return criminalLookupService.getAllEducationDegrees(params).then(allEducationDegrees => {
            commit(types.SET_ALL_EDUCATION_DEGREES, allEducationDegrees);
        });
    },
    getAllFledTypes({ commit, state }, params) {
        return criminalLookupService.getAllFledTypes(params).then(allFledTypes => {
            commit(types.SET_ALL_FLED_TYPES, allFledTypes);
        });
    },
    getAllSeparateManagementLevels({ commit, state }, params) {
        return criminalLookupService.getAllSeparateManagementLevels(params).then(allSeparateManagementLevels => {
            commit(types.SET_ALL_SEPARATE_MANAGEMENT_LEVELS, allSeparateManagementLevels);
        });
    },
    getAllSeparateCustodyTypes({ commit, state }, params) {
        return criminalLookupService.getAllSeparateCustodyTypes(params).then(allSeparateCustodyTypes => {
            commit(types.SET_ALL_SEPARATE_CUSTODY_TYPES, allSeparateCustodyTypes);
        });
    },
    getAllCommutationScales({ commit, state }, params) {
        return criminalLookupService.getAllCommutationScales(params).then(allCommutationScales => {
            commit(types.SET_ALL_COMMUTATION_SCALES, allCommutationScales);
        });
    },
    // 罪犯犯罪记录
    getCriminalRecord({ commit, state }, id) {
        return criminalRecordService.get(id).then(criminalRecord => {
            commit(types.SET_CRIMINAL_RECORD, criminalRecord);
        });
    },
    getAllCriminalRecords({ commit, state }) {
        return criminalRecordService.getAll().then(criminalRecords => {
            commit(types.SET_ALL_CRIMINAL_RECORDS, criminalRecords);
        });
    },
    getPagedCriminalRecords({ commit, state }, params) {
        return criminalRecordService.getPaged(params).then(pagedCriminalRecords => {
            commit(types.SET_PAGED_CRIMINAL_RECORDS, pagedCriminalRecords);
        });
    },
    addCriminalRecord({ commit, state }) {
        return criminalRecordService.add(state.criminalRecord);
    },
    updateCriminalRecord({ commit, state }) {
        return criminalRecordService.update(state.criminalRecord);
    },
    deleteCriminalRecord({ commit }, id) {
        return criminalRecordService.delete(id);
    },
    // 罪犯简历
    getCriminalResume({ commit, state }, id) {
        return criminalResumeService.get(id).then(criminalResume => {
            commit(types.SET_CRIMINAL_RESUME, criminalResume);
        });
    },
    getAllCriminalResumes({ commit, state }) {
        return criminalResumeService.getAll().then(criminalResumes => {
            commit(types.SET_ALL_CRIMINAL_RESUMES, criminalResumes);
        });
    },
    getPagedCriminalResumes({ commit, state }, params) {
        return criminalResumeService.getPaged(params).then(pagedCriminalResumes => {
            commit(types.SET_PAGED_CRIMINAL_RESUMES, pagedCriminalResumes);
        });
    },
    addCriminalResume({ commit, state }) {
        return criminalResumeService.add(state.criminalResume);
    },
    updateCriminalResume({ commit, state }) {
        return criminalResumeService.update(state.criminalResume);
    },
    deleteCriminalResume({ commit }, id) {
        return criminalResumeService.delete(id);
    },
    // 罪犯体貌特征
    getCriminalPhysicalCharacteristic({ commit, state }, id) {
        return criminalPhysicalCharacteristicService.get(id).then(criminalPhysicalCharacteristic => {
            commit(types.SET_CRIMINAL_PHYSICAL_CHARACTERISTIC, criminalPhysicalCharacteristic);
        });
    },
    getAllCriminalPhysicalCharacteristics({ commit, state }) {
        return criminalPhysicalCharacteristicService.getAll().then(criminalPhysicalCharacteristics => {
            commit(types.SET_ALL_CRIMINAL_PHYSICAL_CHARACTERISTICS, criminalPhysicalCharacteristics);
        });
    },
    getPagedCriminalPhysicalCharacteristics({ commit, state }, params) {
        return criminalPhysicalCharacteristicService.getPaged(params).then(pagedCriminalPhysicalCharacteristics => {
            commit(types.SET_PAGED_CRIMINAL_PHYSICAL_CHARACTERISTICS, pagedCriminalPhysicalCharacteristics);
        });
    },
    addCriminalPhysicalCharacteristic({ commit, state }) {
        return criminalPhysicalCharacteristicService.add(state.criminalPhysicalCharacteristic);
    },
    updateCriminalPhysicalCharacteristic({ commit, state }) {
        return criminalPhysicalCharacteristicService.update(state.criminalPhysicalCharacteristic);
    },
    deleteCriminalPhysicalCharacteristic({ commit }, id) {
        return criminalPhysicalCharacteristicService.delete(id);
    },
    // 罪犯体貌特征查找数据
    getAllSomatotypes({ commit, state }, params) {
        return criminalPhysicalCharacteristicLookupService.getAllSomatotypes(params).then(allSomatotypes => {
            commit(types.SET_ALL_SOMATOTYPES, allSomatotypes);
        });
    },
    getAllFaceTypes({ commit, state }, params) {
        return criminalPhysicalCharacteristicLookupService.getAllFaceTypes(params).then(allFaceTypes => {
            commit(types.SET_ALL_FACE_TYPES, allFaceTypes);
        });
    },
    getAllBloodTypes({ commit, state }, params) {
        return criminalPhysicalCharacteristicLookupService.getAllBloodTypes(params).then(allBloodTypes => {
            commit(types.SET_ALL_BLOOD_TYPES, allBloodTypes);
        });
    },
    getAllAccents({ commit, state }, params) {
        return criminalPhysicalCharacteristicLookupService.getAllAccents(params).then(allAccents => {
            commit(types.SET_ALL_ACCENTS, allAccents);
        });
    },
    // 罪犯社会关系
    getCriminalSocialRelation({ commit, state }, id) {
        return criminalSocialRelationService.get(id).then(criminalSocialRelation => {
            commit(types.SET_CRIMINAL_SOCIAL_RELATION, criminalSocialRelation);
        });
    },
    getAllCriminalSocialRelations({ commit, state }) {
        return criminalSocialRelationService.getAll().then(criminalSocialRelations => {
            commit(types.SET_ALL_CRIMINAL_SOCIAL_RELATIONS, criminalSocialRelations);
        });
    },
    getPagedCriminalSocialRelations({ commit, state }, params) {
        return criminalSocialRelationService.getPaged(params).then(pagedCriminalSocialRelations => {
            commit(types.SET_PAGED_CRIMINAL_SOCIAL_RELATIONS, pagedCriminalSocialRelations);
        });
    },
    addCriminalSocialRelation({ commit, state }) {
        return criminalSocialRelationService.add(state.criminalSocialRelation);
    },
    updateCriminalSocialRelation({ commit, state }) {
        return criminalSocialRelationService.update(state.criminalSocialRelation);
    },
    deleteCriminalSocialRelation({ commit }, id) {
        return criminalSocialRelationService.delete(id);
    }
};
