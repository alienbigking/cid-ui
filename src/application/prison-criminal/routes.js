import * as components from './components';

export default [
    {
        path: '/prison-criminal/list',
        component: components.PrisonCriminalList,
        name: '查询罪犯',
        meta: { requireAuth: true }
    },
    {
        path: '/prison-criminal/new',
        component: components.PrisonCriminalNew,
        name: '新增罪犯',
        meta: { requireAuth: true }
    },
    {
        path: '/prison-criminal/edit/:id',
        component: components.PrisonCriminalEdit,
        name: '修改罪犯',
        meta: { requireAuth: true }
    },
    {
        path: '/prison-criminal/detail/:id',
        component: components.PrisonCriminalDetail,
        name: '罪犯明细',
        meta: { requireAuth: true }
    },
    {
        path: '/prison-criminal/record-detail/:id',
        component: components.PrisonCriminalRecordDetail,
        name: '犯罪记录明细',
        meta: { requireAuth: true }
    }
];
