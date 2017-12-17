<template>
    <div class="card">
        <div class="um-title">
            <p>新增监区</p>
        </div>
        <el-form class="formPadding" :model="prisonArea" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w50" label="监区名称" >
                <el-input v-model="prisonArea.name"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="上级监区">
                <el-select v-model="prisonArea.parentPrisonAreaId" clearable :loading="getting">
                    <el-option v-for="(item, index) in areaList" :key="index" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="w100 textarea" label="监区描述">
                <el-input v-model="prisonArea.description" type="textarea" :maxlength="255" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button @click="goBack">返 回</el-button>
                <el-button type="primary" :loading="adding" @click="submit">新增</el-button>
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
      prisonArea: {},
      rules: {}
    };
  },
  watch: {
    prisonArea: {
      handler: _.debounce(function(prisonArea) {
        this.$store.commit("updatePrisonArea", prisonArea);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["addPrisonArea"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.addPrisonArea()
            .then(res => {
              this.$message.success("新增成功");
              this.$router.push(`/prison-area/list`);
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
