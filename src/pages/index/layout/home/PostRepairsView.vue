<template>
  <cube-page>
    <div slot="content" class="posting-p-2">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
        <img class="add-cus-btn"   @click="getRepairHandler" :src="ADD" alt="">
      <div class="postRepairsDiv">
         <ul class="repairsd">
							<li class="page-wrap line-bottom lip-3">
								<div class="itemImg wrap-content repairsd-cus-p-l">
									<img :src="RDicon" alt="">
								</div>
								<div class="rd-desc wrap-content2">
									<h3>{{perponinfoList.title}}</h3>
									<p class="line-bottom">{{perponinfoList.desc}}</p> 
										<div class="vInfoPay page-wrap">
											<h3 class="wrap-content page-wrap wrap-between wrap-vcenter">
												<span>10-10-10,2-2-2</span>
												<span class="commone-arrow"></span>
											</h3>   
										</div>
								</div>
							</li>
					 </ul>
        <ul>
      
            <li class="line-bottom" v-for="(item,index) in postRepairsList" :key="index" >
              <keep-alive>
                  <div class=""> 
                    <router-link class="postR-desc wrap-content page-wrap wrap-between wrap-vcenter" :to="{ path: 'RepairsDetail', query: { postRepairsList: item }}">
                      <h3 class="wrap-content2">{{item.address}}</h3>
                      <span>{{item.state}}</span>
                      <span class="commone-arrow"></span>
                      </router-link>
                  </div>
              </keep-alive>
                <p>{{item.desc}}</p>
                <p class="postR-h50">{{item.createTime}}</p>
              <div class="btn-cont">
                <router-link class="postR-c postR-btn-s" :to="{path:'PostRepFeedbackView',query:{title:item.desc}}">反馈信息</router-link>
                <router-link  v-if="item.stateid == 3"  class="postR-c postR-btn-s" :to="{path:'PostRepEvaluationView'}">评价</router-link>
              </div>

          
            </li>
        </ul>
      </div> 
    </div>
   </cube-page>
</template>

<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
const RDicon=require("../../../../../static/img/home/t1.png");
const ADD=require("../../../../../static/img/home/add.png");
export default {
  name: "PostRepairsView",
  components: {
    CubePage,
    CubeBar
  },
  data() {
    return {
        navTitle:"我的报事－全部",
        RDicon:RDicon,
        perponinfoList:{
					title:'张冬林',
					desc:'业主',
        },
        ADD:ADD,
        postRepairsList:[
          {
            createTime:'2018-07-09 16:40:37',
            address:'中铁建国际花园－1-2-201',
            title:'灯泡坏了',
            desc:'我要更换灯泡，请提供帮助',
            eimg:require("../../../../../static/img/home/r3.png"),
            state:'待处理',
            stateid:'1',
            code:'WX2018072579790', //维修编号
            theContact:'李女士', //联系人
            phone:'18801222222',
            yyTime:'2018-07-10 16:40:37', //预约时间
            comeRealTime:'',//实际上门时间
            completeTime:'',//完成时间
            cost:'',//本次维修费用
            parts:'',//使用零部件信息
            uerPays:'', //用户承担费用
            progressListNo:0,
            progressList:[   //进度
              {
                title:"报事登记",
                time:"2017-08-10 15:00",
                result:"完成" ,
                code:1,
                state:1
              },
              {
                title:"任务派工",
                time:"2017-08-10 15:00",
                result:"未完成" ,
                code:2,
                state:0
              },
              {
                title:"任务回单",
                time:"2017-08-10 15:00",
                result:"未完成" ,
                code:3,
                state:0
              },
              {
                title:"报事回访",
                time:"2017-08-10 15:00",
                result:"未完成" ,
                code:4,
                state:0
              },
              {
                title:"报事归档",
                time:"2017-08-10 15:00",
                result:"未完成" ,
                code:5,
                state:0
              },
            ]  

          },
          {
            createTime:'2018-07-09 16:40:37',
            address:'中铁建国际花园－1-2-201',
            title:'油烟机坏了',
            desc:'油烟机不能抽油烟，请提供帮助',
            eimg:require("../../../../../static/img/home/r2.png"),
            state:'待完成',
            stateid:'2',
            code:'WX2018072579790', //维修编号
            theContact:'李女士', //联系人
            phone:'18801222222',
            yyTime:'2018-07-10 16:40:37', //预约时间
            comeRealTime:'',//实际上门时间
            maintenanceMan:'王师傅',// 维修师傅
            completeTime:'',//完成时间
            cost:'50.00',//本次维修费用
            parts:'逆止阀',//使用零部件信息
            uerPays:'0.00', //用户承担费用
            progressListNo:2,
            progressList:[
              {
                title:"报事登记",
                time:"2017-08-10 15:00",
                result:"完成" ,
                code:1,
                state:1
              },
              {
                title:"任务派工",
                time:"2017-08-11 15:00",
                result:"已完成" ,
                code:2,
                state:1
              },
              {
                title:"任务回单",
                time:"2017-08-10 15:00",
                result:"已派工" ,
                code:3,
                state:1
              },
              {
                title:"报事回访",
                time:"2017-08-10 15:00",
                result:"未完成" ,
                code:4,
                state:0
              },
              {
                title:"报事归档",
                time:"2017-08-10 15:00",
                result:"未完成" ,
                code:5,
                state:0
              },
            ]
          },
          {
            createTime:'2018-07-09 16:40:37',  //报修时间
            address:'中铁建国际花园－1-2-201',
            title:'水管坏了',
            desc:'水管漏水，请提供帮助',
            eimg:require("../../../../../static/img/home/r1.png"),
            state:'已完成',
            stateid:'3',
            code:'WX2018072579790', //维修编号
            theContact:'李女士', //联系人
            phone:'18801222222',
            yyTime:'2018-07-10 16:40:37', //预约时间
            comeRealTime:'2018-07-10 16:40:37',//实际上门时间
            maintenanceMan:'王师傅',// 维修师傅
            completeTime:'2018-07-10 17:40:37',//完成时间
            cost:'30.00',//本次维修费用
            parts:'水龙头',//使用零部件信息
            uerPays:'0.00', //用户承担费用
            progressList:[
              {
                title:"报事登记",
                time:"2017-08-10 15:00",
                result:"完成" ,
                code:1,
                state:1
              },
              {
                title:"任务派工",
                time:"2017-08-11 15:00",
                result:"完成" ,
                code:2,
                state:1
              },
              {
                title:"任务回单",
                time:"2017-08-12 15:00",
                result:"完成" ,
                code:3,
                state:1
              },
              {
                title:"报事回访",
                time:"2017-08-12 15:00",
                result:"完成" ,
                code:4,
                state:1
              },
              {
                title:"报事归档",
                time:"2017-08-12 15:00",
                result:"完成" ,
                code:5,
                state:1
              },
            ]
          },
        ]
    };
  },
  methods: {
    navBackHandle() {
      history.go(-1);
    },
    // getRepairsDHandle(item){
    //   this.$router.push({ name: 'repairsdetail', params: {postRepairsList: item } })

    // },
    getRepairHandler(){
      this.$router.push({
        path:'Repair'
      })
    }
   
  },
  created() {
  },
  mounted() {}
};
</script>

<style scoped>
.posting-p-2{
  background: #f2f2f2;
  height: 100%;
  padding-top:.2rem; 
}
.postRepairsDiv{
  background: #fff;
  padding:35px .3rem 50px .3rem;
}
.postRepairsDiv ul li{
  padding: .3rem 0;
}
.postR-h50{
  height: 40px;
  line-height: 40px;
  font-size: .3rem;
}
.postR-btn-s{
    border-radius: 27px;
    background: #5599FF;
    height: 24px;
    line-height: 24px;
    padding: 0 .2rem;
    display: inline-block;
}
.postR-desc{
    margin: .2rem 0;
    border-top: 1px solid #f9f9f9;
}
.postR-desc div{
  font-size: .3rem;
}
.postR-desc  h3{
  font-weight: bold;
  line-height: 40px;
  font-size: .3rem;
}
.postR-desc div p{
      color: #888383
}
.postR-desc span{
  line-height: 40px;
  font-size: .3rem;
  color: #5599FF;
}
.postR-tishi{
  text-align: center;
  font-size: .3rem;
}
.postR-c{
  color: #fff;
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
  line-height: 35px;
}
.rd-desc p{
  font-size: .3rem;
  color: #999;
  line-height: 35px;
  }
 .add-cus-btn{
   position: absolute;
    top: .15rem;
    right: .3rem;
    width: .5rem;
    z-index: 10;
 }
 .btn-cont{text-align: right}
</style>
