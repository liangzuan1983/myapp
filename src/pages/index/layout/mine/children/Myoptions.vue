<template>
   <cube-page>
      <div slot="content" class="myoptions">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <div class="optionscontent">
            <div class="myopinions">
               <textarea class="mycontents" maxlength="140" placeholder="我们愿意聆听我们愿意聆听我们愿意聆听我们愿意聆听我们愿意聆听我们愿意聆听我们愿意聆听我们愿意聆听我们愿意聆听我们愿意聆听"></textarea>
               <p class="myNum">0/140</p>
            </div>
            <section class="mybtn">
               <button>发送</button>
            </section>
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
			navTitle:"意见反馈",
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
		},
		selectGoal(i){
			this.goalIndex = i
		}
	}
}
</script>
<style type="text/css">
.myoptions{
	height: 100%;
}

.optionscontent{
	padding-top: .9rem;
}
.myopinions{
   background: #fff;
}
.mycontents{
   width: 100%;
   height: 1.5rem;
   border: none;
   padding: .2rem;
   box-sizing: border-box;
}
.myNum{
   width: 100%;
   padding: .2rem;
   box-sizing: border-box;
   font-size: .3rem;
   color: rgb(180, 180, 180);
   text-align: right;
   border: none;
}
.mybtn{
	width: 100%;
   padding: 0 .3rem;
	margin: .3rem 0 .4rem;
}
.mybtn button{
   width: 100%;
	padding: .26rem 0;
	border: none;
	background: #5599FF;
	color: #fff;
	font-size: .3rem;
	border-radius: .12rem;
}
</style>