<template>
  <div class="list-box">
    <el-table
      class="table40"
      :data="allCriminalSocialRelations"
      v-loading="loading"
      header-row-class-name="tableHeader"
      style="width:100%">
      <el-table-column
        prop="appellation"
        label="称谓"
        :show-overflow-tooltip="true"
        width="80px"/>
      <el-table-column
        prop="name"
        label="姓名"
        :show-overflow-tooltip="true"
        width="80px"/>
      <el-table-column
        prop="age"
        label="年龄"
        width="50px"/>
      <el-table-column
        prop="company"
        label="公司"
        :show-overflow-tooltip="true"
        align="center"
        width="160px"/>
      <el-table-column
        prop="occupation"
        label="职业"
        :show-overflow-tooltip="true"
        width="80px"/>
      <el-table-column
        prop="politicalStatusName"
        label="政治面貌"
        :show-overflow-tooltip="true"
        width="100px"/>
      <el-table-column
        prop="createdTime"
        label="创建时间"
        align="center" >
        <template slot-scope="scope">
          {{ scope.row.createdTime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
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
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      allCriminalSocialRelations: state => state.prisonCriminal.allCriminalSocialRelations
    })
  },
  created() {
    this.getAllCriminalSocialRelations(this.$route.params.id)
      .then(() => { this.loading = false; })
      .catch(() => { this.loading = false; });
  },
  methods: {
    ...mapActions([ "getAllCriminalSocialRelations" ])
  }
};
</script>
