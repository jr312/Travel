<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li 
                v-for="item in list" 
                :key="item.id"
                class="search-item border-bottom"
                @click="handleCityClick(item.name)"
            >{{item.name}}</li>
            <li class="search-item border-bottom" v-show="hasNoData">
                没有找到匹配数据
            </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
   name: 'CitySearch',
   props:{
       cities:Object
   },
   data() {
       return {
           keyword:'',
           list:[],
           timer:null
       }
   },
   computed: {
       hasNoData(){
           return !this.list.length
       }
   },
  watch: {
      keyword(){
          if(this.timer){
              clearTimeout(this.timer)
          }
          if(!this.keyword){
              this.list=[];
              return
          }
          this.timer=setTimeout(()=>{
              const result=[]
              for (let i in this.cities){
                  this.cities[i].forEach((value) => {
                      if(value.spell.indexOf(this.keyword)> -1 || value.name.indexOf(this.keyword)>-1){
                          result.push(value)
                      }
                  });
              }
              this.list=result;
          },100)
      }
  },
  methods: {
      handleCityClick(city){
        //   this.$store.dispatch('changeCity',city)
        this.changeCity(city)
          this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
  },
  mounted() {
      this.scroll=new BScroll(this.$refs.search)
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.search
    height:0.72rem
    padding:0.1rem
    background:$bgColor
    .search-input
        box-sizing:border-box
        height:0.62rem
        width:100%
        padding:0 0.1rem
        line-height:0.62rem
        text-align:center
        border-radius:0.06rem
        color:#666
.search-content
    position:absolute
    z-index:1
    overflow:hidden
    top:1.68rem
    left:0
    right:0
    bottom:0
    background:#eee
    .search-item
        line-height:0.62rem
        padding-left:0.2rem
        background:#fff
</style>
