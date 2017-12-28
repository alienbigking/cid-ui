import * as components from './components';

export default [
    {
        path: '/user/list',
        component: components.UserList,
        name: '查询用户'
    },
    {
        path: '/user/new',
        component: components.UserNew,
        name: '新增用户'
    },
    {
        path: '/user/edit/:id',
        component: components.UserEdit,
        name: '修改用户'
    },
    {
        path: '/user/detail/:id',
        component: components.UserDetail,
        name: '用户明细'
    },
    {
        path: '/user/:id/password',
        component: components.UserPassword,
        name: '修改用户密码'
    }
];
