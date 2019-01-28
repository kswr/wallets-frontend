import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API;


export default new Vuex.Store({
  state: {
      token: localStorage.getItem('access_token') || null,
  },
  getters: {
      loggedIn(state) {
          return state.token !== null;
      },
  },
  mutations: {
      retrieveToken(state, token) {
          state.token = token;
      },
      logout(state) {
          localStorage.removeItem('access_token');
          state.token = null;
      }
  },
  actions: {
      retrieveToken(context, credentials) {
          return new Promise((resolve, reject) => {
              axios.post('/api/auth/signin', {
                  username: credentials.username,
                  password: credentials.password,
              })
                  .then(response => {

                      const token = response.data.accessToken

                      localStorage.setItem('access_token', token)
                      context.commit('retrieveToken', token)
                      resolve(response)
                  })
                  .catch(error => {
                      reject(error);
                  })
          })
      },
      logout(context) {
          context.commit('logout');
      },
      signUp(context, credentials) {
          return new Promise((resolve, reject) => {
              axios.post('/api/auth/signup', {
                  name: credentials.name,
                  username: credentials.username,
                  email: credentials.email,
                  role: credentials.role,
                  password: credentials.password
              })
                  .then(response => {
                      resolve(response)
                  })
                  .catch(error => {
                      reject(error)
                  })
          })
      }
  }
})
