<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" /> 
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'HomeSwiper',
   props:{
       list:Array
   },
   data () {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true,
          autoplay : 3000,
        },
      }
    },
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background :#fff
.wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:31.25%
    .swiper-img
        width:100%
</style>
