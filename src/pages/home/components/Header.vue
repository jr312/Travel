<template>
   <div class="header">
       <div class="header-left">
           <i class="iconfont back-icon">&#xe622;</i>
       </div>
       <div class="header-input"><input type="text" placeholder="输入城市/景点/游玩主题"></div>
       <div class="header-right">
           城市
           <i class="iconfont arrow-icon">&#xe6aa;</i>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.header
 display:flex
 height: .86rem
 background:$bgColor
 color:#fff
 line-height:.86rem  
.header-left
    width:.64rem
    float: left
.back-icon
    text-align:center
    font-size:.4rem
.header-input
    flex: 1
.header-input input 
    width:100%
    height:.62rem
    border-radius:.1rem
    padding-left:.1rem 
.header-right
    width: 1.24rem
    float: left
    text-align:center
.arrow-icon
    font-size:.2rem 

</style>
