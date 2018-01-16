<template>
  <div class="detail-card">
      <h3 class="card-title">{{ tenant.name }} - 明细</h3>
      <div class="card-body">
          <el-row>
              <el-col :span="12">
                  <label>编号：</label><span>{{ tenant.code }}</span>
              </el-col>
              <el-col :span="12">
                  <label>创建时间：</label><span>{{ tenant.createdTime | moment }}</span>
              </el-col>
          </el-row>
          <el-row>
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

export default {
  computed: {
    ...mapState({
      tenant: state => state.tenant.tenant
    })
  },
  created() {
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
</style>
