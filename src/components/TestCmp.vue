<template>
  <div>
    <div :style="{ fontSize: postFontSize + 'em' }">
      {{TestTitle}}: {{TestCtn}}
    </div>
    <div>
      <!--这里把点击事件传递给父类组，类似于react this.props-->
      <button @click="$emit('enlarge-text')">子组件点击修改样式</button>
    </div>
    <br>
    <div>
      <h3>v-modal在组件中的使用</h3>
      <input v-bind:value="searchText" @input="$emit('input', $event.target.value)">
    </div>
  </div>
</template>

<script>
  var mixin = {
    created: () => {
      console.log('大桥未久老师');
    }
  };

  export default {
    name: 'TestCmp',
    mixins: [mixin],
    data() {
      return {
      }
    },
    props:['TestTitle', 'TestCtn', 'postFontSize', 'searchText'],      //这里有点类似于react中使用this.props来接收父类组件传递过来的数据
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
