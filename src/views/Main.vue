<template>
    <div class="main">
        <app-header app/>
        <v-content>
            <router-view></router-view>
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