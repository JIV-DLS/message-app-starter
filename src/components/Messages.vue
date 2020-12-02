<template>
  <div style="height: 90px;">
    <Header title="Chats"></Header>
    <MessagesHeader title="Chats"></MessagesHeader>
  </div>
  <div style="height: 310px; max-height: 350px; overflow-y: scroll;">
  <Message v-for="item in messages" :message="item" :key="item" v-on:update:Read="changeReadState(item.id)"></Message>
  </div>
</template>

<script>
import Message from "./Message";
import Header from "./Header";
import MessagesHeader from "./MessagesHeader";

export default {
  name: "Messages",
  components: {
    MessagesHeader,
    Message,
    Header
  },
  methods:{
    changeReadState(id){
      if(!this.messages.find((message)=>message.id===id).read){
      this.messages.find((message)=>message.id===id).read=true;
      this.$store.commit('setMessages',{messages:this.messages})}
    }
  },
  computed:{
    messages(){
      console.log(this.$store);
      return this.$store.getters.sortMessagesByDate;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
