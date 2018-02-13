<template>
  <div class="detail-card">
    <h3 class="title">{{ prisonBureauDepartment.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>上级监区：</label><span>{{ prisonBureauDepartment.parentDepartmentName }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>创建时间：</label><span>{{ prisonBureauDepartment.createdTime | moment }}</span>
        </el-col>
        <el-col :span="12">
          <label>最后更新时间：</label><span>{{ prisonBureauDepartment.lastUpdatedTime | moment }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="card-body">
      <label class="title">监区描述：</label>
      <div class="detail">
        {{ prisonBureauDepartment.description }}
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
      prisonBureauDepartment: state => state.prisonBureauDepartment.prisonBureauDepartment
    })
  },
  created() {
    this.getPrisonBureauDepartment(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPrisonBureauDepartment"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
