<template>
  <div class="">
    <el-form class="form-criminal" :model="criminal" :rules="rules" ref="form" label-position="top">
      <div class="form-box">
        <el-form-item class="w25" label="编号" prop="code">
            <el-input v-model="criminal.code"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="姓名" prop="name">
            <el-input v-model="criminal.name"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="身份情况" prop="code">
            <el-input v-model="criminal.code"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="真实姓名" prop="name">
            <el-input v-model="criminal.name"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="别化名" prop="code">
            <el-input v-model="criminal.code"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="性别" prop="name">
          <el-select v-model="criminal.sex" placeholder="请选择性别" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="民族" prop="code">
          <el-select v-model="criminal.minzu" clearable>
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="出生日期" prop="required">
          <el-date-picker class="datePicker" :clearable="false" v-model="criminal.date" type="date"></el-date-picker>
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
</style>
