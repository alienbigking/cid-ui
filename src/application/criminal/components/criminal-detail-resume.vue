<template>
   <div class="list-box" v-if="resumeShow">
    <el-table class="table40" :data="allCriminalResumes" v-loading="loading" header-row-class-name="tableHeader40">
      <el-table-column align="center" prop="startDate" label="开始日期"> </el-table-column>
      <el-table-column align="center" prop="endDate" label="截至日期"> </el-table-column>
      <el-table-column align="center" prop="company" label="公司"> </el-table-column>
      <el-table-column align="center" prop="occupation" label="职业"> </el-table-column>
      <el-table-column align="center" prop="duty" label="职位"> </el-table-column>
      <el-table-column align="center" prop="createdTime" label="创建时间">
        <template slot-scope="scope">
            {{scope.row.createdTime | moment}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="lastUpdatedTime" label="最后更新时间">
        <template slot-scope="scope">
            {{scope.row.lastUpdatedTime | moment}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    resumeShow: {
      type: Boolean
    }
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      allCriminalResumes: state => state.criminal.allCriminalResumes
    })
  },
  created() {
    this.getAllCriminalResumes(this.$route.params.id)
      .then(() => { this.loading = false; })
      .catch(() => { this.loading = false; });
  },
  methods: {
    ...mapActions([ "getAllCriminalResumes" ])
  }
};
</script>
