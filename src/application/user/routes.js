import * as components from './components';

export default [
    {
        path: '/user/list',
        component: components.userList,
        name: '查询用户'
    },
    {
        path: '/user/new',
        component: components.userNew,
        name: '新增用户'
    },
    {
        path: '/user/edit/:id',
        component: components.userEdit,
        name: '修改用户'
    },
    {
        path: '/user/detail/:id',
        component: components.userDetail,
        name: '用户明细'
    },
    {
        path: '/user/:id/password',
        component: components.userPassword,
        name: '修改用户密码'
    }
];
