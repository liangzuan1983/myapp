<template>
   <cube-page>
      <div slot="content" class="selected">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<!-- <cube-scroll :data="datas" :options="options"> -->
				<div class="scontent">
               <div class="Inp">
                  <input class="InpText" type="text" placeholder="搜索">
               </div>
               <div class="clist">
                  <!-- <li class="line-bottom" v-for="(i,index) in 1" :key="index"> -->
                    <router-link v-for="(i,index) in 1" :key="index" class="li page-wrap wrap-between line-bottom" :to="{path:'PayCostDetail',query:{title:(payCostdTitle)}}">{{institutions}}</router-link>
                  <!-- </li> -->
               </div>
				</div>
			<!-- </cube-scroll> -->
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

export default{
   data(){
      return{
			  navTitle:"机构选择",
        navRightBtn:"",
        institutions:this.$route.query.itemName,
        payCostdTitle:this.$route.query.itemTitle,
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
		CubePage,
		CubeBar
	},
	methods:{
		navRightBtnHandle(){
        	console.log()
      },
    	navBackHandle() {
			history.go(-1);
		},
  },
  created() {
  },
  
}
</script>
<style scoped>
.selected{
	height: 100%;
	/* background: #fff; */
}
.scontent{
  	padding-top: .9rem;
}
.Inp{
   padding: .15rem .3rem;
   background: #eee;
}
.InpText{
   width: 100%;
   height: .5rem;
   line-height: .5rem;
   background: #fff;
   border-radius: .1rem;
}
input.InpText::-webkit-input-placeholder {
   /* placeholder颜色  */
   color: #aab2bd;
   /* placeholder字体大小  */
   font-size: 12px;
   /* placeholder位置  */
   text-align: center;
}

.clist{
	background: #fff;
}
.li{
	padding: .3rem;
   font-size: .35rem;
}
</style>