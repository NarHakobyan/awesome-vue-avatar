<template>
  <div id="app">
    <h1>Vue-Avatar-Editor Example</h1>
    <h2> With basic component : Vue-Avatar </h2>
    <basic-vue-avatar ref="basic"></basic-vue-avatar>
  </div>
</template>

<script>
  import BasicVueAvatar from './examples/BasicVueAvatar.vue';

  export default {
    name: 'app',
    components: {
      BasicVueAvatar
    },
    data () {
      return {};
    },
    methods: {
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  pre {
    overflow: auto;
    text-align: left;
    margin: 0 auto;
    max-width: 800px;
  }
</style>
