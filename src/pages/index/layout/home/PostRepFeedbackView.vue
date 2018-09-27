<template>
    <div slot="content" class="posting-p-2">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
      <div class="postRepairsDiv">
        <ul>
          <li >
            <div class="page-wrap wrap-between">
              <p class="postR-h50">2018-07-09 16:40:37</p>
              <span class="feedback-cb">待处理</span>
            </div>
            <div class="page-wrap wrap-between postR-desc">
              <div>
                <h3>中铁建国际花园－1单元201</h3>
                <p>{{titleDesc}}</p>
              </div>
            </div>   
          </li>
        </ul>
        <h3>反馈信息</h3>
        <cube-textarea 
          v-model="feedbackValue"
          :placeholder="feedbackPlaceholder"
          class="feedback-h3"
          ></cube-textarea>
      </div> 
        <!-- <cube-button class="postR-btn-s postRE-m"> -->
            <router-link class="btn" :to="{path:'PostRepairsView'}">提交评价</router-link>
        <!-- </cube-button> -->
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
        feedbackValue:'',
        feedbackPlaceholder:'写点什么吧...',
        titleDesc:this.$route.query.title
    };
  },
  methods: {
    navBackHandle() {
      history.go(-1);
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
  padding-top:.2rem; 
}
.postRepairsDiv{
  margin: 60px .2rem 50px .2rem;
  background: #fff;
  padding:.2rem;
  border-radius: 10px;
}
.postR-h50{
  width: 73%;
  height: 40px;
  line-height: 40px;
  font-size: .3rem;
}
.postR-btn-s{
  border-radius: 27px;
    background: #5599FF;
    height: 40px;
    line-height: 40px;
    padding: 0;
    margin-left: .2rem;
}
.postR-desc{
    margin: .2rem 0;
    border-top: 1px solid #f9f9f9;
}
.postR-desc div{
  font-size: .3rem;
}
.postR-desc div h3{
  font-weight: bold;
  line-height: 40px;
}
.postR-desc div p{
      color: #888383
}
.feedback-cb{
  line-height: 40px;
  font-size: .3rem;
  color: #5599FF;
}
.postR-c{
  color: #fff;
}
.feedback-h3{
  height: 3rem;;
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
  margin: .5rem auto;
  width:90%;
  
}
.postR-c{
  color: #fff;
}
</style>
