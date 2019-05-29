<template>
   <div class="">
       <div class="recommend-title">热销推荐</div>
       <ul>
           <li 
           class="item border-bottom" 
           v-for="item in recommendList" 
           :key='item.id'
           >
               <img class="item-img" :src="item.imgUrl" alt="">
               <div class="item-info">
                   <p class="item-title">{{item.title}}</p>
                   <p class="item-desc">{{item.desc}}</p>
                   <p class="item-price">￥{{item.price}}</p>
               </div> 
           </li>
       </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'HomeRecommend',
   data() {
       return {
           recommendList:[
               {
                   id:'01',
                   imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
                   title:'故宫',
                   desc:'世界五大宫之首，穿越与您近在咫尺',
                   price:'60'
               },{
                   id:'02',
                   imgUrl:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
                   title:'八达岭长城',
                   desc:'不到长城非好汉',
                   price:'30'
               },{
                   id:'03',
                   imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                   title:'北京欢乐谷',
                   desc:'亚洲唯一飞行式过山车等你来挑战',
                   price:'195'
               },{
                   id:'04',
                   imgUrl:'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
                   title:'北京野生动物园',
                   desc:'敢与森林之王近距离接触吗？',
                   price:'122'
               }
           ]
       }
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
