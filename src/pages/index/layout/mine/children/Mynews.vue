<template>
   <cube-page>
      <div slot="content" class="mynews">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll>
				<div class="newscontent">
               <ul class="mysocial">
                  <li v-for="(item,index) in mysocial" :key="index" class="li line-bottom page-wrap wrap-vcenter wrap-between" @click="targetnew(item.path?item.path:'')">
                     <div class="page-wrap wrap-vcenter">
                        <section class="liImg page-wrap wrap-vcenter">
                           <img :src="item.iconImg">
                        </section>
                        <p>{{item.titles}}</p>
                     </div>
                     <i class="commone-arrow"></i>
                  </li>
               </ul>
				</div>
				<!-- <cube-view></cube-view> -->
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'
// import CubeView from '@/components/cube-view.vue'

const mysocial = [
   {
      iconImg: require('../../../../../../static/img/mine/icon.png'),
      titles: "帖子评论/赞"
   },
   {
      iconImg: require('../../../../../../static/img/mine/icon.png'),
      titles: "社区聊天"
   },
   {
      iconImg: require('../../../../../../static/img/mine/icon.png'),
      titles: "系统消息"
   },
   {
      iconImg: require('../../../../../../static/img/mine/icon.png'),
      titles: "管家提醒",
      path:"/GJNotice"
   },
  //  {
  //     iconImg: require('../../../../../../static/img/mine/icon.png'),
  //     titles: "在线客服"
  //  }
]

export default{
   data(){
      return{
			navTitle:"消息中心",
         navRightBtn:"设置",
         mysocial: mysocial,//
      }
   },
   components:{
		CubeBar,
		CubePage,
		// CubeView
	},
	methods:{
		navRightBtnHandle(){
        	this.$router.push({path:'/TY'})
      },
    	navBackHandle() {
			history.go(-1);
		},
		targetnew(i){
			if (i) {
				this.$router.push({path:i})
			}
		}
	}
}
</script>
<style scoped>
.mynews{
	height: 100%;
	/* background: #fff; */
}

.newscontent{
	padding-top: .9rem;
}
.mysocial{
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