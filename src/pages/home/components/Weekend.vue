<template>
   <div class="">
       <div class="weekend-title">周末去哪儿</div>
       <ul>
           <li 
           class="item border-bottom" 
           v-for="item in list" 
           :key='item.id'
           >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
               <div class="item-info">
                   <p class="item-title">{{item.title}}</p>
                   <p class="item-desc">{{item.desc}}</p>
               </div> 
           </li>
       </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'HomeWeekend',
   props:{
       list:Array
   },
   data() {
       return {
       }
   },
  components: {}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend-title
    line-height:0.8rem
    background:#eee
    text-indent:0.2rem
.item
    margin-bottom:0.4rem
.item-img-wrapper
    overflow:hidden
    height:0
    padding-bottom:33.9%
    .item-img
        width:100%
.item-info
    flex:1
    padding:0.1rem
    min-width:0
    .item-title
        line-height:0.54rem
        font-size:0.32rem
        ellipsis()
    .item-desc
        line-height:0.4rem
        color:#999 
        ellipsis()
    .item-price
        margin-top:0.16rem
        line-height:0.64rem
        font-size:0.4rem
        color:red

</style>
