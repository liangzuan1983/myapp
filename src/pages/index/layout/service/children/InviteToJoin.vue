<template>
   <cube-page>
      <div slot="content" class="vistors">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll :data="datas" :options="options">
				<div class="vIcontent">
					<p class="vfirst line-bottom">生成二维码，以微信方式发送给你的亲朋好友，邀请他们体验中铁建物业，你的亲朋好友只需要在中铁建物业中扫一扫，便可以畅通交流。</p>
					<section class="houses">
						<div class="vInfo line-bottom page-wrap">
							<p >请选择房屋：</p>   
							<p class="wrap-content page-wrap wrap-between wrap-vcenter">
								<span class="vorange">中铁建国际花园-1单元201</span>
								<span class="commone-arrow"></span>
							</p>   
						</div>
						<div class="vInfo line-bottom page-wrap">
							<p class="vorange">我的姓名：</p>
							<p class="vorange">默默随风</p>   
						</div>
					</section>
					<div class="vmain">
						<section class="vgoal line-bottom">
							<h3>我要邀请我的(朋友)加入中铁建物业</h3>
							<ul class="page-wrap wrap-between wrap-wrap">
								<li v-for="(item,index) in vgoal" :key="index" class="vIlist" :class="{'bdcolors':index==activeFriend}" @click="selectInvit(index)">{{item}}</li>
							</ul>
						</section>
							<router-link class="btn" :to="{path:'/Service'}">确定</router-link>
					</div>
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

const vgoal = ["朋友","家庭成员","租客","装修负责人","保姆","司机"]

export default{
   data(){
      return{
			navTitle:"邀请加入",
      	navRightBtn:"历史记录",
         vgoal: vgoal,//邀请朋友
			msg: '',//有效期
			datas: [],
         options: {
            pullUpLoad: {
            	scrollbar: false,
               // pullUpLoad: false
            }
			},
			activeFriend:0,//邀请好友
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
            content: '<p>1)、如您所；</p><p>2)、；</p><p>3)、如您有其他问题，可拨打110转1人事咨询</p>',
            icon: 'cubeic-alert'
         }).show()
      },
    	navBackHandle() {
			history.go(-1);
		},
		selectInvit(i){
			this.activeFriend = i
		}
	}
}
</script>
<style scoped>
.vistors{
	height: 100%;
	/* background: #fff; */
}

.vIcontent{
	padding-top: .9rem;
}
.vfirst,.vInfo{
	padding: .2rem .3rem;
	font-size: .3rem;
	line-height: .6rem;
	letter-spacing: 1px;
}
.vfirst,.houses{
	background: #fff;
	margin-bottom: .16rem;
}

.vorange{
	color: #5599FF;
	margin-left: .2rem;
}

.vmain{
	padding: 0 .2rem;
	background-color: #fff;
}
.vgoal,.vdates{
	padding: .4rem .2rem 0;
}
.vgoal h3,.vdates h3{
	font-size: .3rem;
	font-weight: 600;
	margin-bottom: .3rem;
}
.vIlist{
    padding: 0.2rem;
    margin: 0.2rem 0 .3rem 0;
		border: 1px solid #e8e6e6;
		width:31%;
		text-align: center;
		border-radius: .3rem
}

.vweight{
	font-weight: 600;
	/* margin-right: .3rem; */
}
.color{
	color: #5599FF;
}
.bdcolors{
	color: #5599FF;
	border: 1px solid #5599FF!important;
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
}
</style>