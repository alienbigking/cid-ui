<template>
    <div>
        <div class="card">
            <span class="um-title">十一监区 - 明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>上级监区：</label><span>十二监区</span>
                    </el-col>
                    <el-col :span="12">
                        <label>编号：</label><span> 934389</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>创建时间：</label><span>2010-10-10 12:12:12</span>
                    </el-col>
                    <el-col :span="12">
                        <label>最后更新时间：</label><span>2010-10-10 12:12:12</span>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="card padding20">
            <div class="form-container">
                <label class="title">监区描述：</label>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <el-button>返回</el-button>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
       this.login(this.user);
       this.$router.push('dashboard');
    }
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
