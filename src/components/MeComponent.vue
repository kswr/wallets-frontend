<template>
    <div id="mecomponent">
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div> {{ card_text }} </div>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>

    export default {
        data() {
            return{
                avatar: null,
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' }
                ]
            }
        },
        methods: {
            onFileSelected(event) {
                this.avatar = event.target.files[0];
                console.log(this.avatar);
            },
            getAvatar() {
                this.avatar = this.$store.getters.avatar;
            }
        },
        created() {
            // this.getAvatar();
        }
    }

</script>

