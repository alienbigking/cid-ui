// import axios from 'axios';

export default {
    getMenus(tenantType) {
        switch (tenantType) {
            case 'PRISON':
                return Promise.resolve(prisonMenus);
            case 'PRISON_BUREAU':
                return Promise.resolve(prisonBureauMenus);
            default:
                return Promise.resolve(platformMenus);
        }
        // return axios.get(`api/menus`).then(response => response.data);
    }
};

const prisonMenus = [
    {
        index: '3',
        name: '工作台',
        path: '/dashboard',
        icon: 'icon-dashboard',
        collapse: true
    },
    {
        index: '7',
        name: '部门',
        icon: 'icon-department',
        collapse: true,
        children: [
            {
                index: '7-1',
                name: '查询',
                path: '/prison-department/list',
                collapse: true
            },
            {
                index: '7-4',
                name: '新增',
                path: '/prison-department/new',
                collapse: true
            }
        ]
    },
    {
        index: '1',
        name: '监区',
        icon: 'icon-prisonArea',
        collapse: true,
        children: [
            {
                index: '1-1',
                name: '查询',
                path: '/prison-area/list',
                collapse: true
            },
            {
                index: '1-4',
                name: '新增',
                path: '/prison-area/new',
                collapse: true
            }
        ]
    },
    {
        index: '2',
        name: '监舍',
        icon: 'icon-prisonHouse',
        collapse: true,
        children: [
            {
                index: '2-1',
                name: '查询',
                path: '/prison-house/list',
                collapse: true
            },
            {
                index: '1-3',
                name: '新增',
                path: '/prison-house/new',
                collapse: true
            }
        ]
    },
    {
        index: '4',
        name: '罪犯',
        icon: 'icon-criminal',
        collapse: true,
        children: [
            {
                index: '4-1',
                name: '查询',
                path: '/criminal/list',
                collapse: true
            },
            {
                index: '4-4',
                name: '新增',
                path: '/criminal/new',
                collapse: true
            }
        ]
    },
    {
        index: '6',
        name: '用户',
        icon: 'icon-user',
        collapse: true,
        children: [
            {
                index: '6-1',
                name: '查询',
                path: '/user/list',
                collapse: true
            },
            {
                index: '6-4',
                name: '新增',
                path: '/user/new',
                collapse: true
            }
        ]
    },
    {
        index: '5',
        name: '角色',
        icon: 'icon-role',
        collapse: true,
        children: [
            {
                index: '5-1',
                name: '查询',
                path: '/role/list',
                collapse: true
            },
            {
                index: '5-4',
                name: '新增',
                path: '/role/new',
                collapse: true
            }
        ]
    },
    {
        index: '10',
        name: '日志',
        icon: 'icon-log',
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

const prisonBureauMenus = [
    {
        index: '8',
        name: '工作台',
        path: '/dashboard',
        icon: 'icon-dashboard',
        collapse: true
    },
    {
        index: '9',
        name: '部门',
        icon: 'icon-department',
        collapse: true,
        children: [
            {
                index: '9-1',
                name: '查询',
                path: '/prison-bureau-department/list',
                collapse: true
            },
            {
                index: '9-4',
                name: '新增',
                path: '/prison-bureau-department/new',
                collapse: true
            }
        ]
    },
    {
        index: '6',
        name: '用户',
        icon: 'icon-user',
        collapse: true,
        children: [
            {
                index: '6-1',
                name: '查询',
                path: '/user/list',
                collapse: true
            },
            {
                index: '6-4',
                name: '新增',
                path: '/user/new',
                collapse: true
            }
        ]
    },
    {
        index: '5',
        name: '角色',
        icon: 'icon-role',
        collapse: true,
        children: [
            {
                index: '5-1',
                name: '查询',
                path: '/role/list',
                collapse: true
            },
            {
                index: '5-4',
                name: '新增',
                path: '/role/new',
                collapse: true
            }
        ]
    },
    {
        index: '10',
        name: '日志',
        icon: 'icon-log',
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

const platformMenus = [
    {
        index: '2',
        name: '工作台',
        path: '/dashboard',
        icon: 'icon-dashboard',
        collapse: true
    },
    {
        index: '3',
        name: '租户',
        icon: 'icon-tenant',
        collapse: true,
        children: [
            {
                index: '3-1',
                name: '查询租户',
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
        index: '6',
        name: '用户',
        icon: 'icon-user',
        collapse: true,
        children: [
            {
                index: '6-1',
                name: '查询用户',
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
        index: '5',
        name: '角色',
        icon: 'icon-role',
        collapse: true,
        children: [
            {
                index: '5-1',
                name: '查询角色',
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
        index: '10',
        name: '日志',
        icon: 'icon-log',
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
