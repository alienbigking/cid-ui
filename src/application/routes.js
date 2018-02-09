import { routes as login } from './login';
import { routes as dashboard } from './dashboard';
import { routes as me } from './me';
import { routes as tenant } from './tenant';
import { routes as prisonArea } from './prison-area';
import { routes as prisonHouse } from './prison-house';
import { routes as prisonCriminal } from './prison-criminal';
import { routes as role } from './role';
import { routes as user } from './user';
import { routes as prisonDepartment } from './prison-department';
import { routes as prisonBureauCriminal } from './prison-bureau-criminal';
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
            ...user,
            ...role,
            ...log,
            ...tenant,
            ...prisonArea,
            ...prisonHouse,
            ...prisonCriminal,
            ...prisonDepartment,
            ...prisonBureauCriminal,
            ...prisonBureauDepartment
        ]
    },
    ...login,
    ...error
];
