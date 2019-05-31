<template>
   <div class="">
       <router-link class="header-abs" to="/" tag="div" v-show="showAbs">
           <i class="iconfont header-abs-back">&#xe622;</i>
       </router-link>
       <div 
       class="header-fixed" 
       v-show="!showAbs"
       :style="opcitystyle"
       >
           景点详情
            <router-link to="/">
                <i class="iconfont header-fixed-back">&#xe622;</i>
            </router-link>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'DetailHeader',
   data() {
       return {
           showAbs:true,
           opcitystyle:{
               opacity:0
           }
       }
   },
   components: {},
   methods: {
       handleScroll(){
           const top=document.documentElement.scrollTop
           if(top>60){
               let opacity=top/140
               opacity=opacity>1?1:opacity
               this.opcitystyle={
                   opacity
               }
               this.showAbs=false
           }else{
               this.showAbs=true
           }
       }
   },
   activated() {
       window.addEventListener('scroll',this.handleScroll)
   },   
   deactivated() {
       window.removeEventListener('scroll',this.handleScroll)
   },   
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibels.styl'
.header-abs
    position:absolute
    left:0.2rem
    top:0.2rem
    width:0.8rem
    height:0.8rem
    text-align:center
    line-height:0.8rem
    border-radius:50%
    background:rgba(0,0,0,0.8)
    .header-abs-back
        color:#fff
        font-size:0.4rem
.header-fixed
    position:fixed
    z-index:2
    top:0
    left:0
    right:0
    height:$headerHight
    line-height:$headerHight
    text-align:center
    color:#ffffff
    background:$bgColor
    font-size:0.32rem
    .header-fixed-back
        top:0
        left:0
        position:absolute
        width:0.64rem
        text-align:center
        font-size:0.4rem
        color:#fff
</style>
