<template>
   <cube-page>
      <div slot="content" class="decorationPass">
			<cube-bar :navTitle='navTitle'  v-on:navBackHandle="navBackHandle"></cube-bar>
			<!-- <cube-scroll :data="datas" :options="optionsRepair"> -->
				<div class="zhengdiv">
					<img :src="zhengCode" class="zhengCode" alt="">
					<p>装修出入证</p>
				</div>
				<ul class="vrcontent">
						<li  v-for="(item,index) in dpassList" :key="index" class="vhouse line-bottom page-wrap">
							<p>{{item.title}}：</p>
							<p>{{item.value}}</p>   
						</li>
				</ul>
			<!-- </cube-scroll> -->
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'
const zhengCode = require("../../../../../../static/img/service/zheng_03.png")
export default{
   data(){
      return{
				navTitle:"装修出入证",
				zhengCode:zhengCode,
				dpassList:[{
						title:'装修人姓名',
						value:'张三'
					},{
						title:'业主姓名',
						value:'李四'
					},{
						title:'装修时间',
						value:'2018.08.01-2018.08.31'
					},{
						title:'房间号',
						value:'2-2-2'
					},{
						title:'有效期',
						value:'1个月，过期失效'
					}
					
				]

      }
   },
   components:{
		CubePage,
		CubeBar
	},
	methods:{
		navRightBtnHandle(){
				this.$router.push({
              path: "/PostRepairsView"
            });
      },
    navBackHandle() {
			history.go(-1);
		},
		
	}
}
</script>
<style scoped>
.decorationPass{
	height: 100%;
}
.vrcontent{
	padding:0 1rem .5rem 1rem;
	background: #fff;
}
.vhouse{
	/* padding: 0 1rem; */
	font-size: .3rem;
	line-height: 1rem;
	letter-spacing: 1px;
}
.zhengdiv{
	width:100%;
	padding: 1rem 1rem 0 1rem;
}
.zhengCode{
	width: 100%;
	border-radius: .6rem;
}
.zhengdiv p{
	text-align: center;
	line-height: 1.5rem;
	font-size: .4rem;
	font-weight: bold;
}
</style>