<template>
   <div class="">
       <div class="recommend-title">热销推荐</div>
       <ul>
           <router-link tag='li'
            class="item border-bottom" 
            v-for="item in list" 
            :key='item.id'
            :to="'/detail/'+item.id"
            >
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <p class="item-price">￥{{item.price}}</p>
                </div>
           </router-link>
       </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'HomeRecommend',
   props:{
       list:Array
   },
   data() {
       return {}
   },
  components: {}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
    line-height:0.8rem
    background:#eee
    margin-top:0.2rem
    text-indent:0.2rem
.item
    display:flex
    height 1.9rem
    .item-img
        width:1.7rem
        height:1.7rem
        padding:0.1rem
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
