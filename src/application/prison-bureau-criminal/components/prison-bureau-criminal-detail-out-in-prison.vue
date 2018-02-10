<template>
  <div
    class="list-box"
    v-if="outInPrisonShow">
    <el-table
      class="table40"
      :data="allCriminalOutInPrisons"
      v-loading="loading"
      header-row-class-name="table-header">
      <el-table-column
        prop="reasonName"
        label="出入监事由"
        :show-overflow-tooltip="true"
        width="100px"
        sortable/>
      <el-table-column
        prop="outgoingDate"
        label="出监日期"
        sortable>
        <template slot-scope="scope">
          {{ scope.row.createdTime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="entryDate"
        label="入监日期"
        sortable>
        <template slot-scope="scope">
          {{ scope.row.createdTime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="创建时间"
        sortable>
        <template slot-scope="scope">
          {{ scope.row.createdTime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="lastUpdatedTime"
        label="最后更新时间"
        sortable>
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
    outInPrisonShow: {
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
      allCriminalOutInPrisons: state => state.prisonBureauCriminal.allCriminalOutInPrisons
    })
  },
  created() {
    this.getAllPrisonBureauCriminalOutInPrisons(this.$route.params.id)
      .then(() => { this.loading = false; })
      .catch(() => { this.loading = false; });
  },
  methods: {
    ...mapActions([ "getAllPrisonBureauCriminalOutInPrisons" ])
  }
};
</script>
