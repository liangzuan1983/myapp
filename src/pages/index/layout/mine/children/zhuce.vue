<template>
   <cube-page>
      <div slot="content" class="zhuce">
         <cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <div class="zhuces">
            <div class="zhucebanner">
               <img class="zhuceImg" :src="zhuceImg[0].img"  alt="">
            </div>
            <p class="li line-bottom page-wrap wrap-vcenter wrap-between">
               <img class="liImg" :src="zhuceImg[1].img"/>
               <input class="wrap-content" type="text" v-model="loginames" placeholder="手机号">
            </p>
         </div>
         <section class="Login">
             <p class="tiaokuan page-wrap wrap-vcenter wrap-center">
                <i class="circle"></i>
                <span>我接受</span>
                <span class="orange">《中铁建使用条款及隐私协议》</span>
             </p>
            

              <router-link :to="{path:'/SetPassWord'}">
                <button>下一步</button>
              </router-link>
            <p class="loginP page-wrap wrap-end"><span>登录中国铁建</span></p>
         </section>
      </div>
   </cube-page>
</template>

<script>
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'

export default {
   data(){
      return{
         navTitle:"注册",
         navRightBtn:"",
         loginames: '',//
         password: '',// 
         zhuceImg:[
          {img:require("../../../../../../static/img/home/banner2.png")},
          {img:require("../../../.././../../static/img/mine/icon.png")}
        ]
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
.zhuces{
   background: #fff;
}
.zhuceImg{
   width: 100%;
}
.li{
   padding: .47rem .4rem .39rem;
   font-size: .3rem;
   color: #333333;
   line-height: .52rem;
}
.li input{
   height: .6rem;
}
.liImg{
   width: .41rem;
   height: .36rem;
   margin-right: .32rem;
}
.liImg img{
   width: 100%;
}
.Login{
	width: 100%;
   padding: 0 .3rem;
	margin: .3rem 0 .4rem;
}
.Login button{
   width: 100%;
	padding: .26rem 0;
	border: none;
	background: rgb(155, 154, 152);
	color: #fff;
	font-size: .3rem;
	border-radius: .12rem;
   margin-bottom: .3rem;
}
.loginP{
   font-size: .35rem;
}
.circle{
   width: .3rem;
   height: .3rem;
   border-radius: 100%;
   border: 1px solid gray;
   margin-right: .2rem;
}
.orange{
   color: #5599FF;
}
.tiaokuan{
   margin-bottom: .3rem;
   font-size: .3rem;
}
</style>