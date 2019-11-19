import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);

/*全局组件*/
import ComHead from '@/components/alluse/Header'

/*其他组件*/
//详情页
import Detail from '@/views/bookMall/detail'
//评论列表
import CommentList from '@/views/bookMall/commentList'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/commentList',
      component: CommentList
    }
  ]
})


/* 全局组件 */
// 头部
Vue.component('com-head', ComHead);
