<template>
  <cube-page>
    <div slot="content" class="posting-p-2">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
        <ul class="repairsd">
          <li class="page-wrap line-bottom">
            <div class="itemImg wrap-content">
              <img :src="RDicon" alt="">
            </div>
            <div class="rd-desc wrap-content2">
              <h3>{{postRepairsList.title}}</h3>
              <p>{{postRepairsList.desc}}</p>
            </div>
            <div class="wrap-content" id="rd-state">{{postRepairsList.state}}</div>
            <router-link v-if="postRepairsList.stateid == 3" class="postR-btn-s" :to="{path:'PostRepEvaluationView'}">评价</router-link>
          </li>
          <li class="exampleImg">
            <img :src="postRepairsList.eimg" alt="">
          </li>
        </ul>
        <!-- <div class="vInfo line-bottom page-wrap wrap-vcenter">
            <span class="wrap-content">项目：</span>
            <cube-select
              class="wrap-content2 select-cus-payA"
              v-model="repairItemvalue"
              :options="repairItemoptions"
              @change="repairItemchangeHandler">
            </cube-select>
        </div> -->
        <div class="progress-conta">
          <ul>
            <li v-for="(item,index) in  progressList" :key="index" class="page-wrap wrap-vcenter wrap-center">
              <div class="cus-code wrap-content">
                <span :class="[item.state==1?'blue-color':'black-color','border-radu']">
                  {{item.code}}
                </span>
              </div>
              <div class="cont wrap-content3" :class="[item.state==1?'blue-bg-c':'']">
                <h3>{{item.title}}</h3>
                <p>处理时间：<span>{{item.time}}</span></p>
                <p>处理结果：<span>{{item.result}}</span></p>
                <img class="workerimg" v-if="progressListNo==index" :src="worker" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="showDetail" @click="repairItemchangeHandler">查看详情</div>
        <div v-if="isFlag == 1">
          <ul class="repairsd detail-p">
          <li class="line-bottom">
            <p><span>维修单号:</span><span>{{postRepairsList.code}}</span></p>
            <p><span>报修时间:</span><span>{{postRepairsList.createTime}}</span></p>
            <p><span>房屋地址:</span><span>{{postRepairsList.address}}</span></p>
            <p><span>上门联系人:</span><span>{{postRepairsList.theContact}}</span>（ <span>{{postRepairsList.phone}}</span>)</p>
          </li>
           <li>
            <p><span>预约上门时间:</span><span>{{postRepairsList.yyTime}}</span></p>
            <p><span>实际上门时间:</span><span>{{postRepairsList.comeRealTime}}</span></p>
            <p><span>维修人员:</span><span>{{postRepairsList.maintenanceMan}}</span></p>
            <p><span>维修完成时间:</span><span>{{postRepairsList.completeTime}}</span></p>
          </li>
        </ul>
        
         <ul class="repairsd last-rep">
          <li class="page-wrap wrap-between ">
            <div>本次维修费用:</div>
            <div>¥<span>{{postRepairsList.cost}}</span></div>
          </li>
          <li class="page-wrap wrap-between">
            <div>使用零部件信息:</div>
            <div>{{postRepairsList.parts}}</div>
          </li>
          <li class="page-wrap wrap-between">
            <div>用户承担费用:</div>
            <div>¥<span>{{postRepairsList.uerPays}}</span></div>
          </li>
        </ul>
        </div>
      <p class="postR-tishi">已经全部加载完毕</p> 
    </div>
  </cube-page>
</template>

<script type="text/javascript">
const RDicon=require("../../../../../static/img/home/RD-icon.png");

const WORKER = require("../../../../../static/img/home/worker.png");
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
export default {
  name: "PostRepairsView",
  components: {
    CubePage,
    CubeBar
  },
  data() {
    return {
        navTitle:"报事详情",
        RDicon:RDicon,
        postRepairsList: this.$route.query.postRepairsList,
        repairItemvalue:'详情',
        repairItemoptions:['详情','进度'],
        isFlag:0,
        progressList:this.$route.query.postRepairsList.progressList,
        worker:WORKER,
        progressListNo:this.$route.query.postRepairsList.progressListNo
    };
  },
  methods: {
    navBackHandle() {
      history.go(-1);
    },
    repairItemchangeHandler(){
      if(this.isFlag==0){
         this.isFlag=1
      }else{
         this.isFlag=0
      }
    },
    getpostRListData(){
      this.postRepairsList=this.$route.query.postRepairsList;
    }
   
  },
  created() {
    this.getpostRListData()
  },
  mounted() {
  //  this.postRepairsList =  this.$route.query.postRepairsList;
  //   debugger
  //  console.log('postRepairsList',postRepairsList);
  }
};
</script>

<style scoped>
.posting-p-2{
  background: #f2f2f2;
    /* height: 100%; */
    padding-top: .9rem;
}
.repairsd{
  background-color: #fff;
  padding: 0 .3rem;
}
.repairsd li{
  padding:.3rem 0
}
.itemImg img {
  width: 1rem;
  height: 1rem
}
.rd-desc h3{
  font-size: .3rem;
  line-height: 30px;
}
.rd-desc p{
  font-size: .2rem;
  color: #999;
  }
#rd-state,#rd-m {
  font-size: .3rem;
  color:#5599FF;
  line-height: 30px;
}
.exampleImg img{
  height:2rem;
}
.repairsd li p,.repairsd li div{
  line-height: 30px;
  color:#999;
  font-size: .3rem;
}
.postR-tishi{line-height: 50px;text-align: center}
.detail-p{
  margin: 10px 0;
}
.last-rep{padding: .3rem;}
.last-rep li{
  padding: 0;
}
.postR-btn-s{
    border-radius: 27px;
    background: #5599FF;
    height: 24px;
    line-height: 24px;
    margin-left: .2rem;
    color:#fff;
    padding:0 .2rem;
    font-size:.3rem;
}
.vInfo{
	padding: .2rem .3rem;
	font-size: .3rem;
	line-height: .6rem;
  letter-spacing: 1px;
  background: #fff;
  margin-top: .2rem;
}
.select-cus-payA:after{
	border:0
}
.cus-code{
  width: 1rem;
  text-align: center;
  }
.cont{
  padding: .3rem;
  background: #fff;
  line-height: 20px;
  margin-top: .2rem;
}
.cont h3{font-size: .3rem; font-weight: bold;}
.progress-conta ul{padding-right: .2rem;}
.border-radu{display: inline-block; width:.3rem;height: .3rem; border-radius: 1rem;}
.black-color{
border:1px solid #999; 
}
.blue-color{
border:1px solid #5599ff; 
background: #5599ff;
color:#fff
}
.blue-bg-c{
  background: #5599ff;
  color: #fff;
  position: relative;
}
.showDetail{
    text-align: center;
    width: 100%;
    color: #5599ff;
    line-height: 50px;
    font-size: .3rem;
}
.workerimg{
      position: absolute;
    height: 1.5rem;
    right: .5rem;
    top: .1rem;
}
</style>
