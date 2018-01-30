<template>
  <div class="detail-card">
    <h3 class="card-title">分配角色权限</h3>
    <div class="card-body">
      <el-tree
        :data="allPermissions"
        :props="{ label: 'name' }"
        show-checkbox
        node-key="id" />
      <div class="el-form-item-div">
        <el-button>返 回</el-button>
        <el-button class="button-addInNew">新 增</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
console.clear();
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
    };
  },
  computed: {
    ...mapState({
      allPermissions: state => state.role.allPermissions
    })
  },
  watch: {
    checkedRoles: {
      handler: _.debounce(function(checkedRoles) {
        let arr = [];
        checkedRoles.forEach(item => {
          arr.push({ roleId: item });
        });
        this.$store.commit("updateUserRole", arr);
      }, 500),
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
      "getRolePermissions"
    ]),
    render() {
      this.loading = false;
      this.getRolePermissions(this.$route.params.id).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-body{ padding-top: 30px; }
</style>
