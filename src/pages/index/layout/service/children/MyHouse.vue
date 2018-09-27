<template>
   <cube-page>
      <div slot="content" class="MyHouse">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
			<cube-scroll :data="datas" :options="options">
				<div class="vcontent">
				<p class="myHouse-p-s">中铁建物业</p>
					<h3 class="vfirst line-bottom">中铁建国际花园－1单元201</h3>
					<div class="vhouse line-bottom page-wrap" @click="getOwnerInformation">
						<p >身份:</p>   
						<p class="wrap-content page-wrap wrap-between wrap-vcenter">
							<span class="">业主</span>
							<span class="empty"></span>
						</p> 
					</div>
					<div class="vhouse">
						<cube-button :outline='true' id="myHouse-delete-s">删除</cube-button>  
					</div>
						<!-- <button class="btn">新增房屋</button> -->
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

export default{
   data(){
      return{
			navTitle:"北京市－中铁建物业",
			datas: [],
         options: {
            pullUpLoad: {
            	scrollbar: false,
               // pullUpLoad: false
            }
         },
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
			getOwnerInformation(){
				this.$router.push({
					path:"/OwnerInformation"
				})
			}
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
.vfirst,.vhouse{
	padding: .2rem .3rem;
	font-size: .3rem;
	background: #fff;
	line-height: .6rem;
	letter-spacing: 1px;
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

.btn{
	width: 100%;
	padding: .26rem 0;
	border: none;
	background: #5599FF;
	color: #fff;
	font-size: .3rem;
	margin: .3rem 0 .4rem;
	border-radius: .12rem;    
	position: absolute;
  bottom: 0;
}
.myHouse-p-s{
	line-height: 40px;
	font-size: .3rem;
	padding-left: .3rem;
	color: #999;
}
#myHouse-delete-s{
	width: 2rem;
	padding: 0;
	line-height: 35px;
}
</style>