<template>
  <div class="showtext">
    <object
      classid="CLSID:0B6CD28F-5650-4FC9-877D-F8398F5A656F"
      codebase="mxCapacitiveDriver.ocx"
      ref="abc"
      height=0
      :id="id"
      width=0 />
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
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <img
            class="getImage"
            id="img1"
            ref="test">
          <div>
            <el-button
              class="button-addInEdit"
              @click="getFingerPrint">录取指纹</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card >
          <img
            class="getImage"
            :src="picture">
          <el-button
            class="button-addInEdit"
            @click="getPicture">录取虹膜</el-button>
          <el-button
            class="button-addInEdit"
            @click="Photoing">拍照</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script language="JavaScript" type="text/javascript" for="sy305" event="PhotoCaptureEvent(CaptureKind, ImageFile)">
</script>

<script>
// window.onload = function() {
//   document.getElementById('#sy305').Burger = "{\"client_id\":\"gkzx\",\"capture_realtime_iris\":\"0\",\"with_big_iris\":\"1\",\"iris_with_bkcapture\":\"1\",\"iris_bkcapture_camera\":\"2\",\"capture_path\":\"d:\\sy305photoB\",\"bkcapture_path\":\"d:\\\\sy305photoA\"}";
// };
import {default as prisonCollectionService} from '../service/prison-criminal-collection-service';

export default {
    props: {
      editDialogVisible: {
        type: Boolean,
        default: false
    }
    },
    data() {
        return {
             id: "asd",
             imgUrl: "",
             params: "",
             picture: ""
        };
    },
    created() {
        this.params = this.$route.params.id;
        // this.$refs.photo.Burger = "{\"client_id\":\"gkzx\",\"capture_realtime_iris\":\"0\",\"with_big_iris\":\"1\",\"iris_with_bkcapture\":\"1\",\"iris_bkcapture_camera\":\"2\",\"capture_path\":\"d:\\\\sy305photoB\",\"bkcapture_path\":\"d:\\\\sy305photoA\"}";
    },
    methods: {
        getFingerPrint() {
            this.imgUrl = '';
            if (this.imgUrl === '') {
                let iDevIndex = 0;
                console.log(this.$refs.abc);
                var img1 = this.$el.querySelector('#' + this.id).GetImage(iDevIndex, 1000);
                console.log(img1);
                if (prisonCollectionService.IsSuccess(img1) === 0) {
                    console.log(img1);
                    var curPath = "c:\\1234\\";
                    alert(img1);
                    console.log(curPath);
                    this.$el.querySelector('#' + this.id).ImageToBmpFile(curPath + "54321.bmp", img1);
                }
            }
        },
        getPicture() {
            console.log(this.$el.querySelector('#sy305'));
            let r = this.$el.querySelector('#sy305').InitPhotoCapture(1);
            console.log(r);
        },
        Photoing() {
                      console.log(this.$el.querySelector('#sy305'));
            let r = this.$el.querySelector('#sy305').InitPhotoCapture(1);
            console.log(r);
            let sy306 = this.$el.querySelector('#sy305');
            console.log('拍照成功');
            console.log(sy306);
            let curpath = "c:\\123\\test.bmp";
            let a = sy306.PhotoCapture(0, curpath);
            alert(a);
                alert(1234);
                let info = sy306.GetExtraInfo("capture_base64");
                alert(info);
                this.picture = "data:image/bmp;base64," + info;
        }
    }
};

</script>

<style lang="scss" scoped>
.showtext{
    height: 600px;
}
div {
    .el-card{
        height: 400px;
    }
    .getImage{
        height: 200px;
        width: 400px;
        border: 1px solid #DDDDDD;
    }
}
</style>
