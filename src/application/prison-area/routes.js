import * as components from './components';

export default [
    {
        path: '/prison-area/list',
        component: components.PrisonAreaList,
        name: '查询监区'
    },
    {
        path: '/prison-area/new',
        component: components.PrisonAreaNew,
        name: '新增监区'
    },
    {
        path: '/prison-area/edit/:id',
        component: components.PrisonAreaEdit,
        name: '修改监区'
    },
    {
        path: '/prison-area/detail/:id',
        component: components.PrisonAreaDetail,
        name: '监区明细'
    }
];
