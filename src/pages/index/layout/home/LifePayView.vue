<template>
 <cube-page>
   <div slot="content" class="lifepaycon">
        <cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
      <div class="main page-wrap wrap-d-colum">
        <section class="payLastUsed">
          <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="lifeH2ImgServiceNews">物业费</h2>
          <ul class="wrap-content page-wrap wrap-wrap">
              <li v-for="(item,index) in propertyPay"  :key="index" class="li page-wrap wrap-d-colum wrap-vcenter" :class="{'marginLR': (index+2)%3==0}">
                <router-link :to="{path:(item.router)}">
                <div class="itemImg">
                    <img :src="item.iconImg">
                </div>
                <p>{{item.title}}</p>

                </router-link>
              </li>
          </ul>
          </section>
          <section class="payLastUsed">
          <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="lifeH2ImgServiceNews">代缴费</h2>
          <ul class="wrap-content page-wrap wrap-wrap">
              <li v-for="(item,index) in alternativePayment"  :key="index" class="li page-wrap wrap-d-colum wrap-vcenter" :class="{'marginLR': (index+2)%3==0}">
                <router-link :to="{path:(item.router),query:{itemName:(item.name),itemTitle:(item.title)}}">
                <div class="itemImg">
                    <img :src="item.iconImg">
                </div>
                <p>{{item.title}}</p>

                </router-link>
              </li>
          </ul>
          </section>
          <section class="payLastUsed">
          <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="lifeH2ImgServiceNews">直接缴费</h2>
          <ul class="wrap-content page-wrap wrap-wrap">
              <li v-for="(item,index) in listNav"  :key="index" class="li page-wrap wrap-d-colum wrap-vcenter" :class="{'marginLR': (index+2)%3==0}">
                <router-link :to="{path:(item.router),query:{itemName:(item.name),itemTitle:(item.title)}}">
                <div class="itemImg">
                    <img :src="item.iconImg">
                </div>
                <p>{{item.title}}</p>

                </router-link>
              </li>
          </ul>
          </section>
      </div>
      <router-view></router-view>
   </div>
   </cube-page>
</template>

<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

const lifeH2ImgServiceNews = require("../../../../../static/img/service/bdleft.png");
const nav = [
   {
      title: '水费',
      iconImg: require('../../../../../static/img/home/icon-pay0.png'),
      router: 'paycost',
      name:'北京市自来水集团'
   },
   {
      title: '电费',
      iconImg: require('../../../../../static/img/home/icon-pay1.png'),
      router: 'paycost',
      name:'国网北京市电力公司'
   },
   {
      title: '燃气费',
      iconImg: require('../../../../../static/img/home/icon-pay2.png'),
      router: 'paycost',
      name:'北京市燃气集团'
   },
  
]
const propertyPay = [{
      title: '物业费',
      iconImg: require('../../../../../static/img/home/icon-pay0.png'),
      router: 'IndexPay',
      name:'中铁建(北京)物业管理有限公司'
}]
const alternativePayment = [{
        title: '宽带费',
        iconImg: require('../../../../../static/img/home/icon-pay3.png'),
        router: 'paycost',
        name:'中国电信集团'
}]
export default {
   data() {
      return {
         isiOS:null,
         isAndroid:null,
         // transitionName: 'slide-left',
         listNav: nav,// 直接缴费
         propertyPay:propertyPay,//物业费
         alternativePayment:alternativePayment, //代缴费
         navTitle:"生活缴费",
         lifeH2ImgServiceNews:lifeH2ImgServiceNews
           
      } 
   },
   components: {
     	CubePage,
		  CubeBar
   },
   methods: {
     	navBackHandle() {
			history.go(-1);
		},
   },
   created() {},
   mounted() {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
   width: 100%;
   height: 100%;
   padding-top: 1rem;
}
.li {
   font-size: .3rem;
   color: #333333;
   margin: 0;
   width: 33.3%;
}
.li p{
   margin-bottom: .66rem;
}
.itemImg{
   width: .99rem;
   height: .99rem;
   margin-bottom: .3rem;
}
.itemImg img {
   width: 100%;
}
.payLastUsed{
  padding:.2rem .3rem 0 .3rem;
}
.payLastUsed h2{
    font-size: .4rem;
    color: #C8C8C8;
    margin-bottom: .5rem;
}
.lifepaycon{
    background: #fff;
    padding-bottom: 3rem;
    }
</style>