<template>
  <table width="100%">
    <tr style="">
      <td width="96%" colspan="4" style="text-align: left"><h2>Chats</h2></td>
      <td width="2%">
        <i class="fa fa-search"></i>
      </td>
      <td width="2%">
        <i class="fa fa-plus"></i>
      </td>
    </tr>
    <tr style="">
      <td width="16%" class="active">All</td>
      <td width="17%">Favorites</td>
      <td width="17%">Channels</td>
      <td width="46%"></td>
      <td width="2%"></td>
      <td width="2%"></td>
    </tr>
  </table>
  <!--<div class="hello">
    <h1>Nombre de message non lu: {{unreadMessages}}</h1>
  </div>-->
</template>

<script>
export default {
  name: "Menu",
  props: {
    unreadMessages : Number,
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
  .active{
    text-decoration: #0088cc underline;
    color: #0088cc;
  }
</style>
