<template>
    <v-toolbar class="home-header" app>
        <v-toolbar-title class="headline text-uppercase">
            <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}">WPS</router-link>
            <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}" class="font-weight-light">WALLETS</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat router-link to="login">
            <span class="mr-2">Logowanie</span>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {

    }
</script>