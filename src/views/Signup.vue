<template>
    <div id="signup">
        <v-form ref="signUpForm" class="fill-height">
            <v-container class="fill-height">
                <v-layout class="justify-center align-center">
                    <v-flex xs12 sm10 md9 lg8 xl7 class="grey lighten-3 elevation-10" style=" border-radius: 20px">
                        <v-container style="padding: 20px 30px;" grid-list-md>
                            <p class="display-1 grey--text text--darken-3">Sign up</p>
                            <v-layout row wrap>
                                <v-flex xs12 sm6 md6 lg6 xl6>
                                    <v-text-field
                                            v-model="userName"
                                            label="Username"
                                            required
                                            :rules="userNameRules"
                                            v-on:keyup.enter="submit"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6 xl6>
                                    <v-text-field
                                            v-model="email"
                                            label="Email"
                                            required
                                            :rules="emailRules"
                                            v-on:keyup.enter="submit"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6 xl6>
                                    <v-text-field
                                            v-model="firstName"
                                            label="First name"
                                            required
                                            :rules="firstNameRules"
                                            v-on:keyup.enter="submit"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6 xl6>
                                    <v-text-field
                                            v-model="lastName"
                                            label="Last name"
                                            required
                                            :rules="lastNameRules"
                                            v-on:keyup.enter="submit"
                                    ></v-text-field>
                                </v-flex>

                                <v-flex xs12 sm6 md6 lg6 xl6>
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
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6 xl6>
                                    <v-text-field
                                            v-model="confirmPassword"
                                            label="Confirm your password"
                                            required
                                            :rules="confirmPasswordRules"
                                            :append-icon="showConfirmPassword ? 'visibility_off' : 'visibility'"
                                            :type="showConfirmPassword ? 'text' : 'password'"
                                            @click:append="showConfirmPassword = !showConfirmPassword"
                                            v-on:keyup.enter="submit"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6 xl6>
                                    <v-select
                                            v-model="roles"
                                            :items="availRoles"
                                            label="Select roles"
                                            :rules="rolesRules"
                                            required
                                            multiple
                                            chips
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                            <v-checkbox
                                    v-model="terms"
                                    :rules="checkBoxRules"
                            >
                                <div slot="label">I've read and accept
                                    <a @click.stop="termsDialog = !termsDialog">Terms of use and Privacy policy</a>
                                </div>
                            </v-checkbox>
                            <br>
                            <v-btn large color="light-green darken-1" class="white--text" @click="submit">Register new
                                user
                            </v-btn>

                            <v-dialog
                                    v-model="termsDialog"
                                    width="500"
                            >

                                <v-card>
                                    <v-card-title
                                            class="headline grey lighten-2"
                                            primary-title
                                    >
                                        Terms of use and Privacy Policy
                                    </v-card-title>

                                    <v-card-text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                color="primary"
                                                flat
                                                @click="closeAndAccept"
                                        >
                                            I accept
                                        </v-btn>
                                        <v-btn
                                                :color="rejectColor"
                                                flat
                                                @click="clickReject"
                                        >
                                            {{ rejectMessage }}
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog
                                    v-model="exists"
                                    width="500"
                            >

                                <v-card>
                                    <v-card-title
                                            class="headline grey lighten-2"
                                            primary-title
                                    >
                                        This user already exists!
                                    </v-card-title>


                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                color="primary"
                                                flat
                                                @click="this.exists = false"
                                        >
                                            Go back to editing
                                        </v-btn>
                                        <v-btn
                                                color="error"
                                                flat
                                                @click="clearForm"
                                        >
                                            Clear form
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-container>
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
                userName: '',
                firstName: '',
                lastName: '',
                password: '',
                email: '',
                confirmPassword: '',
                roles: [],
                availRoles: ['USER_ROLE', 'ADMIN_ROLE'],
                terms: false,
                termsDialog: false,
                rejectClicks: 0,
                rejectMessage: 'I reject',
                showPassword: false,
                showConfirmPassword: false,
                exists: false,
                emailRules: [
                    v => !!v || 'Email is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                userNameRules: [
                    v => !!v || 'Username is required',
                    v => (v || '').indexOf(' ') < 0 || 'No spaces are allowed',
                    v => (v || '').length >= 4 || 'At least 4 characters-long',
                    v => (v || '').length <= 15 || 'Up to 15 characters'
                ],
                firstNameRules: [
                    v => !!v || 'First name is required',
                    v => (v || '').length <= 20 || 'Up to 20 characters'
                ],
                lastNameRules: [
                    v => !!v || 'Last name is required',
                    v => (v || '').length <= 20 || 'Up to 20 characters'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v || '').length >= 8 || 'At least 8 symbols',
                    v => (v || '').length <= 30 || 'Up to 30 symbols'
                ],
                confirmPasswordRules: [
                    v => !!v || 'Please confirm your password',
                    v => (!!v && v) === this.password || 'Values do not match'
                ],
                checkBoxRules: [
                    v => !!v || 'Accepting terms and rules is required to continue'
                ],
                rolesRules: [
                    v => (v || []).length > 0 || 'Please select roles for this account'
                ]

            }
        },
        methods: {
            closeAndAccept() {
                this.terms = true;
                this.termsDialog = false;
            },
            clickReject() {
                this.rejectClicks = this.rejectClicks + 1;
                this.rejectMessage = 'Abort signing up';
                if (this.rejectClicks === 2) {
                    this.$router.push({name: 'landing'})
                }
            },
            submit() {
                if (this.$refs.signUpForm.validate()) {
                    this.signUp();
                }
            },
            signUp() {
                this.$store.dispatch('signUp', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    userName: this.userName,
                    email: this.email,
                    role: this.roles,
                    password: this.password
                })
                    .then(response => {
                        this.$router.push({ name: 'registered' })
                    })
                    .catch(error => {
                        this.exists = true;
                    })
            },
            clearForm() {
                this.$refs.signUpForm.reset();
            }
        },
        computed: {
            rejectColor: function () {
                if (this.rejectClicks === 0) {
                    return "alert";
                } else {
                    return "error";
                }
            }
        }
    }
</script>

<style scoped>
    #signup {
        height: 100%;
    }

    #signup {
        background: url(/google-earth-temp-mask.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>