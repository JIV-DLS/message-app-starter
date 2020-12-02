<template>
  <table width="100%">
    <tr style="border-bottom: solid red 3px">
      <td><i class="fa fa-users fa-3x" aria-hidden="true"></i></td>
      <td><router-link to="contacts"><i class="fa fa-phone fa-3x" aria-hidden="true"></i></router-link></td>
      <td><router-link to="messages"><i class="fa fa-comment-dots fa-3x fa-border" v-bind:class="{'badge':unreadMessages>0}" :data-count="unreadMessages"></i></router-link></td>
      <td><i class="fas fa-credit-card fa-3x" aria-hidden="true"></i></td>
      <td><i class="fas fa-ellipsis-h fa-3x" aria-hidden="true"></i></td>
    </tr>
  </table>
  <!--<div class="hello">
    <h1>Nombre de message non lu: {{unreadMessages}}</h1>
  </div>-->
</template>

<script>
export default {
  name: "Menu",
  computed:{
    unreadMessages(){
      return this.$store.getters.numberOfUnreadMessages;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *.icon-blue {color: #0088cc}
  *.icon-grey {color: grey}
  i {
    width:100px;
    text-align:center;
    vertical-align:middle;
    position: relative;
  }
  .badge:after{
    content:attr(data-count);
    position: absolute;
    background: crimson;
    height:2rem;
    top:1rem;
    right:1.5rem;
    width:2rem;
    text-align: center;
    line-height: 2rem;;
    font-size: 10px;
    border-radius: 50%;
    color:white;
    border:1px solid crimson;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }
</style>
