<template>
  <div
    v-loading="loading"
    class="detail-card">
    <h3 class="card-title">分配角色权限</h3>
    <div class="card-body">
      <el-tree
        ref="tree"
        :data="allPermissions"
        :props="{ label: 'name' }"
        show-checkbox
        v-model="rolePermissions"
        node-key="id" />
      <div class="el-form-item-div">
        <el-button>返 回</el-button>
        <el-button
          class="button-addInNew"
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
      rolePermissions: []
    };
  },
  computed: {
    ...mapState({
      allPermissions: state => state.role.allPermissions
    })
  },
  watch: {
  },
  created() {
    this.getAllPermissions().then(res => {
      this.render();
    });
  },
  methods: {
    ...mapActions([
      "getAllPermissions",
      "getRolePermissions"
    ]),
    onSaving() {
      console.log(33);
      console.log(this.$refs.tree.getCheckedKeys());
    },
    render() {
      this.getRolePermissions(this.$route.params.id).then(res => {
        console.log(123);
        this.rolePermissions = _.cloneDeep(this.$store.state.role.rolePermissions);
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-body{ padding-top: 30px; }
</style>
