<template>
  <el-form
  class="form-criminal">
    <div
    class="form-biometric">
      <!-- <el-row> -->
      <el-card class="biometric-card">
        <el-button class="button-addCollection" >录入</el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <!-- </el-row> -->
      <div
        :key="index"
        class="biometricCardTitle"
        v-for="(item, index) in fingers">
        <span>{{ item }}</span>
      </div>
    </div>
    <div
    class="form-biometric">
      <el-card class="biometric-card">
        <el-button class="button-addCollection" >录入</el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
      <div
        :key="index"
        class="biometricCardFaceTitle"
        v-for="(item, index) in faces">
        <span>{{ item }}</span>
      </div>
    </div>
    <div
    class="form-biometric">
      <el-card class="biometric-card">
        <el-button class="button-addCollection" >录入</el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button class="button-addCollection" />
      </el-card>
    </div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      fingers: [
         '左手母指',
         '左手食指',
         '左手中指',
         '左无名指',
         '左手小指',
         '右手母指',
         '右手食指',
         '右手中指',
         '右无名指',
         '右手小指'
      ],
      faces: [
        '正脸',
        '侧脸',
        '侧脸'
      ]
    };
  }
};
</script>

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
    }
  }
  .biometricCardTitle{
      position: relative;
      display: inline-block;
      left: 40px;
      top: 55px;
      &:not(first-child){
        margin-right: 53px;
      }
  }
  .biometricCardFaceTitle{
      position: relative;
      display: inline-block;
      top: 65px;
      left:-234px;
      &:not(first-child){
        margin-right: 77px;
      }
  }
</style>
