<template>
    <div slot="content" class="posting-p-2">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
      <div class="paySuccessful">
        <i class="cubeic-right payS-custom-icon"></i>
        <p > 缴费成功</p> 		
      </div>
      <router-link class="btn" :to="{path:'/'}">
          <!-- <cube-button class="btn" >确定</cube-button> -->
          确定
      </router-link>
    </div>
</template>

<script type="text/javascript">
import CubeBar from '@/components/cube-bar.vue'
export default {
  name: "PaySuccessful",
  components: {
    CubeBar
  },
  data() {
    return {
      	navTitle:"生活缴费",
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
.paySuccessful{
  padding-top:5rem;
  text-align: center;
}
.paySuccessful p{
  font-size: .4rem;
  line-height: 50px;
}
.btn{
	width: 100%;
	padding: .26rem 0;
	border: none;
	background: #5599FF;
	color: #fff;
	font-size: .3rem;
	margin-top: .3rem;
	border-radius: .12rem;    
	position: absolute;
  bottom: 0;
  text-align: center;
}
.payS-btn-s{
  color: #fff;
  display: inline-block;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
}
.payS-custom-icon{
  font-size: 1rem;
  color:green;
}
</style>
