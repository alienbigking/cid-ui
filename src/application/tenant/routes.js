import * as components from './components';
import main from '@/application/main';

export default [
    {
        path: '/tenant',
        component: main,
        children: [
            {
                path: '/tenant/detail',
                component: components.tenantDetail,
                name: '租户明细'
            },
            {
                path: '/tenant/list',
                component: components.tenantList,
                name: '查询租户'
            },
            {
                path: '/tenant/new',
                component: components.tenantNew,
                name: '新增租户'
            },
            {
                path: '/tenant/edit',
                component: components.tenantEdit,
                name: '修改租户'
            },
            {
                path: '/tenant/dashboard',
                redirect: { name: 'dashboard' }
            }
        ]
    }
];
