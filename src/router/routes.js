export const routes = [
  {
    path: '/',
    name: 'Email',
    component: () => Promise.resolve(require('../components/Email.vue'))
  }
]