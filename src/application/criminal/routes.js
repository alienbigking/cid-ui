import * as components from './components';

export default [
    {
        path: '/criminal/list',
        component: components.CriminalList,
        name: '查询罪犯'
    },
    {
        path: '/criminal/new',
        component: components.CriminalNew,
        name: '新增罪犯'
    },
    {
        path: '/criminal/edit/:id',
        component: components.CriminalEdit,
        name: '修改罪犯'
    },
    {
        path: '/criminal/detail/:id',
        component: components.CriminalDetail,
        name: '罪犯明细'
    }
];
