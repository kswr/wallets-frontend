<template>
    <div id="registered">
        <v-form ref="loginForm" class="fill-height">
            <v-container class="fill-height">
                <v-layout class="justify-center align-center">
                    <v-flex xs12 sm10 md9 lg8 xl7 class="grey lighten-3 elevation-10" style=" border-radius: 20px">
                        <div style="padding: 20px 30px;">
                            <p class="headline grey--text text--darken-3" style="margin: 0">User registered successfully, in <b>{{ time }}</b> you will be redirected to starting page</p>
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
                time: 3,

            }
        },
        methods: {
            pushAfter3Sec() {
                setTimeout( ()=> this.time = 2, 1000)
                setTimeout( ()=> this.time = 1, 2000);
                setTimeout( ()=> this.time = 0, 3000);
                setTimeout( ()=> this.$router.push({ path: 'login' }), 3500);
            }
        },
        created() {
            this.pushAfter3Sec();
        }
    }
</script>

<style scoped>
    #registered {
        height: 100%;
    }

    #registered {
        background: url(/google-earth-temp-mask.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>