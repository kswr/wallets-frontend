<template>
    <v-app>
        <nav class="app-header" id="app" ref="nav">
            <v-navigation-drawer fixed clipped v-model="drawer" class="nav-draw" disable-resize-watcher v-if=loggedIn>
                <div style="height: 56px;"></div>
                <v-container style="padding: 0">
                    <v-layout style="height: 100px">
                        <v-flex xs12>
                            <v-card color="light-grey lighten-4" flat>
                                <v-layout>
                                    <v-flex xs4>
                                        <v-avatar size="80" style="margin: 10px">
                                            <img :src=avatarUrl alt="avatar">
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-card-title primary-title style="height: 100px">
                                            <div>
                                                <div class="title font-weight-light">{{ firstName }}</div>
                                                <div class="headline font-weight-medium">{{ lastName }}</div>
                                            </div>
                                        </v-card-title>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-divider></v-divider>
                <v-list>
                    <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            :to=item.destination
                    >
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <div style="height: 56px"></div>
            <v-toolbar class="app-toolbar" fixed clipped-left height="56px">
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
              drawer: false,
              items: [
                  { title: 'Map', icon: 'map', destination: 'app' },
                  { title: 'My account', icon: 'account_box', destination: 'me' },
                  { title: 'Admin', icon: 'gavel', destination: '' },
                  { title: 'About', icon: 'info', destination: '' },
              ],
          }
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            },
            avatarUrl() {
                return this.$store.getters.avatarUrl;
            },
            lastName() {
                return this.$store.getters.lastName;
            },
            firstName() {
                return this.$store.getters.firstName;
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push({name: 'landing'})
                });
            },
        },
        components: {
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
