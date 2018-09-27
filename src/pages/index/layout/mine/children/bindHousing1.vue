<template>
   <cube-page>
      <div slot="content">
         <cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <ul class="bindmethod">
         <li v-for="(item,index) in bindmethods" :key="index" class="li line-bottom ">   
              <router-link :to="{ path: (item.path)}"  class="page-wrap wrap-vcenter wrap-between">
               {{item.titles}}
              </router-link>
           
         </li>
      </ul>
      </div>
   </cube-page>
</template>

<script>
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
const bindmethods = [
   {
      titles: "亚运花园一期",
      path:'/BindHousing2',
   }
]
export default {
   data(){
      return{
         navTitle:"选择房屋",
        //  navRightBtn:"关于",
         navRightBtn:"",
         bindmethods:bindmethods,
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
   }
}
</script>

<style scoped>
/*=========================================================*/
.bindmethod{
   width: 100%;
   padding: 1rem .2rem 0 .2rem;
   background: #fff;
   margin-bottom: .2rem;
}
.li{
   padding: .47rem .4rem .39rem;
   font-size: .3rem;
   color: #333333;
   line-height: .52rem;
}
</style>