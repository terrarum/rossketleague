<template>
  <div id="app">
    <h1 class="title">The Rossket League</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
  }

  .title {
    margin-top: 40px;
    text-align: center;
    font-family: sans-serif;
    text-transform: uppercase;
  }
</style>
