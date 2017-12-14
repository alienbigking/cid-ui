import { routes as login } from './login';
import { routes as dashboard } from './dashboard';
import { routes as me } from './me';
import { routes as tenant } from './tenant';
import { routes as prisonArea } from './prison-area';
import { routes as prisonHouse } from './prison-house';
import main from './main';

export default [
    {
        path: '/',
        component: main,
        children: [
            {
                path: '/',
                redirect: { name: 'dashboard' }
            },
            ...dashboard,
            ...me,
            ...tenant,
            ...prisonArea,
            ...prisonHouse
        ]
    },
    {
        path: '*',
        redirect: { name: 'dashboard' }
    },
    ...login
];
