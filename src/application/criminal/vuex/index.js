import actions from './actions';
import mutations from './mutations';

const state = {
    // 罪犯
    allCriminals: [],
    pagedCriminals: { content: [] },
    criminal: {},
    // 罪犯查找数据
    allGenders: [],
    allEthnicities: [],
    allNationalities: [],
    allHouseholdRegisterTypes: [],
    allPoliticalStatuses: [],
    allEducationDegrees: [],
    allFledTypes: [],
    allSeparateManagementLevels: [],
    allSeparateCustodyTypes: [],
    allCommutationScales: [],
    // 罪犯犯罪记录
    allCriminalRecords: [],
    pagedCriminalRecords: { content: [] },
    criminalRecord: {},
    // 罪犯简历
    allCriminalResumes: [],
    pagedCriminalResumes: { content: [] },
    criminalResume: {},
    // 罪犯体貌特征
    allCriminalPhysicalCharacteristics: [],
    pagedCriminalPhysicalCharacteristics: { content: [] },
    criminalPhysicalCharacteristic: { otherFeatures: [] },
    // 罪犯体貌特征查找数据
    allSomatotypes: [],
    allFaceTypes: [],
    allBloodTypes: [],
    allAccents: [],
    // 罪犯社会关系
    allCriminalSocialRelations: [],
    pagedCriminalSocialRelations: { content: [] },
    criminalSocialRelation: {},
    // 罪犯罚金
    allCriminalForfeits: [],
    pagedCriminalForfeits: { content: [] },
    criminalForfeit: {},
    // 罪犯出入监
    allCriminalOutInPrisons: [],
    pagedCriminalOutInPrisons: { content: [] },
    criminalOutInPrison: {}
};

export default {
    state,
    actions,
    mutations
};
