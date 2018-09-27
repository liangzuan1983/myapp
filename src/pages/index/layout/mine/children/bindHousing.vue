<template>
   <cube-page>
      <div slot="content">
         <cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <ul class="bindmethod">
         <li v-for="(item,index) in bindmethods" :key="index" class="li line-bottom ">   
              <router-link :to="{ path: (item.path)}"  class="page-wrap wrap-vcenter wrap-between">
                <div class="page-wrap wrap-vcenter">
                  <section class="liImg page-wrap wrap-vcenter">
                      <img :src="item.iconImg">
                  </section>
                  <p>{{item.titles}}</p>
                </div>
                  <i class="commone-arrow"></i> 
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
      iconImg: require('../../../../../../static/img/mine/phone.png'),
      titles: "验证业主手机号码",
      path:'/BindHousing1',
   },
   {
      iconImg: require('../../../../../../static/img/mine/twoCode.png'),
      titles: "扫描邀请码",
      path:'/BindHousing'
   }
]
export default {
   data(){
      return{
         navTitle:"选择绑定方式",
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
.bindmethod p{
  color: #333333;
  padding-left:1rem;
}
.liImg{
   width: .41rem;
   height: .36rem;
   margin-right: .32rem;
}
.liImg img{
  width:200%
}
.li{
   padding: .47rem .4rem .39rem;
   font-size: .3rem;
   color: #333333;
   line-height: .52rem;
}
</style>