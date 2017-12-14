<template>
  <div class="card">
    <div class="um-title">
      <p>修改监舍</p>
    </div>
    <el-form class="labelInTop">
      <el-form-item class="w50" label="监舍名称" >
        <el-input v-model="prisonHouse.name"></el-input>
      </el-form-item>
      <el-form-item class="w100 textarea" label="监舍描述">
        <el-input type="textarea" resize="none" v-model="prisonHouse.description"></el-input>
      </el-form-item>
      <el-form-item class="hasButton">
          <el-button>返回</el-button>
          <el-button type="primary">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      prisonHouse: _.cloneDeep(this.$store.state.prisonHouse.prisonHouse)
    };
  },
  created() {
    this.getPrisonHouse().then(() => {
      this.prisonHouse = _.cloneDeep(this.$store.state.prisonHouse.prisonHouse);
    });
  },
  watch: {
    prisonHouse: {
      handler: _.debounce(function(prisonHouse) {
        this.$store.commit("updatePrisonHouse", prisonHouse);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions([ "updatePrisonHouse", "getPrisonHouse" ])
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
