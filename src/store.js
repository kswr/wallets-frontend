import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_API;


export default new Vuex.Store({
  state: {
      token: localStorage.getItem('access_token') || null,
      avatarUrl: localStorage.getItem('avatarUrl') || null,
      firstName: localStorage.getItem('firstName') || null,
      lastName: localStorage.getItem('lastName') || null,
      email: localStorage.getItem('email') || null,
      username: localStorage.getItem('username') || null,
      userId: localStorage.getItem('userId') || null,
      roles: localStorage.getItem('roles') || null,
  },
  getters: {
      loggedIn(state) {
          return state.token !== null;
      },
      avatarUrl(state) {
          return state.avatarUrl;
      },
      firstName(state) {
          return state.firstName;
      },
      lastName(state) {
          return state.lastName;
      },
      email(state) {
          return state.email;
      },
      username(state) {
          return state.username;
      },
      userId(state) {
          return state.userId;
      },
      roles(state) {
          return state.roles;
      }
  },
  mutations: {
      retrieveToken(state, token) {
          state.token = token;
      },
      avatarUrl(state, avatarUrl) {
          state.avatarUrl = avatarUrl;
      },
      logout(state) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('avatarUrl')
          localStorage.removeItem('firstName');
          localStorage.removeItem('lastName');
          localStorage.removeItem('email');
          localStorage.removeItem('username');
          localStorage.removeItem('userId');
          localStorage.removeItem('roles');
          state.token = null;
          state.avatarUrl = null;
          state.firstName = null;
          state.lastName = null;
          state.email = null;
          state.username = null;
          state.userId = null;
          state.roles = null;
      },
      firstName(state, firstName) {
          state.firstName = firstName;
      },
      lastName(state, lastName) {
          state.lastName = lastName;
      },
      email(state, email) {
          state.email = email;
      },
      username(state, username) {
          state.username = username;
      },
      userId(state, userId) {
          state.userId = userId;
      },
      roles(state, roles) {
          state.roles = roles;
      }

  },
  actions: {
      retrieveToken(context, credentials) {
          return new Promise((resolve, reject) => {
              axios.post('/auth/signin', {
                  username: credentials.username,
                  password: credentials.password,
              })
                  .then(response => {

                      const token = response.data.token;
                      const avatarUrl = "".concat(process.env.VUE_APP_API, '/getavatar/', response.data.id);
                      const firstName = response.data.firstName;
                      const lastName = response.data.lastName;
                      const email = response.data.email;
                      const username = response.data.username;
                      const userId = response.data.id;
                      const roles = response.data.roles;


                      localStorage.setItem('access_token', token);
                      localStorage.setItem('avatarUrl', avatarUrl);
                      localStorage.setItem('firstName', firstName);
                      localStorage.setItem('lastName', lastName);
                      localStorage.setItem('email', email);
                      localStorage.setItem('username', username);
                      localStorage.setItem('userId', userId);
                      localStorage.setItem('roles', roles);
                      context.commit('retrieveToken', token);
                      context.commit('avatarUrl', avatarUrl);
                      context.commit('firstName', firstName);
                      context.commit('lastName', lastName);
                      context.commit('email', email);
                      context.commit('username', username);
                      context.commit('userId', userId);
                      context.commit('roles', roles);
                      resolve(response)
                  })
                  .catch(error => {
                      reject(error);
                  })
          })
      },
      getAvatar(context) {
          return new Promise((resolve, reject) => {
              axios.get('/getavatar', {
                  headers: {
                      'Authorization' : 'Bearer ' + localStorage.access_token
                  }
              }).then(response => {

                  const avatar = response.data;
                  localStorage.setItem('avatar', avatar);
                  context.commit('getAvatar', avatar);
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
              axios.post('/signup', {
                  firstName: credentials.firstName,
                  lastName: credentials.lastName,
                  userName: credentials.userName,
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
