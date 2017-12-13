import * as components from './components';
import main from '@/application/main';

export default [
    {
        path: '/prison-house',
        component: main,
        children: [
            {
                path: '/prison-house/detail',
                component: components.prisonHouseDetail,
                name: '监舍明细'
            },
            {
                path: '/prison-house/list',
                component: components.prisonHouseList,
                name: '查询监舍'
            },
            {
                path: '/prison-house/new',
                component: components.prisonHouseNew,
                name: '新增监舍'
            },
            {
                path: '/prison-house/edit',
                component: components.prisonHouseEdit,
                name: '修改监舍'
            },
            {
                path: '/prison-house/dashboard',
                redirect: { name: 'dashboard' }
            }
        ]
    }
];
