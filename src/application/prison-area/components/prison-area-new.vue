<template>
  <div class="card">
    <div class="um-title">
      <p>新增监区</p>
    </div>
    <el-form class="labelInTop">
      <el-form-item class="w50" label="监区名称" >
        <el-input v-model="area.name"></el-input>
      </el-form-item>
      <el-form-item class="w50" label="上级监区">
        <el-select placeholder="十二监区" v-model="area.parentPrisonArea">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="w100 textarea" label="监区描述">
        <el-input type="textarea" resize="none" v-model="area.description"></el-input>
      </el-form-item>
      <el-form-item class="hasButton">
          <el-button>返回</el-button>
          <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            area: {
              jailId: "13428048-e07b-11e7-b5c5-525400c79e4e",
              name: "sdfsdfdfdsf",
              parentPrisonArea: "fdsfdsfds",
              description: "dfdsfds"
            }
        };
    },
    methods: {
    ...mapActions(["addPrisonArea"]),
    add() {
      console.log(this.area);
      this.addPrisonArea(this.area).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.labelInTop{
  padding-left: 20px;
  padding-top: 20px;
  .w100{
      width: 100%;
      padding-right: 20px;
  }

}

</style>
