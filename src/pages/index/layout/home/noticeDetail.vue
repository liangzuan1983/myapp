<template>
   <cube-page>
      <div slot="content" class="About">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
         <!-- <cube-scroll :data="datas" :options="options"> -->
            <div class="AboutQD">
  <pre> 
  尊敬的各位业主：
  您好！
  感谢您入住中铁建国际花园小区，也感谢您一直以来对物业公司的支持与理解！我们将根据您的合理意见和建议不断完善服务工作，为您及家人提供更加优质的服务。为实现物业经营和管理的良性运作,以保障物业服务工作的有效性和连续性,请您于2017年7月1日之前尽快到物业服务中心缴纳2018年度的物业费。
  物业费是提高服务的基础和各项开支的来源，是小区绿化、保洁、秩序、公共设施维护正常运转的根本保障。如您不能按时缴纳物业费，将会对小区物业管理服务工作造成严重影响。
  另：电梯扣将于10月底到期，请您尽快到物业中心升级并缴纳下一年度物业费。
  缴费时间：8：00—17:30
  缴费地点：中铁建国际花园物业服务中心客服部（13号楼的西北角二层楼处）
  缴费方式：现金或刷卡
  详细请致电物业客服中心咨询，服务热线：400-5698988
  我公司将随时竭诚为业主服务
  </pre>
              
            </div>
         <!-- </cube-scroll> -->
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
import CubePage from '@/components/cube-page.vue'

export default{
   data(){
      return{
      aboutQD:require("../../../../../static/img/mine/aboutQD.png"),   
			navTitle:"2018年物业缴费现在开始",
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
      CubeBar,
      CubePage
	},
	methods:{
		navRightBtnHandle(){},
    	navBackHandle() {
			history.go(-1);
		}
	}
}
</script>
<style scoped>
.About{
	height: 100%;
}

.AboutQD{
	padding: .3rem .3rem 5rem .3rem;
  font-size: .3rem;
  background: #fff;
  line-height: 50px;
  text-indent:40px;
}
.QDImg{
   width: 100%;
}
pre {
	white-space: pre-wrap; /*css-3*/
	white-space: -moz-pre-wrap; /*Mozilla,since1999*/
	white-space: -pre-wrap; /*Opera4-6*/
	white-space: -o-pre-wrap; /*Opera7*/
	word-wrap: break-word; /*InternetExplorer5.5+*/
}
</style>