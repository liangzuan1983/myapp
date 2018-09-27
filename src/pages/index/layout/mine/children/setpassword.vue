<template>
   <cube-page>
      <div slot="content" class="SJDL">
         <cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <div class="SJDLs">
            <div class="SJDLbanner">
               <img class="SJDLImg" :src="setposswordImg[0].img" alt="">
            </div>
            <ul class="SJDLone">
               <li class="li line-bottom page-wrap wrap-vcenter wrap-between">
                  <img class="liImg" :src="setposswordImg[1].img" />
                  <input class="wrap-content" type="text" v-model="loginames" placeholder="请输入验证码">
               </li>
               <li class="li line-bottom page-wrap wrap-vcenter wrap-between">
                  <img class="liImg" :src="setposswordImg[1].img" />
                  <input class="wrap-content" type="text" v-model="password" placeholder="请设置登录密码(至少6位)">
               </li>
            </ul>
         </div>
         <section class="Login">
            <!-- <router-link :to="{path:'/'}"> -->
              <button @click="getIndexHandlerfn(loginames)">开启中铁建App</button>
            <!-- </router-link> -->
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
         navTitle:"设置密码",
         navRightBtn:"",
         loginames: '',//
         password: '',//
         setposswordImg:[
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
      getIndexHandlerfn(loginames){
        // let phonereg=/^[1][3,4,5,7,8][0-9]{9}$/
        // let isFlag = phonereg.test(loginames);
        // if(!loginames){
        //   let errorContent='请输入用户名或手机号';
        //   this.showPopupWelcome(errorContent)
        //   return false
        // }
        // if(isFlag){
          sessionStorage.setItem('userId','5555')
          this.$router.push({
            path: "/",query:{id:1}
          });
          return false
        // }
        // if(!isFlag){
          // let errorContent='登录失败，您登录的手机号与物业预留手机号有误，请到物业管理部更改相关信息';
          // this.showPopupWelcome(errorContent)
          // return false
        // }
      },
   }
}
</script>

<style scoped>
.SJDLone{
   background: #fff;
}
.SJDLImg{
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
</style>