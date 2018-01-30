<template>
  <div class="container">
    <div class="filters">
      <el-button class="button-addInEdit" @click="onNew">新 增</el-button>
    </div>
    <div class="list-box">
    </div>
    <el-dialog title="采集信息" class="dialog" width="950px" :visible.sync="editDialogVisible">
      <criminal-collection-edit  :editDialogVisible="editDialogVisible" @on-close="editDialogVisible = false"></criminal-collection-edit>
    </el-dialog>
  </div>
</template>

<script>
import CriminalCollection from "./criminal-collection-edit";

export default {
    components: {
        "criminal-collection-edit": CriminalCollection
    },
  data() {
    return {
          editDialogVisible: false
    };
  },
  methods: {
      onNew() {
          this.editDialogVisible = true;
      }
  }
};
</script>
