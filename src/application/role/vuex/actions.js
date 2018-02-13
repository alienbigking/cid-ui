import * as types from './mutation-types';
import roleService from '../service/role-service';

export default {
  getRole({ commit, state }, id) {
    return roleService.get(id).then(role => {
      commit(types.SET_ROLE, role);
    });
  },
  getRoles({ commit, state }) {
    return roleService.getAll().then(roles => {
      commit(types.SET_ALL_ROLES, roles);
    });
  },
  getPagedRoles({ commit, state }, params) {
    return roleService.getPaged(params).then(pagedRoles => {
      commit(types.SET_PAGED_ROLES, pagedRoles);
    });
  },
  addRole({ commit, state }) {
    return roleService.add(state.role);
  },
  updateRole({ commit, state }) {
    return roleService.update(state.role);
  },
  deleteRole({ commit }, id) {
    return roleService.delete(id);
  },
  getAllPermissions({ commit, state }) {
    return roleService.getAllPermissions().then(permissions => {
      commit(types.SET_ALL_PERMISSIONS, permissions);
    });
  },
  getRolePermissions({ commit, state }, id) {
    return roleService.getRolePermissions(id).then(permissions => {
      commit(types.SET_ROLE_PERMISSIONS, permissions);
    });
  },
  updateRolePermissions({ commit, state }, id) {
    return roleService.updateRolePermissions(id, state.rolePermissions);
  },
  deleteRolePermissions({ commit }, id) {
    return roleService.deleteRolePermissions(id);
  }
};
