<template>
  <div>
      <div class="card">
          <span class="um-title">修改监舍</span>
          <el-form class="formPadding" :model="prisonHouse" :rules="rules" ref="formName" label-position="top">
              <el-form-item label="监舍名称" class="w50">
                  <el-input v-model="prisonHouse.name"></el-input>
              </el-form-item>
              <el-form-item class="w100 textarea" label="监舍描述">
                  <el-input :maxlength="255" type="textarea" resize="none" v-model="prisonHouse.description"></el-input>
              </el-form-item>
              <el-form-item class="hasButton">
                  <el-button @click="goBack">返 回</el-button>
                  <el-button type="primary" @click="onSubmit(prisonHouse)">确 认</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      prisonHouse: _.cloneDeep(this.$store.state.prisonHouse.prisonHouse),
      rules: {}
    };
  },
  created() {
    this.prisonHouseId = this.$route.params.id;
    this.getPrisonHouse(this.$route.params.id).then(() => {
      this.prisonHouse = _.cloneDeep(this.$store.state.prisonHouse.prisonHouse);
    });
  },
  methods: {
    ...mapActions([ "updatePrisonHouse", "getPrisonHouse" ]),
    onSubmit(e) {
      this.$refs["formName"].validate((valid) => {
          if (valid) {
            let params = {
                id: this.prisonHouseId,
                // jailId: "13428048-e07b-11e7-b5c5-525400c79e4e",
                name: e.name,
                description: e.description

            };
            console.log(params);
            this.updatePrisonHouse(params).then(res => {
                this.$message.success('修改成功');
                this.$router.push(`/prison-house/list`);
            });
          }
      });
    },
    goBack() {
        this.$router.go(-1);
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
