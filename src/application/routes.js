import { routes as login } from './login';
import { routes as dashboard } from './dashboard';
import { routes as me } from './me';
import { routes as tenant } from './tenant';
import { routes as prisonArea } from './prison-area';
import { routes as prisonHouse } from './prison-house';
import { routes as criminal } from './criminal';
import { routes as role } from './role';
import { routes as user } from './user';
import { routes as prisonDepartment } from './prison-department';
import { routes as prisonBureau } from './prison-bureau';
import { routes as prisonBureauDepartment } from './prison-bureau-department';
import { routes as log } from './log';
import { routes as error } from './error';
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
            ...user,
            ...prisonDepartment,
            ...prisonBureau,
            ...prisonBureauDepartment,
            ...log
        ]
    },
    ...login,
    ...error
];
