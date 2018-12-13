<template>
<nav>
    <v-navigation-drawer fixed app clipped v-model="drawer"></v-navigation-drawer>
    <v-toolbar class="app-header" fixed app clipped-left>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase">
            <router-link to="app" tag="span" exact :style="{ cursor: 'pointer'}">WPS</router-link>
            <router-link to="app" tag="span" exact :style="{ cursor: 'pointer'}" class="font-weight-light">WALLETS</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat router-link to="/">
            <span class="mr-2">Wyloguj</span>
        </v-btn>
    </v-toolbar>
</nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false
            }
        }
    }
</script>