<template>

 <table width="100%">
  <tr  height="30px">
   <th rowspan="2"><center><img :src="contact.profileImage" width="100" height="100"></center></th>
   <th width="80%" style="text-align: left">{{contact.name}}</th>
   <th rowspan="2">

   </th>
  </tr>
  <tr height="50px">
  </tr>
 </table>
</template>

<script>
  //import moment from 'moment'
export default {
  name: "Contact",
  props: {
   contact: Object,
  },
  methods: {
  },
  filters: {
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
