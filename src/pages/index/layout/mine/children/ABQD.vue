<template>
   <cube-page>
      <div slot="content" class="ABQD">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <cube-scroll :data="datas" :options="options">
            <div class="ABQDs">
               <div class="ABbanner">
                  <img class="ABImg" :src="ABImgImg" alt="">
               </div>
               <section class="ABContent">
                  <h3 class="ABTitle">中铁建物业4.1.0版</h3>
                  <ul class="ABQDone">
                     <li v-for="(item,index) in datas" :key="index" class="li line-bottom page-wrap wrap-vcenter wrap-between" @click="targetsnew(index)">
                        <p>{{item}}</p>
                        <i class="commone-arrow"></i>
                     </li>
                  </ul>
               </section>
            </div>
         </cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'

export default{
   data(){
      return{
        ABImgImg:require("../../../../../../static/img/home/banner.png"),
        navTitle:"关于",
          navRightBtn:"",
          datas: ["产品介绍","使用条款和隐私协议"],
          options: {
              pullUpLoad: {
                scrollbar: false,
                // pullUpLoad: false
              }
        },
        }
   },
   components:{
      CubeBar,
      CubePage
	},
	methods:{
		navRightBtnHandle(){},
    	navBackHandle() {
			history.go(-1);
      },
      targetsnew(){}
	}
}
</script>
<style scoped>
.ABQD{
	height: 100%;
   background: #fff;
}

.ABQDs{
	padding-top: .9rem;
}
.ABTitle{
   font-size: .4rem;
   text-align: center;
   padding: .4rem 0;
}
.ABImg{
   width: 100%;
}
.myTYs{
   width: 100%;
   padding: 0 .2rem;
   background: #fff;
   margin-bottom: .2rem;
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
</style>