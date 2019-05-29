<template>
   <div class="">
       <div class="weekend-title">周末去哪儿</div>
       <ul>
           <li 
           class="item border-bottom" 
           v-for="item in weekendList" 
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
   data() {
       return {
           weekendList:[
               {
                   id:'01',
                   imgUrl:'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
                   title:'北京赏花好地方',
                   desc:'乱花渐欲迷人眼，京城赏花大搜索',
               },{
                   id:'02',
                   imgUrl:'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                   title:'京城周末撒欢',
                   desc:'在帝都过周末，不仅仅是城中游！',
               },{
                   id:'03',
                   imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                   title:'帝都必打卡',
                   desc:'来北京必去的景点非这些地方莫属',
               },{
                   id:'04',
                   imgUrl:'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
                   title:'寻找北京的皇城范儿',
                   desc:'数百年的宫廷庙宇，至今依旧威严霸气',
               }
           ]
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
    margin-top:0.2rem
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
