<template>
   <cube-page>
      <div slot="content" class="About">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <!-- <cube-scroll :data="datas" :options="options"> -->
              <div class="bannerdetail-c">
                <img :src="aboutwe" alt="">
                <p  class="AboutQD"> 
                  中铁建（北京）物业管理有限公司，隶属于世界五百强之列、大型央企——中国铁建股份有限公司的全资子公司中国铁建房地产集团，是一家面向全国发展的中、高端物业管理公司
                </p>
                <p  class="AboutQD"> 
                公司注册资金10000万元人民币，国家物业一级资质，主要承接中、高档住宅项目和商业项目的物业管理。2016年底，中铁建物业下属30家分公司。在管项目超过40个，管理面积约1199万平方米。同时，物业早期介入跟进16个城市，服务业主超过30万人。
                </p>
            </div>
         <!-- </cube-scroll> -->
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
 const  aboutwe=require("../../../../../../static/img/home/aboutwe.png");
export default{
   data(){
      return{
        aboutQD:require("../../../../../../static/img/mine/aboutQD.png"),   
        navTitle:"中铁建建物业",
        aboutwe:aboutwe,
        navRightBtn:"",
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