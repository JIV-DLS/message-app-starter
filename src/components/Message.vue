<template>
  <table width="100%" @click="markAsRead()">
    <tr  height="30px">
      <th rowspan="2"><center><img :src="message.sender.profileImage"></center></th>
      <th width="80%" style="text-align: left">{{message.sender.name}}</th>
      <th rowspan="2">
        <i v-if="message.read" class="fa fa-check-double" style="color: limegreen" aria-hidden="true"></i>
        <i v-else class="fa fa-check" aria-hidden="true"></i>
        {{dateToHourMin(message.date)}}</th>
    </tr>
    <tr height="50px">
      <th width="80%">{{message.content}}</th>
    </tr>
  </table>
</template>

<script>
  //import moment from 'moment'
export default {
  name: "Message",
  props: {
    message: Object,
  },
  methods: {
    markAsRead(){
      this.$emit('update:Read');
    },
    dateToHourMin(date){
      if (date) {
        //return moment(String(date)).format('hh:mm')
        const complet = new Date(date);
        return complet.getHours()+':'+complet.getMinutes();
      }
    }
  },
  filters: {
    formatHourMin: function (value) {
      return this.dateToHourMin(value);
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
