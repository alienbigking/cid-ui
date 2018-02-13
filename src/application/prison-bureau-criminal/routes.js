import * as components from './components';

export default [
  {
    path: '/prison-bureau-criminal/list',
    component: components.PrisonBureauCriminalList,
    name: '查询监狱局罪犯',
    meta: { requireAuth: true }
  },
  {
    path: '/prison-bureau-criminal/detail/:id',
    component: components.PrisonBureauCriminalDetail,
    name: '监狱局罪犯明细',
    meta: { requireAuth: true }
  },
  {
    path: '/prison-bureau-criminal/record-detail/:id',
    component: components.PrisonBureauCriminalRecordDetail,
    name: '所有犯罪记录明细',
    meta: { requireAuth: true }
  }
];
