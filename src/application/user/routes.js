import * as components from './components';

export default [
  {
    path: '/user/list',
    component: components.UserList,
    name: '查询用户',
    meta: { requireAuth: true }
  },
  {
    path: '/user/new',
    component: components.UserNew,
    name: '新增用户',
    meta: { requireAuth: true }
  },
  {
    path: '/user/edit/:id',
    component: components.UserEdit,
    name: '修改用户',
    meta: { requireAuth: true }
  },
  {
    path: '/user/detail/:id',
    component: components.UserDetail,
    name: '用户明细',
    meta: { requireAuth: true }
  },
  {
    path: '/user/password-edit/:id',
    component: components.UserPasswordEdit,
    name: '修改用户密码',
    meta: { requireAuth: true }
  }
];
