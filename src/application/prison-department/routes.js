import * as components from './components';

export default [
    {
        path: '/prison-department/list',
        component: components.PrisonDepartmentList,
        name: '查询监狱部门'
    },
    {
        path: '/prison-department/new',
        component: components.PrisonDepartmentNew,
        name: '新增监狱部门'
    },
    {
        path: '/prison-department/edit/:id',
        component: components.PrisonDepartmentEdit,
        name: '修改监狱部门'
    },
    {
        path: '/prison-department/detail/:id',
        component: components.PrisonDepartmentDetail,
        name: '监舍监狱部门'
    }
];
