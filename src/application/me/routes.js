import * as components from './components';

export default [
  {
    path: '/me',
    component: components.UserProfileEdit,
    name: '修改个人信息'
  },
  {
    path: '/me/password',
    component: components.UserPasswordEdit,
    name: '修改密码'
  }
];
