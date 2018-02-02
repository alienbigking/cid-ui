<template>
  <div class="detail-card">
    <h3 class="card-title">{{ prisonHouse.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>编号：</label><span> {{ prisonHouse.code }}</span>
        </el-col>
        <el-col :span="12">
          <label>创建时间：</label><span> {{ prisonHouse.createdTime | moment }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>最后更新时间：</label><span> {{ prisonHouse.lastUpdatedTime | moment }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="card-body">
      <label>监舍描述：</label>
      <div class="detail">{{ prisonHouse.description }}</div>
      <el-button @click="onBack">返 回</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      prisonHouse: state => state.prisonHouse.prisonHouse
    })
  },
  created() {
    this.getPrisonHouse(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPrisonHouse"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
