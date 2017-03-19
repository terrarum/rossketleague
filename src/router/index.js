import Vue from 'vue';
import Router from 'vue-router';
import League from '@/components/League';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: League,
    },
  ],
});
