import { stateA } from '../state';
import { mutationsA } from '../mutations'
import { gettersA } from '../getters'
import { actionsA } from '../actions'

//输出具体的模块，这里的结构布局和store的具体布局是一致的
export default {
  namespaced: true,   //这里设置为
  state: stateA,
  getters: gettersA,
  actions: actionsA,
  mutations: mutationsA
}

/*
* 这里需要注意的地方是：
* 在store中，默认的情况下，store中的getters、mutation、action这些都是全局定义的，多个模板都可以获取到
* 但是，如果你是进行了模块划分，具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
* 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
* */






