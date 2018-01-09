import * as components from './components';

export default [
  {
      path: '/prison-bureau/list',
      component: components.PrisonBureauList,
      name: '查询监狱局'
  },
  {
      path: '/prison-bureau/new',
      component: components.PrisonBureauNew,
      name: '新增监狱局'
  },
  {
      path: '/prison-bureau/edit/:id',
      component: components.PrisonBureauEdit,
      name: '修改监狱局'
  },
  {
      path: '/prison-bureau/detail/:id',
      component: components.PrisonBureauDetail,
      name: '监狱局明细'
  }
];
