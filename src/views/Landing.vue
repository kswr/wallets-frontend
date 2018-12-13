<template>
    <div class="landing">
        <home-header />
        <v-content>
            <router-view></router-view>
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