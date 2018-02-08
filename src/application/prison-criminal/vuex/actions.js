import * as types from './mutation-types';
import { default as prisonCriminalService } from '../service/prison-criminal-service';
import { default as prisonCriminalRecordService } from '../service/prison-criminal-record-service';
import { default as prisonCriminalResumeService } from '../service/prison-criminal-resume-service';
import { default as prisonCriminalPhysicalCharacteristicService } from '../service/prison-criminal-physical-characteristic-service';
import { default as prisonCriminalSocialRelationService } from '../service/prison-criminal-social-relation-service';
import { default as prisonCriminalForfeitService } from '../service/prison-criminal-forfeit-service';
import { default as prisonCriminalOutInPrisonService } from '../service/prison-criminal-out-in-prison-service';
import { default as prisonCriminalBiometricService } from '../service/prison-criminal-biometric-service';

export default {
    // 罪犯
    getCriminal({ commit, state }, id) {
        return prisonCriminalService.get(id).then(criminal => {
            commit(types.SET_CRIMINAL, criminal);
        });
    },
    getPagedCriminals({ commit, state }, params) {
        return prisonCriminalService.getPaged(params).then(pagedCriminals => {
            commit(types.SET_PAGED_CRIMINALS, pagedCriminals);
        });
    },
    addCriminal({ commit, state }) {
        return prisonCriminalService.add(state.criminal);
    },
    updateCriminal({ commit, state }) {
        return prisonCriminalService.update(state.criminal);
    },
    deleteCriminal({ commit }, id) {
        return prisonCriminalService.delete(id);
    },
    // 罪犯犯罪记录
    getCriminalRecord({ commit, state }, id) {
        return prisonCriminalRecordService.get(id).then(criminalRecord => {
            commit(types.SET_CRIMINAL_RECORD, criminalRecord);
        });
    },
    getAllCriminalRecords({ commit, state }, id) {
        return prisonCriminalRecordService.getAll(id).then(criminalRecords => {
            commit(types.SET_ALL_CRIMINAL_RECORDS, criminalRecords);
        });
    },
    getPagedCriminalRecords({ commit, state }, params) {
        return prisonCriminalRecordService.getPaged(params).then(pagedCriminalRecords => {
            commit(types.SET_PAGED_CRIMINAL_RECORDS, pagedCriminalRecords);
        });
    },
    addCriminalRecord({ commit, state }) {
        return prisonCriminalRecordService.add(state.criminalRecord);
    },
    updateCriminalRecord({ commit, state }) {
        return prisonCriminalRecordService.update(state.criminalRecord);
    },
    deleteCriminalRecord({ commit }, id) {
        return prisonCriminalRecordService.delete(id);
    },
    // 罪犯简历
    getCriminalResume({ commit, state }, id) {
        return prisonCriminalResumeService.get(id).then(criminalResume => {
            commit(types.SET_CRIMINAL_RESUME, criminalResume);
        });
    },
    getAllCriminalResumes({ commit, state }, id) {
        return prisonCriminalResumeService.getAll(id).then(criminalResumes => {
            commit(types.SET_ALL_CRIMINAL_RESUMES, criminalResumes);
        });
    },
    getPagedCriminalResumes({ commit, state }, params) {
        return prisonCriminalResumeService.getPaged(params).then(pagedCriminalResumes => {
            commit(types.SET_PAGED_CRIMINAL_RESUMES, pagedCriminalResumes);
        });
    },
    addCriminalResume({ commit, state }) {
        return prisonCriminalResumeService.add(state.criminalResume);
    },
    updateCriminalResume({ commit, state }) {
        return prisonCriminalResumeService.update(state.criminalResume);
    },
    deleteCriminalResume({ commit }, id) {
        return prisonCriminalResumeService.delete(id);
    },
    // 罪犯体貌特征
    getCriminalPhysicalCharacteristic({ commit, state }, id) {
        return prisonCriminalPhysicalCharacteristicService.get(id).then(criminalPhysicalCharacteristic => {
            commit(types.SET_CRIMINAL_PHYSICAL_CHARACTERISTIC, criminalPhysicalCharacteristic);
        });
    },
    addCriminalPhysicalCharacteristic({ commit, state }) {
        return prisonCriminalPhysicalCharacteristicService.add(state.criminalPhysicalCharacteristic);
    },
    updateCriminalPhysicalCharacteristic({ commit, state }) {
        return prisonCriminalPhysicalCharacteristicService.update(state.criminalPhysicalCharacteristic);
    },
    // 罪犯社会关系
    getCriminalSocialRelation({ commit, state }, id) {
        return prisonCriminalSocialRelationService.get(id).then(criminalSocialRelation => {
            commit(types.SET_CRIMINAL_SOCIAL_RELATION, criminalSocialRelation);
        });
    },
    getAllCriminalSocialRelations({ commit, state }, id) {
        return prisonCriminalSocialRelationService.getAll(id).then(criminalSocialRelations => {
            commit(types.SET_ALL_CRIMINAL_SOCIAL_RELATIONS, criminalSocialRelations);
        });
    },
    getPagedCriminalSocialRelations({ commit, state }, params) {
        return prisonCriminalSocialRelationService.getPaged(params).then(pagedCriminalSocialRelations => {
            commit(types.SET_PAGED_CRIMINAL_SOCIAL_RELATIONS, pagedCriminalSocialRelations);
        });
    },
    addCriminalSocialRelation({ commit, state }) {
        return prisonCriminalSocialRelationService.add(state.criminalSocialRelation);
    },
    updateCriminalSocialRelation({ commit, state }) {
        return prisonCriminalSocialRelationService.update(state.criminalSocialRelation);
    },
    deleteCriminalSocialRelation({ commit }, id) {
        return prisonCriminalSocialRelationService.delete(id);
    },
    // 罪犯罚金管理
    getCriminalForfeit({ commit, state }, id) {
        return prisonCriminalForfeitService.get(id).then(criminalForfeit => {
            commit(types.SET_CRIMINAL_FORFEIT, criminalForfeit);
        });
    },
    getAllCriminalForfeits({ commit, state }, id) {
        return prisonCriminalForfeitService.getAll(id).then(criminalForfeits => {
            commit(types.SET_ALL_CRIMINAL_FORFEITS, criminalForfeits);
        });
    },
    getPagedCriminalForfeits({ commit, state }, params) {
        return prisonCriminalForfeitService.getPaged(params).then(pagedCriminalForfeits => {
            commit(types.SET_PAGED_CRIMINAL_FORFEITS, pagedCriminalForfeits);
        });
    },
    addCriminalForfeit({ commit, state }) {
        return prisonCriminalForfeitService.add(state.criminalForfeit);
    },
    updateCriminalForfeit({ commit, state }) {
        return prisonCriminalForfeitService.update(state.criminalForfeit);
    },
    deleteCriminalForfeit({ commit }, id) {
        return prisonCriminalForfeitService.delete(id);
    },
    // 罪犯出入监管理
    getCriminalOutInPrison({ commit, state }, id) {
        return prisonCriminalOutInPrisonService.get(id).then(criminalOutInPrison => {
            commit(types.SET_CRIMINAL_OUTINPRISON, criminalOutInPrison);
        });
    },
    getAllCriminalOutInPrisons({ commit, state }, id) {
        return prisonCriminalOutInPrisonService.getAll(id).then(criminalOutInPrisons => {
            commit(types.SET_ALL_CRIMINAL_OUTINPRISONS, criminalOutInPrisons);
        });
    },
    getPagedCriminalOutInPrisons({ commit, state }, params) {
        return prisonCriminalOutInPrisonService.getPaged(params).then(pagedCriminalOutInPrisons => {
            commit(types.SET_PAGED_CRIMINAL_OUTINPRISONS, pagedCriminalOutInPrisons);
        });
    },
    addCriminalOutInPrison({ commit, state }) {
        return prisonCriminalOutInPrisonService.add(state.criminalOutInPrison);
    },
    updateCriminalOutInPrison({ commit, state }) {
        return prisonCriminalOutInPrisonService.update(state.criminalOutInPrison);
    },
    deleteCriminalOutInPrison({ commit }, id) {
        return prisonCriminalOutInPrisonService.delete(id);
    },
    // 面部采集
    getCriminalFaces({ commit, state }, id) {
        return prisonCriminalBiometricService.get(id).then(criminalFaces => {
            commit(types.SET_CRIMINAL_OUTINPRISON, criminalFaces);
        });
    },
    addCriminalFaces({ commit, state }) {
        return prisonCriminalBiometricService.add(state.criminalFace);
    },
    updateCriminalFaces({ commit, state }) {
        return prisonCriminalBiometricService.update(state.criminalFace);
    }
};
