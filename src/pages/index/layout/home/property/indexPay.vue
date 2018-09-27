<template>
   <cube-page>
      <div slot="content" class="propertyPay">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<!-- <cube-scroll :data="propertyPaydatas" :options="propertyPayoptions"> -->
				<div class="vIcontent">
					 <ul class="repairsd">
							<li class="page-wrap line-bottom lip-3">
								<div class="itemImg wrap-content repairsd-cus-p-l">
									<img :src="RDicon" alt="">
								</div>
								<div class="rd-desc wrap-content2">
									<h3>{{propertyPayList.title}}</h3>
									<p class="line-bottom">{{propertyPayList.desc}}</p> 
										<div class="vInfoPay page-wrap">
											<h3 class="wrap-content page-wrap wrap-between wrap-vcenter">
												<span>10-10-10,2-2-2</span>
												<span class="commone-arrow"></span>
											</h3>   
										</div>
								</div>
							</li>
					 </ul>
					<section class="houses">
						<div class="vInfo line-bottom page-wrap">
							<p class="wrap-content page-wrap wrap-between wrap-vcenter">
								<span>未缴金额合计：</span>
								<span>
									<span class="vorange">2172.64</span>元
									</span>
								<cube-checkbox v-model="checkedprppertyPay">
									全选
								</cube-checkbox>
							</p>   
						</div>
					</section>
						<div class="line-bottom">
						<h3 class="vInfo">住宅物业费</h3>
						<ul class="repairsd cus-pb-1">
							<li v-for="(e,index) in propertypayDetail" :key="index">
									<div class="wrap-content page-wrap wrap-between wrap-vcenter line-bottom">
									<cube-checkbox v-model="checkedData">
										{{e.data}}
									</cube-checkbox>
									<p>
										<span class="vorange">{{e.amount}}</span>元
									未缴<i class="cubeic-pullup"></i>
									</p>  
								</div>
								<div class="lip-3 wrap-content page-wrap wrap-between wrap-vcenter">
									<p class="repairsd-cus-p-l">房号</p>
									<p class="grey">{{e.houseId}}</p>  
								</div>
								<div class="lip-3 wrap-content page-wrap wrap-between wrap-vcenter">
									<p class="repairsd-cus-p-l">未缴金额</p>
									<p>
										<span class="vorange">{{e.payMoney}}</span>元
									未缴</p>  
								</div>
								<div class="lip-3 wrap-content page-wrap wrap-between wrap-vcenter">
									<p class="repairsd-cus-p-l">说明</p>
									<p class="grey">{{e.desc}}</p>  
								</div>
							</li>
							
							<li class="wrap-content page-wrap wrap-between wrap-vcenter">
								<cube-checkbox v-model="checkedData">
									2017-05
								</cube-checkbox>
								<p>
									<span class="vorange">241.40</span>元
								未缴<i class="cubeic-pulldown"></i>
								</p>  
							</li>
							<li class="wrap-content page-wrap wrap-between wrap-vcenter">
								<cube-checkbox v-model="checkedData">
									2017-06
								</cube-checkbox>
								<p>
									<span class="vorange">241.40</span>元
								未缴<i class="cubeic-pulldown"></i>
								</p>  
							</li>
							<li class="wrap-content page-wrap wrap-between wrap-vcenter">
								<cube-checkbox v-model="checkedData">
									2017-07
								</cube-checkbox>
								<p>
									<span class="vorange">241.40</span>元
								未缴<i class="cubeic-pulldown"></i>
								</p>  
							</li>
						</ul> 
						</div>
						<div class="page-wrap indexpaybtn">
							<a class='btn-5 btncolor1' href="https://yaoyaotest.cebbank.com/LifePayment/wap/apph5/index_test.html?uid=2222&canal=222&type=0&version=1.0.0&telno=18252002219&token=009FF481F6DA2645C4D1ABEE22C21737&macValue=A33080229824021ACD52F21DB3630A9E">立即缴费</a>
							<a class='btn-5 btncolor2' href="https://yaoyaotest.cebbank.com/LifePayment/wap/apph5/index_test.html?uid=2222&canal=222&type=0&version=1.0.0&telno=18252002219&token=009FF481F6DA2645C4D1ABEE22C21737&macValue=A33080229824021ACD52F21DB3630A9E">立即缴费</a>
						<!-- <router-link class='btn-5 btncolor1' :to="{ path: 'PayInfo'}">预缴费用</router-link>
						<router-link class='btn-5 btncolor2' :to="{ path: 'PayInfo'}">立即缴费（2172.64）</router-link> -->

						</div>
						
				</div>
			<!-- </cube-scroll> -->
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

const RDicon=require("../../../../../../static/img/home/t1.png");
export default{
   data(){
      return{
				navTitle:"物业缴费",
				navRightBtn:"往期账单",
				RDicon:RDicon,
				propertyPayList:{
					title:'张冬林',
					desc:'业主',
				},
				propertypayDetail:[{
						data:'2017-04',
						amount:'241.40',
						houseId:'4-4-4',
						payMoney:'241.40',
						desc:'2017-04－01至2017-04-30'
						}
				],
				checkedprppertyPay:true,	
				checkedData:true,
				propertyPaydatas: [],
				propertyPayoptions: {
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
        	this.$router.push({path:'PastBills'})
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
.propertyPay{
	height: 100%;
}
.vIcontent{
	padding-top:.9rem;
}
.vorange{
	color: #5599FF;
}
.repairsd{
	background-color: #fff;
	padding: 0 .3rem 0 0;
}
repairsd-p3{
  padding: 0 .3rem 0 0;
}
.repairsd li{
	font-size: .3rem;
}
.lip-3{
	padding:.3rem 0;
}
.itemImg img {
  width: 1.2rem;
  height: 1.2rem
}
.rd-desc h3{
  font-size: .3rem;
  line-height: 40px;
}
.rd-desc p{
  font-size: .3rem;
  color: #999;
  line-height: 40px;
	}
.houses{
background: #fff;
margin-bottom: .16rem;
}
.vInfo{
	padding: .2rem .3rem;
	font-size: .3rem;
	line-height: .6rem;
	letter-spacing: 1px;
}
.vInfoPay{
	line-height: 40px;
}
.grey{
	 color: #999;
}
.repairsd-cus-p-l{
	padding-left: .3rem;
}
.btn-5{
		width:50%;
    color: #fff;
    font-size: .3rem;
		text-align: center;
		padding: .2rem 0;
}
.btncolor1{
    background: #5599FF;
}

.btncolor2{
    background: #2475ef;
}
.indexpaybtn{position:fixed;bottom:0; width: 100%;}
.cus-pb-1{padding-bottom: 2rem;}
</style>