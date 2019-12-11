<template>
  <!--底部导航-->
  <footer class="read_footer">
    <div class="flex_sp read_footer_con">
      <router-link :class="active==0?'footer_shelf current':'footer_shelf'" to="/bookShelf">书架</router-link>
      <router-link :class="active==1?'footer_mall current':'footer_mall'" to="/bookMall">书城</router-link>
      <router-link :class="active==2?'footer_search current':'footer_search'" to="/search">搜索</router-link>
      <router-link :class="active==3?'footer_mine current':'footer_mine'" to="/my">我的</router-link>
    </div>
  </footer>
  <!--//底部导航-->
</template>

<script>
  export default {
    name: "comFoot",
    data() {
      return {
        msg: "Hello Vue.js"
      }
    },
    props:['active']
  }
</script>

<style scoped>

</style>
