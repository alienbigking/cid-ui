<template>
  <div class="detail-card">
    <h3 class="title">{{ prisonArea.name }} - 明细</h3>
    <div class="card-body">
      <el-row>
        <el-col :span="12">
          <label>上级监区：</label><span>{{ prisonArea.parentPrisonAreaName }}</span>
        </el-col>
        <el-col :span="12">
          <label>编号：</label><span> {{ prisonArea.code }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <label>创建时间：</label><span>{{ prisonArea.createdTime | moment }}</span>
        </el-col>
        <el-col :span="12">
          <label>最后更新时间：</label><span>{{ prisonArea.lastUpdatedTime | moment }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="card-body">
      <label>监区描述：</label>
      <div class="detail">
        {{ prisonArea.description }}
      </div>
      <el-button @click="onBack">返 回</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      prisonArea: state => state.prisonArea.prisonArea
    })
  },
  created() {
    this.getPrisonArea(this.$route.params.id);
  },
  methods: {
    ...mapActions(['getPrisonArea']),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
