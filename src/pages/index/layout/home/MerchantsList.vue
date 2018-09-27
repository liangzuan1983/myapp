<template>
 <cube-page>
   <div slot="content" class="lifepaycon">
        <cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
      <div class="main">
        <!-- <div id="container"></div>
        <div id="panel"></div> -->
        <ul>
          <li v-for="(item,index) in merchList" :key="index" class="line-bottom">
            <h3>{{item.title}}</h3>
            <p>{{item.address}}</p>
            <a :href="'tel:' + item.telephone">{{item.telephone}}</a>
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
         navTitle:"附近" + this.$route.query.mNamt,
         merchList: this.$route.query.list

           
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
    // getnearbyMHandler(){
    //    var map = new AMap.Map("container", {
    //     resizeEnable: true
    // });
    // AMap.service(["AMap.PlaceSearch"], function() {
    //     var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
    //         pageSize: 5,
    //         type: '邮局',
    //         pageIndex: 1,
    //         city: "010", //城市
    //         map: map,
    //         panel: "panel"
    //     });
        
    //     var cpoint = [116.405467, 39.907761]; //中心点坐标
    //     placeSearch.searchNearBy('', cpoint, 8000, function(status, result) {

    //     });
    // });
    // }
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
h3{font-size: .4rem;}
p{font-size: .3rem}
</style>