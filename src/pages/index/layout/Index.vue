<template>
   <cube-page>
      <div slot="content" class="Index line-top">

         <div class="menu page-wrap wrap-d-colum">
            <cube-bar v-if="isButton==3" :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>   
            <!-- <cube-scroll :data="datas" :options="options"> -->
               <div class="wrap-content" :class="{'paddingNo':isButton==2}">
                  <router-view></router-view>
               </div>
            <!-- </cube-scroll> -->
            <ntrip-footer :isButton='isButton'></ntrip-footer>
         </div>
      </div>
   </cube-page>
</template>
<script>
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
import NtripFooter from '@/components/ntrip-footer.vue';

export default {
   data() {
      return {
			isButton: '',
			navTitle: "我的",
			navRightBtn: "消息中心",
         datas: [],
         options: {
            pullUpLoad: {
               scrollbar: false,
               // pullUpLoad: false
            }
			}
      } 
   },
   components: {
		CubeBar,
		CubePage,
      NtripFooter,
   },
   methods: {
		navRightBtnHandle(){
        	this.$router.push({path:"/Mynews"})
      },
    	navBackHandle() {
			// history.go(-1);
		},
		changeIcon(){
			// let ss = window.location.pathname
      let paths = window.location.hash.indexOf('?')
     let ss = window.location.hash.substr(1,paths-1)
			if (ss=='/Mine') {
				this.isButton = 4
			}else if (ss=='/Message') {
				this.isButton = 3
			} else if (ss=='/MJ') {
				this.isButton = 2
			} else if (ss=='/Service') {
				this.isButton = 1
			} else {
				this.isButton = ''
			}
		}
	},
   created() {
		console.log(window.location.pathname)
		this.changeIcon()
	},
	mounted() {},
	updated() {
		console.log(window.location.pathname)
		this.changeIcon()
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.Index
   height: 100%
   .pages
      // background: #fff
.cube-pullup-wrapper
   height: 0
   overflow: scroll
   .menu
      height: 100%
		.pages
			padding-top: .9rem

.paddingNo
  padding-top: 0!important
</style>