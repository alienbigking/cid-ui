<template>
    <div class="list-box" v-if="outInPrisonShow">
      <el-table class="table40" :data="allCriminalOutInPrisons" :loading="loading" header-row-class-name="tableHeader40">
        <el-table-column align="center" prop="reasonName" label="出入监事由"> </el-table-column>
        <el-table-column align="center" prop="outgoingDate" label="出监日期"> 
          <template slot-scope="scope">
              {{scope.row.createdTime | moment}}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="entryDate" label="入监日期">
          <template slot-scope="scope">
              {{scope.row.createdTime | moment}}
          </template>  
        </el-table-column>
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
    outInPrisonShow: {
      type: Boolean
    }
  },
  computed: {
    ...mapState({
      allCriminalOutInPrisons: state => state.criminal.allCriminalOutInPrisons
    })
  },
  created() {
    this.getAllCriminalOutInPrisons(this.$route.params.id);
  },
  methods: {
    ...mapActions([ "getAllCriminalOutInPrisons" ])
  }
};
</script>

