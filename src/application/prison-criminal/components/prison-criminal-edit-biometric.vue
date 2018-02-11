<template>
  <el-form
    class="form-biometric"
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
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in fingers"
        :key="index">
        <div
          class="body"
          :class="form.criminalFingerPrint[item.type] ? 'setted' : 'iconfont defalut'">
          <el-button
            v-if="!form.criminalFingerPrint[item.type]"
            class="button-addCollection"
            @click="getFingerPrintPhoto(item.type)">录 入</el-button>
          <el-button
            v-else
            class="button-delete"
            @click="deletePhoto(item.attribute,item.type)"><i class="iconfont icon-shanchu" /></el-button>
        </div>
        <span>{{ item.label }}</span>
      </div>
      <div class="has-button">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSaveFingerPrint">保 存</el-button>
      </div>
    </div>
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in faces"
        :key="index">
        <div class="body">
          <el-button
            v-if="!form.criminalFace[item.type]"
            class="button-addCollection"
            @click="getFacesPhoto(item.type)">录 入</el-button>
          <el-button
            v-else
            class="button-delete"
            @click="deletePhoto(item.attribute,item.type)"><i class="iconfont icon-shanchu" /></el-button>
        </div>
        <span>{{ item.label }}</span>
      </div>
      <div class="has-button">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSaveFacePicture">保 存</el-button>
      </div>
    </div>
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in iris"
        :key="index">
        <div class="body">
          <el-button
            v-if="!form.criminalIris[item.type]"
            class="button-addCollection"
            @click="getIrisPhoto(item.type)">录 入</el-button>
          <el-button
            v-else
            class="button-delete"
            @click="deletePhoto(item.attribute,item.type)"><i class="iconfont icon-shanchu" /></el-button>
        </div>
        <span>{{ item.label }}</span>
      </div>
      <div class="has-button">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSaveIrisPicture">保 存</el-button>
      </div>
      <el-input
        v-if="false"
        id="leftFeature"/>
      <el-input
        v-if="false"
        id="rightFeature"/></div>
  </el-form>
</template>

<script>
import { mapActions } from "vuex";
import {default as prisonCollectionService} from '../service/prison-criminal-collection-service';
import _ from "lodash";
let a = document.createElement("script");
a.type = "text/javascript";
a.event = "EnrollLeftIrisStrEvent(sIrisLeft_Small,sIrisLeft_Big,sIrisLeft_I8, EnrollResult)";
a.setAttribute("for", "sy305");
a.innerHTML = `console.log("ocx调用");`;
console.log(a);
document.body.appendChild(a);

// function addEvent(obj, name, func) {
//   if (window.attachEvent && obj.attachEvent) {
//     obj.attachEvent("on"+name, func);
//   } else {
//     obj.addEventListener(name, func, false);
//   }
// }
// function hhhhh(a, b, c) { console.log(a, b, c); }
// addEvent(document.getElementById("sy305"), EnrollLeftIrisStrEvent, hhhhh);
export default {
  data() {
    return {
      fingers: [
        { label: '左手母指', type: "leftThumbFeature", attribute: "criminalFingerPrint" },
        { label: '左手食指', type: "leftForefingerFeature", attribute: "criminalFingerPrint" },
        { label: '左手中指', type: "leftMiddleFingerFeature", attribute: "criminalFingerPrint" },
        { label: '左无名指', type: "leftRingFingerFeature", attribute: "criminalFingerPrint" },
        { label: '左手小指', type: "leftLittleFingerFeature", attribute: "criminalFingerPrint" },
        { label: '右手母指', type: "rightThumbFeature", attribute: "criminalFingerPrint" },
        { label: '右手食指', type: "rightForefingerFeature", attribute: "criminalFingerPrint" },
        { label: '右手中指', type: "rightMiddleFingerFeature", attribute: "criminalFingerPrint" },
        { label: '右无名指', type: "rightRingFingerFeature", attribute: "criminalFingerPrint" },
        { label: '右手小指', type: "rightLittleFingerFeature", attribute: "criminalFingerPrint" }
      ],
      faces: [
        { label: '正脸', type: "frontPhoto", attribute: "criminalFace" },
        { label: '侧脸', type: "leftPhoto", attribute: "criminalFace" },
        { label: '侧脸', type: "rightPhoto", attribute: "criminalFace" }
      ],
      iris: [
        { label: '左眼瞳孔', type: "leftFeature", attribute: "criminalIris" },
        { label: '右眼瞳孔', type: "rightFeature", attribute: "criminalIris" }
      ],
      inputVsible: true,
      deleteVsible: false,
      criminalFace: {},
      criminalFingers: {},
      form: {
      criminalFace: {},
      criminalIris: {},
      criminalFingerPrint: {}
      },
      saving: false
    };
  },
  watch: {
    "form.criminalFace": {
      handler: _.debounce(function(criminalFace) {
        this.$store.commit("updateCriminalFace", this.form.criminalFace);
      }, 500),
      deep: true
    },
    "form.criminalFingerPrint": {
      handler: _.debounce(function(criminalFingerPrint) {
        this.$store.commit("updateCriminalFingerPrint", this.form.criminalFingerPrint);
      }, 500),
      deep: true
    }
  },
  activated() {
  this.createLeftFeatureEventScript();
  this.createRightFeatureEventScript();
  this.render();
  },
  methods: {
    ...mapActions([
      "getCriminalFace",
      "addCriminalFace",
      "updateCriminalFace",
      "getCriminalIris",
      "addCriminalIris",
      "updateCriminalIris",
      "getCriminalFingerPrint",
      "addCriminalFingerPrint",
      "updateCriminalFingerPrint"
    ]),
    render() {
      this.$refs.photo.Burger = "{\"client_id\":\"gkzx\",\"capture_realtime_iris\":\"0\",\"with_big_iris\":\"1\",\"iris_with_bkcapture\":\"1\",\"iris_bkcapture_camera\":\"2\",\"capture_path\":\"d:\\\\sy305photoB\",\"bkcapture_path\":\"d:\\\\sy305photoA\"}";
      this.getCriminalFingerPrint(this.$route.params.id).then(() => {
        this.form.criminalFingerPrint = _.cloneDeep(
          this.$store.state.prisonCriminal.criminalFingerPrint
        );
        console.log(this.form.criminalFingerPrint);
        if (!this.form.criminalFingerPrint.id) {
          this.$store.commit("setCriminalFingerPrint", { criminalId: this.$route.params.id });
          this.form.criminalFingerPrint = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalFingerPrint
          );
          console.log(this.form.criminalFingerPrint);
        };
      });
      this.getCriminalFace(this.$route.params.id).then(() => {
        this.form.criminalFace = _.cloneDeep(
          this.$store.state.prisonCriminal.criminalFace
        );
        if (!this.form.criminalFace.id) {
          this.$store.commit("setCriminalFace", { criminalId: this.$route.params.id });
          this.form.criminalFace = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalFace
          );
          console.log(this.form.criminalFace);
        };
      });
      this.getCriminalIris(this.$route.params.id).then(() => {
        this.form.criminalIris = _.cloneDeep(
          this.$store.state.prisonCriminal.criminalIris
        );
        if (!this.form.criminalIris.id) {
          this.$store.commit("setCriminalIris", { criminalId: this.$route.params.id });
          this.form.criminalIris = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalIris
          );
          console.log(this.form.criminalIris);
        }
      });
    },
    getFacesPhoto(type) {
      let sy305 = this.$refs.photo;
      let r = sy305.InitPhotoCapture(1);
      if (r === 1) {
         let curpath = `c:\\123\\${type}.bmp`;
         if (sy305.PhotoCapture(0, curpath) === 1) {
           this.form.criminalFace[type] = sy305.GetExtraInfo("capture_base64");
           alert(this.form.criminalFace[type]);
           sy305.ClosePhotoCapture();
         }
      } else {
        this.$errorMessage.show("照相机初始化失败");
      }
    },
    getIrisPhoto(type) {
      let sy305 = this.$refs.photo;
      sy305.StringMode = 1; // 设置字符串模式，必须
      if (this.comm_initIris() === 0) {
        this.$message.show("初始化虹膜库失败");
      } else if (type === "leftFeature") {
        console.log("左眼测试");
        let status = sy305.EnrollLeftIris();
        console.log(status);
        if (status !== 1) {
          this.$errorMessage.show("启动左眼虹膜注册失败" + status);
        } else {
          this.$message.success("启动左眼虹膜注册成功");
        }
      } else {
        let status = sy305.EnrollRightIris();
        if (status !== 1) {
          this.$errorMessage.show("启动右眼虹膜注册失败" + status);
        } else {
          this.$message.success("启动右眼虹膜注册成功");
        }
      }
    },
    // 初始化虹膜设备
    comm_initIris() {
      let status = this.$refs.photo.InitIris();
      console.log("初始化         " + status);
      if (status === 2 || status === 3) {
        this.$errorMessage.show("请等待拍照摄像头关闭或者已经初始化");
        return 0;
      } else if (status !== 1) {
        this.$message.success("初始化虹膜失败：" + String(status));
        return 0;
      }
      return 1;
    },
    IrisInfo(sIrisSmall, sIrisBig, sIrisI8, EnrollResult, type) {
      console.log(sIrisBig);
      if (EnrollResult === 1) {
        this.form.criminaIris.type = sIrisBig;
        console.log(this.form.criminaIris.leftIrisInfo);
      } else {
        this.$errorMessage.show("注册左眼失败");
      }
    },
    // 指纹采集
    getFingerPrintPhoto(type) {
      let iDevIndex = 0;
      let fingerPrint = this.$refs.fingerPrint.GetImage(iDevIndex, 3000);
      if (prisonCollectionService.IsSuccess(fingerPrint) === 0) {
      let curPath = "c:\\1234\\";
      this.$refs.fingerPrint.ImageToBmpFile(curPath + type + ".bmp", fingerPrint);
      this.$set(this.form.criminalFingerPrint, type, fingerPrint);
      console.log(this.form.criminalFingerPrint);
      }
    },
    deletePhoto(attribute, type) {
      if (attribute === "criminalFingerPrint") {
      this.$delete(this.form.criminalFingerPrint, type);
      console.log(this.form.criminalFingerPrint);
      } else if (attribute === "criminalFace") {
      this.$delete(this.form.criminalFace, type);
      console.log(this.form.criminalFace);
      } else {
      this.$delete(this.form.criminalIris, type);
      console.log(this.form.criminalIris);
      }
    },
    onSaveIrisPicture() {
      this.updateIrisInfo();
      console.log(this.$store.state.prisonCriminal.criminalIris);
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalIris.id) {
            // 修改
            this.saving = true;
            this.updateCriminalIris()
              .then(res => {
                this.saving = false;
                this.$message.success("修改成功");
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "修改失败");
              });
          } else {
            // 新增
            console.log(this.form.criminalIris);
            this.saving = true;
            this.addCriminalIris()
              .then(res => {
                this.saving = false;
                this.$message.success("新增成功");
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "新增失败");
              });
          }
        }
      });
    },
    onSaveFingerPrint() {
      console.log(this.$store.state.prisonCriminal.criminalFingerPrint);
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalFingerPrint.id) {
            this.saving = true;
            this.updateCriminalFingerPrint()
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
    },
    onSaveFacePicture() {
       this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalFace.id) {
            // 修改
            this.saving = true;
            this.updatePrisonCriminalFace()
              .then(res => {
                this.saving = false;
                this.$message.success("修改成功");
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "修改失败");
              });
          } else {
            // 新增
            console.log(this.form.criminalFace);
            this.saving = true;
            this.addPrisonCriminalFace()
              .then(res => {
                this.saving = false;
                this.$message.success("新增成功");
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, "新增失败");
              });
          }
        }
      });
    },
    createLeftFeatureEventScript() {
      let a = document.createElement("script");
      a.type = "text/javascript";
      a.event = "EnrollLeftIrisStrEvent(sIrisLeft_Small,sIrisLeft_Big,sIrisLeft_I8, EnrollResult)";
      a.setAttribute("for", "sy305");
      a.innerHTML = "document.getElementById('leftFeature').value=sIrisLeft_Big";
      console.log(a);
      document.body.appendChild(a);
    },
    createRightFeatureEventScript() {
      let a = document.createElement("script");
      a.type = "text/javascript";
      a.event = "EnrollRightIrisStrEvent(sIrisRight_Small,sIrisRight_Big,sIrisRight_I8, EnrollResult)";
      a.setAttribute("for", "sy305");
      a.innerHTML = "document.getElementById('rightFeature').value=sIrisRight_Big";
      console.log(a);
      document.body.appendChild(a);
    },
    updateIrisInfo() {
      let leftFeatureInfo = document.getElementById("leftFeature").value;
      let rightFeatureInfo = document.getElementById("rightFeature").value;
      this.$set(this.form.criminalIris, "leftFeature", leftFeatureInfo);
      this.$set(this.form.criminalIris, "rightFeature", rightFeatureInfo);
      console.log("更新瞳孔信息" + this.form.criminalIris);
      if (!this.form.criminalIris.id) {
      this.$store.commit("updateCriminalIris", this.form.criminalIris);
      } else {
        leftFeatureInfo = this.form.criminalIris.leftFeature;
        rightFeatureInfo = this.form.criminalIris.rightFeature;
        this.$store.commit("updateCriminalIris", this.form.criminalIris);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-biometric{
  // background: red;
  padding: 20px;
  .biometric-box{
    border: 1px dashed #ddd;
    padding: 25px 18px 20px 38px;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    &+.biometric-box{
      margin-top: 20px;
    }
    .biometric-card{
      margin: 20px 20px 0 0;
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      text-align: center;
      flex-shrink: 0;
      box-sizing: border-box;
      .body{
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 100px;
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
      }
    }
  }
  .button-delete{
    position: absolute;
    background: #37474F;
    bottom: 0;
    left: 0;
    border: 0;
    width: 100%;
    height: 26px;
    color: #fff;
    border-radius: 0;
    z-index: 100;
    &:hover{
      background: rgba(#37474F, 0.9);
    }
  }
  .has-button{
    flex-shrink: 0;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
    .button-confirm{
      float: right;
    }
  }
  .icon-zhiwenjiesuo{
    color: #E0E5EC;
    font-size: 72px;
    z-index: 5;
    &:before{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: 100px;
    }
  }
  .setted{
    background: url("../../../assets/images/avatar.jpg") no-repeat;
    background-size: 80px 80px;
    background-position: center center;
  }
}
</style>
