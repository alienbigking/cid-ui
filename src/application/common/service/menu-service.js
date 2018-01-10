  // import axios from 'axios';

  export default [
    {
        index: '1',
        name: '监区',
        collapse: true,
        children: [
            {
                index: '1-1',
                name: '监区列表',
                path: '/prison-area/list',
                collapse: true
            },
            {
                index: '1-4',
                name: '新增监区',
                path: '/prison-area/new',
                collapse: true
            }
        ]
    },
    {
        index: '2',
        name: '监舍',
        collapse: true,
        children: [
            {
                index: '2-1',
                name: '监舍列表',
                path: '/prison-house/list',
                collapse: true
            },
            {
                index: '1-3',
                name: '新增监舍',
                path: '/prison-house/new',
                collapse: true
            }
        ]
      },
      {
        index: '3',
        name: '租户',
        collapse: true,
        children: [
            {
                index: '3-1',
                name: '租户列表',
                path: '/tenant/list',
                collapse: true
            },
            {
                index: '3-4',
                name: '新增租户',
                path: '/tenant/new',
                collapse: true
            }
        ]
    },
    {
        index: '4',
        name: '罪犯',
        collapse: true,
        children: [
            {
                index: '4-1',
                name: '查询罪犯',
                path: '/criminal/list',
                collapse: true
            },
            {
                index: '4-4',
                name: '新增罪犯',
                path: '/criminal/new',
                collapse: true
            }
        ]
    },
    {
        index: '5',
        name: '角色',
        collapse: true,
        children: [
            {
                index: '5-1',
                name: '角色列表',
                path: '/role/list',
                collapse: true
            },
            {
                index: '5-4',
                name: '新增角色',
                path: '/role/new',
                collapse: true
            }
        ]
    },
    {
        index: '6',
        name: '用户',
        collapse: true,
        children: [
            {
                index: '6-1',
                name: '用户列表',
                path: '/user/list',
                collapse: true
            },
            {
                index: '6-4',
                name: '新增用户',
                path: '/user/new',
                collapse: true
            }
        ]
    },
    {
        index: '7',
        name: '监狱部门',
        collapse: true,
        children: [
            {
                index: '7-1',
                name: '监狱部门列表',
                path: '/prison-department/list',
                collapse: true
            },
            {
                index: '7-4',
                name: '新增监狱部门',
                path: '/prison-department/new',
                collapse: true
            }
        ]
    },
    // {
    //     index: '8',
    //     name: '监狱局',
    //     collapse: true,
    //     children: [
    //         {
    //             index: '8-1',
    //             name: '监狱局列表',
    //             path: '/prison-bureau/list',
    //             collapse: true
    //         },
    //         {
    //             index: '8-4',
    //             name: '新增监狱局',
    //             path: '/prison-bureau/new',
    //             collapse: true
    //         }
    //     ]
    // },
    {
        index: '9',
        name: '监狱局部门',
        collapse: true,
        children: [
            {
                index: '9-1',
                name: '监狱局部门列表',
                path: '/prison-bureau-department/list',
                collapse: true
            },
            {
                index: '9-4',
                name: '新增监狱局部门',
                path: '/prison-bureau-department/new',
                collapse: true
            }
        ]
    },
    {
        index: '10',
        name: '日志',
        collapse: true,
        children: [
            {
                index: '10-1',
                name: '系统日志',
                path: '/log/list',
                collapse: true
            }
        ]
    }
  ];
