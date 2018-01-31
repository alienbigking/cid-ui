import * as components from './components';

export default [
    {
        path: '/role/list',
        component: components.RoleList,
        name: '查询角色',
        meta: { requireAuth: true }
    },
    {
        path: '/role/new',
        component: components.RoleNew,
        name: '新增角色',
        meta: { requireAuth: true }
    },
    {
        path: '/role/edit/:id',
        component: components.RoleEdit,
        name: '修改角色',
        meta: { requireAuth: true }
    },
    {
        path: '/role/detail/:id',
        component: components.RoleDetail,
        name: '角色明细',
        meta: { requireAuth: true }
    },
    {
        path: '/role/permission/:id',
        component: components.RolePermission,
        name: '分配权限',
        meta: { requireAuth: true }
    }
];
