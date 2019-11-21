<template>
  <div class="wrap">
    <!--设置顶部导航-->
    <div class="read_head">
      <div class="head_wrap flex_sp">
        <img class="head_logo" src="@/assets/images/idx_logo.png"/>
        <div class="head_right text_r">
          <router-link to="/my">

          </router-link>
          <router-link to="/my/payCenter" class="head_recharge">
            <span style="margin-right: 1px">|</span>
            <span>充值</span>
          </router-link>
        </div>
      </div>
    </div>

    <!--头部分类-->
    <div class="text_c mall_nav">
      <ul class="flex_sp">
        <li v-for="(item,index) in headerTab"
            :class="tabActive === index ? 'mall_nav_list mall_nav_act':'mall_nav_list'"
            @click="changeTap(index)">
          {{item.message}}
        </li>
      </ul>
    </div>

    <!--中间页面-->
    <Home v-show="tabActive===0"></Home>


    <!-- 底部-->
    <com-foot active="1"></com-foot>
  </div>
</template>

<script>
  import '@/assets/scss/index.scss'
  //首页
  import Home from '@/views/bookMall/compontent/Home'

  export default {
    name: "bookMall",
    data() {
      return {
        tabActive: 0,
        headerTab: [
          {
            message: '首页'
          }, {
            message: '会员'
          }, {
            message: '分类'
          }, {
            message: '免费'
          }
        ]
      }
    },
    methods: {
      changeTap(e) {
        this.tabActive = e;
      }
    },
    component: {
      Home
    }
  }
</script>

<style lang="scss" scoped>
</style>
