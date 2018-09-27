<template>
   <div id="MJ" class="page-wrap wrap-d-colum">
      <div class="mj">
        <div @click="MGgobackHandler" class="MJbtngoback"></div>
         <img class="MJS" :src="MJSImg"/>
      </div>
   </div>
</template>

<script>
const MJSImg=require("../../../../../static/img/mine/M_02.png")
   export default {
      data(){
         return{
           MJSImg:MJSImg
         }
      },
       methods: {
         MGgobackHandler(){
           	history.go(-1);
         }
       }
   }
</script>

<style scoped>
#MJ{
   padding-top: 0;
   background: #F3F3F3;
}
.mj .MJS{
   width: 100%;
    overflow: scroll;
    margin-bottom: 1rem;
}
.MJbtngoback{
  position: absolute;
  top:0;
  width:2rem;
  height: 2rem;
  right: 0;
  cursor: pointer;
}
</style>