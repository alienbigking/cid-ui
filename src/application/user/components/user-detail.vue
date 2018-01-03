<template>
    <div>
        <div class="card">
            <span class="um-title">{{ user.name }} - 明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>姓名：</label><span>{{ user.name }}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>用户账号：</label><span>{{ user.username }}</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>用户状态：</label><span>{{ user.status | enumText(userStatuses)}}</span>
                    </el-col>
                </el-row>   
                <el-row type="flex" justify="space-between">
                     <el-col :span="12">
                        <label>创建时间：</label><span>{{ user.createdTime | moment }}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>最后更新时间：</label><span>{{ user.lastUpdatedTime | moment }}</span>
                    </el-col>
                </el-row>
            </div>
            <div class="padding20">
               <div class="form-container">
                    <label class="title">用户所属租户：</label>
                    <el-col :span="12">
                        <label>租户账户：</label><span>{{ user.tenantId }}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>租户名称：</label><span>{{ user.tenantName }}</span>
                    </el-col>
                </div>
                <el-button @click="onBack">返回</el-button>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { default as userStatusService } from "../service/user-status-service";

export default {
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  created() {
    this.getUser(this.$route.params.id);
    this.userStatuses = userStatusService.getAll();
  },
  methods: {
    ...mapActions(["getUser"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.form-container {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 20px 20px 20px 41px;
  font-size: 14px;
  label {
    font-weight: bold;
    color: #333;
    width: 148px;
    padding-top: 20px;
    line-height: 1;
    box-sizing: border-box;
    float: left;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    padding-top: 20px;
    width: calc(100% - 148px);
    color: #333;
    height: 14px;
    vertical-align: middle;
  }
  .el-row .el-col-12:first-child {
    span {
      width: calc(100% - 198px);
    }
  }
  .title {
    display: block;
    margin-bottom: 10px;
    float: none;
    padding-top: 0;
    & + div {
      line-height: 24px;
    }
  }
}
.padding20 {
  padding-bottom: 20px;
  padding-right: 20px;
  overflow: hidden;
  background: #fff;
  border-top: 1px solid #ddd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  button {
    float: right;
  }
}
</style>
