<template>
   <div class="mine page-wrap wrap-d-colum">
      <section class="mineInfo page-wrap">
         <div class="HeadPortrait">
            <img class="mineIcon" :src="MinelistImg[0].iconImg">
         </div>
         <div class="personInfo">
            <!-- <p class="names">张冬林</p>
            <p>1001业主</p> -->
            <router-link class="Min-a-c" :to="{path:'/Login'}">没有登录请点击登录或注册</router-link>
         </div>
      </section>
      <!-- <ul class="mInfolist">
         <li v-for="(item,index) in list" :key="index" class="li line-bottom page-wrap wrap-vcenter wrap-between">
            <div class="page-wrap wrap-vcenter">
               <section class="liImg page-wrap wrap-vcenter">
                  <img :src="item.iconImg">
               </section>
               <p>{{item.titles}}</p>
            </div>
            <i class="commone-arrow"></i>
         </li>
      </ul> -->
      <ul class="mycommunity">
         <li v-for="(item,index) in mycommunity" :key="index" class="li line-bottom ">   
              <router-link :to="{ path: (item.path)}"  class="page-wrap wrap-vcenter wrap-between">
                <div class="page-wrap wrap-vcenter">
                  <section class="liImg page-wrap wrap-vcenter">
                      <img :src="item.iconImg">
                  </section>
                  <p>{{item.titles}}</p>
                </div>
                  <i class="commone-arrow"></i> 
              </router-link>
           
         </li>
      </ul>
      <ul class="ideas">
         <li v-for="(item,index) in ideas" :key="index" class="li line-bottom page-wrap wrap-vcenter wrap-between" @click="findTo(item.path?item.path:'')">
            <div class="page-wrap wrap-vcenter">
               <section class="liImg page-wrap wrap-vcenter">
                  <img :src="item.iconImg">
               </section>
               <p>{{item.titles}}</p>
            </div>
            <i class="commone-arrow"></i>
         </li>
      </ul>
      <ul class="CustomerService">
         <li v-for="(item,d) in CustomerService" :key="d" class="li line-bottom">
            <router-link :to="{ path: (item.path)}"  class="page-wrap wrap-vcenter wrap-between">
            <div class="page-wrap wrap-vcenter">
               <section class="liImg page-wrap wrap-vcenter">
                  <img :src="item.iconImg">
               </section>
               <!-- <p v-if="!d"><a href="tel:400 081 8181">{{item.titles}}</a></p> -->
               <p>{{item.titles}}</p>
            </div>
            <i class="commone-arrow"></i>
            </router-link>
         </li>
      </ul>
   </div>
</template>
<script>
// import { bus } from '@/components/bus';
const MinelistImg = [
   {
      iconImg: require('../../../../../static/img/home/trip-hotel.jpg')
   },
   {
      iconImg: require('../../../../../static/img/mine/icon.png')
   }
  ]
// const list = [
//    {
//       iconImg: require('../../../../../static/img/mine/icon.png'),
//       titles: "会员中心",
//       path:'/MembersDetail'

//    }
// ]

const mycommunity = [
  {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "会员中心",
      path:'/MembersDetail'

   },
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "门禁卡管理",
      path:'/MJ'
   },
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "我的社区",
      path:'/ListCommunityView'
   },
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "我要服务",
      path: '/Service'
   },
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "绑定房屋",
      path:'/BindHousing',
   }
]

const ideas = [
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "意见反馈",
      path: '/Myoptions'
   },
   {
      iconImg:require( '../../../../../static/img/mine/icon.png'),
      titles: "关于中铁建物业",
      path: "/AboutQD"
   }
]

const CustomerService = [
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "我的合同",
      path: "/MyContract"
   }
]

export default {
   data() {
      return {
         isAndroid:null,
         isiOS:null,
        //  list: list,//
         mycommunity: mycommunity,//
         ideas: ideas,//
         CustomerService: CustomerService,//
         wallet: [{number:"0.00",names:"账户余额"},{number:"5",names:"积分"},{number:"0",names:"千丁券"}],//钱包
         MinelistImg:MinelistImg
      }
   },
   components: {},
   computed: {},
   methods: {
      findTo(i){
         if (i) {
            this.$router.push({path:i})
         }
      }
   },
   created() {},
   beforeDestroy() {},
   mounted() {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine{
   width: 100%;
   height: 100%;
}
/*====================================================*/
.mineInfo{
   width: 100%;
   padding: .5rem .3rem;
   background: url(../../../../../static/img/mine/bgHotel.png) no-repeat left top;
   background-size: cover;
   
}
.HeadPortrait{
   width: 1.16rem;
   height: 1.16rem;
   margin-right: .32rem;
}
.HeadPortrait img{
   width: 100%;
}
.personInfo{
   color: #FFF;
   font-size: .24rem;
   padding-top: .24rem;
}
.names{
   font-size: .32rem;
   /* color: #2A2A30; */
   margin-bottom: .1rem;
}
/*=================================================*/
.mywallet{
   width: 100%;
   font-size: .3rem;
   padding: .4rem .4rem .4rem .3rem;
   box-sizing: border-box;
   background: #fff;
   margin-bottom: .2rem;
}
.walletP{
   padding-bottom: .3rem;
}
.mywalletIcon{
   height: .4rem;
   margin-right: .2rem;
}
.mlist{
   width: 30%;
   /* padding-top: .3rem; */
}
.borderLR{
   border-left: 1px solid #ccc;
   border-right: 1px solid #ccc;
}
/*=========================================================*/
.mInfolist,.mycommunity,.ideas,.CustomerService{
   width: 100%;
   padding: 0 .2rem;
   background: #fff;
   margin-bottom: .2rem;
}
.mycommunity p,.CustomerService a{
  color: #333333;
}
.li{
   padding: .47rem .4rem .39rem;
   font-size: .3rem;
   color: #333333;
   line-height: .52rem;
}
.liImg{
   width: .41rem;
   height: .36rem;
   margin-right: .32rem;
}
.liImg img{
   width: 100%;
}
.Min-a-c{
  color:#fff;
}
</style>