//Mutation：作为vuex的核心之一，主要是执行的方法
export const mutationsA = {
  //下面是具体的方法，这里把他返回出来
  increment(state) {
    state.count ++
  },
  decrement(state) {
    state.count --
  },
  //模拟获取用户信息方法
  //但是这里存在一个问题，文档上面的要求是，mutation必须是同步函数，也就是说，不能存在类似接口调用的异步情况
  //那么，上面说的这种在mutation中接口获取用户信息实际上是不存在的，最多只是在这类做了同步处理，所以直接去调用不行的
  //所以这种情况下，我们就得通过Action的方式，异步去调用Mutation中的方法
  getIdentity(state, ctn) {
    state.identity = 'admin' + ctn
  },
  //Action来异步调用mutation
  getIdentityAction(state, ctn) {
    state.identityAction = `模拟异步Action调用身份：${ctn}`;
  },
  //测试异步执行之后再获取
  asynchronous(state) {
    state.asynchronousCtn = '异步方法调用成功后执行'
  },
  asynchronousOther(state) {
    state.asynchronousCtn = '异步方法调用成功后执行'
  }
}
