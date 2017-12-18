<template>
    <div class="card">
        <div class="um-title">
            <p>修改监区</p>
        </div>
        <el-form class="formPadding" :model="prisonArea" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w50" label="监区名称" prop="name" >
                <el-input v-model="prisonArea.name"></el-input>
            </el-form-item>
            <el-form-item class="w50 the-disabled" label="上级监区" prop="parentPrisonAreaName">
                <!-- <el-select  v-model="area.parentPrisonArea.id" value-key="id" clearable :loading="getting">
                    <el-option v-for="(item, index) in areaList" :key="index" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <span class="el-input__inner">{{  prisonArea.parentPrisonAreaName }}</span>
            </el-form-item>
            <el-form-item class="w100 textarea" label="监区描述" prop="description">
                <el-input :maxlength="255" type="textarea" resize="none" v-model="prisonArea.description"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button @click="onBack">返 回</el-button>
                <el-button type="primary" :loading="editing" @click="onSubmit">确认</el-button>
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
      prisonArea: _.cloneDeep(this.$store.state.prisonArea.prisonArea),
      rules: {
        name: [
            { required: true, message: "请输入监区名称", trigger: "blur" },
            { max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ],
        parentPrisonAreaName: [
          { required: true, message: "请选择上级监区", trigger: "blur" }
        ],
        description: [
          { max: 255, message: '255 个字符以内', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    this.getPrisonArea(this.$route.params.id).then(() => {
      this.prisonArea = _.cloneDeep(this.$store.state.prisonArea.prisonArea);
    });
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
    ...mapActions(["getPrisonArea", "updatePrisonArea"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.updatePrisonArea()
            .then(res => {
              this.$message.success("修改成功");
              this.$router.push(`/prison-area/list`);
            })
            .catch(() => {
              this.$message.error("修改失败");
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
