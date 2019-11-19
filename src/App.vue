<script src="../../../studyJsBase/my-app1/src/App.test.js"></script>
<script src="../../../studyJsBase/my-app1/src/App.js"></script>
<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!--通过router-link组件来实现导航-->
      <!--通过传入to数学指定链接-->
      <!--注意，这里的router-link会被默认渲染位a标签-->
      <router-link to="/detail">go to foo</router-link>
      <router-link to="/commentList">go to bar</router-link>
    </p>
    <!--路由出口-->
    <!--路由匹配到的组件都是放到这里的-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
