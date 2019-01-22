import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import MainLayout from './layouts/MainLayout'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // render: h => h(App)
  render: h => h(MainLayout)
}).$mount('#app')
