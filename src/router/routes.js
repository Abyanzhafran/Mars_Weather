const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') },
  //   ],
  // },
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '/home', component: () => import('pages/Homepage.vue') },
      { path: '/', component: () => import('pages/Splash.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
