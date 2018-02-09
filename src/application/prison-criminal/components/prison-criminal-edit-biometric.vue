<template>
  <el-form
    class="form-criminal"
    :model="form"
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
    <object
      classid="CLSID:0B6CD28F-5650-4FC9-877D-F8398F5A656F"
      codebase="mxCapacitiveDriver.ocx"
      ref="fingerPrint"
      height=0
      width=0 />
    <!-- 照片录入-->
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
    <!-- 虹膜录入-->
    <div
    class="form-biometric">
      <el-card class="biometric-card">
        <el-button
          v-if="inputVsible"
          class="button-addCollection"
          @click="getleftFeature">录入</el-button>
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
          @click="getrightFeature">录入</el-button>
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
        <el-button
          class="button-addCollection"
          @click="getFingerPrint('leftThumbFeature')" >录入</el-button>
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
          @click="getFingerPrint('leftForefingerFeature')" >录入</el-button>
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
          @click="getFingerPrint('leftMiddleFingerFeature')" >录入</el-button>
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
          @click="getFingerPrint('leftRingFingerFeature')" >录入</el-button>
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
          @click="getFingerPrint('leftLittleFingerFeature')" >录入</el-button>
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
          @click="getFingerPrint('rightThumbFeature')" >录入</el-button>
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
          @click="getFingerPrint('rightForefingerFeature')" >录入</el-button>
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
          @click="getFingerPrint('rightMiddleFingerFeature')" >录入</el-button>
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
          @click="getFingerPrint('rightRingFingerFeature')" >录入</el-button>
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
          @click="getFingerPrint('rightLittleFingerFeature')">录入</el-button>
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

<script type="text/javascript" for="sy305" event="EnrollLeftIrisStrEvent(sIrisLeft_Small, sIrisLeft_Big, sIrisLeft_I8,  EnrollResult)">
  this.leftIris(sIrisLeft_Small, sIrisLeft_Big, sIrisLeft_I8, EnrollResult);
</script>

<script type="text/javascript" for="sy305" event="EnrollRightIrisStrEvent(sIrisLeft_Small, sIrisLeft_Big, sIrisLeft_I8,  EnrollResult)">
</script>

<script>
import { mapActions } from "vuex";
import {default as prisonCollectionService} from '../service/prison-criminal-collection-service';
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
      form: {
      criminalFaces: {},
      criminalIris: {},
      criminalFingerPrint: {}
      }
    };
  },
  watch: {
    criminalFaces: {
      handler: _.debounce(function(criminalFaces) {
        this.$store.commit("updateCriminalFace", Object.assign({}, this.criminalFaces, { criminalId: this.$route.params.id }));
      }, 500),
      deep: true
    },
    criminalIris: {
      handler: _.debounce(function(criminalIris) {
        this.$store.commit("updateCriminalIrise", Object.assign({}, this.criminalIris, { criminalId: this.$route.params.id }));
      }, 500),
      deep: true
    },
    criminalFingerPrint: {
      handler: _.debounce(function(criminalFingerPrint) {
        this.$store.commit("updateCriminalFingerPrint", Object.assign({}, this.criminalFingerPrint, { criminalId: this.$route.params.id }));
      }, 500),
      deep: true
    }
  },
  activated() {
    this.render();
  },
  methods: {
    ...mapActions([
      "getCriminalFace",
      "addCriminalFace",
      "updateCriminalFace",
      "getCriminalFingerPrint",
      "addCriminalFingerPrint",
      "updateCriminalFingerPrint"
    ]),
    render() {
      this.getCriminalFingerPrint(this.$route.params.id).then(() => {
        this.$refs.form.clearValidate();
        this.criminalFingerPrint = _.cloneDeep(
          this.$store.state.prisonCriminal.criminalFingerPrint
        );
        if (!this.criminalFingerPrint.id) {
          this.$store.commit("setCriminalFingerPrint", { criminalId: this.$route.params.id});
          this.criminalFingerPrint = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalFingerPrint
          );
        };
      })
    },
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
       this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminalFaces.id) {
            // 修改
            this.saving = true;
            this.updateCriminalFaces()
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
            this.addCriminalFaces()
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
    },
    // 瞳孔采集
    getleftFeature() {
      let sy305 = this.$refs.photo;
      sy305.StringMode = 1; // 设置字符串模式，必须
      if (this.comm_initIris() === 0) {
        this.$message.show("初始化虹膜库失败");
      } else {
        let leftIrisReg = sy305.EnrollLeftIris();
        if (leftIrisReg !== 1) {
          this.$message.show("启动左眼虹膜注册失败" + leftIrisReg);
        } else {
          this.$message.success("启动左眼虹膜注册成功");
        }
      }
    },
    getrightFeature() {
      let sy305 = this.$refs.photo;
      sy305.StringMode = 1; // 设置字符串模式，必须
      if (this.comm_initIris() === 0) {
        this.$message.show("初始化虹膜库失败");
      } else {
        let rightIrisReg = sy305.EnrollLeftIris();
        if (rightIrisReg !== 1) {
          this.$message.show("启动右眼虹膜注册失败" + leftIrisReg);
        } else {
          this.$message.success("启动右眼虹膜注册成功");
        }
      }
    },
    // 初始化虹膜设备
    comm_initIris() {
      let status = this.$refs.photo.InitIris();
      if (status === 2 || status === 3) {
        this.$message.show("请等待拍照摄像头关闭或者已经初始化");
        return 0;
      } else if (status !== 1) {
        this.$message.show("初始化虹膜失败：" + String(status));
        return 0;
      }
      return 1;
    },
    leftIrisInfo(sIrisLeft_Small, sIrisLeft_Big, sIrisLeft_I8,  EnrollResult) {
      alert("12356");
      if(EnrollResult === 1) {
        this.criminaIris.leftIrisInfo = sIrisLeft_Big;
        console.log(this.criminaIris.leftIrisInfo);
      }else {
        this.$message.show("注册左眼失败");
      }
    },
    rightIrisInfo(sIrisRight_Small, sIrisRight_Big, sIrisRight_I8,  EnrollResult) {
      alert("12356");
      if(EnrollResult === 1) {
        this.criminaIris.rightIrisInfo = sIrisRight_Big;
        console.log(this.criminaIris.rightIrisInfo);
      }else {
        this.$message.show("注册右眼失败");
      }
    },
    //指纹录入
    getFingerPrint(val) {
      let iDevIndex = 0;
      let fingerPrint=this.$refs.fingerPrint.GetImage(iDevIndex, 3000);
      if (prisonCollectionService.IsSuccess(fingerPrint) === 0) {
      let curPath = "c:\\1234\\";
      this.$refs.fingerPrint.ImageToBmpFile(curPath + val + ".bmp", fingerPrint);
      this.$set(this.criminalFingerPrint,val,fingerPrint);
      console.log(this.criminalFingerPrint);
      }
    },
    onSave() {
       this.saving = true;
       this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalFingerPrint.id) {
            // 修改
            this.saving = true;
            this.updateCriminalFingerPrints()
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
            console.log(this.criminalFingerPrint);
            this.saving = true;
            this.addCriminalFingerPrint()
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
