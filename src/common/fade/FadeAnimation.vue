<template>
    <transition>
        <slot></slot> 
    </transition>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'FadeAnimation',
   data() {
       return {}
   },
  components: {}
}
</script>

<style lang='stylus' scoped>
.v-enter,.v-leave-to
    opacity:0
.v-enter-active,.v-leave-active
    transition:opacity 0.5s
</style>
