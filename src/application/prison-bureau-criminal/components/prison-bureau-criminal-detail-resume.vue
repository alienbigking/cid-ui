<template>
  <div
    class="list-box"
    v-if="resumeShow">
    <el-table
      class="table40"
      :data="allCriminalResumes"
      v-loading="loading"
      header-row-class-name="table-header">
      <el-table-column
        prop="startDate"
        label="开始日期"
        sortable/>
      <el-table-column
        prop="endDate"
        label="截至日期"
        sortable/>
      <el-table-column
        prop="company"
        label="公司"
        :show-overflow-tooltip="true"
        sortable/>
      <el-table-column
        prop="occupation"
        label="职业"
        :show-overflow-tooltip="true"
        width="80px"
        sortable/>
      <el-table-column
        prop="duty"
        label="职位"
        :show-overflow-tooltip="true"
        width="80px"
        sortable/>
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
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    resumeShow: {
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
      allCriminalResumes: state => state.prisonBureauCriminal.allCriminalResumes
    })
  },
  created() {
    this.getAllPrisonBureauCriminalResumes(this.$route.params.id)
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['getAllPrisonBureauCriminalResumes'])
  }
};
</script>
