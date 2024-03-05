import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./pages/HomePage/HomePage.vue') },
  {
    path: '/Products',
    component: () => import('./pages/ProductsPage/ProductsPage.vue'),
  },
  {
    path: '/Product/:id',
    component: () =>
      import('./pages/ProductDetailsPage/ProductDetailsPage.vue'),
  },
  { path: '/Cart', component: () => import('./pages/CartPage/CartPage.vue') },
  {
    path: '/Favorites',
    component: () => import('./pages/FavoritesPage/FavoritesPage.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
