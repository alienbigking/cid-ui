<template>
  <el-form
  class="form-criminal">
    <div
    class="form-biometric">
      <el-row>
        <el-card class="biometric-card">
          <el-button class="button-addInEdit" />
        </el-card>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
        <el-card class="biometric-card"/>
      </el-row>
    </div>
    <div
    class="form-biometric"/>
    <div
    class="form-biometric"/>
  </el-form>
</template>

<style lang="scss" scoped>
    .biometric-card{
      top: 45px;
      left: 24px;
      width: 80px;
      height: 80px;
      position: relative;
      display: inline-block;
      &:not(:first-child){
      margin-left:15px;
      // left: 20px;
    }
  }
</style>
