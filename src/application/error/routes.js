import * as components from './components';

export default [
  {
    path: '/not-found-error',
    component: components.TheNotFoundError,
    name: '404'
  },
  {
    path: '/forbidden-error',
    component: components.TheForbiddenError,
    name: '403'
  },
  {
    path: '/server-error',
    component: components.TheServerError,
    name: '500'
  },
  {
    path: '*',
    component: components.TheNotFoundError
  }
];
