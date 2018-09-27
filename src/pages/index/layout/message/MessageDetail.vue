<template>
 <cube-page>
   <div slot="content" class="lifepaycon">
        <cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
      <div class="main">
        <ul>
          <li class="line-bottom">
            <h3>{{message.titles}}</h3>
            <p>单号：{{message.no}}</p>
            <p>时间：{{message.time}}</p>
          </li>
        </ul>
      </div>
   </div>
   </cube-page>
</template>

<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

const lifeH2ImgServiceNews = require("../../../../../static/img/service/bdleft.png");

export default {
   data() {
      return {
         isiOS:null,
         isAndroid:null,
         navTitle:"报修消息通知",
         message: this.$route.query.item

           
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
   created() {
    //  this.getnearbyMHandler();
   },
   mounted() {}
}
</script>
<style scoped>
.main{
  background: #fff;
  padding:.9rem .3rem;

}
li{line-height: 40px; padding: .2rem 0;}
h3{font-size: 0.35rem;}
p{font-size: .3rem}
</style>