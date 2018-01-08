import * as components from './components';

export default [
  {
      path: '/prison-bureau-department/list',
      component: components.PrisonBureauDepartmentList,
      name: '查询监狱局部门'
  },
  {
      path: '/prison-bureau-department/new',
      component: components.PrisonBureauDepartmentNew,
      name: '新增监狱局部门'
  },
  {
      path: '/prison-bureau-department/edit/:id',
      component: components.PrisonBureauDepartmentEdit,
      name: '修改监狱局部门'
  },
  {
      path: '/prison-bureau-department/detail/:id',
      component: components.PrisonBureauDepartmentDetail,
      name: '监狱局部门明细'
  }
];
