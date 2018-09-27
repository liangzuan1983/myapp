<template>
   <cube-page>
      <div slot="content" class="mynotices">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <div class="mynotice page-wrap wrap-vcenter wrap-center">
            <img class="noIcon" :src="noIconImg">
         </div>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'

export default{
   data(){
      return{
        noIconImg:require("../../../../../../static/img/mine/nonews.png"),
        navTitle:"管家提醒",
          navRightBtn:"",
          options: ""//
        }
   },
   components:{
      CubeBar,
      CubePage
	},
	methods:{
		navRightBtnHandle(){},
    	navBackHandle() {
			history.go(-1);
		}
	}
}
</script>
<style type="text/css">
.mynotices{
	height: 100%;
   background: #F3F3F3;
}

.mynotice{
	padding-top: .9rem;
   height: 10rem;
}
img.noIcon{
   width: 4rem;
}
</style>