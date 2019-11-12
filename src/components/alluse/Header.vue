<script src="../../../../../studyJsBase/my-app1/src/App.js"></script>
<template>
  <div>
    {{title}}：{{defaultVaue}}
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        counter: this.title,
      }
    },
    props: {              //这里为头部组件传递的数据来来现在类型
      title: String,
      defaultVaue: {
        type: String,
        default: '使用默认值显示'    //可以通过这种方式定义默认值
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
