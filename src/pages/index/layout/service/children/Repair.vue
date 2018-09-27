<template>
   <cube-page>
      <div slot="content" class="vrepair">
			<cube-bar :navTitle='navTitle' :navRightBtn='navRightBtn'  v-on:navBackHandle="navBackHandle" v-on:navRightBtnHandle="navRightBtnHandle"></cube-bar>
			<cube-scroll :data="datas" :options="optionsRepair">
				<div class="vrcontent">
							<div class="vhouse line-bottom page-wrap">
								<p >报事房号：</p>
								<p class="wrap-content page-wrap wrap-between wrap-vcenter">
									<span>10-10-10</span>
									<span class="commone-arrow"></span>
								</p>   
							</div>
							<div class="vhouse line-bottom page-wrap">
								<p >报事类型：</p>
								<p class="wrap-content page-wrap wrap-between wrap-vcenter">
									<cube-select
									 class="border-0-a"
										v-model="repairTypeValue"
										:options="repairTypeoptions">
									</cube-select>
									<span class="commone-arrow"></span>
								</p>   
							</div>
							<div class="vhouse line-bottom page-wrap">
								<p >报事标题：</p>
								<cube-input 
									class="border-cus-0"
									v-model="repairTitleValue" 
									:placeholder="rtplaceholder" 
									></cube-input>
							</div>
							<div class="vhouse line-bottom page-wrap">
								<p >客户姓名：</p>
								<p class="wrap-content page-wrap wrap-between wrap-vcenter">
									<span>张冬林</span>
								</p>   
							</div>
							<div class="vhouse line-bottom page-wrap">
								<p >联系电话：</p>
								<p class="wrap-content page-wrap wrap-between wrap-vcenter">
									<span>18801272688</span>
								</p>   
							</div>
							<div class="vhouse line-bottom page-wrap">
								<p>预约时间：</p>
								<p class="wrap-content page-wrap wrap-between wrap-vcenter">
									 <input @click="showFormatPicker" type="text" v-model="RdataValue" value="2018-8-1">
									<span class="commone-arrow"></span>
								</p>   
							</div>
               <!-- <section class="vgoals line-bottom">
                  <h3>请选择服务类型 </h3>
                  <ul class="ul page-wrap wrap-between wrap-wrap">
                     <li v-for="(item,index) in vgoal" :key="index" class="vRlist" :class="{'bdcolors':index==activeser}" @click="selectRepair(index)">{{item}}</li>
                  </ul>
               </section> -->
               <div class="cropinions">
								<cube-textarea 
										:action="actionRepair"
										:process-file="processFileRepair"
										v-model="repairValue" 
										:placeholder="repairPlaceholder" 
										:autofocus="repairAutofocus"
										:maxlength="500"
										class="posting-custom-h"
										>
								</cube-textarea>
									<cube-upload
									action="//jsonplaceholder.typicode.com/photos/"
									:simultaneous-uploads="1"
									@files-added="filesAddedRepair" 
									class="postingUpload"
									/>
               </div>
								<router-link class="btn" :to="{ path: 'RepairSuccessful'}">提交</router-link>
				</div>
			</cube-scroll>
      </div>
   </cube-page>
</template>
<script type="text/javascript">
import CubePage from '@/components/cube-page.vue'
import CubeBar from '@/components/cube-bar.vue'

// const vgoal = ["更换灯泡","线路安装","更换燃气表","疏通管道","暖气维修","换高压软管"]
// const vdates = ["节能灯","吊灯","吸顶灯"]
const tripbxImg = require("../../../../../../static/img/home/trip-bx.jpg")
export default{
   data(){
      return{
				navTitle:"添加报事",
				navRightBtn:"报事记录",
				// vgoal: vgoal,//来访目的
				repairTitleValue:'', //报事标题
				rtplaceholder:'选填',//报事标题－placeholder
				repairTypeValue:'一般类型',//报事类型
				repairTypeoptions:['一般类型','紧急类型'], //报事类型options
				RdataValue:'2018-8-1',//默认日期
				activeser: 0,//
				activeserChild:0,
				tripbxImg:tripbxImg,
				datas: [], 
				repairValue:'',
				repairPlaceholder:'请输入报事的具体地址和具体问题...',
				repairAutofocus: true,
				actionRepair: {
					target: '//jsonplaceholder.typicode.com/photos/',
					prop: 'base64Value'
				},
				optionsRepair: {
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
				this.$router.push({
              path: "/PostRepairsView"
            });
      },
    navBackHandle() {
			history.go(-1);
		},
		selectRepair(k){
			this.activeser = k
		},
		selectRepairChild(k){
			this.activeserChild = k
		},
		filesAddedRepair(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: 'You selected >1M files'
      }).show()
    },
    processFileRepair(file, next) {
      compress(file, {
        compress: {
          width: 1600,
          height: 1600,
          quality: 0.5
        }
      }, next)
    },
    // fileSubmittedRepair(file) {
    //   file.base64Value = file.file.base64
		// }
		// 日期组件
		showFormatPicker() {
      if (!this.formatPicker) {
        this.formatPicker = this.$createTimePicker({
					 day: {
						len: 10,
						filter: ['今天'],
						format: 'M月D日'
					},
          // format: 'hh:mm',
          onSelect: this.selectHandler,
          onCancel: this.cancelHandler
        })
      }
      this.formatPicker.show()
    },
    selectHandler(selectedTime, selectedText, formatedTime) {
			this.RdataValue = selectedText;
    },
    cancelHandler() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
	}
}
</script>
<style scoped>
.vrepair{
	height: 100%;
	/* background: #fff; */
}

.vrcontent{
	padding-top: .9rem;
}
.vhouse{
	padding: 0 .3rem;
	font-size: .3rem;
	background: #fff;
	line-height: 1rem;
	letter-spacing: 1px;
   /* margin-bottom: .16rem; */
}
.vorange{
	color: #5599FF;
	margin-left: .2rem;
}

.vgoals,.vdates{
	padding: .4rem .4rem 0;
   margin-bottom: .16rem;
	background-color: #fff;
}
.vgoals h3,.vdates h3{
	font-size: .3rem;
	font-weight: 600;
	margin-bottom: .3rem;
}
.vRlist{
    padding: 0.2rem;
    margin: 0.2rem 0 .3rem 0;
		border: 1px solid #e8e6e6;
		width:31%;
		text-align: center;
		border-radius: .3rem
}
.cropinions{
	 background: #fff;
	 padding: .3rem .4rem;
}
.crcontents{
   width: 100%;
   height: 1.5rem;
   border: none;
   padding: .2rem;
}
.crNum{
   width: 100%;
   padding: .2rem;
   /* background: #fff; */
   font-size: .3rem;
   color: rgb(180, 180, 180);
	 text-align: right;
    border-bottom: 1px solid #e8e6e6;
    margin-bottom: .2rem;
}
.vweight{
	font-weight: 600;
	margin-right: .3rem;
}
.color{
	color: #5599FF;
}
.bdcolors{
	color: #5599FF;
	border: 1px solid #5599FF!important;
}
.payS-btn-s{
	color: #fff;
}
.posting-custom-h{
	height: 2rem;
	margin-bottom: .3rem;
}
.border-cus-0:after{
	border:0;
}
.border-0-a::after{
	border: 0
}
</style>