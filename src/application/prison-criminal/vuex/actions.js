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
  getPrisonCriminal({ commit, state }, id) {
    return prisonCriminalService.get(id).then(criminal => {
      commit(types.SET_PRISON_CRIMINAL, criminal);
    });
  },
  getPagedPrisonCriminals({ commit, state }, params) {
    return prisonCriminalService.getPaged(params).then(pagedCriminals => {
      commit(types.SET_PAGED_PRISON_CRIMINALS, pagedCriminals);
    });
  },
  addPrisonCriminal({ commit, state }) {
    return prisonCriminalService.add(state.criminal);
  },
  updatePrisonCriminal({ commit, state }) {
    return prisonCriminalService.update(state.criminal);
  },
  deletePrisonCriminal({ commit }, id) {
    return prisonCriminalService.delete(id);
  },
  // 罪犯犯罪记录
  getPrisonCriminalRecord({ commit, state }, id) {
    return prisonCriminalRecordService.get(id).then(criminalRecord => {
      commit(types.SET_PRISON_CRIMINAL_RECORD, criminalRecord);
    });
  },
  getAllPrisonCriminalRecords({ commit, state }, id) {
    return prisonCriminalRecordService.getAll(id).then(criminalRecords => {
      commit(types.SET_ALL_PRISON_CRIMINAL_RECORDS, criminalRecords);
    });
  },
  getPagedPrisonCriminalRecords({ commit, state }, params) {
    return prisonCriminalRecordService.getPaged(params).then(pagedCriminalRecords => {
      commit(types.SET_PAGED_PRISON_CRIMINAL_RECORDS, pagedCriminalRecords);
    });
  },
  addPrisonCriminalRecord({ commit, state }) {
    return prisonCriminalRecordService.add(state.criminalRecord);
  },
  updatePrisonCriminalRecord({ commit, state }) {
    return prisonCriminalRecordService.update(state.criminalRecord);
  },
  deletePrisonCriminalRecord({ commit }, id) {
    return prisonCriminalRecordService.delete(id);
  },
  // 罪犯简历
  getPrisonCriminalResume({ commit, state }, id) {
    return prisonCriminalResumeService.get(id).then(criminalResume => {
      commit(types.SET_PRISON_CRIMINAL_RESUME, criminalResume);
    });
  },
  getAllPrisonCriminalResumes({ commit, state }, id) {
    return prisonCriminalResumeService.getAll(id).then(criminalResumes => {
      commit(types.SET_ALL_PRISON_CRIMINAL_RESUMES, criminalResumes);
    });
  },
  getPagedPrisonCriminalResumes({ commit, state }, params) {
    return prisonCriminalResumeService.getPaged(params).then(pagedCriminalResumes => {
      commit(types.SET_PAGED_PRISON_CRIMINAL_RESUMES, pagedCriminalResumes);
    });
  },
  addPrisonCriminalResume({ commit, state }) {
    return prisonCriminalResumeService.add(state.criminalResume);
  },
  updatePrisonCriminalResume({ commit, state }) {
    return prisonCriminalResumeService.update(state.criminalResume);
  },
  deletePrisonCriminalResume({ commit }, id) {
    return prisonCriminalResumeService.delete(id);
  },
  // 罪犯体貌特征
  getPrisonCriminalPhysicalCharacteristic({ commit, state }, id) {
    return prisonCriminalPhysicalCharacteristicService.get(id).then(criminalPhysicalCharacteristic => {
      commit(types.SET_PRISON_CRIMINAL_PHYSICAL_CHARACTERISTIC, criminalPhysicalCharacteristic);
    });
  },
  addPrisonCriminalPhysicalCharacteristic({ commit, state }) {
    return prisonCriminalPhysicalCharacteristicService.add(state.criminalPhysicalCharacteristic);
  },
  updatePrisonCriminalPhysicalCharacteristic({ commit, state }) {
    return prisonCriminalPhysicalCharacteristicService.update(state.criminalPhysicalCharacteristic);
  },
  // 罪犯社会关系
  getPrisonCriminalSocialRelation({ commit, state }, id) {
    return prisonCriminalSocialRelationService.get(id).then(criminalSocialRelation => {
      commit(types.SET_PRISON_CRIMINAL_SOCIAL_RELATION, criminalSocialRelation);
    });
  },
  getAllPrisonCriminalSocialRelations({ commit, state }, id) {
    return prisonCriminalSocialRelationService.getAll(id).then(criminalSocialRelations => {
      commit(types.SET_ALL_PRISON_CRIMINAL_SOCIAL_RELATIONS, criminalSocialRelations);
    });
  },
  getPagedPrisonCriminalSocialRelations({ commit, state }, params) {
    return prisonCriminalSocialRelationService.getPaged(params).then(pagedCriminalSocialRelations => {
      commit(types.SET_PAGED_PRISON_CRIMINAL_SOCIAL_RELATIONS, pagedCriminalSocialRelations);
    });
  },
  addPrisonCriminalSocialRelation({ commit, state }) {
    return prisonCriminalSocialRelationService.add(state.criminalSocialRelation);
  },
  updatePrisonCriminalSocialRelation({ commit, state }) {
    return prisonCriminalSocialRelationService.update(state.criminalSocialRelation);
  },
  deletePrisonCriminalSocialRelation({ commit }, id) {
    return prisonCriminalSocialRelationService.delete(id);
  },
  // 罪犯罚金管理
  getPrisonCriminalForfeit({ commit, state }, id) {
    return prisonCriminalForfeitService.get(id).then(criminalForfeit => {
      commit(types.SET_PRISON_CRIMINAL_FORFEIT, criminalForfeit);
    });
  },
  getAllPrisonCriminalForfeits({ commit, state }, id) {
    return prisonCriminalForfeitService.getAll(id).then(criminalForfeits => {
      commit(types.SET_ALL_PRISON_CRIMINAL_FORFEITS, criminalForfeits);
    });
  },
  getPagedPrisonCriminalForfeits({ commit, state }, params) {
    return prisonCriminalForfeitService.getPaged(params).then(pagedCriminalForfeits => {
      commit(types.SET_PAGED_PRISON_CRIMINAL_FORFEITS, pagedCriminalForfeits);
    });
  },
  addPrisonCriminalForfeit({ commit, state }) {
    return prisonCriminalForfeitService.add(state.criminalForfeit);
  },
  updatePrisonCriminalForfeit({ commit, state }) {
    return prisonCriminalForfeitService.update(state.criminalForfeit);
  },
  deletePrisonCriminalForfeit({ commit }, id) {
    return prisonCriminalForfeitService.delete(id);
  },
  // 罪犯出入监管理
  getPrisonCriminalOutInPrison({ commit, state }, id) {
    return prisonCriminalOutInPrisonService.get(id).then(criminalOutInPrison => {
      commit(types.SET_PRISON_CRIMINAL_OUTINPRISON, criminalOutInPrison);
    });
  },
  getAllPrisonCriminalOutInPrisons({ commit, state }, id) {
    return prisonCriminalOutInPrisonService.getAll(id).then(criminalOutInPrisons => {
      commit(types.SET_ALL_PRISON_CRIMINAL_OUTINPRISONS, criminalOutInPrisons);
    });
  },
  getPagedPrisonCriminalOutInPrisons({ commit, state }, params) {
    return prisonCriminalOutInPrisonService.getPaged(params).then(pagedCriminalOutInPrisons => {
      commit(types.SET_PAGED_PRISON_CRIMINAL_OUTINPRISONS, pagedCriminalOutInPrisons);
    });
  },
  addPrisonCriminalOutInPrison({ commit, state }) {
    return prisonCriminalOutInPrisonService.add(state.criminalOutInPrison);
  },
  updatePrisonCriminalOutInPrison({ commit, state }) {
    return prisonCriminalOutInPrisonService.update(state.criminalOutInPrison);
  },
  deletePrisonCriminalOutInPrison({ commit }, id) {
    return prisonCriminalOutInPrisonService.delete(id);
  },
  // 面部采集
  getCriminalFace({ commit, state }, id) {
    return prisonCriminalBiometricService.get(id).then(criminalFaces => {
      commit(types.SET_CRIMINAL_FACE, criminalFaces);
    });
  },
  addCriminalFace({ commit, state }) {
    return prisonCriminalBiometricService.add(state.criminalFace);
  },
  updateCriminalFace({ commit, state }) {
    return prisonCriminalBiometricService.update(state.criminalFace);
  },
  // 虹膜采集
  getCriminalIris({ commit, state }, id) {
    return prisonCriminalBiometricService.getIrises(id).then(criminalIris => {
      commit(types.SET_CRIMINAL_IRIS, criminalIris);
    });
  },
  addCriminalIris({ commit, state }) {
    return prisonCriminalBiometricService.addIrises(state.criminalIris);
  },
  updateCriminalIris({ commit, state }) {
    return prisonCriminalBiometricService.updateIrises(state.criminalIris);
  },
  // 指纹采集
  getCriminalFingerPrint({ commit, state }, id) {
    return prisonCriminalBiometricService.getFingerPrint(id).then(criminalFingerPrint => {
      commit(types.SET_CRIMINAL_FINGERPRINT, criminalFingerPrint);
    });
  },
  addCriminalFingerPrint({ commit, state }) {
    return prisonCriminalBiometricService.addFingerPrint(state.criminalFingerPrint);
  },
  updateCriminalFingerPrint({ commit, state }) {
    return prisonCriminalBiometricService.updateFingerPrint(state.criminalFingerPrint);
  }
};
