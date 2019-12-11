<template>
  <div>
    <div class="mall_home">
      <!--轮播-->
      <div class="swiper-container mall_banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link class="dblock" to="javascript:;">
              <!-- <img src="../delete/banner.jpg" /> -->
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link class="dblock" to="javascript:;">
              <!-- <img src="../delete/banner.jpg" /> -->
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!--//轮播-->

      <!--本周热推（三）-->
      <div class="idx_title mall_title">{{indexData.module[0].name}}</div>
      <div class="book_list_mg flex_sp text_c">
        <router-link class="book_pd" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[0].itemList">
          <img class="book_size" :src="item.cover"/>

          <p class="book_list_word ellipsis_two">{{item.name}}</p>
        </router-link>
      </div>
      <!--//本周热推（三）-->

      <!--猜你喜欢-->
      <div class="idx_title flex_sp"><span class="mall_title">{{indexData.module[1].name}}</span>
        <router-link class="mall_title_more"
                     :to="'/bookMall/bookList?moreid='+indexData.module[1].moreId+'&type=0&name='+indexData.module[1].name">
          {{indexData.module[1].count}}本
        </router-link>
      </div>
      <router-link :to="'/bookMall/detail?bookid='+item.bookId" class="mall_box flex_sp" :key="item.index"
                   v-for="item of indexData.module[1].itemList.bookList">
        <img class="book_size_small book_shadow" :src="item.cover"/>

        <div class="mall_brief">
          <h3 class="mall_brief_title ellipsis">{{item.name}}</h3>

          <p class="mall_brief_con ellipsis_two">{{item.introduce}}</p>

          <p class="flex_sp"><span class="mall_brief_icon">{{item.author}}</span><span class="mall_brief_num">{{item.readNum}}人在追</span>
          </p>
        </div>
      </router-link>
      <div class="mall_cai">
        <router-link class="mall_name ellipsis" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[1].itemList.detailBookList">{{item.title}}
        </router-link>
      </div>
      <!--//猜你喜欢-->

      <!--精选游戏-->
      <div class="idx_title flex_sp"><span class="mall_title">{{indexData.module[8].name}}</span>
        <router-link class="mall_title_more" to="javascript:;">更多</router-link>
      </div>
      <div class="com_box flex_sp mall_game_wrap">
        <router-link class="dblock book_pd" to="javascript:;" :key="item.index"
                     v-for="(item,index) of indexData.module[8].itemList" v-show="index < itemListNumber">
          <img class="mall_game_size" :src="item.icon"/>
          <span class="mall_game_name ellipsis">{{item.name}}</span>
          <span class="mall_game_btn">打开</span>
        </router-link>
      </div>
      <p class="mall_game_shrink" :class="{'game_shrink': gameOn,'game_shrink_on': !gameOn}" @click="gameShow()">
        &nbsp;</p>
      <!--//精选游戏-->

      <!--公告-->
      <div class="notice_wrap">
        <div class="notice_con">
          <el-carousel class="notice_con_link" indicator-position="none">
            <el-carousel-item v-for="item of indexData.module[7].itemList" :key="item.index">
              <router-link :to="item.url">{{item.title}}</router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!--//公告-->

      <!--热销爽文-->
      <div class="idx_title flex_sp"><span class="mall_title">{{indexData.module[2].name}}</span>
        <router-link class="mall_title_more"
                     :to="'/bookMall/bookList?moreid='+indexData.module[2].moreId+'&type=0&name='+indexData.module[2].name">
          {{indexData.module[2].count}}本
        </router-link>
      </div>
      <div class="book_list flex_sp text_c">
        <router-link class="book_pd" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[2].itemList.bookList">
          <img class="book_size" :src="item.cover"/>

          <p class="book_list_word ellipsis_two">{{item.name}}</p>
        </router-link>
      </div>
      <div class="mall_cai">
        <router-link class="mall_name ellipsis" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[2].itemList.detailBookList">{{item.title}}
        </router-link>
      </div>
      <!--//热销爽文-->

      <!--热销佳作-->
      <div class="idx_title flex_sp"><span class="mall_title">{{indexData.module[3].name}}</span>
        <router-link class="mall_title_more"
                     :to="'/bookMall/bookList?moreid='+indexData.module[3].moreId+'&type=0&name='+indexData.module[3].name">
          {{indexData.module[3].count}}本
        </router-link>
      </div>
      <router-link :to="'/bookMall/detail?bookid='+item.bookId" class="mall_box flex_sp" :key="item.index"
                   v-for="item of indexData.module[3].itemList.bookList">
        <img class="book_size_small book_shadow" :src="item.cover"/>

        <div class="mall_brief">
          <h3 class="mall_brief_title ellipsis">{{item.name}}</h3>

          <p class="mall_brief_con ellipsis_two">{{item.introduce}}</p>

          <p class="flex_sp"><span class="mall_brief_icon">{{item.author}}</span><span class="mall_brief_num">{{item.readNum}}人在追</span>
          </p>
        </div>
      </router-link>
      <div class="mall_cai">
        <router-link class="mall_name ellipsis" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[3].itemList.detailBookList">{{item.title}}
        </router-link>
      </div>
      <!--热销佳作-->

      <!--女生好文-->
      <div class="idx_title flex_sp"><span class="mall_title">{{indexData.module[4].name}}</span>
        <router-link class="mall_title_more"
                     :to="'/bookMall/bookList?moreid='+indexData.module[4].moreId+'&type=0&name='+indexData.module[4].name">
          {{indexData.module[4].count}}本
        </router-link>
      </div>
      <div class="book_list flex_sp text_c">
        <router-link class="book_pd" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[4].itemList.bookList">
          <img class="book_size" :src="item.cover"/>

          <p class="book_list_word ellipsis_two">{{item.name}}</p>
        </router-link>
      </div>
      <div class="mall_cai">
        <router-link class="mall_name ellipsis" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[4].itemList.detailBookList">{{item.title}}
        </router-link>
      </div>
      <!--女生好文-->

      <!--主编力荐-->
      <div class="idx_title flex_sp"><span class="mall_title">{{indexData.module[5].name}}</span>
        <router-link class="mall_title_more"
                     :to="'/bookMall/bookList?moreid='+indexData.module[5].moreId+'&type=0&name='+indexData.module[5].name">
          {{indexData.module[5].count}}本
        </router-link>
      </div>
      <router-link :to="'/bookMall/detail?bookid='+item.bookId" class="mall_box flex_sp" :key="item.index"
                   v-for="item of indexData.module[5].itemList.bookList">
        <img class="book_size_small book_shadow" :src="item.cover"/>

        <div class="mall_brief">
          <h3 class="mall_brief_title ellipsis">{{item.name}}</h3>

          <p class="mall_brief_con ellipsis_two">{{item.introduce}}</p>

          <p class="flex_sp"><span class="mall_brief_icon">{{item.author}}</span><span class="mall_brief_num">{{item.readNum}}人在追</span>
          </p>
        </div>
      </router-link>
      <div class="mall_cai">
        <router-link class="mall_name ellipsis" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                     v-for="item of indexData.module[5].itemList.detailBookList">{{item.title}}
        </router-link>
      </div>
      <!--//主编力荐-->

      <!--男女频热销榜-->
      <div class="">
        <div class="idx_title flex_sp">
          <span class="mall_title">{{hotRank.name}}</span>
          <span :class="hotRankMen?'mall_rank_icon mall_icon_nv':'mall_rank_icon mall_icon_nan'"
                @click="changeHot()"></span>
        </div>
        <!--男频-->
        <div class="book_list flex_sp text_c">
          <router-link class="book_pd" :to="'/bookMall/detail?bookid='+item.bookId" :key="item.index"
                       v-for="item of hotRank.itemList.bookList">
            <img class="book_size" :src="item.cover"/>

            <p class="book_list_word ellipsis_two">{{item.name}}</p>
          </router-link>
        </div>
        <router-link class="mall_rank_wrap flex_sp" :key="item.index"
                     v-for="item of indexData.module[9].itemList.detailBookList"
                     :to="'/bookMall/detail?bookid='+item.bookId">
          <img class="book_size_small book_shadow" :src="item.cover"/>

          <div class="mall_brief">
            <h3 class="flex_sp"><span class="mall_brief_title brief_wid ellipsis">{{item.name}}</span><span>{{item.wordCount}}</span>
            </h3>

            <p class="mall_brief_con ellipsis_two">{{item.introduce}}</p>

            <div class="flex_sp">
              <p class="mall_brief_icon">{{item.author}}</p>

              <p>
                <span class="brief_btn">{{item.category}}</span>
                <span class="brief_btn brief_btn_red">{{item.score}}分</span>
              </p>
            </div>
          </div>
        </router-link>
        <!--//男频-->
        <router-link class="text_c dblock mall_hot_more"
                     :to="'/bookMall/bookList?moreid='+hotRank.moreId+'&type=3&name='+hotRank.name+'&channel='+hotRank.channel">
          查看热销榜
        </router-link>
      </div>
      <!--//男女频热销榜-->

      <!--男女频人气榜-->
      <div class="">
        <div class="idx_title  mall_bord flex_sp">
          <span class="mall_title">{{peopleRank.name}}</span>
          <span :class="peopleRankMen?'mall_rank_icon mall_icon_nv':'mall_rank_icon mall_icon_nan'"
                @click="changePeople()"></span>
        </div>
        <!--男频-->
        <router-link class="flex_sp mall_rank_wrap" :key="item.index"
                     v-for="(item,index) of peopleRank.itemList" :to="'/bookMall/detail?bookid='+item.bookId">
          <div class="posr">
            <img class="book_size_small book_shadow" :src="item.cover"/>
            <span class="mall_icon_rank">{{index+1}}</span>
          </div>
          <div class="mall_brief">
            <h3 class="flex_sp">
              <span class="mall_brief_title brief_wid_hot ellipsis">{{item.name}}</span>
              <span class="brief_icon_hot">{{item.wordCount}}</span>
            </h3>

            <p class="mall_brief_con ellipsis_two">{{item.introduce}}</p>

            <div class="flex_sp">
              <p class="mall_brief_icon">{{item.author}}</p>

              <p>
                <span class="brief_btn">{{item.category}}</span>
                <span class="brief_btn brief_btn_red">{{item.score}}分</span>
              </p>
            </div>
          </div>
        </router-link>

        <!--//男频-->
        <router-link class="text_c dblock mall_hot_more"
                     :to="'/bookMall/bookList?moreid='+peopleRank.moreId+'&type=3&name='+peopleRank.name+'&channel='+peopleRank.channel">
          查看人气榜
        </router-link>
      </div>
      <!--//男女频人气榜-->

      <div>

      </div>
    </div>

    <!-- 加载动画 -->
    <com-pageLoad v-if="isLoad"></com-pageLoad>
  </div>
</template>

<script>
  import {getAllapi} from '@/api/all';

  export default {
    name: "my",
    data() {
      return {
        indexData: '',
        //热销
        hotRank: {},
        //热销男
        hotRankMen: true,
        //人气
        peopleRank: {},
        //人气男
        peopleRankMen: true,
        //是否展示加载动画
        isLoad: true,
        //是否展开精选游戏
        gameOn: true,
        itemListNumber: 4
      }
    },
    mounted() {   //个人认为非常类似于react中的componentDidMount的用法，都是接近于在渲染一次之后执行调用
      this.initRequest();
    },
    methods: {     //vue中具体的执行方法
      initRequest() {
        getAllapi({actionid: 9001}).then(res => {
          if (res.status === 200) {
            let data = res.data.ResponseObject[0];
            this.indexData = data;
            this.hotRank = data.module[9];
            this.peopleRank = data.module[11];
            this.isLoad = false;
          }
        });
      }
    },
    components: {}
  }
</script>
