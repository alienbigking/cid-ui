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
                name: '监区明细'
            },
            {
                path: '/tenant/list',
                component: components.tenantList,
                name: '查询监区'
            },
            {
                path: '/tenant/new',
                component: components.tenantNew,
                name: '新增监区'
            },
            {
                path: '/tenant/dashboard',
                redirect: { name: 'dashboard' }
            }
        ]
    }
];
