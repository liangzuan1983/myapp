<template>
   <div id="serviced">
      <section class="lastUsed">
         <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="h2ImgServiceNews">物业消息</h2>
         <ul>
            <li class="listMessage" v-for="(item,index) in propertyNews" :key="index" @click="targetNews(item.path)">
               <router-link to="" class="names">{{item.titles}}</router-link>
            </li>
         </ul>
      </section>
      <section class="lastUsed lastUsed-s">
         <h2 class="page-wrap wrap-vcenter"><img class="h2Img" :src="h2ImgServiceNews">系统消息</h2>
         <ul>
            <li class="listMessage" v-for="(item,index) in systemNews" :key="index" :class="{'halfwidth': (index+4)%4==0||(index+1)%4==0}">
               <router-link :to="{ path: 'MessageDetail',query:{item:item}}" class="names">{{item.titles}}</router-link>
            </li>
         </ul>
      </section>
   </div>
</template>
<script>

import NtripFooter from '@/components/ntrip-footer.vue';
// import { bus } from '@/components/bus';
const h2ImgServiceNews = require("../../../../../static/img/service/bdleft.png");
    
const propertyNews = [
   {
      titles: "生活缴费",
    //   path: "/PayCost"
   },
   {
      titles: "邀请加入",
    //   path: "/InviteToJoin"
   }
]

const systemNews = [

   {
      titles: "报修消息－报事归档通知",
      no:'WX2018072579790',
      time:'2018-08-12 15:00:00'
    //   path: "/PayCost"
   },
   {
      titles: "报修消息－报事回访通知",
      no:'WX2018072579790',
      time:'2018-08-12 15:00:00'
    //   path: "/PayCost"
   }, 
   {
      titles: "报修消息－任务回单通知",
      no:'WX2018072579790',
      time:'2018-08-11 15:00:00'
    //   path: "/PayCost"
   },
   {
      titles: "报修消息－任务派工通知",
      no:'WX2018072579790',
      time:'2018-08-10 16:00:00'
    //   path: "/PayCost"
   },
   {
      titles: "报修消息－报事登记通知",
      no:'WX2018072579790',
      time:'2018-08-10 15:00:00'
    //   path: "/PayCost"
   }
  
]

export default {
   data() {
      return {
         propertyNews: propertyNews,//最的使用
         systemNews: systemNews,//物业服务
         h2ImgServiceNews:h2ImgServiceNews,
        //  addService:addService
      } 
   },
   components: {
       NtripFooter
   },
   methods: {
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
.listMessage .names{
    line-height: 48px;
}
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
   padding: 1.3rem .4rem .4rem .4rem;
   margin-top: .1rem;
}
.lastUsed-s{
   padding: .8rem .4rem .4rem .4rem;
   margin-top: .1rem;
}
.lastUsed h2,.property h2,.mall h2{
   font-size: .4rem;
   color: #C8C8C8;
   margin-bottom: .5rem;
}
.activeImg{
   width: 1rem;
   height: 1rem;
   margin-bottom: .4rem;
}
.activeImg img{
   width: 100%;
}
.cube-scroll-wrapper{overflow: scroll}
</style>
