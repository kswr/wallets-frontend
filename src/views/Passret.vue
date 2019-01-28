<template>
    <v-form id="pass-ret" ref="passRetForm" class="fill-height">
            <v-container class="fill-height">
                <v-layout class="justify-center align-center">
                    <v-flex xs12 sm10 md9 lg8 xl7 class="grey lighten-3 elevation-10" style=" border-radius: 20px">
                        <div style="padding: 20px 30px;">
                            <p class="headline grey--text text--darken-3">To reset your password, provide your email below:</p>
                            <v-text-field
                            v-model="email"
                            label="Type in email associated with your account"
                            required
                            :rules="emailRules"
                            v-on:keyup.enter="submit"
                            ></v-text-field>
                            <v-btn large color="light-green darken-1" class="white--text" @click="submit" style="margin-left: 0">{{ message }}</v-btn>
                        </div>
                        <v-dialog
                                v-model="info"
                                width="500"
                        >
                        <v-card>
                            <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                            >
                                Password reset info
                            </v-card-title>

                            <v-card-text>
                                Reset link has been send, check your email!
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="primary"
                                        flat
                                        @click="goToLogin"
                                >
                                    Ok, go to login page
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-flex>
                </v-layout>
            </v-container>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Send reset link',
                info: false,
                email: '',
                emailRules: [
                    v => !!v || 'Email is required to proceed',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
            }
        },
        methods: {
            submit() {
                // mockup submit
                if (this.$refs.passRetForm.validate()) {
                    this.info = true;
                    this.message = 'Send reset link again';
                };
            },
            goToLogin() {
                this.$router.push({ path: 'login' });
            }
        }
    }
</script>

<style scoped>
    #pass-ret {
        height: 100%;
    }

    #pass-ret {
        background: url(/google-earth-temp-mask.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>