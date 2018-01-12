import * as components from './components';

export default [
    {
        path: '/tenant/list',
        component: components.TenantList,
        name: '查询租户',
        meta: { requireAuth: true }
    },
    {
        path: '/tenant/new',
        component: components.TenantNew,
        name: '新增租户',
        meta: { requireAuth: true }
    },
    {
        path: '/tenant/edit/:id',
        component: components.TenantEdit,
        name: '修改租户',
        meta: { requireAuth: true }
    },
    {
        path: '/tenant/detail/:id',
        component: components.TenantDetail,
        name: '租户明细',
        meta: { requireAuth: true }
    }
];
