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
import criminalEditBasicInformation from "./criminal-edit-basic-information";
import criminalEditRecord from "./criminal-edit-record";
import criminalEditResume from "./criminal-edit-resume";
import criminalEditPhysicalCharacteristic from "./criminal-edit-physical-characteristic";
import criminalEditSocialRelation from "./criminal-edit-social-relation";
// import { mapActions } from "vuex";
// import _ from "lodash";

export default {
    components: { criminalEditBasicInformation, criminalEditRecord, criminalEditResume, criminalEditPhysicalCharacteristic, criminalEditSocialRelation },
    data() {
      return {
        activeName: 'criminalEditBasicInformation',
        tabs: [
          { name: "基本信息", component: "criminalEditBasicInformation" },
          { name: "犯罪记录", component: "criminalEditRecord" },
          { name: "简历", component: "criminalEditResume" },
          { name: "体貌特征", component: "criminalEditPhysicalCharacteristic" },
          { name: "社会关系", component: "criminalEditSocialRelation" }
        ]
      };
    }
};
</script>
<style lang="scss" scoped>
</style>
