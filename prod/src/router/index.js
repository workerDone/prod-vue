import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Settings from '@/components/Settings';
import Contribution from '@/components/Contribution';
import FAQ from '@/components/FAQ';
import History from '@/components/History';
import Dashboard from '@/components/Dashboard';
import Verification from '@/components/Verification';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/contribution',
      name: 'Contribution',
      component: Contribution,
    },
    {
      path: '/history',
      name: 'History',
      component: History,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/verification',
      name: 'Verification',
      component: Verification,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
    },
  ],
});