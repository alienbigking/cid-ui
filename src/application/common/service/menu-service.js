// import axios from 'axios';

export default [
    {
        index: '1',
        name: '监区',
        collapse: true,
        children: [
            {
                index: '1-1',
                name: '查询监区',
                path: '/prison-area/list',
                collapse: true
            },
            {
                index: '1-2',
                name: '监区明细',
                path: '/prison-area/detail',
                collapse: true
            },

            // {
            //     index: '1-3',
            //     name: '减刑假释',
            //     collapse: true,
            //     children: [
            //         {
            //             index: '1-3-1',
            //             name: '刑罚变动',
            //             path: 'login',
            //             collapse: false
            //         },
            //         {
            //             index: '1-3-2',
            //             name: '监区办理',
            //             path: 'login',
            //             collapse: false
            //         },
            //         {
            //             index: '1-3-3',
            //             name: '其他处理',
            //             path: 'login',
            //             collapse: false
            //         }
            //     ]
            // },
            {
                index: '1-4',
                name: '新增监区',
                path: '/prison-area/new',
                collapse: true
            },
            {
                index: '3-5',
                name: '修改监区',
                path: '/prison-area/edit',
                collapse: true
            }
        ]
    },
    {
        index: '2',
        name: '办公助理',
        collapse: true,
        children: [
            {
                index: '2-1',
                name: '收监管理',
                path: 'dashboard',
                collapse: true
            },
            {
                index: '1-2',
                name: '减刑假释',
                collapse: true,
                children: [
                    {
                        index: '1-2-1',
                        name: '刑罚变动',
                        path: 'login',
                        collapse: false
                    },
                    {
                        index: '1-2-2',
                        name: '监区办理',
                        path: 'login',
                        collapse: false
                    },
                    {
                        index: '1-2-3',
                        name: '其他处理',
                        path: 'login',
                        collapse: false
                    }
                ]
            },
            {
                index: '1-3',
                name: '监外执行',
                path: 'dashboard',
                collapse: true
            },
            {
                index: '1-4',
                name: '出监管理',
                path: 'dashboard',
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
                index: '3-2',
                name: '租户明细',
                path: '/tenant/detail',
                collapse: true
            },
            {
                index: '3-4',
                name: '新增租户',
                path: '/tenant/new',
                collapse: true
            },
            {
                index: '3-5',
                name: '修改租户',
                path: '/tenant/edit',
                collapse: true
            }
        ]
    }
];
