import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Router from 'vue-router'

Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueResource);

/*全局组件*/
import ComHead from '@/components/alluse/Header'
import ComFoot from '@/components/footer'

/* 书城 */
import BookMall from '@/views/bookMall/bookMall'
import BookMallIndex from '@/views/bookMall/index.vue'

/*其他组件*/
//详情页
import Detail from '@/views/bookMall/detail'
//评论列表
import CommentList from '@/views/bookMall/commentList'

export default new Router({
  mode: 'history',
  routes: [
    {                             //默认路由
      path: '/',
      name: '书城',
      component: BookMall,
      children: [
        { path: '', name: "书城", component: BookMallIndex }
      ]
    },
    {
      path: '/bookMall',
      name: '书城',
      component: BookMall,
      children: [
        { path: '', name: "书城", component: BookMallIndex },
      ]
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
//底部tab
Vue.component('com-foot', ComFoot);
