<template>
  <div class="list-box" v-if="recordShow">
        <el-table class="table40" :data="allCriminalRecords" header-row-class-name="tableHeader40">
          <el-table-column align="center" prop="decisionAccusation" label="罪名"> </el-table-column>
          <el-table-column align="center" prop="prosecutionOrganName" label="起诉机关"> </el-table-column>
          <el-table-column align="center" prop="firstTrialOrganName" label="一审机关"> </el-table-column>
          <el-table-column align="center" prop="finalTrialOrganName" label="终审机关"> </el-table-column>
          <el-table-column align="center" prop="decisionOrganName" label="判决机关"> </el-table-column>          
          <el-table-column align="center" prop="decisionDate" label="判决日期"> </el-table-column>
          <el-table-column align="center" prop="decisionPrisonTermStartDate" label="刑期开始日期"> </el-table-column>
          <el-table-column align="center" prop="decisionPrisonTermEndDate" label="刑期结束日期"> </el-table-column>
          <el-table-column align="center" prop="opretion" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="onView(scope.row.id)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    recordShow: {
      type: Boolean
    }
  },
  computed: {
    ...mapState({
      allCriminalRecords: state => state.criminal.allCriminalRecords
    })
  },
  created() {
    this.getAllCriminalRecords(this.$route.params.id);
  },
  methods: {
    ...mapActions([ "getAllCriminalRecords" ]),
    onView(id) {
      this.$router.push(`/criminal/record-detail/${id}`);
    }
  }
};
</script>
