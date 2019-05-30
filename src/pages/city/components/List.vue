<template>
   <div class="list" ref="wrapper">
       <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.curCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                    v-for="item in hot" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
            v-for="(item,key) in cities" 
            :key="key"
            :ref='key'
            >
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li class="item border-bottom" 
                    v-for="innerItem in item" 
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </li>
                </ul>
            </div>  
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default {
   name: 'CityList',
   props:{
       hot:Array,
       cities:Object,
       letter:String
   },
   data() {
       return {}
   },
   watch: {
       letter(){
           if(this.letter){
               const element=this.$refs[this.letter][0]
               this.scroll.scrollToElement(element)
           }
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
  computed: {
      ...mapState({
          curCity:'city'
      })
  },
   mounted() {
       this.scroll=new BScroll(this.$refs.wrapper)
   },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.border-topbottom
    &:before
        border-color:#ccc
    &:after
        border-color:#ccc
.border-bottom
    &:before
        border-color:#ccc
.list
    position:absolute
    top:1.68rem
    left:0
    right:0
    bottom:0
    overflow:hidden
    .title
        line-height:0.54rem
        background:#eee
        padding-left:0.2rem
        color:#666
        font-size:0.26rem
    .button-list
        overflow:hidden
        padding:0.1rem 0.6rem 0.1rem 0.1rem
        .button-wrapper
            float:left
            width:33.33%
            .button
                padding:0.1rem 0
                margin:0.1rem
                text-align:center
                border:0.02rem solid #ccc
                border-radius:0.06rem
    .item-list
        .item
            line-height:0.76rem
            color:#666
            padding-left:0.2rem
</style>
