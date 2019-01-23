import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import store from './store'
import Map from './views/Map.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!store.getters.loggedIn) {
          next()
        } else {
          next({
            name: 'app'
          })
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.getters.loggedIn) {
            next()
        } else {
          next({
            name: 'app'
          })
        }
      }
    },
    {
      path: '/app',
      name: 'app',
      component: Map,
      beforeEnter: (to, from, next) => {
        if (store.getters.loggedIn) {
          next()
        } else {
          next({
            name: 'login'
          })
        }
      }
    }
  ],
})
