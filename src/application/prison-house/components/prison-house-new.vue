<template>
  <div class="card">
    <div class="um-title">
      <p>新增监舍</p>
    </div>
    <el-form class="labelInTop">
      <el-form-item class="w50" label="监舍名称" >
        <el-input v-model="prisonHouse.name"></el-input>
      </el-form-item>
      <el-form-item class="w50" label="组织机构代码" >
        <el-input v-model="prisonHouse.code"></el-input>
      </el-form-item>
      <el-form-item class="w100 textarea" label="监舍描述">
        <el-input type="textarea" resize="none" v-model="prisonHouse.description"></el-input>
      </el-form-item>
      <el-form-item class="hasButton">
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
      prisonHouse: {
        code: "tnt00000008",
        name: "一监舍",
        description: "123456789"
      }
    };
  },
  methods: {
    ...mapActions(["addPrisonHouse"]),
    add() {
      console.log(this.prisonHouse);
      this.addPrisonHouse(this.prisonHouse).then(res => {
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
