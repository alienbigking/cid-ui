<template>
  <div class="detail-card">
      <h3 class="card-title">日志明细</h3>
      <div class="card-body">
          <el-row>
              <el-col :span="12">
                  <label>操作人：</label><span>{{ log.operator }}</span>
              </el-col>
              <el-col :span="12">
                  <label>类别：</label><span>{{ log.type | enumText(logTypes) }}</span>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="12">
                  <label>动作：</label><span>{{ log.action }}</span>
              </el-col>
              <el-col :span="12">
                 <label>创建时间：</label><span>{{ log.createdTime | moment }}</span>
             </el-col>
          </el-row>
      </div>
      <div class="card-body">
          <label>日志详情：</label>
          <div class="detail">
              {{log.detail}}
          </div>
          <el-button @click="onBack">返 回</el-button>
      </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { default as logTypeService } from "../service/log-type-service";

export default {
  computed: {
    ...mapState({
      log: state => state.log.log
    })
  },
  created() {
    this.getLog(this.$route.params.id);
    this.logTypes = logTypeService.getAll();
  },
  methods: {
    ...mapActions(["getLog"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
