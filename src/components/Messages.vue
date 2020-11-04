<template>
  <Message v-for="item in messages" :message="item" :key="item" v-on:update:Read="changeReadState(item.id)"></Message>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  props: {
    messages:[],
  },
  components: {
    Message
  },
  methods:{
    changeReadState(id){
      if(!this.messages.find((message)=>message.id===id).read)
      this.messages.find((message)=>message.id===id).read=true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
