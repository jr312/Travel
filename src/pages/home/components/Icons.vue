<template>
   <div class="icons">
       <swiper :options="swiperOption">
           <swiper-slide v-for="(page,index) in pages" :key='index'>
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="iconImg-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
       </swiper>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'HomeIcons',
   data() {
       return {
           swiperOption: {},
           iconList:[
               {
                   id:'01',
                   imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                   desc:'景点门票'
               },{
                   id:'02',
                   imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
                   desc:'一日游'
               },{
                   id:'03',
                   imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                   desc:'北京必游'
               },{
                   id:'04',
                   imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                   desc:'动植物园'
               },{
                   id:'05',
                   imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                   desc:'溜娃儿'
               },{
                   id:'06',
                   imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
                   desc:'爬长城'
               },{
                   id:'07',
                   imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                   desc:'故宫'
               },{
                   id:'08',
                   imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png',
                   desc:'限时抢购'
               },{
                   id:'09',
                   imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
                   desc:'北京欢乐谷'
               },
           ]
       }
   },
   computed: {
       pages (){
           const pages=[]
           this.iconList.forEach((item,index) => {
               const page=Math.floor(index / 8)
               if(!pages[page]){
                   pages[page]=[]
               }
               pages[page].push(item)
           })
           return pages
       }
   },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    height:0
    padding-bottom:50%
.icon
    position:relative
    overflow:hidden
    float:left
    width:25%
    height:0
    padding-bottom:25%;
    .icon-img
        position:absolute
        left:0
        right:0
        top:0
        bottom:0.44rem
        box-sizing:border-box
        padding:0.1rem
        .iconImg-content
            display:block
            margin:0 auto
            height:100%
    .icon-desc
        position:absolute
        left:0
        right:0
        bottom:0  
        height 0.44rem
        line-height:0.44rem
        text-align:center 
        color:$darkTextColor
        ellipsis()
</style>
