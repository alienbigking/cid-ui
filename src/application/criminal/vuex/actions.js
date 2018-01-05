import * as types from './mutation-types';
import { default as criminalService } from '../service/criminal-service';
import { default as criminalRecordService } from '../service/criminal-record-service';
import { default as criminalResumeService } from '../service/criminal-resume-service';
import { default as criminalPhysicalCharacteristicService } from '../service/criminal-physical-characteristic-service';
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
    // 罪犯犯罪记录
    getCriminalRecord({ commit, state }, id) {
        return criminalRecordService.get(id).then(criminalRecord => {
            commit(types.SET_CRIMINAL_RECORD, criminalRecord);
        });
    },
    getAllCriminalRecords({ commit, state }, id) {
        return criminalRecordService.getAll(id).then(criminalRecords => {
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
    getAllCriminalResumes({ commit, state }, id) {
        return criminalResumeService.getAll(id).then(criminalResumes => {
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
    addCriminalPhysicalCharacteristic({ commit, state }) {
        return criminalPhysicalCharacteristicService.add(state.criminalPhysicalCharacteristic);
    },
    updateCriminalPhysicalCharacteristic({ commit, state }) {
        return criminalPhysicalCharacteristicService.update(state.criminalPhysicalCharacteristic);
    },
    // 罪犯社会关系
    getCriminalSocialRelation({ commit, state }, id) {
        return criminalSocialRelationService.get(id).then(criminalSocialRelation => {
            commit(types.SET_CRIMINAL_SOCIAL_RELATION, criminalSocialRelation);
        });
    },
    getAllCriminalSocialRelations({ commit, state }, id) {
        return criminalSocialRelationService.getAll(id).then(criminalSocialRelations => {
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
