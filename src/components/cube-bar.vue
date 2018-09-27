<template>
   <div class="cube-bar">
      <header class="header page-wrap wrap-vcenter wrap-between line-bottom">
         <div class="left page-wrap wrap-vcenter" @click="navBack">
            <span class="arrowLeft"></span>
         </div>
         <h1 class="wrap-content page-wrap wrap-center wrap-vcenter">{{navTitle}}</h1>
         <p class="right" @click="target()">{{navRightBtn}}</p>
      </header>
   </div>
</template>
<script type="text/ecmascript-6">
export default {
   data() {
      return {}
   },
   props: {
      navTitle:String,
      navRightBtn:String,
   },
   methods: {
      navBack(){
         this.$emit('navBackHandle',null);
      },
      target(index) {
         this.$emit('navRightBtnHandle',null);
      }
   },
   mounted () {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cube-bar
   position: absolute
   z-index: 10
   top: 0
   left: 0
   width: 100%
   background: #fff
   .header
      width: 100%
      padding: .2rem 0
      box-sizing: border-box
      .left
         width: 19%
         padding-left: .3rem
         .arrowLeft
            width: .25rem
            height: .25rem
            border-left: 1px solid #000
            border-bottom: 1px solid #000
            transform: rotate(45deg)
            margin-top:.25rem
      h1
         font-size: .4rem
         font-weight: border
      .right
         width: 19%
         font-size: 16px
         text-align: left
</style>