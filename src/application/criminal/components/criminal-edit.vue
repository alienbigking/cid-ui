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
import criminalEditInformation from "./criminal-edit-information";
import criminalEditRecord from "./criminal-edit-record";
import criminalEditResume from "./criminal-edit-resume";
import criminalEditPhysicalCharacteristic from "./criminal-edit-physical-characteristic";
import criminalEditSocialRelation from "./criminal-edit-social-relation";
// import { mapActions } from "vuex";
// import _ from "lodash";

export default {
  data() {
    return {
      activeName: 'criminalEditPhysicalCharacteristic',
      tabs: [
        { name: "基本信息", component: "criminalEditInformation" },
        { name: "犯罪记录", component: "criminalEditRecord" },
        { name: "简历", component: "criminalEditResume" },
        { name: "体貌特征", component: "criminalEditPhysicalCharacteristic" },
        { name: "社会关系", component: "criminalEditSocialRelation" }
      ]
    };
  },
  components: { criminalEditInformation, criminalEditRecord, criminalEditResume, criminalEditPhysicalCharacteristic, criminalEditSocialRelation }
};
</script>
<style lang="scss" scoped>
</style>
