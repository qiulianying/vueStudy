<template>
  <div>
    <span>fasdfasdfasdf</span>
    <span>{{msg}}</span>
  </div>
  <!--<someComponent></someComponent>-->
</template>

<script>
  //import someComponent from './someComponent'
  export default {
    name: "TestCmp",
    data(){
      return{
        msg:"Hello Vue.js"
      }
    },
    component:{
      //someComponent
    }
  }
</script>

<style scoped>

</style>
