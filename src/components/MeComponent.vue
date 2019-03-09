<template>
    <div id="meComponent">
        <v-form ref="myAccountForm">
            <p>Me component</p>
            <input type="file" @change="onFileSelected">
            <v-img v-model="avatar"></v-img>
            <v-img src="http://localhost:8080/getavatarone"></v-img>
            <!--<v-img v-bind:src="'data:image/jpeg;base64,'+avatar"></v-img>-->
        </v-form>
    </div>
</template>

<script>

    export default {
        data() {
            return{
                avatar: null
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

