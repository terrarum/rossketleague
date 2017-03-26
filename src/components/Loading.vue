<template>
  <div class="loading">
    <div class="loader">
      LOADING
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
  };
</script>

<style scoped lang="scss">
  .loading {
    height: 400px;
    display: flex;
  }

  .loader {
    margin: auto;
    font-size: 40px;
    font-family: sans-serif;
    animation: 5s infinite linear rotate;
    transform-origin: 21% 50%;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
</style>
