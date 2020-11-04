<template>
  <div class="app">
    <Messages v-bind:messages="messages" ></Messages>
    <Menu v-bind:unreadMessages="getunreadMessages()"></Menu>
  </div>
</template>

<script>

import Messages from "./components/Messages.vue";
import Menu from "./components/Menu.vue";
import {messagesMock} from "./mocks/messages.mock";

export default {

  name: "App",
  data:function(){
    return{
      messages: messagesMock,
      unreadMessages: messagesMock.length
    }
  },
  created:function(){
    this.messages.sort((a, b) => {
      a.date=new Date(a.date);
      b.date=new Date(b.date);
      if(a.date.getHours()<b.date.getHours() || a.date.getHours()===b.date.getHours()&&a.date.getMinutes()<b.date.getMinutes())
        return -1;
        else if(a.date.getHours()>b.date.getHours() || a.date.getHours()===b.date.getHours()&&a.date.getMinutes()>b.date.getMinutes())
        return  1;
    });
  }
  ,
  components: {
    Messages,
    Menu
  },
  methods:{
    testFunction(){
      this.messages.push({id:this.messages.length});
      console.log(this.messages)
    },
    getunreadMessages(){
      let unreadMessage = 0
      this.messages.forEach((message)=>{if(message.read===false)unreadMessage++;})
      return unreadMessage;
    }
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
