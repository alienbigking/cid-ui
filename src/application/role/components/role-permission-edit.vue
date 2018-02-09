<template>
  <div class="detail-card">
    <h3 class="title">分配角色权限</h3>
    <div
      class="card-body"
      v-loading="loading">
      <el-tree
        v-show="!loading"
        ref="tree"
        :data="allPermissions"
        :props="{ label: 'name' }"
        show-checkbox
        default-expand-all
        node-key="id"
        @node-click="nodeClick"
        @check-change="onCheckChange" />
      <div class="has-right-button">
        <el-button @click="onBack">返 回</el-button>
        <el-button
          class="button-sure"
          :loading="saving"
          @click="onSaving">确 认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
export default {
  props: {
    editDialogVisible: {
      type: Boolean,
      default: false
    },
    roleId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      loading: true,
      saving: false,
      checkedPermissions: []
    };
  },
  computed: {
    ...mapState({
      allPermissions: state => state.role.allPermissions
    })
  },
  watch: {
    checkedPermissions: {
      handler: function(val) {
        this.$store.commit("setRolePermissions", val);
      },
      deep: true
    }
  },
  created() {
    this.getAllPermissions().then(res => {
      this.render();
    });
  },
  methods: {
    ...mapActions([
      "getAllPermissions",
      "getRolePermissions",
      "updateRolePermissions"
    ]),
    nodeClick(data, node) {
      if (!node.childNodes.length) this.$refs.tree.setChecked(data.id, !node.checked);
    },
    onCheckChange() {
      let checkedPermissions = [];
      this.$refs.tree.getCheckedKeys().forEach(permissionId => {
        checkedPermissions.push({ permissionId: permissionId });
      });
      this.checkedPermissions = checkedPermissions;
    },
    onSaving() {
      this.saving = true;
      if (this.checkedPermissions.length) {
        this.updateRolePermissions(this.$route.params.id).then(() => {
          this.$message.success("设置成功");
          this.saving = false;
        }).catch(() => {
          this.$message.error("设置失败");
          this.saving = false;
        });
      } else {
        this.deleteRolePermissions(this.$route.params.id).then(() => {
          this.$message.success("设置成功");
          this.saving = false;
        }).catch(() => {
          this.$message.error("设置失败");
          this.saving = false;
        });
      }
    },
    onBack() {
      this.$router.go(-1);
    },
    render() {
      let rolePermissions = [];
      let checkedKeys = [];
      this.getRolePermissions(this.$route.params.id).then(res => {
        rolePermissions = _.cloneDeep(this.$store.state.role.rolePermissions);
        rolePermissions.forEach(item => {
          checkedKeys.push(item.permissionId);
        });
        this.$refs.tree.setCheckedKeys(checkedKeys);
        this.onCheckChange();
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-body{
  padding: 30px 20px 20px;
  border: 0;
}
</style>
