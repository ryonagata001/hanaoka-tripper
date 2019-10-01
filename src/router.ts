import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NEWS from './views/NEWS.vue';
import WORKS from './views/WORKS.vue';
import PEOPLE from './views/PEOPLE.vue';
import ABOUTUS from './views/ABOUTUS.vue';
import TOP from './views/TOP.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: NEWS,
    },
    {
      path: '/works',
      name: 'works',
      component: WORKS,
    },
    {
      path: '/people',
      name: 'people',
      component: PEOPLE,
    },
    {
      path: '/about',
      name: 'about',
      component: ABOUTUS,
    },
    {
      path: '/top',
      name: 'top',
      component: TOP,
    },
  ],
});
