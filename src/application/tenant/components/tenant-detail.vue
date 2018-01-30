<template>
  <div class="detail-card">
    <h3 class="card-title">{{ tenant.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>编号：</label><span>{{ tenant.code }}</span>
        </el-col>
        <el-col :span="12">
          <label>状态：</label><span>{{ tenant.status | enumText(userStatuses) }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>创建时间：</label><span>{{ tenant.createdTime | moment }}</span>
        </el-col>
        <el-col :span="12">
          <label>最后更新时间：</label><span>{{ tenant.lastUpdatedTime | moment }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="card-body">
      <label>租户描述：</label>
      <div class="detail">{{ tenant.description }}</div>
      <el-button @click="onBack">返 回</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { default as userStatusService } from "../../user/service/user-status-service";

export default {
  data() {
    return {
      userStatuses: []
    };
  },
  computed: {
    ...mapState({
      tenant: state => state.tenant.tenant
    })
  },
  created() {
    this.userStatuses = userStatusService.getAll();
    this.getTenant(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getTenant"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
