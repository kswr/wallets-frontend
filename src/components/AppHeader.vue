<template>
<nav class="app-header">
    <v-navigation-drawer fixed app clipped v-model="drawer" class="nav-draw" disable-resize-watcher></v-navigation-drawer>
    <v-toolbar class="app-toolbar" fixed app clipped-left>
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

<style>
.app-toolbar {
    z-index: 2000
}

.nav-draw {
    z-index: 2000
}
</style>
