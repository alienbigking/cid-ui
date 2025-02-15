<template>
  <div v-loading="loading">
    <div class="user-role-title user-checkbox-group">
      <span class="user-name">{{ userName }}</span>
      <el-checkbox
        class="all-select"
        v-model="checkAll"
        @change="handleCheckAllChange">全选</el-checkbox>
    </div>
    <el-checkbox-group
      v-model="checkedRoles"
      @change="handleCheckedRolesChange"
      class="user-checkbox-group">
      <el-checkbox
        v-for="(item, index) in roles"
        :label="item.id"
        :key="index">{{ item.name }}</el-checkbox>
    </el-checkbox-group>
    <div class="has-right-button">
      <el-button
        class="button-cancel"
        @click="onClose">取 消</el-button>
      <el-button
        class="button-confirm"
        @click="onSave"
        :loading="saving">确 认</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import _ from 'lodash';

export default {
  props: {
    editDialogVisible: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checkAll: false,
      checkedRoles: _.cloneDeep(this.$store.state.user.role),
      loading: true,
      saving: false
    };
  },
  computed: {
    ...mapState({
      roles: state => state.role.allRoles
    })
  },
  watch: {
    editDialogVisible(val) {
      if (val) {
        this.loading = true;
        this.render();
      }
    },
    checkedRoles: {
      handler: _.debounce(function(checkedRoles) {
        let arr = [];
        checkedRoles.forEach(item => {
          arr.push({ roleId: item });
        });
        this.$store.commit('updateUserRole', arr);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getRoles().then(() => {
      this.render();
    });
  },
  methods: {
    ...mapActions(['getRoles', 'getUserRoles', 'updateUserRole', 'deleteUserRole']),
    handleCheckAllChange(val) {
      this.checkedRoles = [];
      if (val) {
        this.roles.forEach(item => {
          this.checkedRoles.push(item.id);
        });
      }
    },
    handleCheckedRolesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.roles.length;
    },
    onClose() {
      this.$emit('on-close');
    },
    onSave() {
      if (this.checkedRoles.length) {
        // 添加
        this.saving = true;
        this.updateUserRole(this.userId)
          .then(res => {
            this.saving = false;
            this.$message.success('添加成功');
            this.$emit('on-close');
          })
          .catch(() => {
            this.saving = false;
            this.$message.error('添加失败');
          });
      } else {
        // 删除
        this.saving = true;
        this.deleteUserRole(this.userId)
          .then(res => {
            this.saving = false;
            this.$message.success('删除成功');
            this.$emit('on-close');
          })
          .catch(() => {
            this.saving = false;
            this.$message.error('删除失败');
          });
      }
    },
    render() {
      this.checkedRoles = [];
      this.getUserRoles(this.userId).then(() => {
        this.loading = false;
        this.checked = _.cloneDeep(this.$store.state.user.role);
        this.checkAll = this.checked.length === this.roles.length;
        this.checked.forEach(item => {
          this.checkedRoles.push(item.roleId);
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.user-name {
  font-weight: bold;
  color: #333;
}
.user-role-title {
  width: 100%;
  border-bottom: 1px dashed #ddd;
  padding: 15px 0;
  .all-select {
    float: right;
  }
}
.has-right-button {
  margin-top: 15px;
}
</style>
