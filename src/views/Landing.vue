<template>
    <div class="landing">
        <home-header />
        <v-content class="vcontent">
            <router-view class="router"></router-view>
        </v-content>
    </div>
</template>

<script>
    import HomeHeader from '@/components/HomeHeader.vue'
    export default {
        components: {
            HomeHeader
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
