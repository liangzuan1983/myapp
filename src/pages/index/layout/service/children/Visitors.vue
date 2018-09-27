<template>
   <cube-page>
      <div slot="content" class="vistors">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll :data="datas" :options="options">
				<div class="vcontent">
					<p class="vfirst line-bottom">为将要到访的亲朋好友生成放行密码，以微信或者短信方式发送给他们，在入口门岗处输入旅行密码，即可验证通行。</p>
					<div class="vhouse line-bottom page-wrap">
						<p >请选择房屋：</p>   
						<p class="wrap-content page-wrap wrap-between wrap-vcenter">
							<span class="vorange">中铁建国际花园－1单元201</span>
							<span class="commone-arrow"></span>
						</p>   
					</div>
					<div class="vmain">
						<section class="vgoal line-bottom">
							<h3>请选择来访目的</h3>
							<ul class="page-wrap wrap-between wrap-wrap">
								<li v-for="(item,index) in vgoal" :key="index" class="vlist" :class="{'bdcolor':index==goalIndex}" @click="selectGoal(index)">{{item}}</li>
							</ul>
						</section>
						<section class="vdates">
							<h3>请选择有效日期</h3>
							<ul class="page-wrap">
								<li v-for="(item,index) in vdates" :key="index" class="vday" :class="{'bdcolor':index==datesIndex}" @click="selectDate(index)">{{item}}</li>
							</ul>
							<p class="vtime line-bottom"><span class="vweight">有效日期：</span><span v-text="msg"></span><span>23：59：59</span></p>
							<p class="vtime line-bottom"><span class="vweight">有效次数：</span><span class="color">仅限1次</span></p>
						</section>
					</div>
					<router-link class="btn" :to="{path:'/'}">确定</router-link>
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

const vgoal = ["中介看房","搬家放行","送货上门","装修放行","家政服务","朋友来访"]
const vdates = ["今日","明日"]

export default{
   data(){
      return{
			navTitle:"访客通行",
      	navRightBtn:"历史记录",
         vgoal: vgoal,//来访目的
         vdates: vdates,//来访日期
			msg: '截止到本日：',//有效期
			datas: [],
         options: {
            pullUpLoad: {
            	scrollbar: false,
               // pullUpLoad: false
            }
         },
			goalIndex: '',//来访目的边框
			datesIndex: '',//日期边框
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
            content: '<p>1)、如您所开证明涉及薪资收入信息，请选择收入证明；</p><p>2)、手机龙信证明开具仅支持标准模板，若您有特殊模板需求，您可以通过PC端上传提交，路径：OA-左侧人力资源-证明开具；</p><p>3)、如您有其他问题，可拨打4000-688-255转1人事咨询，或通过龙小湖HR在线咨询</p>',
            icon: 'cubeic-alert'
         }).show()
      },
    	navBackHandle() {
			history.go(-1);
		},
		selectGoal(i){
			this.goalIndex = i
		},
		selectDate(j){
			this.datesIndex = j
			if (j==1) {
				this.msg = "截止到明日："
			} else {
				this.msg = "截止到本日："
			}
		}
	}
}
</script>
<style type="text/css">
.vistors{
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
.vdates{margin-bottom:1rem}
.vlist{
    padding: 0.2rem;
    margin: 0.2rem 0 .3rem 0;
		border: 1px solid #e8e6e6;
		width:31%;
		text-align: center;
		border-radius: .3rem
}
.vday{
    padding: 0.2rem;
    margin: 0.2rem .3rem .3rem 0;
		border: 1px solid #e8e6e6;
		width:31%;
		text-align: center;
		border-radius: .3rem
}
.vtime{
	line-height: .3rem;
	padding: .3rem .2rem;
	font-size: .3rem;
	font-weight: 600;
}
.vweight{
	font-weight: 600;
	margin-right: .3rem;
}
.color{
	color: #5599FF;
}
.bdcolor{
	color: #5599FF;
	border: 1px solid #5599FF!important;
}
.payS-btn-s{
  color: #fff;
}
</style>