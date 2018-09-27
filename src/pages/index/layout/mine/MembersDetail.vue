<template>
   <cube-page>
      <div slot="content" class="selected">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll :data="datas" :options="options">
				<div class="spcontent">
              
               <ul class="pcDetaillist">
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">户主:</label>
                    <label class="wrap-content2">张冬林</label>
                  </li>
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">性别:</label>
                    <label class="wrap-content2">男</label>
                  </li>
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">电话号码:</label>
                    <label class="wrap-content2">1888888888</label>
                  </li>
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">房屋号码:</label>
                    <label class="wrap-content2">1-1-1201</label>
                  </li>
                  
               </ul>
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

export default{
   data(){
      return{

        pcDetailValue:'北京市自来水集团（按月交纳）',
        pcDetailPlaceholder:'',
        pcDetailaccountValue:'160095',
        pcDetailamountValue:'100',
			  navTitle:'会员详情',
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
    getPaySuccessHandler(){
       this.$router.push({
        path: "/PaySuccessful"
      });
    }
	}
}
</script>
<style scoped>
.selected{
	height: 100%;
	/* background: #fff; */
}
.spcontent{
  	padding-top: .9rem;
}
.payCDbtn-bgcolor{
    background-color: #5599FF;
     position: fixed;
    bottom: 0;
}
.pcDetaillist li{
  font-size: .3rem;
}
.pcDetaillist li label,.pcDetaillist li detailInput{
  background-color: #fff;
  line-height: 50px;
  padding-left: .3rem;

}
.postR-c{
  color: #fff;
}

</style>