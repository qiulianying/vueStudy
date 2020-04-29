export const actionsA = {
  // increment (context) {              //这种为普通的写法
  //   context.commit('increment');
  // }

  // increment: ({ commit }) => {       //这是es6写法
  //   commit('increment')
  // }

  increment ({ commit }) {      //这个是es6的简化写法，特别是需要调用 commit 很多次的时候；类似下面的箭头函数简化
    commit('increment')
  },
  //这里是模拟调用获取admin的接口，通过调方法接口获取数据
  getIdentityActionFuction ({ commit }, ctn) {
    commit('getIdentityAction', ctn)
  },
  //来看一个更加实际的购物车示例，涉及到调用异步 API 和分发多重 mutation：
  /*
  * commit：相当于是方法调用
  * state：获取到state的数据
  * products：外部传入的数据
  * */
  checkout: ({ commit, state }, products) => {
    //把当前购物车的物品进行备份
    const savedCartItems = [...state.cart.added];

    //发出结账请求，然后乐观地清空购物车，这里是模拟调用清空购物车的方法
    commit('CHECKOUT_REQUEST');

    // 购物 API 接受一个成功回调和一个失败回调
    shop.buyProducts(
      products,
      // 成功操作，commit去调用成功的方法
      () => commit('CHECKOUT_SUCCESS'),
      // 失败操作，去commit失败的方法
      () => commit('CHECKOUT_FAILURE', savedCartItems)
    )
  },
  //如果说，我们需要把具体的异步方法确保能够执行结束只有，再去执行其他的，有以下几种写法
  actionA ({ commit }) {
    //设置保证return出最新的promise后执行
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('asynchronous');
        resolve()
      }, 1000)
    })
  },
  //多个action的多重异步
  actionB: (commit, dispatch) => {
    return dispatch('actionA').then((res) => {
      commit('asynchronousOther');    //在执行完actionA成功只有，再去执行asynchronousOther
    })
  },
  //或者通过async/await的方式处理
  //这里我们来介绍一下这个async：异步方法；await：等待异步方法
  //async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。
  async actionC ({ dispatch, commit }) {
    await dispatch('actionA');    //await等待actionA执行完成
    commit('asynchronousOther', await asynchronousOther())
  }
}
