<template>
  <div class="wrap">
    <transition :name="animate">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import '@/assets/scss/my_content.scss'
  export default {
    name: "my",
    data() {
      return {
        animate:'fadeInRight'
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.animate = toDepth < fromDepth ? 'fadeInLeft' : 'fadeInRight';

      next();
    },
    component: {
      //someComponent
    }
  }
</script>
