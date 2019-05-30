<template>
   <div class="">
       <home-header></home-header>
       <home-swiper :list="swiperList"></home-swiper>
       <home-icons :list="iconList"></home-icons>
       <home-recommend :list="recommendList"></home-recommend>
       <home-weekend :list="weekendList"></home-weekend>
   </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
   name: 'Home',
   data() {
       return {
           lastcity:'',
           swiperList:[],
           iconList:[],
           recommendList:[],
           weekendList:[]
       }
   },
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  },
  computed: {
      ...mapState(['city'])
  },
  methods: {
      getHomeInfo(){
          axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
          res=res.data;
          if(res.ret && res.data){
              const data=res.data;
            //   this.city=data.city;
              this.swiperList=data.swiperList;
              this.iconList=data.iconList;
              this.recommendList=data.recommendList;
              this.weekendList=data.weekendList;
          }
      }
  },
  mounted() {
      this.lastcity=this.city
      this.getHomeInfo()
  },
  activated() {
      if(this.lastcity!== this.city){
          this.lastcity=this.city
          this.getHomeInfo()
      }
  },
}
</script>

<style scoped>
</style>
