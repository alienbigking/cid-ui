import main from '@/app/common/main'
// 导入第三级菜单
import third from '@/app/common/third'

let routes = [
    {
        path: '/',
        component: main,
        hidden: true,
        children: [
            {
                path: '/',
                name: '登录',
                component: resolve => require(['@/app/user/login'], resolve),
                alias: '/index'
            },
            {
                path: '/login',
                name: '登录',
                meta: {
                    noSide: true
                },
                component: resolve => require(['@/app/user/login'], resolve)
            }
        ]
    },
    {
        path: '/user',
        component: main,
        hidden: true,
        name: '用户',
        children: [
            {
                path: '/user/pwd_modification',
                name: '修改密码',
                component: resolve => require(['@/app/user/pwd_modification'], resolve)
            },
            {
                path: '/user/user_modification',
                name: '修改用户明细',
                component: resolve => require(['@/app/user/user_modification'], resolve)
            }
        ]
    },
    {
        path: '/punishmentExcution',
        // hidden: true
        component: main,
        name: '刑罚执行',
        icon: 'menu-icon setting',
        children: [
            {
                path: '/punishmentExcution/reciver-management',
                name: '收监管理',
                meta: {
                    deep: true
                },
                component: resolve => require(['@/app/punishment-excution/reciver-management'], resolve)
            },
            {
                path: '/punishmentExcution/jianxing',
                name: '减刑假释',
                component: third,
                children: [
                    {
                        path: '/punishmentExcution/jianxing/add1',
                        name: '刑罚变动',
                        component: resolve => require(['@/app/test/test'], resolve)
                    },
                    {
                        path: '/punishmentExcution/jianxing/add2',
                        name: '监区办理',
                        component: resolve => require(['@/app/test/test'], resolve)
                    },
                    {
                        path: '/punishmentExcution/jianxing/add3',
                        name: '其他处理',
                        component: resolve => require(['@/app/test/test'], resolve)
                    }
                ]
            },
            {
                path: '/punishmentExcution/outer',
                name: '监外执行',
                meta: {
                    deep: true
                },
                component: resolve => require(['@/app/test/test'], resolve)
            },
            {
                path: '/punishmentExcution/goout',
                name: '出监管理',
                meta: {
                    deep: true
                },
                component: resolve => require(['@/app/test/test'], resolve)
            }
        ]
    },
    {
        path: '/punishmentExcution1',
        // hidden: true
        component: main,
        name: '办公助理',
        icon: 'menu-icon setting',
        children: [
            {
                path: '/punishmentExcution1/reciver-management1',
                name: '收监管理1',
                meta: {
                    deep: true
                },
                component: resolve => require(['@/app/test/test'], resolve)
            }
        ]
    },
    {
        path: '/punishmentExcution2',
        // hidden: true
        component: main,
        name: '档案管理',
        icon: 'menu-icon setting',
        children: [
            {
                path: '/punishmentExcution2/reciver-management1',
                name: '收监管理2',
                meta: {
                    deep: true
                },
                component: resolve => require(['@/app/test/test'], resolve)
            }
        ]
    }
]

export default routes
