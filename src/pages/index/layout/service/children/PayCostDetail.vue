<template>
   <cube-page>
      <div slot="content" class="selected">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll :data="datas" :options="options">
				<div class="spcontent">
              
               <ul class="pcDetaillist">
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">房屋地址:</label>
                    <!-- <cube-input class="wrap-content2 detailInput" v-model="pcDetailValue" placeholder="pcDetailPlaceholder"></cube-input> -->

                    <label class="wrap-content2">中铁建国际花园1-1-1201</label>
                  </li>
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">户主:</label>
                    <!-- <cube-input class="wrap-content2" v-model="pcDetailaccountValue" placeholder="pcDetailPlaceholder"></cube-input> -->
                    <label class="wrap-content2">张三</label>
                  </li>
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">费用类型:</label>
                    <!-- <cube-input class="wrap-content2" v-model="pcDetailaccountValue" placeholder="pcDetailPlaceholder"></cube-input> -->
                    <label class="wrap-content2">{{navTitle}}</label>
                  </li>
                  <li class="line-bottom page-wrap">
                    <label for="" class="wrap-content">金额:</label>
                    <!-- <cube-input class="wrap-content2" v-model="pcDetailamountValue" placeholder="pcDetailPlaceholder"></cube-input> -->
                    <label class="wrap-content2">100</label>
                  </li>
                  <li class="line-bottom page-wrap">
                    <label class="wrap-content" for="">物业服务期:</label>
                    <label class="wrap-content2">2018年7月1日－2019年－6月30日</label>
                  </li>
                  
               </ul>
				</div>
        <router-link  class="btn" :to="{ path: '/PaySuccessful'}">
          <!-- <cube-button @click="getPaySuccessHandler" class="postR-c payCDbtn-bgcolor" icon="cubeic-edit">下一步</cube-button> -->
          下一步
        </router-link>
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
			  navTitle:this.$route.query.title,
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