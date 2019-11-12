import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

/*全局组件*/
import ComHead from '@/components/alluse/Header'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})


/* 全局组件 */
// 头部
Vue.component('com-head', ComHead);
