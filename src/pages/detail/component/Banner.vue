<template>
<div>
   <div class="banner" @click="handleBannerClick">
      <img class="banner-img" 
      :src="bannerImg" alt="">
      <div class="banner-info">
         <div class="banner-numb">
            <i class="iconfont banner-icon">&#xe623;</i>{{this.gallaryImgs.length}}
         </div>
         <div class="banner-title">{{this.sightName}}</div>
      </div>
   </div>
   <fade-animation>
      <common-gallary 
         :imgs="gallaryImgs" 
         v-show="showGallary"
         @close="handleGallaryClose"
      ></common-gallary>
   </fade-animation>
</div>
</template>

<script type="text/ecmascript-6">
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
   name: 'DetailBanner',
   props:{
      sightName:String,
      bannerImg:String,
      gallaryImgs:Array
   },
   data() {
       return {
          showGallary:false,
       }
   },
  components: {
     CommonGallary,
     FadeAnimation
  },
  methods: {
     handleBannerClick(){
         this.showGallary=true        
     },
     handleGallaryClose(){
        this.showGallary=false     
     }
  },
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibels.styl'
.banner
   overflow:hidden
   height:0
   position:relative
   padding-bottom:55%
   .banner-img
      width:100%
   .banner-info
      position:absolute
      left:0
      right:0
      bottom:0
      color:#fff
      line-height:0.6rem
      padding:0.32rem 0.28rem
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
         font-size:0.4rem
      .banner-numb
         width:0.58rem
         padding:0 0.4rem
         font-size:0.24rem
         height:0.4rem
         line-height:0.4rem
         border-radius:0.2rem
         background:rgba(0,0,0,0.5)
         .banner-icon 
            margin-right:0.1rem
</style>
