<template>
    <div id="map">
        <simple-map class="simple-map"></simple-map>
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
    #map {
        height: 100%;
    }
</style>

