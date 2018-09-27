<template>
   <cube-page>
      <div slot="content" class="About">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <!-- <cube-scroll :data="datas" :options="options"> -->
            <div class="bannerdetail-c">
              <p  class="AboutQD"> 
                “用阅读点亮孩子人生，让公益因爱心而持续”。11月19日上午，国际城营销中心上演了一场别开生面的亲子绘本阅读活动。
              </p>
              <img :src="yuedu" alt="">
              <p  class="AboutQD"> 
      活动分为两部分，即阅读分享和手工＆游戏环节。在阅读分享环节，一些家长和孩子为大家绘声绘色的朗读了有趣的童话故事，其他在场的孩子们听得入了神，原本活泼好动的天性在这一刻都沉静下来，托着腮帮，静静聆听。而在手工＆游戏环节，孩子和家长们一起动手，合作完成手工制品，共同参与游戏。一场下来，不仅是孩子，连家长们都开怀不已。
           
              </p>  
              </div>
         <!-- </cube-scroll> -->
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
const YUEDU =require("../../../../../static/img/home/yuedu.jpg")

export default{
   data(){
      return{
        aboutQD:require("../../../../../static/img/mine/aboutQD.png"),   
        navTitle:"中铁建国际花园 ：亲子阅读会",
        navRightBtn:"",
        yuedu:YUEDU,
        datas: [],
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
		}
	}
}
</script>
<style scoped>
.About{
	height: 100%;
}

.AboutQD{
	padding:.3rem .3rem .3rem .3rem;
  font-size: .3rem;
  background: #fff;
  line-height: 50px;
  text-indent:40px;
}
.QDImg{
   width: 100%;
}
.bannerdetail-c{
  padding-top:.9rem;
}
.bannerdetail-c img{width: 100%;}
</style>