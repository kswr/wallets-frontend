<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <!-- <span >WPS</span> -->
        <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}">WPS</router-link>
        <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}" class="font-weight-light">WALLETS</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat router-link to="login">
        <span class="mr-2">Logowanie</span>
      </v-btn>
    </v-toolbar>
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>
