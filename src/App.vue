<template>
  <div id="app">
    <simple-map></simple-map>
  </div>
</template>

<script>

  import SimpleMap from './components/SimpleMap'

  export default {
    name: 'App',
    components: {
      SimpleMap
    }
  }
</script>

<style>
  body{
    margin: 0;
  }
</style>
