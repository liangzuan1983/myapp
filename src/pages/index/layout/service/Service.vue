<template>
    <!-- <cube-page> -->
    <div id="serviced">
         <!-- <cube-scroll ref="scroll" direction="vertical"> -->
        <section class="lastUsed">
            <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="h2ImgService">最近使用</h2>
            <ul class="page-wrap wrap-between">
                <li class="list page-wrap wrap-d-colum wrap-vcenter" v-for="(item,index) in lastUsed" :key="index" @click="targetNews(item.path)">
                <div class="activeImg">
                    <img :src="item.iconImg">
                </div>
                <p class="names">{{item.titles}}</p>
                </li>
            </ul>
        </section>
        <section class="property">
            <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="h2ImgService">物业服务</h2>
            <ul class="page-wrap wrap-between wrap-wrap">
                <li class="list page-wrap wrap-d-colum wrap-vcenter" v-for="(item,index) in property" :key="index" :class="{'halfwidth': (index+4)%4==0||(index+1)%4==0}" @click="targets(item.path)">
                <div class="activeImg">
                    <img :src="item.iconImg">
                </div>
                <p class="names">{{item.titles}}</p>
                </li>
            </ul>
        </section>
        <section class="property addService">
            <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="h2ImgService">家政服务</h2>
            <ul class="page-wrap wrap-between wrap-wrap">
                <li class="list page-wrap wrap-d-colum wrap-vcenter" v-for="(item,index) in domesticService" :key="index" :class="{'halfwidth': (index+4)%4==0||(index+1)%4==0}" @click="targets(item.path)">
                <div class="activeImg">
                    <img :src="item.iconImg">
                </div>
                <p class="names">{{item.titles}}</p>
                </li>
            </ul>
        </section>
    <!-- </cube-scroll> -->
    </div>
  <!-- </cube-page> -->
</template>
<script>
// import { bus } from '@/components/bus';
import CubePage from '@/components/cube-page.vue'
const h2ImgService = require("../../../../../static/img/service/bdleft.png");
    
const lastUsed = [
   {
      titles: "生活缴费",
      iconImg: require("../../../../../static/img/service/payment.png"),
      path: "/LifePayView"
   },
   {
      titles: "邀请加入",
      iconImg: require("../../../../../static/img/service/invitation.gif"),
      path: "/InviteToJoin"
   },
   {
      titles: "园区报修",
      iconImg: require("../../../../../static/img/service/repair.gif"),
      path: '/Repair'
   },
   {
      titles: "APP下载",
      iconImg: require("../../../../../static/img/service/download.png"),
      path: '/QueryCode'
   }
]

const property = [
   {
      titles: "我的房屋",
      iconImg: require("../../../../../static/img/service/house.png"),
      path: '/MyHouse'
   },
   {
      titles: "APP下载",
      iconImg:require( "../../../../../static/img/service/download.png"),
      path: '/QueryCode'
   },
   {
      titles: "园区报修",
      iconImg: require("../../../../../static/img/service/repair.gif"),
      path: '/Repair'
   },
   {
      titles: "接受邀请",
      iconImg: require("../../../../../static/img/service/Accept.png"),
       path: '/QueryCode'
   },
   {
      titles: "生活缴费",
      iconImg: require("../../../../../static/img/service/payment.png"),
      path: "/LifePayView"
   },
   {
      titles: "门禁钥匙",
      iconImg: require("../../../../../static/img/service/key.png"),
      path: '/MJ'
   },
   {
      titles: "邀请加入",
      iconImg: require("../../../../../static/img/service/invitation.gif"),
      path: "/InviteToJoin"
   },
   {
      titles: "访客通行",
      iconImg: require("../../../../../static/img/service/passage.png"),
      path:"/Visitors"
   },
   {
      titles: "装修出入证",
      iconImg: require("../../../../../static/img/service/passage.png"),
      path:"/DecorationPass"
   }
  
]
const domesticService=[ 
     {
      titles: "保洁",
      iconImg: require("../../../../../static/img/service/baojie_03.png"),
    //   path: '/MyHouse'
   },
   {
      titles: "保姆",
      iconImg:require( "../../../../../static/img/service/baomu_03.png"),
    //   path: '/QueryCode'
   },
   {
      titles: "洗车",
      iconImg: require("../../../../../static/img/service/wash.png"),
    //   path: '/Repair'
   },
   {
      titles: "家电维修",
      iconImg: require("../../../../../static/img/service/jiadianrepair_03.png"),
    //   path: '/Repair'
   },
]
export default {
   data() {
      return {
         isAndroid:null,
         isiOS:null,
         lastUsed: lastUsed,//最的使用
         property: property,//物业服务
         h2ImgService:h2ImgService,
         domesticService:domesticService
        //  addService:addService
      } 
   },
   components: {
        CubePage,
   },
   methods: {
      targets(s){
         this.$router.push({path:s})
      },
      targetNews(s){
         this.$router.push({path:s})
      }
   },
   created() {},
   computed: {},
   beforeDestroy() {},
   mounted() {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#serviced{
   font-size: .3rem;
   color: #000;
}
.lastUsed,.property{
   width: 100%;
   box-sizing: border-box;
   background: #fff;
}

/*======== 最近使用 ========*/
.lastUsed{
   padding: .4rem;
   margin-top: .1rem;
}
.lastUsed h2,.property h2,.mall h2{
   font-size: .4rem;
   color: #C8C8C8;
   margin-bottom: .6rem;
}
.activeImg{
   width: 1rem;
   height: 1rem;
   margin-bottom: .4rem;
}
.activeImg img{
   width: 100%;
}

/*======== 物业服务 ========*/
.property{
   padding: .4rem .4rem 0;
   margin: .26rem 0;
}
.property .list{
   width: 32%;
   margin-bottom: .64rem;
}
 .property .list p{
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
 }
.halfwidth{
   width: 18%!important;
}
.addService{
    padding-bottom: 1rem;
}
</style>
