import * as components from './components';

export default [
    {
        path: '/prison-area/detail',
        component: components.areaDetail,
        name: '监区明细'
    },
    {
        path: '/prison-area/list',
        component: components.areaList,
        name: '查询监区'
    },
    {
        path: '/prison-area/new',
        component: components.areaNew,
        name: '新增监区'
    },
    {
        path: '/prison-area/edit',
        component: components.areaEdit,
        name: '修改监区'
    },
    {
        path: '/prison-area/dashboard',
        redirect: { name: 'dashboard' }
    }
];
