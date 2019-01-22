import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:8080';

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

                      localStorage.setItem('acces_token', token)
                      context.commit('retrieveToken', token)
                      context.commit('mutateCredentials', false);
                      resolve(response)

                      // console.log(response);
                      // context.commit('addTodo', response.data)
                  })
                  .catch(error => {
                      context.commit('mutateCredentials', true);
                      // console.log("Rejected");
                      reject(error);
                  })
          })
      }
  }
})
