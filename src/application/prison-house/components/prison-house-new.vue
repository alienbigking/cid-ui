<template>
  <div class="card">
    <div class="um-title">
      <p>新增监舍</p>
    </div>
    <el-form :model="prisonHouse" :rules="rules" ref="form" class="labelInTop">
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
          <el-button type="primary" @click="onSubmit">新增</el-button>
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
      prisonHouse: {},
      rules: {}
    };
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
    ...mapActions(["addPrisonHouse"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.addPrisonHouse()
            .then(res => {
              this.$message.success("新增成功");
              this.$router.push(`/prison-house/list`);
            })
            .catch(() => {
              this.$message.error("新增失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.labelInTop {
  padding-left: 20px;
  padding-top: 20px;
  .w100 {
    width: 100%;
    padding-right: 20px;
  }
}
</style>
