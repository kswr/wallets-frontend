<template>
    <div id="mecomponent">
        <v-layout justify-center align-center>
            <v-flex xs11 sm7 md5 lg4 xl4 >
                <v-card style=" border-radius: 20px; margin-top: 20px; margin-bottom: 20px">
                    <v-card-title>
                        <div class="title ">My account </div>
                    </v-card-title>
                    <v-layout align-center justify-center fill-height fluid>
                            <v-avatar size="200">
                                <img :src=avatarUrl alt="avatar">
                            </v-avatar>
                    </v-layout>
                    <v-card-title primary-title>
                        <v-layout align-center justify-center>
                            <h3 class="display-1">{{ firstName }} {{ lastName }}</h3>
                        </v-layout>
                    </v-card-title>
                    <v-form>
                        <v-container>
                            <v-layout>
                                <v-flex xs12>
                                    <v-card style=" border-radius: 20px">
                                        <v-card-title>
                                            <div class="title">Update avatar</div>
                                        </v-card-title>
                                        <v-container style="padding-top: 0">
                                            <v-layout row wrap>
                                                <v-flex xs12>
                                                    <input type="file" @change="onLoad">
                                                </v-flex>
                                                <v-flex xs12 style="margin-top: 10px" @click="snackbar = !snackbar">
                                                    <!--<v-flex xs12 style="margin-top: 10px" @click="onSave">-->
                                                    <v-btn block>Upload</v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                    <v-form>
                        <v-container>
                            <v-layout>
                                <v-flex xs12>
                                    <v-card style=" border-radius: 20px">
                                        <v-card-title>
                                            <div class="title">Update password</div>
                                        </v-card-title>
                                        <v-container style="padding-top: 0">
                                            <v-layout row wrap>
                                                <v-flex xs10 offset-xs1>
                                                    <v-text-field
                                                            label="Old password">
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex xs10 offset-xs1>
                                                    <v-text-field
                                                            label="New password">
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex xs10 offset-xs1>
                                                    <v-text-field
                                                            label="Repeat new password">
                                                    </v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <v-btn block @click="snackbar = !snackbar">Update password</v-btn>
                                        </v-container>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                    <v-container style="padding-top: 0">
                        <v-btn block @click="snackbar = !snackbar" color="error">Delete account</v-btn>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <v-snackbar
                top
                style="z-index: 10000"
        v-model="snackbar">
            {{snackbarText}}
            <v-btn
                    flat
                    @click="snackbar = false"
            >Close</v-btn>
        </v-snackbar>

    </div>
</template>

<script>


    export default {
        data() {
            return{
                snackbar: false,
                snackbarText: 'Not implemented yet',
                newAvatar: null,
            }
        },
        methods: {
            onLoad(event) {
                this.newAvatar = event.target.files[0];
            },
            onSave() {
               this.$store.dispatch('updateAvatar', {
                   data: this.newAvatar
               })
                   .then(response => {
                       console.log(response)
                   })
                   .catch(error => {
                       console.log(error)
                       console.log('error')
                   })
            }
        },
        computed: {
            avatarUrl() {
                return this.$store.getters.avatarUrl;
            },
            lastName() {
                return this.$store.getters.lastName;
            },
            firstName() {
                return this.$store.getters.firstName;
            }
        }
    }

</script>

