<template>
   <cube-page>
      <div slot="content" class="propertyPay">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll :data="propertyPaydatas" :options="propertyPayoptions">
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
						<div class="vInfo line-bottom page-wrap wrap-vcenter">
								<span class="wrap-content">预缴科目：</span>
								<cube-select
									class="wrap-content2 select-cus-payA"
									v-model="payAdvancevalue"
									:options="payAdvanceoptions"
									@change="payAchangeHandler">
								</cube-select>
						</div>
					</section>
						<div class="line-bottom">
							<ul v-if="isFlag == 1" class="repairsd">
								<li>
									<div class="lip-3 page-wrap wrap-vcenter">
										<p class="repairsd-cus-p-l wrap-content">上次缴至</p>
										<p class="wrap-content2">{{payADetail.beforeData}}</p>  
									</div>
									<div class="lip-3 page-wrap  wrap-vcenter">
										<p class="repairsd-cus-p-l wrap-content">本次预缴</p>
										<p class="wrap-content2">{{payADetail.thisData}}
										</p>
									<span class="commone-arrow"></span>  
									</div>
									<div class="lip-3 page-wrap wrap-vcenter">
										<p class="repairsd-cus-p-l wrap-content">应缴金额</p>
										<p class="wrap-content2"><span class="vorange ">{{payADetail.amount}}</span>元</p>  
									</div>
								</li>
							</ul> 
							<ul  v-if="isFlag == 2" class="repairsd">
								<li>
									<div class="lip-3   text-center-cus">
										请输入您要充值的金额
									</div>
									<div class="payA-m-3 page-wrap wrap-vcenter wrap-center">
										<cube-input class="moneyValue" v-model="moneyValue" ></cube-input>
										<div class="payA-height-3">元</div>
									</div>
								</li>
							</ul> 
						</div>
						<div class="pay-p-3">
							<h3>提示</h3>
							<p>1、您本次预存的金额将会进入当前社区物业公司账户；</p>
							<p>2、当您再物业ERP系统中产生物业费、停车费、水电费等欠款时将会自动抵扣；</p>
							<p>3、具体账单请以物业公司为准；</p>
							<p>4、预查看预存金额抵扣记录，可以点击此处，<router-link  class="vorange" :to="{ path: ''}">抵扣记录</router-link></p>
							<p>5、预查看预存金额的余额，请点击下方查看余额按钮；</p>
						</div>
						<div class="page-wrap">
						<router-link class='btn-5 btncolor1' :to="{ path: ''}">查看余额</router-link>
						<router-link class='btn-5 btncolor2' :to="{ path: 'PPaySuccessful'}">立即支付</router-link>

						</div>
						
				</div>
			</cube-scroll>
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
				navTitle:"预缴费用",
				navRightBtn:"往期账单",
				RDicon:RDicon,
				isFlag:1,
				payAdvancevalue:'住宅物业费(4-4-4)',
				payAdvanceoptions:['住宅物业费(4-4-4)','燃气费预付款'],
				moneyValue:'100',
				propertyPayList:{
					title:'张冬林',
					desc:'业主',
				},
				payADetail:{
						beforeData:'2017-12-31',
						thisData:'2018年6月',
						amount:'600.00',
						payMoney:'241.40',
						desc:'2017-04－01至2017-04-30'
				},
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
		},
		payAchangeHandler(value, index, text){
			if(index==1){
				this.isFlag=2;
			}else{
				this.isFlag=1;
			}
				 console.log('change',value, index,  text)
		}
	}
}
</script>
<style scoped>
.propertyPay{
	height: 100%;
}
.vIcontent{
	margin-top:.9rem;
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
  margin-top: 10px;
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
.pay-p-3{
	padding: .3rem;
}
.pay-p-3 p,.pay-p-3 h3{
line-height: 24px;
}
.select-cus-payA:after{
	border:0
}
.text-center-cus{text-align: center;}
.moneyValue{
	width:2rem;
}
.payA-height-3{
	line-height: 40px;
}
.payA-m-3{padding-bottom: .3rem;}
</style>