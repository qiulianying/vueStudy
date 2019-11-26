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
      <div>
        这里开始需要调用到相应的接口
      </div>
      <!--//本周热推（三）-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "my",
    data() {
      return {
        indexData: ''
      }
    }
  }
</script>
