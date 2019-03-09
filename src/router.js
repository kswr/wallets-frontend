import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import store from './store'
import Map from './views/Map.vue'
import Signup from './views/Signup'
import Passret from './views/Passret'
import Registered from './views/Registered'
import MeView from './views/MeView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/me',
      name: 'my-account',
      component: MeView,
      beforeEnter: (to, from, next) => {
        if (store.getters.loggedIn) {
          next()
        } else {
          next({
            name: 'login'
          })
        }
      }
    },
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
      path: '/signup',
      name: 'signup',
      component: Signup,
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
      path: '/passret',
      name: 'passret',
      component: Passret,
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
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered,
      beforeEnter: (to, from, next) => {
        if (!store.getters.loggedIn) {
          next()
        } else {
          next({
            name: 'app'
          })
        }
      }
    }
  ],
})
