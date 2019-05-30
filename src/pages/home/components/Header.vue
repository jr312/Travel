<template>
   <div class="header">
       <div class="header-left">
           <i class="iconfont back-icon">&#xe622;</i>
       </div>
       <div class="header-input"><input type="text" placeholder="输入城市/景点/游玩主题"></div>
       <router-link to='/city'>
           <div class="header-right">
                {{this.city}}
                <i class="iconfont arrow-icon">&#xe6aa;</i>
            </div>
       </router-link>
   </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
   name: 'HomeHeader',
   computed: {
       ...mapState(['city'])
   },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.header
 display:flex
 height: $headerHight
 background:$bgColor
 color:#fff
 line-height:$headerHight 
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
    min-width: 1.04rem
    padding:0 0.1rem
    float: left
    text-align:center
    color:#fff
.arrow-icon
    font-size:.2rem 

</style>
