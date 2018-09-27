<template>
   <cube-page>
      <div slot="content" class="vcode">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll :data="datas" :options="options">
				<div class="vrcode">
               <p class="vcodeP">
                  <img class="CodeImg" :src="CodeImg" />
               </p>
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'
const CodeImg=require("../../../../../../static/img/service/code.png");
export default{
   data(){
      return{
			  navTitle:"App下载",
      	navRightBtn:"分享",
			  datas: [],
        options: {
            pullUpLoad: {
            	scrollbar: false,
               // pullUpLoad: false
            }
         },
         CodeImg:CodeImg,
      }
   },
   components:{
		CubePage,
		CubeBar
	},
	methods:{
		navRightBtnHandle(){
        	this.$createDialog({
            type: 'alert',
            title: '注意事项',
            content: '<p>1)、如您所；</p><p>2)、手机具；</p><p>3)、如您有其他问题，可拨打110转1人事咨询</p>',
            icon: 'cubeic-alert'
         }).show()
      },
    	navBackHandle() {
			history.go(-1);
		},
	}
}
</script>
<style type="text/css">
.vcode{
	height: 100%;
}

.vrcode{
   padding-top: .8rem;
}
.vcodeP{
   padding-top: 3rem;
   background: #fff;
}
.CodeImg{
   width: 100%;
}
</style>