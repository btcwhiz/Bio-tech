<template>
  <div class="App">
    <router-view />
  </div>
</template>

<script>
export default {
  name: `App`,
  created() {
    document.title = "Home Page"
  }
};
</script>

<style>
@import './assets/css/basic.css';
</style>
