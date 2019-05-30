<template>
   <div class="header">
       城市选择
       <router-link to="/">
        <i class="iconfont header-back">&#xe622;</i>
       </router-link>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'CityHeader',
   data() {
       return {}
   },
  components: {}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.header
    position:relative
    overflow:hidden
    height:$headerHight
    line-height:$headerHight
    text-align:center
    color:#ffffff
    background:$bgColor
    font-size:0.32rem
    .header-back
        top:0
        left:0
        position:absolute
        width:0.64rem
        text-align:center
        font-size:0.4rem
        color:#fff
</style>
