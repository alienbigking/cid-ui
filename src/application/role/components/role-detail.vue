<template>
  <div class="detail-card">
    <h3 class="card-title">{{ role.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>角色名称：</label><span> {{ role.name }}</span>
        </el-col>
        <el-col :span="12">
          <label>创建时间：</label><span> {{ role.createdTime | moment }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>最后更新时间：</label><span> {{ role.lastUpdatedTime | moment }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="card-body">
      <label>角色描述：</label>
      <div class="detail">
        {{ role.description }}
      </div>
      <el-button @click="onBack">返 回</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      role: state => state.role.role
    })
  },
  created() {
    this.getRole(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getRole"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
