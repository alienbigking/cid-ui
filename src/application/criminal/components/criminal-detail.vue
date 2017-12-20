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
                  <label>档案号:</label><span>检查院</span>
              </el-col>
              <el-col :span="6">
                  <label>姓名：</label><span>12534543</span>
              </el-col>
              <el-col :span="6">
                  <label>别名：</label><span>狗蛋</span>
              </el-col>
              <el-col :span="6">
                  <label>身份情况：</label><span>身份不明</span>
              </el-col>
          </el-row>
          <el-row type="flex">
              <el-col :span="6">
                  <label>名族：</label><span>汉</span>
              </el-col>
              <el-col :span="6">
                  <label>出生日期：</label><span>1990-10-10</span>
              </el-col>
          </el-row>
        </div>
        <div class="form-container">
          <el-row type="flex">
              <el-col :span="6">
                  <label>籍贯/国籍:</label><span>检查院</span>
              </el-col>
              <el-col :span="6">
                  <label>户籍分类：</label><span>12534543</span>
              </el-col>
              <el-col :span="6">
                  <label>出生地：</label><span>狗蛋</span>
              </el-col>
          </el-row>
          <el-row type="flex">
              <el-col :span="12">
                  <label>户籍住址：</label><span>汉</span>
              </el-col>
          </el-row>
        </div>
        <div class="form-container">
          <el-row type="flex">
              <el-col :span="6">
                  <label>捕前文化程度:</label><span>博士</span>
              </el-col>
              <el-col :span="6">
                  <label>现文化程度：</label><span>院士</span>
              </el-col>
              <el-col :span="6">
                  <label>捕前职业：</label><span>研究原子弹</span>
              </el-col>
              <el-col :span="6">
                  <label>捕前面貌：</label><span>国名党</span>
              </el-col>
          </el-row>
          <el-row type="flex">
              <el-col :span="6">
                  <label>身份证号：</label><span>65465446546546546</span>
              </el-col>
              <el-col :span="6">
                  <label>特长：</label><span>吹牛皮</span>
              </el-col>
              <el-col :span="6">
                  <label>婚姻：</label><span>已婚</span>
              </el-col>
              <el-col :span="6">
                  <label>工种：</label><span>科学家</span>
              </el-col>
          </el-row>
        </div>
        <div class="form-container">
            <el-row type="flex">
                <el-col :span="6">
                    <label>逮捕机关:</label><span>检查院</span>
                </el-col>
                <el-col :span="6">
                    <label>逮捕日期：</label><span>12534543</span>
                </el-col>
                <el-col :span="6">
                    <label>羁押日期：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>判决机关：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>判决日期：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>罪名：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>判决字号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>刑期：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>剥政年限：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>一审机关：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>一审字号：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>原案犯类别：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>收押类别：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>入监日期：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>调入日期：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>何处调来：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>看守所：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>前科次数：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>累惯犯：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>流窜类别：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>三涉：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>四史：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>团伙犯罪：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>团伙人数：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>队别：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>分管等级：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>分押类型：</label><span>狗蛋</span>
                </el-col>
                <el-col :span="6">
                    <label>减刑尺度：</label><span>狗蛋</span>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <label>档案查密等级：</label><span>6546544</span>
                </el-col>
                <el-col :span="6">
                    <label>执行通知书下达日期：</label><span>吹牛皮</span>
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
  <!-- 体貌特征 -->
  <div class="card">
      <div class="title" @click="isShowFeature">
        体貌特征
        <span class="iconfont" :class="featureShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="featureShow">
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
  <!-- 社会关系 -->
  <div class="card">
      <div class="title" @click="isShowSocialRelation">
        社会关系
        <span class="iconfont" :class="socialRelationShow?'icon-unfold':'icon-enter'"></span>
      </div>
      <div class="list-box" v-if="socialRelationShow">
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
</div>
  
</template>
<script>
// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tableData: [{ a: "hhhhhhhh", s: "hhhhhhhh", d: "hhhhhhhh", f: "hhhhhhhh", g: "hhhhhhhh", h: "hhhhhhhh", j: "hhhhhhhh", k: "hhhhhhhh" }],
      informationShow: false,
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
  }
  .iconfont{
    float: right;
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
}
</style>
