<template>
    <div id="login">
        <v-form ref="loginForm" class="fill-height">
            <v-container class="fill-height">
                <v-layout class="justify-center align-center">
                    <v-flex xs10 sm7 md5 lg4 xl3 class="grey lighten-3 elevation-10" style=" border-radius: 20px">
                        <div style="padding: 30px 40px;">
                            <p class="display-1 grey--text text--darken-3">Sign in</p>
                            <v-text-field
                                    v-model="username"
                                    label="Username"
                                    required
                                    :rules="loginRules"
                                    v-on:keyup.enter="submit"
                            ></v-text-field>

                            <v-text-field
                                    v-model="password"
                                    label="Password"
                                    required
                                    :rules="passwordRules"
                                    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                                    :type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword = !showPassword"
                                    v-on:keyup.enter="submit"
                            ></v-text-field>
                            <v-alert v-model="displayReset" type="error" transition="scale-transition" outline>Forgot your password? <router-link to="passret" class="red--text" style="text-decoration: underline">Reset it here</router-link></v-alert>
                            <br v-if="!displayReset">
                            <v-layout class="align-center column">
                                <v-btn block large color="light-green darken-1" class="white--text" @click="submit">Login</v-btn>
                                <br>
                                <router-link to="passret">Forgot your password?</router-link>
                                <router-link to="signup">Don't have an account?</router-link>
                            </v-layout>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                attempts: 0,
                showPassword: false,
                loginRules: [
                    v => !!v || 'Username is required'
                ],
                passwordRules: [
                    v => !!v || 'Password is required'
                ],
            }
        },
        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password,
                })
                    .then(response => {
                        this.$router.push({ name: 'app' })
                    })
                    .catch(error => {
                        this.attempts++;
                    })
            },
            submit() {
                if (this.$refs.loginForm.validate()) {
                    this.login();
                }
            }
        },
        computed: {
            displayReset() {
                return this.attempts > 0;
            }
        }
    }
</script>

<style scoped>
    #login {
        height: 100%;
    }

    #login {
        background: url(/google-earth-temp-mask.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    
    a {
        text-decoration: none;
    }

</style>
