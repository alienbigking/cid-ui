import * as components from './components';

export default [
  {
    path: '/dashboard',
    component: components.TheDashboard,
    name: '工作台',
    meta: { requireAuth: true }
  }
];
