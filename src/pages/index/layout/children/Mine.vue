<template>
   <div class="mine page-wrap wrap-d-colum">
      <section class="page-wrap">
         <div class="HeadPortrait">
            <img src="">
         </div>
         <div class="personInfo">
            <p class="names">刘一宁</p>
            <p>LIU YI NING   流程与信息管理部</p>
         </div>
      </section>
      <p class="btn">
         <button>我的差旅故事</button>
      </p>
      <ul class="list">
         <li v-for="item in list" :key="item"  class="li line-bottom page-wrap">
            <div class="page-wrap wrap-vcenter">
               <section class="liImg page-wrap wrap-vcenter">
                  <img :src="item.iconImg">
               </section>
               <p>{{item.titles}}</p>
            </div>
            <i class="empty"></i>
         </li>
      </ul>
   </div>
</template>
<script>
// import { bus } from '@/components/bus';

const list = [
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "发票信息"
   },
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "常用信息"
   },
   {
      iconImg: require('../../../../../static/img/mine/icon.png'),
      titles: "客服"
   }
]
export default {
   data() {
      return {
         isAndroid:null,
         isiOS:null,
         list: list
      }
   },
   // components: {},
   computed: {},
   methods: {},
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
   padding: .3rem .49rem;
   background: #fff;
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
   color: #BEBEBE;
   font-size: .24rem;
   padding-top: .24rem;
}
.names{
   font-size: .32rem;
   color: #2A2A30;
   margin-bottom: .1rem;
}
.btn{
   text-align: center;
   margin-top: .5rem;
}
.btn button{
   color: #FFFFFF;
   font-size: .3rem;
   padding: .09rem .2rem;
   background: #5599FF;
   border-radius: 1rem;
   border: 0;
}
.li{
   padding: .47rem 0 .39rem;
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
</style>