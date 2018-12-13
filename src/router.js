import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Account from './views/Account.vue'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import Landing from './views/Landing.vue'
import Map from './views/Map.vue'
//

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    },
    {
      path: '/app',
      name: 'app',
      component: Main,
      children: [
        {
          path: '',
          name: 'map',
          component: Map 
        },
        {
          path: '/account',
          name: 'account',
          component: Account
        }
      ]
    }
  ]
})