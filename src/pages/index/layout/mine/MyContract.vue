<template>
    <div slot="content" class="posting-p-2">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
      <div class="postRepairsDiv">
        <ul>
          <li >
            <div class="page-wrap wrap-between">
              <p class="postR-h50">2018-07-09 16:40:37</p>
              <cube-button class="postR-btn-s">
                物业合同
                <!-- <router-link class="postR-c" :to="{path:'PostRepFeedbackView'}">物业合同</router-link> -->
              </cube-button>
            </div>
            <div class="page-wrap wrap-between postR-desc">
              <div>
                <h3>中铁建物业－1单元201</h3>
              </div>
            </div>   
          </li>
        </ul>
      </div> 
      <p class="postR-tishi">已经全部加载完毕</p> 
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
      	navTitle:"我的物业合同",
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
  width: 200%;
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
.postR-desc span{
  line-height: 40px;
  font-size: .3rem;
  color: #004098;
}
.postR-tishi{
  text-align: center;
  font-size: .3rem;
}
.postR-c{
  color: #fff;
}
</style>
