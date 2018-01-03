import { routes as login } from './login';
import { routes as dashboard } from './dashboard';
import { routes as me } from './me';
import { routes as tenant } from './tenant';
import { routes as prisonArea } from './prison-area';
import { routes as prisonHouse } from './prison-house';
import { routes as criminal } from './criminal';
import { routes as role } from './role';
import { routes as user } from './user';
import main from './main';

export default [
    {
        path: '/',
        component: main,
        children: [
            {
                path: '/',
                redirect: '/dashboard'
            },
            ...dashboard,
            ...me,
            ...tenant,
            ...prisonArea,
            ...prisonHouse,
            ...criminal,
            ...role,
            ...user
        ]
    },
    ...login
];
