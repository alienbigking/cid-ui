<template>
  <div class="">
    <el-form class="form-criminal" :model="criminalPhysicalCharacteristic" :rules="rules" ref="form" label-position="top">
      <div class="form-box">
        <el-form-item class="w25" label="身高(cm)" prop="height">
            <el-input v-model="criminalPhysicalCharacteristic.height"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="体重(kg)" prop="weight">
          <el-input v-model="criminalPhysicalCharacteristic.weight"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="体型" prop="somatotypeCode">
          <el-select v-model="criminalPhysicalCharacteristic.somatotypeCode" placeholder="请选择体型" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="脸型" prop="faceTypeCode">
          <el-select v-model="criminalPhysicalCharacteristic.faceTypeCode" placeholder="请选择脸型" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="血型" prop="bloodTypeCode">
          <el-select v-model="criminalPhysicalCharacteristic.bloodTypeCode" placeholder="请选择血型" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="口音" prop="accentCode">
          <el-select v-model="criminalPhysicalCharacteristic.accentCode" placeholder="请选择口音" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="足长(cm)" prop="footLength">
          <el-input v-model="criminalPhysicalCharacteristic.footLength"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="鞋号" prop="shoeSize">
          <el-input v-model="criminalPhysicalCharacteristic.shoeSize"></el-input>
        </el-form-item>
        <el-form-item class="w50" label="特征" prop="description">
            <el-input :maxlength="255" v-model="criminalPhysicalCharacteristic.description" type="textarea" resize="none"></el-input>
        </el-form-item>
        <el-form-item class="hasButton">
            <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
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
      criminalPhysicalCharacteristic: _.cloneDeep(this.$store.state.criminal.criminalPhysicalCharacteristic),
      rules: {
        height: [
          { required: true, message: "请输入身高", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        weight: [
          { required: true, message: "请输入体重", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        somatotypeCode: [
          { required: true, message: "请选择体型", trigger: "blur" }
        ],
        faceTypeCode: [
          { required: true, message: "请选择体型", trigger: "blur" }
        ],
        description: [
          { required: true, message: "请选择体型", trigger: "blur" },
          { max: 255, message: "长度在 1 到 255 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getCriminalPhysicalCharacteristic(this.$route.params.id).then(() => {
      this.criminalPhysicalCharacteristic = _.cloneDeep(this.$store.state.criminal.criminalPhysicalCharacteristic);
    });
  },
  methods: {
    ...mapActions(["getCriminalPhysicalCharacteristic", "updateCriminalPhysicalCharacteristic"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updateCriminalPhysicalCharacteristic()
            .then(res => {
              this.saving = false;
              this.$message.success("新增成功");
              // this.$router.push(`/prison-house/list`);
            })
            .catch(() => {
              this.saving = false;
              this.$message.error("新增失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.cell {
  button:nth-child(1) {
    color: #2196f3;
  }
  button:nth-child(2) {
    color: #f44336;
    margin-left: 30px;
  }
}
</style>
