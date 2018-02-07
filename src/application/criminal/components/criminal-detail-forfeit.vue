<template>
  <div
    class="list-box"
    v-if="forfeitShow">
    <el-table
      class="table40"
      :data="allCriminalForfeits"
      v-loading="loading"
      header-row-class-name="tableHeader">
      <el-table-column
        prop="receiptNumber"
        label="罚金单据号"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="amount"
        label="缴纳罚金"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="payee"
        label="收款单位"
        :show-overflow-tooltip="true"/>
      <el-table-column
        prop="paymentDate"
        label="缴纳日期" >
        <template slot-scope="scope">
          {{ scope.row.createdTime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="创建时间" >
        <template slot-scope="scope">
          {{ scope.row.createdTime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="lastUpdatedTime"
        label="最后更新时间" >
        <template slot-scope="scope">
          {{ scope.row.lastUpdatedTime | moment }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    forfeitShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      allCriminalForfeits: state => state.criminal.allCriminalForfeits
    })
  },
  created() {
    this.getAllCriminalForfeits(this.$route.params.id)
      .then(() => { this.loading = false; })
      .catch(() => { this.loading = false; });
  },
  methods: {
    ...mapActions([ "getAllCriminalForfeits" ])
  }
};
</script>
