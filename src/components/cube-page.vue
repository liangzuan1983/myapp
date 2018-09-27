<template>
  <div class="cube-page" :class="type">
    <div class="wrapper">
      <section v-show="desc" class="desc"><slot name="desc">{{desc}}</slot></section>
      <main class="content">
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
   data() {
      return {
         iType:true
      }
   },
   props: {
      type: {
        	type: String,
        	default: ''
      },
      desc: {
        	type: String,
        	default: ''
      },
      content: {
        	type: String,
        	default: ''
      },
      navTitle:String,
      navRightBtn:String,
      isTitle:Boolean
    },
    methods: {
      back() {
        this.$router.back()
      },
       target(index) {
          this.$emit('navRightBtnHandle',null);
        },
        navBack(){
          this.$emit('navBackHandle',null);
        }
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .cube-page
    position: absolute
    z-index: 10
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #f7f7f7
    overflow:hidden
    .zIndex
      display: none
    .header
      position: relative
      height: 44px
      line-height: 44px
      text-align: center
      background-color: #ffffff
      box-shadow: 0 0px 0px #ccc
      -webkit-backface-visibility: hidden
      backface-visibility: hidden
      z-index: 5
      .left
        position:absolute
        top:0
        left:0
        padding-left:.2rem
        width: 10%
      h1
        font-size: 16px
        font-weight: 400
      .right
        position:absolute
        top:0
        right:0
        width: 10%
        padding-right:.2rem
        .wordbtn
          height :100%
      .cubeic-back
        position: absolute
        top: 0
        left: 0
        padding: 0 15px
        color: #fc9153
    >.wrapper
      height:100%
      overflow: auto
      -webkit-overflow-scrolling: touch
      .desc
         padding: 10px
         margin: 10px 0
         line-height: 20px
         font-size: 14px
      .content
         margin: 0
         height: 100%
         
   .cube-pullup-wrapper
      height: 0
      overflow: hidden
</style>