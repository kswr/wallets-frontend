import Vue from 'vue'
import './plugins/vuetify'
import MainLayout from './layouts/MainLayout'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(MainLayout)
}).$mount('#app')


