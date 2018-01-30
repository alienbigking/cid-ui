<template>
  <div class="detail-card">
    <h3 class="card-title">修改监舍</h3>
    <el-form
      class="formPadding"
      :model="prisonHouse"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        label="编号"
        class="w50"
        prop="code" >
        <el-input v-model="prisonHouse.code"/>
      </el-form-item>
      <el-form-item
        label="名称"
        class="w50"
        prop="name" >
        <el-input v-model="prisonHouse.name"/>
      </el-form-item>
      <el-form-item
        class="w100 textarea"
        label="描述"
        prop="description" >
        <el-input
          :maxlength="255"
          type="textarea"
          resize="none"
          v-model="prisonHouse.description"/>
      </el-form-item>
      <div class="el-form-item-div">
        <el-button @click="onBack">返 回</el-button>
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSubmit">确 认</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      prisonHouse: _.cloneDeep(this.$store.state.prisonHouse.prisonHouse),
      rules: {
        code: [
          { required: true, message: "请输入组织结构代码" },
          { max: 50, message: "长度在 1 到 50 个字符" }
        ],
        name: [
          { required: true, message: "请输入监舍名称" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ],
        description: [{ max: 255, message: "255 个字符以内" }]
      },
      saving: false
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
  created() {
    this.getPrisonHouse(this.$route.params.id).then(() => {
      this.prisonHouse = _.cloneDeep(this.$store.state.prisonHouse.prisonHouse);
    });
  },
  methods: {
    ...mapActions(["getPrisonHouse", "updatePrisonHouse"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updatePrisonHouse()
            .then(res => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/prison-house/list`);
            })
            .catch(error => {
              this.saving = false;
              this.$errorMessage.show(error, "修改失败");
            });
        }
      });
    },
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
