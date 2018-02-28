import components from '@/components';

export default {
  install: (Vue, Option) => {
    Object.keys(components).forEach(key => {
      Vue.component(`${key}`, components[key]);
    });
  }
};
