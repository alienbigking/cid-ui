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
import criminal from "./components/criminal";
import criminalRecord from "./components/criminal-record";
import criminalResume from "./components/criminal-resume";
import criminalPhysicalCharacteristic from "./components/criminal-physical-characteristic";
import criminalSocialRelation from "./components/criminal-social-relation";
// import { mapActions } from "vuex";
// import _ from "lodash";

export default {
  data() {
    return {
      activeName: 'criminalPhysicalCharacteristic',
      tabs: [
        { name: "基本信息", component: "criminal" },
        { name: "犯罪记录", component: "criminalRecord" },
        { name: "简历", component: "criminalResume" },
        { name: "体貌特征", component: "criminalPhysicalCharacteristic" },
        { name: "社会关系", component: "criminalSocialRelation" }
      ]
    };
  },
  components: { criminal, criminalRecord, criminalResume, criminalPhysicalCharacteristic, criminalSocialRelation }
};
</script>
<style lang="scss" scoped>
</style>
