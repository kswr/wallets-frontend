<template>
    <div id="home">
            <v-container class="fill-height" style="margin-left: 0">
                <v-layout class="justify-center align-center">
                    <v-flex xs12 sm10 md9 lg8 xl7 class="lighten-3" style=" border-radius: 20px">
                        <div>
                            <p :class="fontSize">WPS</p>
                            <p :class="fontSize">WALLETS</p>
                            <p class="display-1 white--text shadow1">Simple app for real-time viewing, managing and controlling your interactive sales wallet</p>
                            <v-btn large color="light-green darken-3" class="white--text elevation-5" to="signup">Create an account</v-btn>
                            <v-btn large color="light-green darken-1" class="white--text elevation-5" to="login">Sign in</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
    </div>
</template>

<script>
  export default {
    components: {
    },
      computed: {
        fontSize() {
            switch(this.$vuetify.breakpoint.name) {
                case 'xs': return 'display-3 white--text text--darken-3 font-weight-bold shadow1';
                default: return 'display-4 white--text text--darken-3 font-weight-bold shadow1';
            }
        }
      },
  }
</script>

<style scoped>
    #home {
        height: 100%;
    }
    #home {
        background: url(/google-earth-temp.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .shadow1 {
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3)
    }
</style>

