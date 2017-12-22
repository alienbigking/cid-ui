<template>
  <div class="">
    <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
      <div class="form-box">
        <el-form-item class="w25" label="身高(cm)" prop="shengao">
            <el-input v-model="criminal.shengao"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="体型" prop="tixing">
          <el-select v-model="criminal.tixing" placeholder="请选择性别" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="血型" prop="xuexing">
          <el-select v-model="criminal.xuexing" placeholder="请选择性别" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="脸型" prop="lianxing">
          <el-select v-model="criminal.lianxing" placeholder="请选择性别" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="口音" prop="kouyin">
          <el-select v-model="criminal.kouyin" placeholder="请选择性别" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="足长(cm)" prop="zuchang">
          <el-input v-model="criminal.zuchang"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="鞋号" prop="xiehao">
          <el-input v-model="criminal.xiehao"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="体重(kg)" prop="tizhong">
          <el-input v-model="criminal.tizhong"></el-input>
        </el-form-item>
        <el-form-item class="w50" label="皮肤特殊标记" prop="pifuteshubiaoji">
            <el-input :maxlength="255" v-model="criminal.pifuteshubiaoji" type="textarea" resize="none"></el-input>
        </el-form-item>
        <el-form-item class="w50" label="特征" prop="tezheng">
            <el-input :maxlength="255" v-model="criminal.tezheng" type="textarea" resize="none"></el-input>
        </el-form-item>
        <el-form-item class="hasButton">
            <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      criminal: {},
      rules: {
        required: [{ required: true, message: "该项必填", trigger: "blur" }],
        code: [
          { required: true, message: "请输入编号", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入租户名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.criminal);
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
