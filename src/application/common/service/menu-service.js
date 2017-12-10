// import axios from 'axios';

export default [
    {
        index: '1',
        name: '一级菜单1',
        collapse: true,
        children: [
            {
                index: '1-1',
                name: '二级菜单1',
                path: 'dashboard',
                collapse: true
            },
            {
                index: '1-2',
                name: '二级菜单2',
                collapse: true,
                children: [
                    {
                        index: '1-2-1',
                        name: '三级菜单a',
                        path: 'login',
                        collapse: false
                    }
                ]
            }
        ]
    }
];
