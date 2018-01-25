<template>
<div class="showtext">
  <object classid="CLSID:0B6CD28F-5650-4FC9-877D-F8398F5A656F"	codebase="mxCapacitiveDriver.ocx" :id="id" ref="abc" height=0 width=0>
  </object>
  <el-row :gutter="10">
      <el-col :span="12">
          <el-card >
              <img class="getImage" v-bind:src="imgUrl">
              <div>
                  <el-col>
                  <el-button class="button-addInEdit" @click="getFingerPrint">录取指纹</el-button>
                  </el-col>
              </div>
          </el-card>
      </el-col>
      <el-col :span="12">
          <el-card >
              <img class="getImage" v-bind:src="imgUrl_face">
          </el-card>
      </el-col>
  </el-row>
</div>
</template>

<script>

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
        console.log('1111', this.$el.querySelector('#' + this.id));
    },
    methods: {
        getFingerPrint() {
            console.log('1111', this.$el.querySelector('#' + this.id));
            console.log(this.$refs.abc);
            let iDevIndex = 0;
            let imge = this.$el.querySelector('#' + this.id).GetImage(iDevIndex, 1000);
            let UUID = require('uuid');
            let filename = UUID.v1() + ".bmp";
            let curPath = this.imgUrl + "D:\\repository\\" + this.params + "\\";
            if (imge === 0) {
                this.fpDevObj.ImageToBmpFile(curPath + filename, imge);
            }
            this.imgUrl = curPath + filename;
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


