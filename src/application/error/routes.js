import * as components from './components';

export default [
    {
        path: '/not-found',
        component: components.NotFound,
        name: '404'
    },
    {
        path: '/not-found-resource',
        component: components.NotFoundResource,
        name: '403'
    },
    {
        path: '/server-error',
        component: components.ServerError,
        name: '500'
    }
];
