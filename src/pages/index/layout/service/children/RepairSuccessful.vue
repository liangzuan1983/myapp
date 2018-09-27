<template>
    <div slot="content" class="posting-p-2">
			<cube-bar :navTitle='navTitle' v-on:navBackHandle="navBackHandle"></cube-bar>
      <div class="paySuccessful">
          <i class="cubeic-right payS-custom-icon"></i>
            <p >报修成功</p> 	
      </div>
        <router-link class="btn" :to="{path:'/'}">
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
      	navTitle:"报事报修",
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
.payS-custom-icon{
  font-size: 1rem;
  color:green;
}
</style>
