<template>
    <div id="login" class="login">
        <v-container class="fill-height">
            <v-layout class="justify-center align-center">
                <v-flex xs10 sm7 md5 lg4 xl3 class="grey lighten-3 elevation-10" style=" border-radius: 20px">
                    <div style="padding: 30px 40px;">
                        <p class="display-1 grey--text text--darken-3">Podaj dane swojego konta</p>
                        <v-text-field
                                v-model="login"
                                label="Login"
                                required></v-text-field>

                        <v-text-field
                                v-model="password"
                                label="Hasło"
                                required></v-text-field>
                        <v-layout class="align-center column">
                            <v-btn to="app" block large color="light-green darken-1" class="white--text">Zaloguj</v-btn>
                            <br>
                            <a>Zapomniałeś hasła?</a>
                            <a>Nie posiadasz konta?</a>
                        </v-layout>
                    </div>
                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    #login {
        height: 100%;
    }

    .login {
        background: url(/google-earth-temp-mask.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>
