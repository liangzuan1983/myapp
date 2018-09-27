<template>
   <div id="cfList" class="activity page-wrap wrap-d-colum">
      <section class="wrap-content scroll-list-wrap">
         <p>详情页</p>
       </section>
   </div>
</template>
<script>
import { bus } from '@/components/bus';

export default {
   data() {
      return {
         // transitionName: 'slide-left',
         isAndroid:null,
         isiOS:null,
         isCanLoadMore:true,
         param: {
            loginName: this.$usercode,
            pageNum: 1,
            pageSize: 20,
            type: 1,//当前行程
         }
      } 
   },
   components: {},
   methods: {
      getDatas: function () {
         let _self = this
         _self.$axios({
            method: 'post',
            url: _self.URL.BASEURL + _self.URL.Trip + "?token=92778276277883729&usercode=wangshixiao",
            data:_self.param,
         }).then(function(response) {
            console.log(response)
         }).catch(function(error) {
           console.log(error);
         });
      },
      //下拉加载更多
      onPullingUp() {
         this.isCanLoadMore=true;
         this.getDatas();
      },
   },
   created() {
      this.getDatas();
   },
   computed: {},
   beforeDestroy() {},
   mounted() {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
