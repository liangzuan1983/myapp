<template>
   <cube-page>
      <div slot="content" class="propertyPay">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
			<!-- <cube-scroll :data="propertyPaydatas" :options="propertyPayoptions"> -->
				<div class="vIcontent">
					 <ul class="repairsd">
							<li class="page-wrap line-bottom lip-3">
								<div class="itemImg wrap-content repairsd-cus-p-l">
									<img :src="RDicon1" alt="">
								</div>
								<div class="rd-desc wrap-content2">
									<h3>{{pastBillsList.title}}</h3>
									<p class="line-bottom">{{pastBillsList.desc}}</p> 
										<div class="vInfoPay page-wrap">
											<h3 class="wrap-content page-wrap wrap-between wrap-vcenter">
												<span>10-10-10,2-2-2</span>
												<span class="commone-arrow"></span>
											</h3>   
										</div>
								</div>
							</li>
					 </ul>
						<div class="line-bottom">
						<h3 class="vInfo">缴费记录</h3>
						<ul class="repairsd" v-for="(item,index) in postBillsDetail" :key="index">
							<li class="wrap-content page-wrap wrap-between wrap-vcenter line-bottom ">
								<p>
								{{item.data}}
								</p>
								<p>
									<span class="vorange">{{item.amount}}</span>
								</p>  
							</li>
							<li class="wrap-content page-wrap wrap-between wrap-vcenter line-bottom ">
								<p>
								住宅物业费
								</p>
								<p>
									<span class="vorange">{{item.payMoney}}</span>
								</p>  
							</li>
							<li class="wrap-content page-wrap wrap-between wrap-vcenter line-bottom ">
								<p>缴费房号</p>
								<p>{{item.houseId}}</p>  
							</li>
							<li class="wrap-content page-wrap wrap-between wrap-vcenter line-bottom ">
								<p>应收日期</p>
								<p>{{item.accountsReceivableDate}}</p>  
							</li>
							<li class="wrap-content page-wrap wrap-between wrap-vcenter line-bottom ">
								<p>缴费日期</p>
								<p>{{item.payTime}}</p>  
							</li>
							<li class="wrap-content page-wrap wrap-between wrap-vcenter line-bottom ">
								<p>费用描述</p>
								<p>{{item.desc}}</p>  
							</li>
						</ul> 
						</div>
				</div>
			<!-- </cube-scroll> -->
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

const RDicon1=require("../../../../../../static/img/home/t1.png");
export default{
   data(){
      return{
				navTitle:"往期账单",
				RDicon1:RDicon1,
				pastBillsList:{
					title:'张冬林',
					desc:'业主',
				},
				postBillsDetail:[{
						data:'2017-04',
						amount:'742.40',
						payMoney:'241.40',
						houseId:'4-4-4',
						accountsReceivableDate:'2017-01-01',
						payTime:'2017-03-14 11:33',
						desc:'2017-01－01至2017-01-31'
						},{
						data:'2017-04',
						amount:'742.40',
						payMoney:'241.40',
						houseId:'10-10-10',
						accountsReceivableDate:'2017-01-01',
						payTime:'2017-03-14 11:33',
						desc:'2017-01－01至2017-01-31'
						}],
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
	padding: .3rem .3rem 0 0;
}
repairsd-p3{
  padding: 0 .3rem 0 0;
}
.repairsd li{
	font-size: .3rem;
	line-height: 40px;
	padding:0 .3rem;
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
</style>