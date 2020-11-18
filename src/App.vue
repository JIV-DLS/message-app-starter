<template>
  <div class="app">
    <Header></Header>
    <Messages v-bind:messages="messages" ></Messages>
    <Menu></Menu>
  </div>
</template>

<script>

import Header from "./components/Header.vue";
import Messages from "./components/Messages.vue";
import Menu from "./components/Menu.vue";

export default {

  name: "App",
  components: {
    Messages,
    Menu,
    Header
  },
  created:function() {
    this.$store.dispatch('setMessages');
  }
};
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
