<template>
<div>
  <!-- 基本信息 -->
  <div class="card">
    <div class="title" @click="isShowInformation">
        基本信息
        <span class="iconfont" :class="informationShow?'icon-unfold':'icon-enter'"></span>
    </div>
    <div v-if="informationShow">
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>编号：</label><span>12534543</span>
                </el-col>
                <el-col :span="6">
                    <label>姓名：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>别化名：</label><span>身份不明</span>
                </el-col>
                <el-col :span="6">
                    <label>性别：</label><span>汉</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>出生日期:</label><span>检查院</span>
                </el-col>
                <el-col :span="6">
                    <label>身份证号：</label><span>12534543</span>
                </el-col>
                <el-col :span="6">
                    <label>婚否：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>民族：</label><span>院士</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>国籍：</label><span>国名党</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍类型：</label><span>吹牛皮</span>
                </el-col>
                <el-col :span="6">
                    <label>国家(出生地)：</label><span>科学家</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>省份编号：</label><span>65465446546546546</span>
                </el-col>
                <el-col :span="6">
                    <label>省份：</label><span>吹牛皮</span>
                </el-col>
                <el-col :span="6">
                    <label>城市编号：</label><span>已婚</span>
                </el-col>
                <el-col :span="6">
                    <label>城市：</label><span>科学家</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>县编号：</label><span>65465446546546546</span>
                </el-col>
                <el-col :span="6">
                    <label>县：</label><span>吹牛皮</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>户籍地址国家编号:</label><span></span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址国家名称：</label><span>12534543</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址省份编号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址省份名称：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>户籍地址城市编号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址城市名称：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址县编号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>户籍地址县名称：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>户籍地址街道详情：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址国家编号：</label><span></span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址国家名称：</label><span>湖南省</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址省份编号：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>家庭地址省份名称：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址城市编号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址城市名称：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址县编号：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>家庭地址县名称：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>家庭地址街道详情：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>政治面貌编号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>政治面貌名称：</label><span>狗蛋</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>曾经加入的党派团体：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>文化程度编号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>文化程度名称：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>职业：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>特殊技能：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>累惯犯：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>四涉：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>四史：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>流窜类别编号：</label><span>吹牛皮</span>
                </el-col>
                <el-col :span="6">
                    <label>流窜类别名称：</label><span>6546544</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>分管等级编号：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>分管等级名称：</label><span>吹牛皮</span>
                </el-col>
                <el-col :span="6">
                    <label>分押类别编号：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>分押类别名称：</label><span>6546544</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>减刑尺度编号：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>减刑尺度名称：</label><span>吹牛皮</span>
                </el-col>
            </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>监区标识：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>监区名称：</label><span>吹牛皮</span>
                </el-col>
                <el-col :span="6">
                    <label>监舍标识：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>监舍名称：</label><span>6546544</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>床位号：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>备注：</label><span>吹牛皮</span>
                </el-col>
                <el-col :span="6">
                    <label>创建时间：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>最后更新时间：</label><span>6546544</span>
                </el-col>
            </el-row>
        </div>
    </div>
  </div>
  <!-- 犯罪记录 -->
  <div class="card">
      <div class="title" @click="isShowRecord">
        犯罪记录
        <span class="iconfont" :class="recordShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="recordShow">
        <el-table class="table40" :data="tableData" header-row-class-name="tableHeader40">
          <el-table-column prop="a" label="类别"> </el-table-column>
          <el-table-column prop="s" label="开始日期"> </el-table-column>
          <el-table-column prop="d" label="截至日期"> </el-table-column>
          <el-table-column prop="f" label="罪名"> </el-table-column>
          <el-table-column prop="g" label="判处日期"> </el-table-column>
          <el-table-column prop="h" label="刑期"> </el-table-column>
          <el-table-column prop="j" label="关押"> </el-table-column>
          <el-table-column prop="k" label="备注"> </el-table-column>
        </el-table>
      </div>
  </div>
  <!-- 简历 -->
  <div class="card">
      <div class="title" @click="isShowResume">
        简历
        <span class="iconfont" :class="resumeShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="resumeShow">
        <el-table class="table40" :data="tableData" header-row-class-name="tableHeader40">
          <el-table-column prop="s" label="开始日期"> </el-table-column>
          <el-table-column prop="d" label="截至日期"> </el-table-column>
          <el-table-column prop="f" label="单位"> </el-table-column>
          <el-table-column prop="g" label="捕前单位标记"> </el-table-column>
          <el-table-column prop="h" label="职业"> </el-table-column>
          <el-table-column prop="j" label="职务"> </el-table-column>
        </el-table>
      </div>
  </div>
  <!-- 体貌特征 -->
  <div class="card">
      <div class="title" @click="isShowFeature">
        体貌特征
        <span class="iconfont" :class="featureShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div v-if="featureShow">
        <div class="form-container">
          <el-row type="flex">
              <el-col :span="6">
                  <label>身高(cm):</label><span>检查院</span>
              </el-col>
              <el-col :span="6">
                  <label>体型：</label><span>12534543</span>
              </el-col>
              <el-col :span="6">
                  <label>血型：</label><span>狗蛋</span>
              </el-col>
              <el-col :span="6">
                  <label>脸型：</label><span>身份不明</span>
              </el-col>
          </el-row>
          <el-row type="flex">
              <el-col :span="6">
                  <label>口音：</label><span>检查院</span>
              </el-col>
              <el-col :span="6">
                  <label>足长(cm)：</label><span>12534543</span>
              </el-col>
              <el-col :span="6">
                  <label>鞋号：</label><span>狗蛋</span>
              </el-col>
              <el-col :span="6">
                  <label>体重(kg)：</label><span>身份不明</span>
              </el-col>
          </el-row>
          <el-row type="flex">
              <el-col :span="24">
                  <label class="rowTitle">特征：</label>
                  <div class="rowTwo">
                    赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万
                    赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万
                    赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万 赔偿二十万
                  </div>
              </el-col>
          </el-row>
        </div>
      </div>
  </div>
  <!-- 社会关系 -->
  <div class="card">
      <div class="title" @click="isShowSocialRelation">
        社会关系
        <span class="iconfont" :class="socialRelationShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="socialRelationShow">
        <el-table class="table40" :data="tableData" header-row-class-name="tableHeader40">
          <el-table-column prop="a" label="称谓"> </el-table-column>
          <el-table-column prop="s" label="姓名"> </el-table-column>
          <el-table-column prop="d" label="年龄"> </el-table-column>
          <el-table-column prop="f" label="所在单位"> </el-table-column>
          <el-table-column prop="g" label="家庭住址"> </el-table-column>
          <el-table-column prop="h" label="职业"> </el-table-column>
          <el-table-column prop="j" label="面貌"> </el-table-column>
          <el-table-column prop="k" label="电话"> </el-table-column>
          <el-table-column prop="k" label="主联系人"> </el-table-column>
        </el-table>
      </div>
  </div>
</div>

</template>
<script>
// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tableData: [{ a: "hhhhhhhh", s: "hhhhhhhh", d: "hhhhhhhh", f: "hhhhhhhh", g: "hhhhhhhh", h: "hhhhhhhh", j: "hhhhhhhh", k: "hhhhhhhh" }],
      informationShow: true,
      recordShow: false,
      resumeShow: false,
      featureShow: false,
      socialRelationShow: false
    };
  },
  methods: {
    isShowInformation() {
      this.informationShow = !this.informationShow;
    },
    isShowRecord() {
      this.recordShow = !this.recordShow;
    },
    isShowResume() {
      this.resumeShow = !this.resumeShow;
    },
    isShowFeature() {
      this.featureShow = !this.featureShow;
    },
    isShowSocialRelation() {
      this.socialRelationShow = !this.socialRelationShow;
    }
  }
};
</script>
<style lang="scss" scoped>
.card{
  .title{
    display: block;
    padding:20px;
    color: #333;
    font-size:14px;
    cursor: pointer;
  }
  .iconfont{
    float: right;
  }
  .list-box {
    margin-left: 0px;
    padding: 30px 20px 20px 20px;
  }
}
.form-container {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 20px 20px 20px 41px;
  font-size: 14px;
  border-top: 1px solid #ddd;
  label {
    color: #666;
    display: inline-block;
    font-size: 14px;
    box-sizing: border-box;
    float: left;
    padding-top: 20px;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    margin-left:8px;
    padding-bottom: 10px;
    padding-top: 20px;
    width: calc(100% - 150px);
    color: #333;
    height: 14px;
    vertical-align: middle;
  }
  .rowTitle {
    height:47px;
    background: #fff;
  }
  .rowTwo {
    background: url(../../../assets/images/rowtwo.png) 100% 100% repeat;
    margin-top: 3px;
    line-height: 45px;
  }
  .colpre50 {
    width: 12%;
  }
  .collast50 {
    width: calc(88% - 150px);
  }
  .colpre25 {
    width: 28%;
  }
  .collast25 {
    width: calc(65% - 96px);
  }
}
</style>
