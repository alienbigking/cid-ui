import * as components from './components';

export default [
    {
        path: '/role/list',
        component: components.RoleList,
        name: '查询角色功能'
    },
    {
        path: '/role/new',
        component: components.RoleNew,
        name: '新增角色'
    },
    {
        path: '/role/edit/:id',
        component: components.RoleEdit,
        name: '修改角色'
    },
    {
        path: '/role/detail/:id',
        component: components.RoleDetail,
        name: '角色明细'
    }
];
