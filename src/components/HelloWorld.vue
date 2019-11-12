<template>
  <div class="hello">
    <!--这个的是全局组件，在router定义之后，可以在所有vue中全局使用-->
    <com-head :title="'头部全局组件'"></com-head>


    <h1>{{ msg }}</h1>
    <!--test-->
    <span v-bind:title="message">{{message}}</span>
    <div><span>{{reversedMessage}}</span></div>
    <span v-if="seen">可以看到了</span>
    <a v-bind:href="url">链接</a>
    <a :href="url">v-bind的缩写</a>
    <h2>vue事件绑定</h2>
    <!--这里是v-on:click事件的缩写-->
    <button @click="search()">反转消息以及显隐</button>
    <br>
    <div class="static" v-bind:class="{active: isActive, 'text-danger': hasError}">vue中的v-bind对html的class的灵活操作</div>
    <br>
    <h3>v-if条件语句</h3>
    <div>
      这里要注意一下v-if和v-show的区别，这里的v-if是直接元素没有，v-show是display
    </div>
    <h3 v-if="awesome === 'ax'">Vue is awesome!</h3>
    <h3 v-else-if="awesome === 'bx'">Oh no 😢</h3>
    <h3 v-else>Oh no</h3>
    <br>
    <h3>v-for：这个就有点类似react中我们经常会用.map或者forEach，但是v-for可以在数组和对应中均可使用遍历，更加便捷</h3>
    <ul>
      <li v-for="(item, index) in arrays">{{index}}: {{item.message}}</li>
    </ul>
    <ul>
      <li v-for="(value, name) in objects">{{name}}: {{value}}</li>
    </ul>
    <ul>
      <li v-for="n in even(numbers)">{{n}}</li>
    </ul>
    <br>
    <h3>表单绑定输出：v-model</h3>
    <textarea v-model="message"></textarea>
    <br>
    <br>
    <!--数据传递类似react中的this.props，<ControlNews onOk={this.handleOk.bind(this)}/> 来传递给ControlNews组件,但是需要在组件中定义好-->
    <TestCmp :TestTitle='TestTitle'
             :TestCtn="TestCtn"
             :postFontSize="postFontSize"
             :searchText="searchText"
             v-model="searchText"
             @enlarge-text="toTestCmp()">
    </TestCmp>
    <div>{{searchText}}</div>
  </div>
</template>

<script>
  import TestCmp from './TestCmp.vue';        //类似react的es6引入方法，更加了解，这个也是属于局部引入
  export default {
    name: 'HelloWorld',
    components: {
      TestCmp
    },
    data() {
      return {                //这里的return有些类似于react的this.state
        searchText: 'v-modal在组件中使用以及在组件有input的情况使用',
        TestTitle: '这里是传递过去的数据，调用的局部组件',
        TestCtn: '传递多个数据',
        postFontSize: 1,
        msg: 'test',
        message: '鼠标悬停查看的title',
        seen: false,
        url: 'www.baidu.com',
        isActive: true,
        hasError: false,
        awesome: false,
        arrays: [
          {message: '数组'},
          {message: 'Foo'},
          {message: 'Bar'}
        ],
        objects: {
          title: '这是个对象',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        },
        numbers: [1, 2, 3, 4, 5]
      }
    },
    //生命周期
    beforeCreate() {        //类似react的componentWillMount
    },
    created() {             //componentDidMount：都是类似于在第一次初始化之后
    },
    methods: {
      search() {
        this.message = this.message.split('').reverse().join('');
        this.seen = !this.seen;
      },
      even(number) {
        return number.filter((number) => {    //filter相当于是把一个数组扔到一个方法里面去执行返回一个新的数组
          return number % 2 === 0
        })
      },
      toTestCmp() {
        this.postFontSize += 0.1;
      }
    },
    //computed计算器：用于对view层面上比较复杂的计算属性，通过在此计算得出结果
    //这里通过方法同样可以实现，但是通过计算器后，可以在多次调用的时候，无需调用函数直接获得
    computed: {
      reversedMessage() {
        return "这里是进过计算器执行：" + this.message.split('').reverse().join('')
      }
    },
    //watch：有些类似react中的componentWillReceiveProps，监听情况在变化的时候调用
    watch: {
      message(val) {
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
