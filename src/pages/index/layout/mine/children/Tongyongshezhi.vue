<template>
   <cube-page>
      <div slot="content" class="myTY">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll>
				<div class="TYcontent">
               <ul class="myTYss">
                  <li v-for="(item,index) in myTY" :key="index" class="li line-bottom page-wrap wrap-vcenter wrap-between" @click="targetAB(item.path?item.path:'')">
                     <div class="page-wrap wrap-vcenter">
                        <section class="liImg page-wrap wrap-vcenter">
                           <img :src="item.iconImg">
                        </section>
                        <p>{{item.titles}}</p>
                     </div>
                     <i v-if="!index">(4.84M)</i>
                     <i v-else class="commone-arrow"></i>
                  </li>
               </ul>
               <!-- <section class="TYbtn"> -->
                  <router-link class="btn" :to="{ path: '/Mine'}">退出登录</router-link>
               <!-- </section> -->
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

const myTY = [
   {
      iconImg: require('../../../../../../static/img/mine/icon.png'),
      titles: "清理缓存"
   },
   {
      iconImg: require('../../../../../../static/img/mine/icon.png'),
      titles: "关于",
      path: "/ABQD"
   },
   {
      iconImg: require('../../../../../../static/img/mine/icon.png'),
      titles: "给中铁建物业打分"
   }
]

export default{
   data(){
      return{
			navTitle:"通用设置",
         navRightBtn:"",
         myTY: myTY,//
      }
   },
   components:{
		CubeBar,
		CubePage,
	},
	methods:{
		navRightBtnHandle(){},
    	navBackHandle() {
			history.go(-1);
		},
		targetAB(i){
			if (i) {
				this.$router.push({path:i})
			}
		}
	}
}
</script>
<style scoped>
.myTY{
	height: 100%;
	/* background: #fff; */
}

.TYcontent{
	padding-top: .9rem;
}
.myTYss{
   width: 100%;
   padding: 0 .2rem;
   background: #fff;
   margin-bottom: 1.2rem;
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
.TYbtn{
	width: 100%;
   padding: 0 .3rem;
	margin: .3rem 0 .4rem;
}
.TYbtn button{
   width: 100%;
	padding: .26rem 0;
	border: none;
	background: #5599FF;
	color: #fff;
	font-size: .3rem;
	border-radius: .12rem;
}
/* .t-m-s{margin-bottom: 1rem;} */
</style>