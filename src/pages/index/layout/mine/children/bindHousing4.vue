<template>
   <cube-page>
      <div slot="content">
         <cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <div class="bindmethod4">
            <p>请输入房屋业主手机号码后四位</p>
            <cube-input v-model="phoneValue" placeholder="bindh4placeholder" class="line-bottom phone-input-s" ></cube-input>
            <a href="tel:400 081 8181"  >
              若业主已更换手机号码，请点击此处联系我们。
            </a>
      </div>
      <router-link class="btn" :to="{path:'/registered'}">确定</router-link>
      </div>
   </cube-page>
</template>

<script>
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
export default {
   data(){
      return{
         navTitle:"选择房屋",
        //  navRightBtn:"关于",
         navRightBtn:"",
         bindh4placeholder:'号码后四位',
         phoneValue:'',
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
.bindmethod4{
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
 .bindmethod4 p{
   font-size: .4rem;    
   line-height: 50px;
    color: #333333;
 }
 .bindmethod4 a{   
   line-height: 50px;
   color: #5599FF;
   font-size: .3rem;

 }
 .phone-input-s{
   padding: .1rem;
 }
</style>