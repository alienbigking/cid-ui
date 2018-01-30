<template>
<div class="showtext">
  <object classid="CLSID:0B6CD28F-5650-4FC9-877D-F8398F5A656F"	codebase="mxCapacitiveDriver.ocx" :id="id" ref="abc" height=0 width=0>
  </object>
  <object  classid="clsid:BCC0CDFA-676A-43F2-B1D7-B4CD3FF72B6A" id="sy305"  style="width: 347px; height: 265px" >
  <param name="_Version" value="65536"/>
  <param name="_ExtentX" value="24262"/>
  <param name="_ExtentY" value="16219"/>
  <param name="_StockProps" value="0"/>
 </object>
  <el-row :gutter="10">
      <el-col :span="12">
          <el-card >
              <img class="getImage" id="img1" ref="test" src='/static/Img.bmp'>
              <div>
                  <el-col>
                  <el-button class="button-addInEdit" @click="getFingerPrint">录取指纹</el-button>
                  <el-input type="file" id="img_text">
                  </el-input>
                  </el-col>
              </div>
          </el-card>
      </el-col>
      <el-col :span="12">
          <el-card >
              <img class="getImage">
                <el-col>
                <el-button class="button-addInEdit" @click="js_enroll">录取虹膜</el-button>
                <el-input type="file" id="img_text">
                </el-input>
                </el-col>
          </el-card>
      </el-col>
  </el-row>
</div>
</template>

<script>
import {default as collectionService} from '../service/criminal-collection-service';
// const UUID = require('uuid/v1');

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
        getCurrentDirectory() {
            var locHref = location.href;
            var locArray = locHref.split("/");
            delete locArray[locArray.length - 1];
            var dirTxt = locArray.join("//");
            var temp = dirTxt.substring(11);
            var newtemp = "";
              // 需要过滤空格%20 UNICODE显示
            var i;
            for (i = 0; i < temp.length; i++) {
                if (temp.substr(i, 3) === "%20") {
                    newtemp = newtemp + " ";
                    i = i + 2;
                } else {
                    newtemp = newtemp + temp.substr(i, 1);
                }
            }
                // newtemp="D:\\repository\\";
                // alert(newtemp);
            return newtemp;
        },
        getFingerPrint() {
            this.imgUrl = '';
            if (this.imgUrl === '') {
                let iDevIndex = 0;
                var img1 = this.$el.querySelector('#' + this.id).GetImage(iDevIndex, 1000);
                if (collectionService.IsSuccess(img1) === 0) {
                    console.log(img1);
                    // document.getElementById("showtext").value =img1
                    var curPath = "c:\\1234\\";
                    alert(img1);
                    console.log(curPath);
                    this.$el.querySelector('#' + this.id).ImageToBmpFile(curPath + "54321.bmp", img1);
                    // document.getElementById("img1").src = curPath + "/static/" + "Img.bmp";
                }
                // let imge = this.$el.querySelector('#' + this.id).GetImage(iDevIndex, 1000);
                // let checked = collectionService.IsSuccess(imge);
                // let filename = UUID() + ".bmp";
                // let curPath = "/static/" + this.params + "/";
                // console.log(imge);
                // if (checked === 0) {
                //     this.$refs.abc.ImageToBmpFile(curPath + filename, imge);
                //     console.log('attation');
                // }
                // this.imgUrl = curPath + filename;
                // if (!window.FileReader) {
                //     alert("1234");
                // }
                // var imgFile = new FileReader();
                // imgFile.readAsDataUR(this.$el.querySelector('#img_text'));
                // console.log(this.$el.querySelector('#img_text').files[0]);
                // imgFile.onload = function() {
                //     var imgData = this.result; // base64数据
                // this.$refs.test.src = imgData;
                // // imgShow.setAttribute('src', imgData);
                // };
                // console.log(this.$refs.test.src);
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


