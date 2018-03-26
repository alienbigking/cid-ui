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
          :class="form.criminalFingerPrint[item.type] ? 'settedPrint' : 'iconfont icon-zhiwenjiesuo'">
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
        <div
          class="body"
          :class="form.criminalFace[item.type] ? 'setted' : 'iconfont icon-hongmoshibie'">
          <img
            v-if="form.criminalFace[item.type] ? true : false"
            :src="imgUrl[item.type]"
            width="100px"
            height="100px">
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
        <div
          class="body"
          :class="form.criminalIris[item.type] ? 'settedIris' : 'iconfont icon-hongmoshibie'">
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
        v-show="false"
        id="PhotoCurPath"/>
      <el-input
        v-show="false"
        id="PhotoInfo"/>
      <el-input
        v-show="false"
        id="leftFeature"/>
      <el-input
        v-show="false"
        id="rightFeature"/></div>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex';
import prisonCollectionService from '../service/prison-criminal-collection-service';
import _ from 'lodash';

export default {
  data() {
    return {
      fingers: [
        {
          label: '左手母指',
          type: 'leftThumbFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '左手食指',
          type: 'leftForefingerFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '左手中指',
          type: 'leftMiddleFingerFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '左无名指',
          type: 'leftRingFingerFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '左手小指',
          type: 'leftLittleFingerFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '右手母指',
          type: 'rightThumbFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '右手食指',
          type: 'rightForefingerFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '右手中指',
          type: 'rightMiddleFingerFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '右无名指',
          type: 'rightRingFingerFeature',
          attribute: 'criminalFingerPrint'
        },
        {
          label: '右手小指',
          type: 'rightLittleFingerFeature',
          attribute: 'criminalFingerPrint'
        }
      ],
      faces: [
        { label: '正脸', type: 'frontPhoto', attribute: 'criminalFace' },
        { label: '侧脸', type: 'leftPhoto', attribute: 'criminalFace' },
        { label: '侧脸', type: 'rightPhoto', attribute: 'criminalFace' }
      ],
      iris: [
        { label: '左眼瞳孔', type: 'leftFeature', attribute: 'criminalIris' },
        { label: '右眼瞳孔', type: 'rightFeature', attribute: 'criminalIris' }
      ],
      inputVsible: true,
      deleteVsible: false,
      imgUrl: {},
      form: {
        criminalFace: {},
        criminalIris: {},
        criminalFingerPrint: {}
      },
      saving: false
    };
  },
  watch: {
    'form.criminalFace': {
      handler: _.debounce(function(criminalFace) {
        this.$store.commit('updateCriminalFace', this.form.criminalFace);
      }, 500),
      deep: true
    },
    'form.criminalFingerPrint': {
      handler: _.debounce(function(criminalFingerPrint) {
        this.$store.commit('updateCriminalFingerPrint', this.form.criminalFingerPrint);
      }, 500),
      deep: true
    }
  },
  activated() {
    this.createLeftFeatureEventScript();
    this.createRightFeatureEventScript();
    this.createFaceEventScript();
    this.render();
    window.hhh = this;
  },
  destroyed() {
    delete window.hhh;
  },
  methods: {
    ...mapActions([
      'getCriminalFace',
      'addCriminalFace',
      'updateCriminalFace',
      'getCriminalIris',
      'addCriminalIris',
      'updateCriminalIris',
      'getCriminalFingerPrint',
      'addCriminalFingerPrint',
      'updateCriminalFingerPrint'
    ]),
    render() {
      this.$refs.photo.Burger =
        '{"client_id":"gkzx","capture_realtime_iris":"0","with_big_iris":"1","iris_with_bkcapture":"1","iris_bkcapture_camera":"2","capture_path":"c:\\\\facePhoto","bkcapture_path":"d:\\\\sy305photoA"}';
      this.getCriminalFingerPrint(this.$route.params.id).then(() => {
        this.form.criminalFingerPrint = _.cloneDeep(this.$store.state.prisonCriminal.criminalFingerPrint);
        if (!this.form.criminalFingerPrint.id) {
          this.$store.commit('setCriminalFingerPrint', {
            criminalId: this.$route.params.id
          });
          this.form.criminalFingerPrint = _.cloneDeep(this.$store.state.prisonCriminal.criminalFingerPrint);
        }
      });
      this.getCriminalFace(this.$route.params.id).then(() => {
        this.form.criminalFace = _.cloneDeep(this.$store.state.prisonCriminal.criminalFace);
        // console.log(this.form.criminalFace);
        let type = ['frontPhoto', 'leftPhoto', 'rightPhoto'];
        for (let i = 0; i < type.length; i++) {
          let info = type[i];
          this.imgUrl[info] = 'data:image/bmp;base64,' + this.form.criminalFace[info];
        }
        if (!this.form.criminalFace.id) {
          this.$store.commit('setCriminalFace', {
            criminalId: this.$route.params.id
          });
          this.form.criminalFace = _.cloneDeep(this.$store.state.prisonCriminal.criminalFace);
        }
      });
      this.getCriminalIris(this.$route.params.id).then(() => {
        this.form.criminalIris = _.cloneDeep(this.$store.state.prisonCriminal.criminalIris);
        if (!this.form.criminalIris.id) {
          this.$store.commit('setCriminalIris', {
            criminalId: this.$route.params.id
          });
          this.form.criminalIris = _.cloneDeep(this.$store.state.prisonCriminal.criminalIris);
        }
      });
    },
    getFacesPhoto(type) {
      let sy305 = this.$refs.photo;
      // console.log(this.form.criminalFace);
      let r = sy305.InitPhotoCapture(1);
      if (r === 1) {
        // let curpath = `c:\\\\facePhoto\\${type}.bmp`;
        // let curpath = type + '.bmp';
        let status = sy305.PhotoCapture(0, type + '.bmp');
        if (status === 1) {
          this.$message.success('初始化摄像头成功');
        }
      } else {
        this.$errorMessage.show('照相机初始化失败');
      }
    },
    createFaceEventScript() {
      if (!document.getElementById('FaceScript')) {
        let FaceScript = document.createElement('script');
        FaceScript.id = 'FaceScript';
        FaceScript.type = 'text/javascript';
        FaceScript.event = 'PhotoCaptureEvent(CaptureKind, ImageFile)';
        FaceScript.setAttribute('for', 'sy305');
        FaceScript.innerHTML = 'document.getElementById("PhotoCurPath").value = ImageFile;hhh.updateFaceInfo()';
        document.body.appendChild(FaceScript);
      }
    },
    updateFaceInfo() {
      let faceType = document.getElementById('PhotoCurPath').value;
      let sy305 = this.$refs.photo;
      document.getElementById('PhotoInfo').value = sy305.GetExtraInfo('capture_base64');
      let faceInfo = document.getElementById('PhotoInfo').value;
      let type = faceType.substring(faceType.lastIndexOf('\\') + 1, faceType.lastIndexOf('.'));
      this.$set(this.form.criminalFace, type, faceInfo);
      this.imgUrl[type] = 'data:image/bmp;base64,' + faceInfo;
      sy305.ClosePhotoCapture();
    },
    getIrisPhoto(type) {
      let sy305 = this.$refs.photo;
      sy305.StringMode = 1; // 设置字符串模式，必须
      if (this.comm_initIris() === 0) {
        this.$message.show('初始化虹膜库失败');
      } else if (type === 'leftFeature') {
        let status = sy305.EnrollLeftIris();
        if (status !== 1) {
          this.$errorMessage.show('启动左眼虹膜注册失败' + status);
        } else {
          this.$message.success('启动左眼虹膜注册成功');
        }
      } else {
        let status = sy305.EnrollRightIris();
        if (status !== 1) {
          this.$errorMessage.show('启动右眼虹膜注册失败' + status);
        } else {
          this.$message.success('启动右眼虹膜注册成功');
        }
      }
    },
    // 初始化虹膜设备
    comm_initIris() {
      let status = this.$refs.photo.InitIris();
      if (status === 2 || status === 3) {
        this.$errorMessage.show('请等待拍照摄像头关闭或者已经初始化');
        return 0;
      } else if (status !== 1) {
        this.$message.success('初始化虹膜失败：' + String(status));
        return 0;
      }
      return 1;
    },
    IrisInfo(sIrisSmall, sIrisBig, sIrisI8, EnrollResult, type) {
      if (EnrollResult === 1) {
        this.form.criminaIris.type = sIrisBig;
      } else {
        this.$errorMessage.show('注册左眼失败');
      }
    },
    // 指纹采集
    getFingerPrintPhoto(type) {
      let iDevIndex = 0;
      let fingerPrint = this.$refs.fingerPrint.GetImage(iDevIndex, 3000);
      if (prisonCollectionService.IsSuccess(fingerPrint) === 0) {
        this.$set(this.form.criminalFingerPrint, type, fingerPrint);
      }
    },
    deletePhoto(attribute, type) {
      if (attribute === 'criminalFingerPrint') {
        this.$delete(this.form.criminalFingerPrint, type);
      } else if (attribute === 'criminalFace') {
        this.$delete(this.form.criminalFace, type);
      } else {
        this.$delete(this.form.criminalIris, type);
      }
    },
    onSaveIrisPicture() {
      this.updateIrisInfo();
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.criminalIris.id) {
            // 修改
            this.saving = true;
            this.updateCriminalIris()
              .then(res => {
                this.saving = false;
                this.$message.success('修改成功');
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, '修改失败');
              });
          } else {
            // 新增
            this.saving = true;
            this.addCriminalIris()
              .then(res => {
                this.saving = false;
                this.$message.success('新增成功');
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, '新增失败');
              });
          }
        }
      });
    },
    onSaveFingerPrint() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.criminalFingerPrint.id) {
            this.saving = true;
            this.updateCriminalFingerPrint()
              .then(res => {
                this.saving = false;
                this.$message.success('修改成功');
                this.editDialogVisible = false;
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, '修改失败');
              });
          } else {
            this.saving = true;
            this.addCriminalFingerPrint()
              .then(res => {
                this.saving = false;
                this.$message.success('新增成功');
                this.editDialogVisible = false;
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, '新增失败');
              });
          }
        }
      });
    },
    onSaveFacePicture() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.criminalFace.id) {
            // 修改
            this.saving = true;
            this.updateCriminalFace()
              .then(res => {
                this.saving = false;
                this.$message.success('修改成功');
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, '修改失败');
              });
          } else {
            // 新增
            this.saving = true;
            this.addCriminalFace()
              .then(res => {
                this.saving = false;
                this.$message.success('新增成功');
              })
              .catch(error => {
                this.saving = false;
                this.$errorMessage.show(error, '新增失败');
              });
          }
        }
      });
    },
    createLeftFeatureEventScript() {
      if (!document.getElementById('leftIrisScript')) {
        let leftIrisScript = document.createElement('script');
        leftIrisScript.id = 'leftIrisScript';
        leftIrisScript.type = 'text/javascript';
        leftIrisScript.event = 'EnrollLeftIrisStrEvent(sIrisLeft_Small,sIrisLeft_Big,sIrisLeft_I8, EnrollResult)';
        leftIrisScript.setAttribute('for', 'sy305');
        leftIrisScript.innerHTML = "document.getElementById('leftFeature').value=sIrisLeft_Big";
        document.body.appendChild(leftIrisScript);
      }
    },
    createRightFeatureEventScript() {
      if (!document.getElementById('rightIrisScript')) {
        let rightIrisScript = document.createElement('script');
        rightIrisScript.id = 'rightIrisScript';
        rightIrisScript.type = 'text/javascript';
        rightIrisScript.event = 'EnrollRightIrisStrEvent(sIrisRight_Small,sIrisRight_Big,sIrisRight_I8, EnrollResult)';
        rightIrisScript.setAttribute('for', 'sy305');
        rightIrisScript.innerHTML = "document.getElementById('rightFeature').value=sIrisRight_Big";
        document.body.appendChild(rightIrisScript);
      }
    },
    updateIrisInfo() {
      let leftFeatureInfo, rightFeatureInfo;
      if (!this.form.criminalIris.id) {
        leftFeatureInfo = document.getElementById('leftFeature').value;
        rightFeatureInfo = document.getElementById('rightFeature').value;
      } else {
        leftFeatureInfo = this.form.criminalIris.leftFeature;
        rightFeatureInfo = this.form.criminalIris.rightFeature;
      }
      this.$set(this.form.criminalIris, 'leftFeature', leftFeatureInfo);
      this.$set(this.form.criminalIris, 'rightFeature', rightFeatureInfo);
      if (!this.form.criminalIris.id) {
        this.$store.commit('updateCriminalIris', this.form.criminalIris);
      } else {
        leftFeatureInfo = this.form.criminalIris.leftFeature;
        rightFeatureInfo = this.form.criminalIris.rightFeature;
        this.$store.commit('updateCriminalIris', this.form.criminalIris);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-biometric {
  // background: red;
  padding: 20px;
  .biometric-box {
    border: 1px dashed #ddd;
    padding: 25px 18px 20px 38px;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    & + .biometric-box {
      margin-top: 20px;
    }
    .biometric-card {
      margin: 20px 20px 0 0;
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      text-align: center;
      flex-shrink: 0;
      box-sizing: border-box;
      .body {
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
  .button-delete {
    position: absolute;
    background: #37474f;
    bottom: 0;
    left: 0;
    border: 0;
    width: 100%;
    height: 26px;
    color: #fff;
    border-radius: 0;
    z-index: 100;
    &:hover {
      background: rgba(#37474f, 0.9);
    }
  }
  .has-button {
    flex-shrink: 0;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
    .button-confirm {
      float: right;
    }
  }
  .icon-zhiwenjiesuo {
    color: #e0e5ec;
    font-size: 72px;
    z-index: 5;
    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: 100px;
    }
  }
  .icon-hongmoshibie {
    color: #e0e5ec;
    font-size: 72px;
    z-index: 5;
    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: 100px;
    }
  }
  .settedPrint {
    background: url('../../../assets/images/fingerPrint.png') no-repeat;
    irisphoto: 80px 80px;
    background-position: center center;
  }
  .setted {
    background: url('../../../assets/images/avatar.jpg') no-repeat;
    background-size: 80px 80px;
    background-position: center center;
  }
  .settedIris {
    background: url('../../../assets/images/irisPhoto.png') no-repeat;
    background-size: 80px 80px;
    background-position: center center;
  }
}
</style>
