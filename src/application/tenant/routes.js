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
            }
        ]
    }
];
