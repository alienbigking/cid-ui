import { routes as login } from './login';
import { routes as dashboard } from './dashboard';
import { routes as userProfile } from './me';
import { routes as tenant } from './tenant';
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
            ...userProfile
        ]
    },
    {
        path: '*',
        redirect: { name: 'dashboard' }
    },
    ...login,
    ...tenant,
    ...prisonHouse
];
