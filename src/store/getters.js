//Getter：相当于是store的computed，只有在对应的值变化的时候，才会执行
export const gettersA =  {
  doneTodos: state => {
    //filter方法作用就是过滤()里面条件的，剩下的返回出来，个人感觉，在vuex的getters中，使用的最多的就是filter方法
    return state.todos.filter(todoFunction);     //过滤todo数组，返回todo.done为true的
    //filter这里可以通过箭头函数简写为
    //return state.todos.filter(todo => todo.done)     //todo相当于是传入的数据，=> 后面表示测试的方法
  },
  //通过getters过滤，来执行查询方法是一个非常有效的技巧
  searchCtn: (state) => (id) => {
    return state.todosArray.find(todo => todo.id === id);
  },
  doneTodosTestCtn: (state) => {
    return state.count + 30
  }
};
 function todoFunction(todo) {
  return todo.done
}
