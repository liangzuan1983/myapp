<template>
   <cube-page>
      <div slot="content" class="SJDL">
         <!-- <cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar> -->
         <h3 class="titlepj">登录</h3>
         <div class="SJDLs">
            <div class="SJDLbanner">
               <img class="SJDLImg" :src="loginImg[0].img" alt="">
               <div class="SJDLogo">
                 <img :src="loginImg[4].img" alt="">
               </div>
            </div>
            <ul class="SJDLone">
               <li class="li page-wrap wrap-vcenter wrap-between">
                  <img class="liImg" :src="loginImg[1].img" />
                  <input class="wrap-content line-bottom-cus" type="text" v-model="loginames" placeholder="请输入用户名／手机号">
                  <img class="liImg tishi-icon" @click="showPopupWelcome('请确保手机号码真实有效与业主所留房屋信息一致')" :src="loginImg[3].img" />
               </li>
               <li class="li page-wrap wrap-vcenter wrap-between">
                  <img class="liImg" :src="loginImg[2].img" />
                  <input class="wrap-content line-bottom-cus" type="text" v-model="password" placeholder="密码">
               </li>
               <li class="loginP page-wrap wrap-between">
                <router-link class="color-cus-3" :to="{path:'/SetPassWord'}">忘记密码</router-link>
                <router-link class="color-cus-3" :to="{path:'/BindHousing1'}">注册账号</router-link>
              </li>
            </ul>
         </div>
         <section class="Login">
            <!-- <router-link :to="{path:'/'}"> -->
            <button @click="getIndexHandler(loginames)">登录</button>
            <!-- </router-link> -->
         </section>
         <cube-popup 
                type="extend-popup" 
                :mask="false"
                :position="logintsPosition"
                ref="logints">
              <div class="cube-extend-popup-content" @click="logintsHideHandler">
                <slot>{{tsContent}}</slot>
              </div>
          </cube-popup> 
      </div>
   </cube-page>
</template>

<script>
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'
const loginImg=[
          {img:require("../../../../../../static/img/mine/images/lbanner_03.png")}, 
          {img:require("../../../.././../../static/img/mine/images/1_06.png")},
          {img:require("../../../.././../../static/img/mine/images/2_03.png")},
          {img:require("../../../.././../../static/img/mine/images/ts_06.png")},
          {img:require("../../../.././../../static/img/mine/images/logo_03.png")} //logo
        ]
export default {
   data(){
      return{
         navTitle:"登录",
         navRightBtn:"",
         loginames: '',//
         password: '',//
         loginImg:loginImg,
         logintsPosition:'center',
         tsContent:''
      }
   },
   components:{
      CubeBar,
      CubePage
   },
  //  created:{
  // },
   methods:{
      navRightBtnHandle(){},
    	navBackHandle() {
			history.go(-1);
      },
      getIndexHandler(loginames){
        let phonereg=/^[1][3,4,5,7,8][0-9]{9}$/
        let isFlag = phonereg.test(loginames);
        if(!loginames){
          let errorContent='请输入用户名或手机号';
          this.showPopupWelcome(errorContent)
          return false
        }
        if(isFlag){
          sessionStorage.setItem('userId','5555')
          this.$router.push({
            path: "/",query:{id:1}
          });
          return false
        }
        if(!isFlag){
          let errorContent='登录失败，您登录的手机号与物业预留手机号有误，请到物业管理部更改相关信息';
          this.showPopupWelcome(errorContent)
          return false
        }
      },
      // 登录信息提示
    showPopupWelcome(content) {
      this.tsContent=content;
      const component = this.$refs.logints
      component.show()
    },
    logintsHideHandler(){
      this.$refs.logints.hide()
        // this.$emit('hide')
    }
   },
  //  模拟异步请求数据
  // getMethodHandler(){
  //   axios.post('/user', {
  //       firstName: 'Fred',
  //       lastName: 'Flintstone'
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (response) {
  //       console.log(response);
  //     });
  // }
}
</script>

<style scoped>
.SJDLImg{
   width: 100%;
   
}
.SJDLone {
  padding: .5rem;
}
.SJDLone input{
  background-color: #f7f7f7;
}
.li{
   padding: .47rem 0 .39rem 0;
   font-size: .3rem;
   /* color: #333333; */
   line-height: .52rem;
   position: relative;
}
.li input{
   height: .6rem;
}
.liImg{
   width: .41rem;
   margin-right: .32rem;
}
.liImg img{
   width: 100%;
}
.Login{
	/* width: 100%; */
   padding: 0 .5rem;
	margin: .3rem 0 .4rem;
}
.Login button{
   width: 100%;
	padding: .26rem 0;
	border: none;
	background: #5599FF;
	color: #fff;
	font-size: .3rem;
	border-radius: .5rem;
   margin-bottom: .3rem;
}
.loginP{
   font-size: .3rem;
   padding-left: .7rem;
}
.titlepj{background: #f7f7f7;line-height: 50px; text-align: center;font-size: .4rem}
.line-bottom-cus{
  border-bottom:1px solid #dddddd;
}
.color-cus-3{color: #333333;}
.tishi-icon{    
  position: absolute;
    right: -0.3rem;
    bottom: .5rem;
}
.SJDLogo{
  position: absolute;
  top:1.5rem;
  text-align: center;
  width: 100%;
}
.SJDLogo img{
  width: 2rem;  border-radius: .5rem;
}
.cube-extend-popup .cube-extend-popup-content{
        padding: 20px;
    color: #fff;
    background-color: #757575;
    border-radius: 5px;
    font-size: .35rem;
    width: 4.8rem;
    line-height: 26px;
    opacity: .8
}
</style>