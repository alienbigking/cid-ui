import * as components from './components';

export default [
  {
    path: '/log/list',
    component: components.LogList,
    name: '系统日志',
    meta: { requireAuth: true }
  },
  {
    path: '/log/detail/:id',
    component: components.LogDetail,
    name: '日志明细',
    meta: { requireAuth: true }
  }
];
