<template>
  <div class="list-box" v-if="socialRelationShow">
    <el-table class="table40" :data="allCriminalSocialRelations" v-loading="loading" header-row-class-name="tableHeader40">
      <el-table-column align="center" prop="appellation" label="称谓"> </el-table-column>
      <el-table-column align="center" prop="name" label="姓名"> </el-table-column>
      <el-table-column align="center" prop="age" label="年龄"> </el-table-column>
      <el-table-column align="center" prop="company" label="公司"> </el-table-column>
      <el-table-column align="center" prop="occupation" label="职业"> </el-table-column>
      <el-table-column align="center" prop="politicalStatusName" label="政治面貌"> </el-table-column>
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
    socialRelationShow: {
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
      allCriminalSocialRelations: state => state.criminal.allCriminalSocialRelations
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
