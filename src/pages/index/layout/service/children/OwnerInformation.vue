<template>
   <cube-page>
      <div slot="content" class="MyHouse">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
			<cube-scroll :data="informationPptionsDatas" :options="informationPptions">
				<div class="vcontent">
				<p class="myHouse-p-s">龙湖物业－1单元201</p>
					 <div class="page-wrap info-div-s">
						 <img class="headPortrait-s" :src="headPortraitImg" alt="">
						 <ul>
							 <li v-for="(item,index) in ownerInfos" :key="index" class="infovhouse">
								 	<label >{{item.label}}</label>	<span class="">{{item.value}}</span> 
							 </li>
						 </ul>
					 </div>
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'
const headPortraitImg=require("../../../../../../static/img/service/headPortrait.png")
export default{
   data(){
      return{
				navTitle:"北京市－中铁建物业",
				informationPptionsDatas: [],
					informationPptions: {
							pullUpLoad: {
								scrollbar: false,
								// pullUpLoad: false
							}
					},
				ownerInfos:[
					{label:'身份:',value:'业主'},
					{label:'姓名:',value:'彬彬'},
					{label:'手机号码:',value:'188****5676'},
					{label:'有效期:',value:'始终有效'}
				],
				headPortraitImg:headPortraitImg	 
      }
   },
   components:{
		CubePage,
		CubeBar
	},
	methods:{
    	navBackHandle() {
			history.go(-1);
		},
	}
}
</script>
<style scope>
.MyHouse{
	height: 100%;
	/* background: #fff; */
}

.vcontent{
	padding-top: .9rem;
}
.infovhouse{
		font-size: .3rem;
    background: #fff;
    line-height: .4rem;
    letter-spacing: 1px;
    padding-left: .2rem;
}
.vorange{
	color: #5599FF;
	margin-left: .2rem;
}
.empty{
	width: .22rem;
   height: .22rem;
   border-right: 1px solid rgb(145, 143, 143);
   border-top: 1px solid rgb(153, 153, 153);
   transform: rotate(45deg);
}

.myHouse-p-s{
	line-height: 40px;
	font-size: .3rem;
	padding-left: .3rem;
	color: #999;
}
.headPortrait-s{
	width: 20%;
	height: 20%;
}
.info-div-s{
	padding: .2rem;
  background: #fff;
}
</style>