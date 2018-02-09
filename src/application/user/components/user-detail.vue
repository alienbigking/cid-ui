<template>
  <div
    class="detail-card"
    v-loading="loading">
    <h3 class="title">{{ user.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>账号：</label><span>{{ user.username }}</span>
        </el-col>
        <el-col :span="12">
          <label>名称：</label><span>{{ user.name }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>状态：</label><span>{{ user.status | enumText(userStatuses) }}</span>
        </el-col>
        <el-col :span="12">
          <label>租户名称：</label><span>{{ user.tenantName }}</span>
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
      <el-row>
        <el-col :span="24">
          <label>角色：</label><span>{{ user.roleNames ? user.roleNames.join("、") : "" }}</span>
        </el-col>
      </el-row>
      <el-row class="detail">
        <el-col :span="24">
          <label>权限：</label>
          <el-tree
            v-show="!loading"
            ref="tree"
            :data="permissions"
            :props="{ label: 'name' }"
            default-expand-all
            class="tree"
            node-key="id" />
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
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      permissions: state => state.user.permissions
    })
  },
  created() {
    this.getUser(this.$route.params.id).then(() => {
      this.getPermissions(this.$route.params.id).then(() => {
        this.loading = false;
      });
    });
    this.userStatuses = userStatusService.getAll();
  },
  methods: {
    ...mapActions(["getUser", "getPermissions"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
