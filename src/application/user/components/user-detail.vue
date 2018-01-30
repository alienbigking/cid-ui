<template>
  <div class="detail-card">
    <h3 class="card-title">{{ user.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>姓名：</label><span>{{ user.name }}</span>
        </el-col>
        <el-col :span="12">
          <label>用户账号：</label><span>{{ user.username }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>用户状态：</label><span>{{ user.status | enumText(userStatuses) }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>创建时间：</label><span>{{ user.createdTime | moment }}</span>
        </el-col>
        <el-col :span="12">
          <label>最后更新时间：</label><span>{{ user.lastUpdatedTime | moment }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="card-body">
      <label class="title">所属租户</label>
      <el-row class="detail">
        <el-col :span="12">
          <label>租户名称：</label><span>{{ user.tenantName }}</span>
        </el-col>
      </el-row>
      <el-button @click="onBack">返 回</el-button>
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
.detail{
  margin-top: 0;
}
</style>
