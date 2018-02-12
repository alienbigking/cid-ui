import * as types from './mutation-types';
import { default as criminalService } from '../service/prison-bureau-criminal-service';
import { default as criminalRecordService } from '../service/prison-bureau-criminal-record-service';
import { default as criminalResumeService } from '../service/prison-bureau-criminal-resume-service';
import { default as criminalPhysicalCharacteristicService } from '../service/prison-bureau-criminal-physical-characteristic-service';
import { default as prisonBureaucriminalSocialRelationService } from '../service/prison-bureau-criminal-social-relation-service';
import { default as prisonBureaucriminalForfeitService } from '../service/prison-bureau-criminal-forfeit-service';
import { default as prisonBureauCriminalOutInPrisonService } from '../service/prison-bureau-criminal-out-in-prison-service';

export default {
  // 罪犯
  getPrisonBureauCriminal({ commit, state }, id) {
    return criminalService.get(id).then(criminal => {
      commit(types.SET_PRISON_BUREAU_CRIMINAL, criminal);
    });
  },
  getPagedPrisonBureauCriminals({ commit, state }, params) {
    return criminalService.getPaged(params).then(pagedCriminals => {
      commit(types.SET_PAGED_PRISON_BUREAU_CRIMINALS, pagedCriminals);
    });
  },
  // 罪犯犯罪记录
  getPrisonBureauCriminalRecord({ commit, state }, id) {
    return criminalRecordService.get(id).then(criminalRecord => {
      commit(types.SET_PRISON_BUREAU_CRIMINAL_RECORD, criminalRecord);
    });
  },
  getAllPrisonBureauCriminalRecords({ commit, state }, id) {
    return criminalRecordService.getAll(id).then(criminalRecords => {
      commit(types.SET_ALL_PRISON_BUREAU_CRIMINAL_RECORDS, criminalRecords);
    });
  },
  // 罪犯简历
  getPrisonBureauCriminalResume({ commit, state }, id) {
    return criminalResumeService.get(id).then(criminalResume => {
      commit(types.SET_PRISON_BUREAU_CRIMINAL_RESUME, criminalResume);
    });
  },
  getAllPrisonBureauCriminalResumes({ commit, state }, id) {
    return criminalResumeService.getAll(id).then(criminalResumes => {
      commit(types.SET_ALL_PRISON_BUREAU_CRIMINAL_RESUMES, criminalResumes);
    });
  },
  // 罪犯体貌特征
  getPrisonBureauCriminalPhysicalCharacteristic({ commit, state }, id) {
    return criminalPhysicalCharacteristicService.get(id).then(criminalPhysicalCharacteristic => {
      commit(types.SET_PRISON_BUREAU_CRIMINAL_PHYSICAL_CHARACTERISTIC, criminalPhysicalCharacteristic);
    });
  },
  // 罪犯社会关系
  getPrisonBureauCriminalSocialRelation({ commit, state }, id) {
    return prisonBureaucriminalSocialRelationService.get(id).then(criminalSocialRelation => {
      commit(types.SET_PRISON_BUREAU_CRIMINAL_SOCIAL_RELATION, criminalSocialRelation);
    });
  },
  getAllPrisonBureauCriminalSocialRelations({ commit, state }, id) {
    return prisonBureaucriminalSocialRelationService.getAll(id).then(criminalSocialRelations => {
      commit(types.SET_ALL_PRISON_BUREAU_CRIMINAL_SOCIAL_RELATIONS, criminalSocialRelations);
    });
  },
  // 罪犯罚金管理
  getPrisonBureauCriminalForfeit({ commit, state }, id) {
    return prisonBureaucriminalForfeitService.get(id).then(criminalForfeit => {
      commit(types.SET_PRISON_BUREAU_CRIMINAL_FORFEIT, criminalForfeit);
    });
  },
  getAllPrisonBureauCriminalForfeits({ commit, state }, id) {
    return prisonBureaucriminalForfeitService.getAll(id).then(criminalForfeits => {
      commit(types.SET_ALL_PRISON_BUREAU_CRIMINAL_FORFEITS, criminalForfeits);
    });
  },
  // 罪犯出入监管理
  getPrisonBureauCriminalOutInPrison({ commit, state }, id) {
    return prisonBureauCriminalOutInPrisonService.get(id).then(criminalOutInPrison => {
      commit(types.SET_PRISON_BUREAU_CRIMINAL_OUTINPRISON, criminalOutInPrison);
    });
  },
  getAllPrisonBureauCriminalOutInPrisons({ commit, state }, id) {
    return prisonBureauCriminalOutInPrisonService.getAll(id).then(criminalOutInPrisons => {
      commit(types.SET_ALL_PRISON_BUREAU_CRIMINAL_OUTINPRISONS, criminalOutInPrisons);
    });
  }
};
