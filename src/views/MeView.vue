<template>
    <div id="meView">
        <me-component class="me-component"></me-component>
    </div>
</template>

<script>
    import MeComponent from '@/components/MeComponent.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            MeComponent,
        }
    }
</script>

<style>
    #meView {
        background-color: #E0E0E0;
        height: 100%;
    }
</style>