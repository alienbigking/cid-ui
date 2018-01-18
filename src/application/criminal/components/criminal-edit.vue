<template>
    <div class="card">
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="(tab, index) in tabs" :key="index" :label="tab.name" :name="tab.component">
          <keep-alive>
              <component v-if='activeName == tab.component' :is="activeName"></component>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>
<script>
import CriminalEditBasicInformation from "./criminal-edit-basic-information";
import CriminalEditRecord from "./criminal-edit-record";
import CriminalEditResume from "./criminal-edit-resume";
import CriminalEditPhysicalCharacteristic from "./criminal-edit-physical-characteristic";
import CriminalEditSocialRelation from "./criminal-edit-social-relation";
import CriminalEditForfeit from "./criminal-edit-forfeit";
import CriminalOutInPrison from "./criminal-edit-outinprison";

export default {
    components: { CriminalEditBasicInformation, CriminalEditRecord, CriminalEditResume, CriminalEditPhysicalCharacteristic, CriminalEditSocialRelation, CriminalEditForfeit, CriminalOutInPrison },
    data() {
      return {
        activeName: 'CriminalEditBasicInformation',
        tabs: [
          { name: "基本信息", component: "CriminalEditBasicInformation" },
          { name: "犯罪记录", component: "CriminalEditRecord" },
          { name: "简历", component: "CriminalEditResume" },
          { name: "体貌特征", component: "CriminalEditPhysicalCharacteristic" },
          { name: "社会关系", component: "CriminalEditSocialRelation" },
          { name: "罚金", component: "CriminalEditForfeit" },
          { name: "出入监记录", component: "CriminalOutInPrison" }
        ]
      };
    }
};
</script>
<style lang="scss" scoped>
</style>
