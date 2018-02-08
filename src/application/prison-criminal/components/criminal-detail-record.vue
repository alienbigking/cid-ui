<template>
  <div class="list-box">
    <el-table
      class="table40"
      :data="allCriminalRecords"
      v-loading="loading"
      header-row-class-name="tableHeader">
      <el-table-column
        prop="decisionAccusation"
        label="罪名"
        width="80px"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="prosecutionOrganName"
        label="起诉机关"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="firstTrialOrganName"
        label="一审机关"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="finalTrialOrganName"
        label="终审机关"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="decisionOrganName"
        label="判决机关"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="decisionDate"
        label="判决日期"/>
      <el-table-column
        prop="decisionPrisonTermStartDate"
        label="刑期开始日期"/>
      <el-table-column
        prop="decisionPrisonTermEndDate"
        label="刑期结束日期"/>
      <el-table-column
        align="center"
        prop="opretion"
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="onView(scope.row.id)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      allCriminalRecords: state => state.prisonCriminal.allCriminalRecords
    })
  },
  created() {
    this.getAllCriminalRecords(this.$route.params.id)
      .then(() => { this.loading = false; })
      .catch(() => { this.loading = false; });
  },
  methods: {
    ...mapActions([ "getAllCriminalRecords" ]),
    onView(id) {
      this.$router.push(`/prison-criminal/record-detail/${id}`);
    }
  }
};
</script>
