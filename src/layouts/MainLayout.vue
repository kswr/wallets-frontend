<template>
    <v-app>
        <nav class="app-header" id="app" ref="nav">
            <v-navigation-drawer fixed clipped v-model="drawer" class="nav-draw" disable-resize-watcher v-if=loggedIn></v-navigation-drawer>
            <v-toolbar class="app-toolbar" clipped-left>
                <v-toolbar-side-icon @click="drawer = !drawer" v-if=loggedIn></v-toolbar-side-icon>
                <v-toolbar-title class="headline text-uppercase">
                    <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}">WPS</router-link>
                    <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}" class="font-weight-light">WALLETS</router-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn flat router-link to="login" v-if="!loggedIn">
                    <span class="mr-2">Sign in</span>
                </v-btn>
                <v-btn flat router-link to="signup" v-if="!loggedIn" outline >
                    <span class="mr-2">Sign up</span>
                </v-btn>
                <v-btn flat router-link v-if="loggedIn" @click="logout">
                    <span class="mr-2">Logout</span>
                </v-btn>
            </v-toolbar>
        </nav>
        <router-view></router-view>
    </v-app>
</template>

<script>
    export default {
        data() {
          return {
              drawer: false
          }
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            },
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push({name: 'landing'})
                });
            },
        },
    }
</script>

<style>

    .app-toolbar {
        z-index: 2000;
    }

    .nav-draw {
        z-index: 2000;
    }

</style>
