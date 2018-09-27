<template>
    <div slot="content" class="posting-p-2">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle" ></cube-bar>
      <!-- <h3 class="titlepj">报事报修</h3> -->
      <div class="postRepairsDiv">
        <h3 class="postRE-h">报修评价</h3>
        <!-- <ul>
          <li class="page-wrap" v-for="(item,index) in navitemIndex" :key="index" >
            <label class="postRE-h">{{item.title}}</label>
            <cube-rate v-model="evaluationValue"></cube-rate>
          </li>
        </ul> -->
        <div class="page-wrap" >
            <label class="postRE-h">服务态度</label>
            <cube-rate v-model="evaluationValue1"></cube-rate>
        </div>
        <div class="page-wrap" >
            <label class="postRE-h">响应速度</label>
            <cube-rate v-model="evaluationValue2"></cube-rate>
        </div>
        <div class="page-wrap" >
            <label class="postRE-h">处理专业性</label>
            <cube-rate v-model="evaluationValue3"></cube-rate>
        </div>
      </div> 
      <router-link class="btn" :to="{path:'PostRepairsView'}">提交评价</router-link>
    </div>
</template>

<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
export default {
  name: "PostRepairsView",
  components: {
    CubeBar
  },
  data() {
    return {
        navTitle:"报事报修",
            evaluationValue1:3,
            evaluationValue2:4,
            evaluationValue3:5,
        // evaluationList:[
        //   {
        //     title:'服务态度',
        //     evaluationValue:4
        //   }, {
        //     title:'服务态度',
        //     evaluationValue:4
        //   },{
        //     title:'服务态度',
        //     evaluationValue:4
        //   }
        // ],
    };
  },
  methods: {
    navBackHandle() {
      // history.go(-1);
      this.$router.back();
    }, 
   
  },
  created() {
  },
  mounted() {}
};
</script>

<style scoped>
.posting-p-2{
  background: #f2f2f2;
  height: 100%;
  /* padding-top:.2rem;  */
}
.postRepairsDiv{
  margin: 50px 0 50px 0;
  background: #fff;
  padding:.2rem;
}
.postRE-h{
  height: 40px;
  line-height: 40px;
  font-size: .4rem;
  padding-right: .3rem;
}
.postR-btn-s{
  border-radius: 27px;
    background: #5599FF;
    height: 40px;
    line-height: 40px;
    padding: 0;
    margin-left: .2rem;
}
.postRE-m{
  margin: 1rem 0 .5rem 0;
}
.postR-c{
  color: #fff;
}
/* .titlepj{background: #fff;line-height: 50px; text-align: center;font-size: .4rem} */
</style>
