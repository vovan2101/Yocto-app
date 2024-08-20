import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'
// import FindInvestors from './views/FindInvestors.vue';
import sendForm from './views/sendForm.vue'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    // {
    //   path: '/find-investors',
    //   name: 'FindInvestors',
    //   component: FindInvestors
    // },
    {
      path: '/send-form',
      name: 'sendForm',
      component: sendForm,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
