<template>
    <div>
        <div class="card padding20">
            <span class="um-title">十一监舍 - 明细</span>
            <div class="form-container">
                <el-row :span="24">
                    <el-col :span="5">
                        <label>编号：</label><span> {{houseDetail.did}}</span>
                    </el-col>
                    <el-col :span="8">
                        <label>创建时间：</label><span> {{houseDetail.createdTime}}</span>
                    </el-col>
                    <el-col :span="10">
                        <label>最后更新时间：</label><span> {{houseDetail.updateTime}}</span>
                    </el-col>
                </el-row>
                <el-row class="title" :span="24">
                    <el-col :span="24">
                        <label>监区描述：</label><span> 一二三四五六七一二三四五六七一二三四五六七一二三四五六七一二三四五六七一二三四五六七一二三四五六七一二三四五六七一二三四五六七一二三四五六七</span>
                    </el-col>
                </el-row>
            </div>
            <el-button>返回</el-button>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      houseDetail: {
        did: "934389",
        createdTime: "2010-10-10 12:30:23",
        updateTime: "2017-10-10 12:30:23"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.form-container{
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding: 20px 0px 20px 28px;
    font-size: 14px;
    label{
        color: #666;
        font-size:14px;
        box-sizing: border-box;
    }
    .title{
        display: block;
        margin-top:15px;
        margin-bottom: 10px;
    }
}
.padding20{
    padding-bottom: 20px;
    padding-right: 20px;
    overflow: hidden;
    button{
        float: right;
    }
}
</style>
