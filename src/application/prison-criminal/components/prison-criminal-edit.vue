<template>
  <div class="detail-card">
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="(tab, index) in tabs"
        :key="index"
        :label="tab.name"
        :name="tab.component">
        <keep-alive>
          <component
            v-if='activeName == tab.component'
            :is="activeName"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PrisonCriminalEditBasicInformation from "./prison-criminal-edit-basic-information";
import PrisonCriminalEditRecord from "./prison-criminal-edit-record";
import PrisonCriminalEditResume from "./prison-criminal-edit-resume";
import PrisonCriminalEditPhysicalCharacteristic from "./prison-criminal-edit-physical-characteristic";
import PrisonCriminalEditSocialRelation from "./prison-criminal-edit-social-relation";
import PrisonCriminalEditForfeit from "./prison-criminal-edit-forfeit";
import PrisonCriminalOutInPrison from "./prison-criminal-edit-out-in-prison";
import PrisonCriminalBiometric from "./prison-criminal-edit-biometric";

export default {
    components: { PrisonCriminalEditBasicInformation, PrisonCriminalEditRecord, PrisonCriminalEditResume, PrisonCriminalEditPhysicalCharacteristic, PrisonCriminalEditSocialRelation, PrisonCriminalEditForfeit, PrisonCriminalOutInPrison, PrisonCriminalBiometric },
    data() {
      return {
        activeName: 'PrisonCriminalBiometric',
        tabs: [
          { name: "基本信息", component: "PrisonCriminalEditBasicInformation" },
          { name: "生物识别", component: "PrisonCriminalBiometric" },
          { name: "体貌特征", component: "PrisonCriminalEditPhysicalCharacteristic" },
          { name: "犯罪记录", component: "PrisonCriminalEditRecord" },
          { name: "简历", component: "PrisonCriminalEditResume" },
          { name: "社会关系", component: "PrisonCriminalEditSocialRelation" },
          { name: "罚金", component: "PrisonCriminalEditForfeit" },
          { name: "出入监记录", component: "PrisonCriminalOutInPrison" }
        ]
      };
    }
};
</script>
<style lang="scss" scoped>

</style>
