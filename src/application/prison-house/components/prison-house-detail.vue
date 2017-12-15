<template>
    <div>
        <div class="card">
            <span class="um-title">十一监舍 - 明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>编号：</label><span> {{prisonHouse.id}}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>创建时间：</label><span> {{prisonHouse.createdTime}}</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>最后更新时间：</label><span> {{prisonHouse.lastUpdatedTime}}</span>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="card padding20">
            <div class="form-container">
                <label class="title">监舍描述：</label>
                <div>
                    {{prisonHouse.description}}
                </div>
            </div>
            <el-button @click="goBack">返回</el-button>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      prisonHouse: _.cloneDeep(this.$store.state.prisonHouse.prisonHouse)
    };
  },
  methods: {
    ...mapActions(["getPrisonHouse"]),
    goBack() {
        this.$router.go(-1);
    }
  },
  created() {
    this.getPrisonHouse(this.$route.params.id).then(() => {
      this.prisonHouse = _.cloneDeep(this.$store.state.prisonHouse.prisonHouse);
    });
  }
};
</script>
<style lang="scss" scoped>
.form-container{
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding: 20px 20px 20px 41px;
    font-size: 14px;
    label{
        font-weight: bold;
        color: #333;
        display: inline-block;
        width: 148px;
        box-sizing: border-box;
    }
    span{
        display: inline-block;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        padding-bottom: 19px;
        padding-top: 20px;
        width: calc(100% - 148px);
        color: #333;
    }
    .el-row .el-col-12:first-child{
        span{
            width: calc(100% - 198px);
        }
    }
    .title{
        display: block;
        margin-bottom: 10px;
        &+div{
            line-height: 24px;
        }
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
