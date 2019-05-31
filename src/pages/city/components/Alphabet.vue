<template>
   <ul class="list">
       <li class="item" 
       v-for="item in letters" 
       :key="item"
       :ref="item"
       @touchstart.prevent="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       @click="handleletterClick"
       >{{item}}</li>
   </ul>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'CityAlphabet',
   props:{
       cities:Object
   },
   updated() {
       this.startY=this.$refs['A'][0].offsetTop;
   },
   methods: {
       handleletterClick(e){
           this.$emit('change',e.target.innerText)
        //    console.log(e.target.innerText);
       },
       handleTouchStart(){
           this.touchStatus=true
       },
       handleTouchMove(e){
           if(this.touchStatus){
               if(this.timer){//函数节流
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                    const touchY=e.touches[0].clientY - 82; 
                    const index=Math.floor((touchY-this.startY) / 18);
                    if(index >= 0 && index<this.letters.length){
                        this.$emit('change',this.letters[index])
                    } 
                },16)
           }
       },
       handleTouchEnd(){
           this.touchStatus=false
       }
   },
   data() {
       return {
           touchStatus:false,
           startY:0,
           timer:null
       }
   },
  computed: {
      letters(){
          const letters=[]
          for(let i in this.cities){
              letters.push(i)
          }
          return letters
      }
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibels.styl'
.list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    right:0
    top:1.68rem
    bottom:0
    width:0.4rem
    text-align:center
    color:$bgColor
    .item
        margin:0.04rem
</style>
