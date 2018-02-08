<template>
  <el-form
    class="form-criminal"
    ref="form">
    <object
      classid="clsid:BCC0CDFA-676A-43F2-B1D7-B4CD3FF72B6A"
      id="sy305"
      height=0
      width=0
      ref="photo" >
      <param
        name="_Version"
        value="65536">
      <param
        name="_ExtentX"
        value="24262">
      <param
        name="_ExtentY"
        value="16219">
      <param
        name="_StockProps"
        value="0">
    </object>
    <div
    class="form-biometric">
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection"
          @click="frontagePhoto">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection"
          @click="leftSidePhoto">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection"
          @click="rightSidePhoto">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <div
        :key="index"
        class="biometricCardFaceTitle"
        v-for="(item, index) in faces">
        <span>{{ item }}</span>
      </div>
      <div class="el-form-item-div">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSaveFacePicture">保 存</el-button>
      </div>
    </div>
    <div
    class="form-biometric">
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <div
        :key="index"
        class="biometricCardIrisTitle"
        v-for="(item, index) in iris">
        <span>{{ item }}</span>
      </div>
      <div class="el-form-item-div">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSave">保 存</el-button>
      </div>
    </div>
    <div
    class="form-biometric">
      <!-- 指纹录入-->
      <el-card class="biometric-card">
        <el-button class="button-addCollection" >录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection">录入</el-button>
        <el-button
          v-if="deleteVsible"
          class="button-delete">
          <i
            class="iconfont icon-shanchu"
            style=""/></el-button>
      </el-card>
      <div
        :key="index"
        class="biometricCardTitle"
        v-for="(item, index) in fingers">
        <span>{{ item }}</span>
      </div>
      <div class="el-form-item-div">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSave">保 存</el-button>
      </div>
    </div>
  </el-form>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

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
      ],
      iris: [
        '左眼瞳孔',
        '右眼瞳孔'
      ],
      inputVsible: true,
      deleteVsible: false,
      criminalFaces: {}
    };
  },
  watch: {
    criminalFaces: {
      handler: _.debounce(function(criminalFaces) {
        this.$store.commit("updatePrisonCriminalFaces", Object.assign({}, this.criminalFaces, { criminalId: this.$route.params.id }));
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions([
      "getPrisonCriminalFaces",
      "addPrisonCriminalFaces",
      "updatePrisonCriminalFaces"
    ]),
    frontagePhoto() {
      let sy305 = this.$refs.photo;
      let r = sy305.InitPhotoCapture(1);
      alert(r);
      if (r === 1) {
         let curpath = "c:\\123\\frontage.bmp";
         if (sy305.PhotoCapture(0, curpath) === 1) {
           this.criminalFaces.frontPhoto = sy305.GetExtraInfo("capture_base64");
           alert(this.criminalFaces.frontPhoto);
           sy305.ClosePhotoCapture();
         }
      } else {
        this.$errorMessage.show("照相机初始化失败");
      }
    },
    leftSidePhoto() {
      let sy305 = this.$refs.photo;
      let r = sy305.InitPhotoCapture(1);
      alert(r);
      if (r === 1) {
         let curpath = "c:\\123\\leftside.bmp";
         if (sy305.PhotoCapture(0, curpath) === 1) {
           this.criminalFaces.leftPhoto = sy305.GetExtraInfo("capture_base64");
           alert(this.criminalFaces.leftPhoto);
           sy305.ClosePhotoCapture();
         }
      } else {
        this.$errorMessage.show("照相机初始化失败");
      }
    },
    rightSidePhoto() {
      let sy305 = this.$refs.photo;
      let r = sy305.InitPhotoCapture(1);
      alert(r);
      if (r === 1) {
         let curpath = "c:\\123\\rightside.bmp";
         if (sy305.PhotoCapture(0, curpath) === 1) {
           this.criminalFaces.rightPhoto = sy305.GetExtraInfo("capture_base64");
           alert(this.criminalFaces.rightPhoto);
           console.log(this.criminalFaces);
           sy305.ClosePhotoCapture();
         }
      } else {
        this.$errorMessage.show("照相机初始化失败");
      }
    },
    onSaveFacePicture() {
      this.saving = true;
      this.$store.commit("updatePrisonCriminalFaces", Object.assign({}, this.criminalFaces, { criminalId: this.$route.params.id }));
       this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminalFaces.id) {
            // 修改
            this.saving = true;
            this.updatePrisonCriminalFaces()
              .then(res => {
                this.saving = false;
                this.$message.success("修改成功");
                this.editDialogVisible = false;
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "修改失败");
              });
          } else {
            // 新增
            console.log(this.criminalFaces);
            this.saving = true;
            this.addPrisonCriminalFaces()
              .then(res => {
                this.saving = false;
                this.$message.success("新增成功");
                this.editDialogVisible = false;
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "新增失败");
              });
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
    .biometric-card{
      display:flex;
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
  .biometricCardIrisTitle{
      position: relative;
      display: inline-block;
      top: 65px;
      left: -144px;
      &:not(first-child){
        margin-right: 54px;
      }
  }
  .el-form-item-div{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      top: 100px;
  }
</style>
