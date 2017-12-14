import * as components from './components';

export default [
    {
        path: '/prisonHouse/detail/:id',
        component: components.prisonHouseDetail,
        name: '租户明细'
    },
    {
        path: '/prisonHouse/list',
        component: components.prisonHouseList,
        name: '查询租户'
    },
    {
        path: '/prisonHouse/new',
        component: components.prisonHouseNew,
        name: '新增租户'
    },
    {
        path: '/prisonHouse/edit/:id',
        component: components.prisonHouseEdit,
        name: '修改租户'
    },
    {
        path: '/prisonHouse/dashboard',
        redirect: { name: 'dashboard' }
    }
];
