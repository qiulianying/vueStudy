<template>
  <div>
    <div class="mall_home">
      <div style="margin-top: 5px;margin-left: 5px;margin-bottom: 60px">
        <h1>这里学习一下有关vuex的相关知识</h1>
        <div>
          <p>1、意义：为vue.js开发的状态管理模式</p>
          <p>
            2、vuex的作用：管理vue.js中所有组件状态以及起到全局公共组件的作用
          </p>
          <p>
            3、什么情况下要使用到vuex：如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。
            或者你可以这样理解：比如涉及到登录状态，角色管理区分等多处反复调用的复杂情况，这也是使用vuex的时候
          </p>
          <p class="red">vuex的四大金刚：Sate，Mutation，Actions，Getters</p>
          <p class="red">mapState, mapGetters, mapActions, mapMutations就是他们的辅助函数</p>
        </div>
        <div style="margin-top: 30px;">
          <h2 class="red">以下是具体的案例：stata</h2>
          <div>
            <button @click="clickTest">点击事件，获取到store中的状态 +</button>
            <h2>获取到当前store的状态：{{this.$store.state.test.count}}</h2>
            <button @click="decrement">减少 -</button>
          </div>
          <div style="margin-top: 10px">
            <p>模拟已经来就获取管理员信息：{{this.$store.state.test.identity}}</p>
            <p>例如，每次登陆，切换用户状态，切换用户等复杂操作的状态，就可以通过vuex中的store来统一完成并处理</p>
          </div>
          <div style="margin-top: 10px">
            <p class="red">这里需要注意的是，vuex中的state的改变，有且只有通过vuex中的mutations中方法去改变</p>
          </div>
          <div style="margin-top: 10px">
            <h2 class="red">state的辅助函数mapState：</h2>
            <p class="red">state是获取到状态，那么mapState就是帮助你获取到多个state状态来处理</p>
            <p>测试mapState方式: {{countPlusLocalState}} = {{countAlias}} + {{this.localCount}}</p>
          </div>
        </div>
        <div style="margin-top: 30px">
          <h2 class="red">以下是具体的案例：Getter</h2>
          <p>Getter：相当于是store的computed，只有在对应的依赖值变化的时候，才会执行</p>
          <p>执行过滤：{{doneTodos}}</p>
          <p>查询id为3的text内容：{{(this.$store.getters['test/searchCtn'](3)).text}}</p>
          <p>{{doneTodosTestCtn}}</p>
        </div>
        <div style="margin-top: 30px">
          <h2 class="red">Mutation</h2>
          <p class="red">Vuex的store中的状态的唯一方法是提交mutation</p>
          <p class="red">一条重要的原则就是要记住 mutation 必须是同步函数</p>
        </div>
        <div style="margin-top: 30px">
          <h2 class="red">Action</h2>
          <p>因为Mutation比如是同步，但是，我需要异步去操作怎么办，这时候，可以到 <span class="red">Action：store.dispatch('increment')调用</span> </p>
          <p>Action 类似于 mutation，不同在于：</p>
          <ol>
            <li class="red">Action 提交的是 mutation，而不是直接变更状态。</li>
            <li>Action 可以包含任意异步操作。</li>
          </ol>
          <p class="red">{{this.$store.state.test.identityAction}}</p>
        </div>
      </div>
    </div>

    <div v-if="false">
      <el-button size="small" round @click="showTableCtn = !showTableCtn">表格显示</el-button>
      <el-table
        v-if="showTableCtn"
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          v-for="(item, index) in talbeHeader"
          :fixed="index === 0 ? fixedHave : notFixed"
          :label="item.label"
          :width="item.width"
          :prop="item.prop"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      v-if="false"
      title="修改表单"
      :visible="changeTable"
      width="40%"
      :before-close="addCatalogClose"
    >
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!--备注：vue.js的v-for可以使用数组，同时也可以使用对象-->
        <el-form-item :label="changeName(name)" :prop="name" v-for="(value, name) in object">
          <el-input v-model="ruleForm[name]" :key="name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCatalogClose">取 消</el-button>
        <el-button type="primary" @click="addCatalogSubmit">确 定</el-button>
      </span>
    </el-dialog>

    <div v-if="false">
      <el-table
        :data="tableDataTestCtn"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="amount1"
          label="数值 1（元）">
        </el-table-column>
        <el-table-column
          prop="amount2"
          label="数值 2（元）">
        </el-table-column>
        <el-table-column
          prop="amount3"
          label="数值 3（元）">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  //引入对应的store
  //import store from "@/store/index";    //这里也可以不使用引入的方式，而是直接将store写入到对应的main.js中全局引入
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: "TestCtn",
    data() {
      return {
        localCount: 10,
        fixedHave: true,
        notFixed: false,
        showTableCtn: false,
        msg: 'test',
        talbeHeader: [{
          prop: "date",
          label: "日期",
          width: 150
        }, {
          prop: "name",
          label: "姓名",
          width: 120
        }, {
          prop: "province",
          label: "省份",
          width: 120
        }, {
          prop: "city",
          label: "市区",
          width: 120
        }, {
          prop: "address",
          label: "地址",
          width: 300
        }, {
          prop: "zip",
          label: "邮编",
          width: 120
        }],
        tableData: [],
        ruleForm: {},
        changeTable: false,
        object: {},
        //test
        tableDataTestCtn: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],


        changeName(type) {
          let ctn = '';
          this.talbeHeader.forEach(item => {
            if (item.prop === type) {
              ctn = item.label;
              return
            }
          });
          return ctn;
        }
      }
    },
    methods: {    //方法
      clickTest() {
        //store通过commit调用对应的mutations函数进行进行处理，这里需要注意：通过调用store中的方法，改变store中的state的值
        this.$store.commit('test/increment');
        // this.$store.dispatch('increment');
        // this.count = this.$store.state.count;
        //
        // console.log(this.$store.getters.doneTodos);
      },
      decrement() {
        this.$store.commit('test/decrement');
      },
      handleClick(row) {
        this.object = row;
        this.changeTable = true;
        this.ruleForm = {...this.object};
      },
      addCatalogClose() {
        this.changeTable = false;
      },
      addCatalogSubmit() {
        this.addCatalogClose();
      },
      objectSpanMethod({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 1) {
          if (rowIndex % 5 === 0) {
            return {
              rowspan: 5,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      //这里的mutation方法可以通过this.$store.commit('')的方法提交
      //或者mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
    },
    created() {
      //模拟已经来的时候就开始调用获取store中用户返回的信息
      // this.$store.commit('getIdentity', 110);    //这种是没有执行模块法的传值方式
      this.$store.commit('test/getIdentity', 110);
      this.$store.dispatch('test/getIdentityActionFuction', 10);
      //如果你需要确保获取到接口数据之后再执行，可以这样
      this.$store.dispatch('test/actionA').then(() => {
        console.log(this.$store.state.test.asynchronousCtn);
      });

      this.tableData = [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }];
    },
    mounted() {
    },
    //mapState其实就相当于是一个计算属性，把一次次写state变成通过他的计算处理后再返回，真香
    // computed: mapState({
    //   //第一种写法：使用箭头函数
    //   //countAlias: state => state.count,
    //   // 传字符串参数 'count' 等同于 `state => state.count`
    //   countAlias: 'count',
    //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数，而不能使用箭头函数
    //   countPlusLocalState (state) {
    //     return state.count + this.localCount
    //   }
    // }),
    //针对computed其实还有一种简便写法
    computed: {
      //对象展开运算符
      ...mapState({
        countAlias: state => state.test.count,      //如果是没有带模板的，直接 state => state.count 或者 'count'
        countPlusLocalState(state) {
          return state.test.count + this.localCount
        }
      }),
      //mapGetters的使用，这个和mapState的用法类似
      ...mapGetters({
        doneTodosTestCtn: 'doneTodosTestCtn'
      }),
      //执行getters
      doneTodos() {
        return this.$store.getters.doneTodos
      },
    },
    components: {}
  }
</script>

<style scoped lang="scss">
  .red {
    color: red;
    font-weight: bold;
  }
  .lastCtn {
    margin-bottom: 130px;
  }
</style>
