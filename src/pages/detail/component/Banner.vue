<template>
<div>
   <div class="banner" @click="handleBannerClick">
      <img class="banner-img" 
      src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
         <div class="banner-numb"><i class="iconfont banner-icon">&#xe623;</i>8</div>
         <div class="banner-title">故宫(AAAAA景区)</div>
      </div>
   </div>
   <common-gallary 
      :imgs="imgs" 
      v-show="showGallary"
      @close="handleGallaryClose"
   ></common-gallary>
</div>
</template>

<script type="text/ecmascript-6">
import CommonGallary from 'common/gallary/Gallary'
export default {
   name: 'DetailBanner',
   data() {
       return {
          showGallary:false,
          imgs:['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
               'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg']
       }
   },
  components: {
     CommonGallary
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
