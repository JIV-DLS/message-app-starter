<template>
  <Message v-for="item in messages" :message="item" :key="item" v-on:update:Read="changeReadState(item.id)"></Message>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  components: {
    Message
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
      return this.$store.getters.sortMessagesByDate;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
