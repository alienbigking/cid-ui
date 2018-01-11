import * as components from './components';

export default [
  {
      path: '/log/list',
      component: components.LogList,
      name: '系统日志'
  },
  {
      path: '/log/detail/:id',
      component: components.LogDetail,
      name: '日志明细'
  }
];
