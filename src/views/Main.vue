<template>
    <div class="main">
        <app-header app/>
        <v-content class="vcontent">
            <router-view class="router"></router-view>
        </v-content>
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue'

    export default {
        data() {
            return {
                drawer: false
            }
        },
        components: {
            AppHeader
        }
    }
</script>

<style scoped>

.vcontent {
    height: 100vh;
}

.router {
    height: 100%;
}
</style>

