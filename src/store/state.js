/*
* vuex的state
* 这里统一管理设置变量
* */
export const stateA = {
  count: 0,
  identity: '',      //模拟用户id
  identityAction: '',//模拟异步获取用户id
  mapStateTest: '',   //测试mapState的数据变化
  asynchronousCtn: '',//测试异步方法执行结束
  todos: [
    {id: 1, text: '110true', done: true},
    {id: 2, text: '111false', done: false}
  ],
  //测试getter搜索的数组
  todosArray: [
    {
      id: 1, text: '110'
    }, {
      id: 2, text: '111'
    }, {
      id: 3, text: 'id为3的内容'
    }
  ],
  cart: {
    added: []
  }
};

//export default state;

// export const stateA = {
//   count: 0,
//   todos: [
//     {id: 1, text: '110true', done: true},
//     {id: 2, text: '111false', done: false}
//   ]
// };
//
// export const stateB = {
//   countB: 0
// };
