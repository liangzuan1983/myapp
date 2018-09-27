<template>
   <div class="payinfo">
			<div class="navBackHandle" @click="navBackHandle"></div>
        <img class="q1-img" :src="payinfo" alt="">
				<div class="nextbtn" @click="payinfoconfirmHandler"></div>
    </div>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'


const payinfo = require("../../../../../../static/img/paymoney/1.png");
export default{
   data(){
      return{
				navTitle:"物业费",
				payinfo:payinfo,
				//由于vueg的嵌套路由默认不启动转场动画，需要在其匹配组件中设置为启用
				vuegConfig:{
					disable:false
				}
				}
   },
   components:{
		CubePage,
		CubeBar
	},
	methods:{
		// navRightBtnHandle(){
    //     	this.$router.push({path:'PastBills'})
    //   },
    	navBackHandle() {
			history.go(-1);
		},
		payinfoconfirmHandler(){
			this.$router.push({
				path:'PayInfo1'
			})
		} 
	}
}
</script>
<style scoped>
.payinfo{
    background: linear-gradient(to bottom, #c9d6ff, #e2e2e2);
		width:100%;
		height: 100%;
}
.q1-img{width: 100%;height: 100%;}
.nextbtn{
	position:absolute; 
	bottom: 3%; 
	height: 4rem; 
	width: 100%;
	/* border:1px solid red; */
	}
	.navBackHandle{
		position: absolute;
		top:0;
		left: 0;
		width:2rem;
		height: 2rem;
	}
</style>