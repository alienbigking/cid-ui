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
                component: resolve => require(['@/app/login/login'], resolve),
                alias: '/index'
            }
        ]
    },
    {
        path: '/punishmentExcution',
        // hidden: true
        component: main,
        name: '刑罚执行',
        icon: 'menu-icon el-icon-setting',
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
                        path: '/punishmentExcution/jianxing/add',
                        name: '新增监区',
                        component: resolve => require(['@/app/punishment-excution/jianxing/add'], resolve)
                    }
                ]
            }
        ]
    },
    {
        path: '/punishmentExcution1',
        // hidden: true
        component: main,
        name: '刑罚执行1',
        icon: 'menu-icon el-icon-setting',
        children: [
            {
                path: '/punishmentExcution/reciver-management1',
                name: '收监管理1',
                meta: {
                    deep: true
                },
                component: resolve => require(['@/app/punishment-excution/reciver-management'], resolve)
            },
            {
                path: '/punishmentExcution/jianxing1',
                name: '减刑假释1',
                component: third,
                children: [
                    {
                        path: '/punishmentExcution/jianxing/add1',
                        name: '新增监区1',
                        component: resolve => require(['@/app/punishment-excution/jianxing/add'], resolve)
                    }
                ]
            }
        ]
    }
]

export default routes
