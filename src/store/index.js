import Vue from 'vue';
import Vuex from 'vuex';
import test from './module/test'
Vue.use(Vuex);    // 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

// import state from './state';
// import mutations from './mutations'
// import getters from './getters'
// import actions from './actions'

// const store = new Vuex.Store({
//   state: state,
//   mutations:mutations,
//   getters,      //类似于vuex用于计算state变量的，很想vue中的computed
//   actions
// });
// export default store


/*扩展知识点：
* 哲理性需要注意的，我们最终将所有的store都放到一个地方，那么这回导致store的数量太多
* 这里可以通过将store分为模块module，每个module有其对应的state，getters，mutations等
* */
const store = new Vuex.Store({
  modules: {
    test: test
  }
});
export default store

