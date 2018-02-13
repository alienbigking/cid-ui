import * as components from './components';

export default [
  {
    path: '/me',
    component: components.MyProfileEdit,
    name: '修改个人信息',
    meta: { requireAuth: true }
  },
  {
    path: '/me/password',
    component: components.MyPasswordEdit,
    name: '修改密码',
    meta: { requireAuth: true }
  }
];
