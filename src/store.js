import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API;


export default new Vuex.Store({
  state: {
      token: localStorage.getItem('access_token') || null,
      invalidCredentials: false,
  },
  getters: {
      loggedIn(state) {
          return state.token !== null;
      },
      invalidCredentials(state) {
          return state.invalidCredentials;
      }
  },
  mutations: {
      retrieveToken(state, token) {
          state.token = token;
      },
      mutateCredentials(state, valid) {
          state.invalidCredentials = valid;
      },
      logout(state) {
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
                      context.commit('mutateCredentials', false);
                      resolve(response)
                  })
                  .catch(error => {
                      context.commit('mutateCredentials', true);
                      reject(error);
                  })
          })
      },
      logout(context) {
          // return new Promise((resolve) => {
          //     context.commit('logout');
          //     resolve("done");
          // })
          context.commit('logout');
      }
  }
})
