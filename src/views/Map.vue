<template>
    <div class="map">
        <simple-map app class="simple-map"></simple-map>
    </div>
</template>

<script>
import SimpleMap from '@/components/SimpleMap.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        SimpleMap
    }
}
</script>

<style>
.simple-map {
    height: 100%;
}
</style>

