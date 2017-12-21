import * as components from './components';

export default [
    {
        path: '/role/detail/:id',
        component: components.roleDetail,
        name: '角色明细'
    },
    {
        path: '/role/list',
        component: components.roleList,
        name: '查询角色功能'
    },
    {
        path: '/role/new',
        component: components.roleNew,
        name: '新增角色'
    },
    {
        path: '/role/edit/:id',
        component: components.roleEdit,
        name: '修改角色'
    }
];
