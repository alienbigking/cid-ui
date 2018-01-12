import * as components from './components';

export default [
    {
        path: '/criminal/list',
        component: components.CriminalList,
        name: '查询罪犯',
        meta: { requireAuth: true }
    },
    {
        path: '/criminal/new',
        component: components.CriminalNew,
        name: '新增罪犯',
        meta: { requireAuth: true }
    },
    {
        path: '/criminal/edit/:id',
        component: components.CriminalEdit,
        name: '修改罪犯',
        meta: { requireAuth: true }
    },
    {
        path: '/criminal/detail/:id',
        component: components.CriminalDetail,
        name: '罪犯明细',
        meta: { requireAuth: true }
    },
    {
        path: '/criminal/record-detail/:id',
        component: components.CriminalRecordDetail,
        name: '犯罪记录明细',
        meta: { requireAuth: true }
    }
];
