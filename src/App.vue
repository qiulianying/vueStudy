<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import '@/assets/scss/animated.scss';
  import '@/assets/scss/base.scss';
  import '@/assets/scss/reset.scss';
  //这个是有关手机端rem转化适配的js
  import '@/assets/script/autoScreen.js'
  export default {
    name: 'App'
  }
</script>
