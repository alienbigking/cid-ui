<template>
  <div class="detail-card">
    <h3 class="card-title">{{ prisonDepartment.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>部门：</label><span>{{ prisonDepartment.name }}</span>
        </el-col>
        <el-col :span="12">
          <label>上级部门：</label><span>{{ prisonDepartment.parentDepartmentName }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>创建时间：</label><span>{{ prisonDepartment.createdTime | moment }}</span>
        </el-col>
        <el-col :span="12">
          <label>最后更新时间：</label><span>{{ prisonDepartment.lastUpdatedTime | moment }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="card-body">
      <label>部门描述：</label>
      <div class="detail">{{ prisonDepartment.description }}</div>
      <el-button @click="onBack">返 回</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      prisonDepartment: state => state.prisonDepartment.prisonDepartment
    })
  },
  created() {
    this.getPrisonDepartment(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPrisonDepartment"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
