<template>
  <el-form
    class="form-biometric"
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
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in fingers"
        :key="index">
        <div
          class="body"
          :class="criminalFingers[item.type] ? 'setted' : 'iconfont defalut'">
          <el-button
            v-if="!criminalFingers[item.type]"
            class="button-addCollection"
            @click="getIrisPhoto(item.type)">录 入</el-button>
          <el-button
            v-else
            class="button-delete"><i class="iconfont icon-shanchu" /></el-button>
        </div>
        <span>{{ item.label }}</span>
      </div>
      <div class="has-button">
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSave">保 存</el-button>
      </div>
    </div>
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in faces"
        :key="index">
        <div class="body">
          <el-button
            v-if="!criminalFaces[item.type]"
            class="button-addCollection"
            @click="getFacesPhoto(item.type)">录 入</el-button>
          <el-button
            v-else
            class="button-delete"><i class="iconfont icon-shanchu" /></el-button>
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
            v-if="inputVsible"
            class="button-addCollection"
            @click="getIrisPhoto(item.type)">录 入</el-button>
          <el-button
            v-if="deleteVsible"
            class="button-delete"><i class="iconfont icon-shanchu" /></el-button>
        </div>
        <span>{{ item.label }}</span>
      </div>
      <div class="has-button">
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
        { label: '左手母指', type: "leftThumbFeature" },
        { label: '左手食指', type: "leftForefingerFeature" },
        { label: '左手中指', type: "leftMiddleFingerFeature" },
        { label: '左无名指', type: "leftRingFingerFeature" },
        { label: '左手小指', type: "leftLittleFingerFeature" },
        { label: '右手母指', type: "rightThumbFeature" },
        { label: '右手食指', type: "rightForefingerFeature" },
        { label: '右手中指', type: "rightMiddleFingerFeature" },
        { label: '右无名指', type: "rightRingFingerFeature" },
        { label: '右手小指', type: "rightLittleFingerFeature" }
      ],
      faces: [
        { label: '正脸', type: "frontPhoto" },
        { label: '侧脸', type: "leftPhoto" },
        { label: '侧脸', type: "rightPhoto" }
      ],
      iris: [
        { label: '左眼瞳孔', type: "leftFeature" },
        { label: '右眼瞳孔', type: "rightFeature" }
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
      "getPrisonCriminalFaces",
      "addPrisonCriminalFaces",
      "updatePrisonCriminalFaces"
    ]),
    getFacesPhoto(type) {
      let sy305 = this.$refs.photo;
      let r = sy305.InitPhotoCapture(1);
      if (r === 1) {
         let curpath = `c:\\123\\${type}.bmp`;
         if (sy305.PhotoCapture(0, curpath) === 1) {
           this.criminalFaces[type] = sy305.GetExtraInfo("capture_base64");
           alert(this.criminalFaces[type]);
           sy305.ClosePhotoCapture();
         }
      } else {
        this.$errorMessage.show("照相机初始化失败");
      }
    },
    getIrisPhoto(type) {
      console.log(type);
    },
    onSave() {
      console.log(123);
    },
    onSaveFacePicture() {
       this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminalFaces.id) {
            // 修改
            this.saving = true;
            this.updatePrisonCriminalFaces()
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
            console.log(this.criminalFaces);
            this.saving = true;
            this.addPrisonCriminalFaces()
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
  .defalut:before{
    content: "\e62b";
    color: #E0E5EC;
    font-size: 72px;
    position: absolute;
    z-index: 5;
  }
  .setted{
    background: url("../../../assets/images/avatar.jpg") no-repeat;
    background-size: 80px 80px;
    background-position: center center;
  }
}
</style>
