<template>
 <div style="height: 90px;">
 <Header title="Contacts"></Header>
</div>
 <div style="height: 310px; max-height: 350px; overflow-y: scroll;">
 <Contact v-for="item in contacts" :contact="item" :key="item" v-on:update:Read="changeReadState(item.id)"></Contact>
 </div>
</template>

<script>
  //import moment from 'moment'
import Contact from "./Contact";
import Header from "./Header";
  export default {
  name: "Contacts",
   components: {
    Contact,
    Header
   },
  props: {
  },
  methods: {
  },
  filters: {
  },
   computed:{
    contacts(){
     return this.$store.state.contactsModule.contacts;
    }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    border-bottom: 3px solid #dddddd;
    padding: 8px;
  }
</style>
