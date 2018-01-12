import * as components from './components';

export default [
    {
        path: '/prison-house/list',
        component: components.PrisonHouseList,
        name: '查询监舍',
        meta: { requireAuth: true }
    },
    {
        path: '/prison-house/new',
        component: components.PrisonHouseNew,
        name: '新增监舍',
        meta: { requireAuth: true }
    },
    {
        path: '/prison-house/edit/:id',
        component: components.PrisonHouseEdit,
        name: '修改监舍',
        meta: { requireAuth: true }
    },
    {
        path: '/prison-house/detail/:id',
        component: components.PrisonHouseDetail,
        name: '监舍明细',
        meta: { requireAuth: true }
    }
];
