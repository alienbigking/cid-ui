<template>
  <div class="showtext">
    <object
      classid="CLSID:0B6CD28F-5650-4FC9-877D-F8398F5A656F"
      codebase="mxCapacitiveDriver.ocx"
      :id="id"
      ref="abc"
      height=0
      width=0 />
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <img
            class="getImage"
            id="img1"
            ref="test"
            src='/static/Img.bmp'>
          <div>
            <el-col>
              <el-button
                class="button-addInEdit"
                @click="getFingerPrint">录取指纹</el-button>
              <el-input
                type="file"
                id="img_text" />
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card >
          <img class="getImage">
          <el-col>
            <el-button
              class="button-addInEdit"
              @click="js_enroll">录取虹膜</el-button>
            <el-input
              type="file"
              id="img_text" />
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {default as collectionService} from '../service/criminal-collection-service';

export default {
    data() {
        return {
             id: "asd",
             imgUrl: "",
             params: ""
        };
    },
    created() {
        this.params = this.$route.params.id;
    },
    methods: {
        getFingerPrint() {
            this.imgUrl = '';
            if (this.imgUrl === '') {
                let iDevIndex = 0;
                var img1 = this.$el.querySelector('#' + this.id).GetImage(iDevIndex, 1000);
                if (collectionService.IsSuccess(img1) === 0) {
                    console.log(img1);
                    var curPath = "c:\\1234\\";
                    alert(img1);
                    console.log(curPath);
                    this.$el.querySelector('#' + this.id).ImageToBmpFile(curPath + "54321.bmp", img1);
                }
            }
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
