<template>
  <div class="app">
    <div style="height: 400px; max-height: 400px; overflow-y: hidden;">
      <router-view></router-view>
    </div>
    <div>
      <Menu></Menu>
    </div>
  </div>
</template>

<script>

import Menu from "./components/Menu.vue";

export default {

  name: "App",
  components: {
    Menu
  },
  created:function() {
    this.$store.dispatch('setMessages');
    this.$store.dispatch('setContacts');
  }
};
</script>

<style>
html, body {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .app{
    height: 20px;
  }
</style>
