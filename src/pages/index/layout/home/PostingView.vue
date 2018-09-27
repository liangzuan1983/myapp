<template>
   <!-- <cube-page> -->
    <div slot="content" class="posting-p-2">
      <div class="page-wrap wrap-center wrap-vcenter">
          <i @click="closePostingHandler" class="cubeic-close close-custom-p-a"></i>
          <h2 class="title-h2-l">发帖</h2>
            <cube-button @click="PostingGoBackHandle" class="search-cancel－btn">发布</cube-button>
      </div>
      <cube-textarea 
          :action="actionPosting"
          :process-file="processFilePosting"
          v-model="postingvalue" 
          :placeholder="postingPlaceholder" 
          :autofocus="postingautofocus"
          :maxlength="500"
          class="posting-custom-h"
          >
      </cube-textarea>
      <cube-upload
        action="//jsonplaceholder.typicode.com/photos/"
        :simultaneous-uploads="1"
        @files-added="filesAddedPosting" 
        class="postingUpload"
        />
        <div class="posting-s">
          <h3 class="font-size-Poting-t"></h3>
          <ul class="hd-topic page-wrap">
                <li v-for="(item,index) in listPTitle" :key="index">
                  {{item}}
                </li>
              </ul>
        </div>
     </div>
   <!-- </cube-page> -->
</template>

<script>
// import CubePage from "../../../../components/cube-view.vue";
export default {
  name: "PostingView",
  components: {
    // CubePage
  },
  data() {
    return {
      postingvalue:'',
      postingPlaceholder:'写点什么吧...',
      postingautofocus: true,
      actionPosting: {
        target: '//jsonplaceholder.typicode.com/photos/',
        prop: 'base64Value'
      },
       listPTitle:['#生活杂谈#','#二手闲置#','#拼车拼团#','#车位租售#','#咨询求助#']
    };
  },
  methods: {
    closePostingHandler() {
      history.go(-1);
    },
    PostingGoBackHandle(){
       this.$router.replace({
              path: "/ListCommunityView"
            });
    },
     filesAddedPosting(files) {
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
    processFilePosting(file, next) {
      compress(file, {
        compress: {
          width: 1600,
          height: 1600,
          quality: 0.5
        }
      }, next)
    },
    // fileSubmittedPosting(file) {
    //   file.base64Value = file.file.base64
    // }
  },
  created() {
  },
  mounted() {}
};
</script>

<style scoped>
.title-h2-l{
  line-height: 50px;
  font-size: .4rem;    
  width: 80%;
  text-align: center;
}
.close-custom-p-a{
    position: absolute;
    top: .3rem;
    left: .3rem;
    font-size: .5rem;
}
.search-cancel－btn{
    color:#757070;
    background: border-box;
    width: 16%
}
.posting-p-2{
  padding: 0 .2rem;
}
.posting-custom-h{
  height: 3rem;
}
.postingUpload{
  width: 2rem;
}
.font-size-Poting-t{
    font-size: .4rem;
}
.hd-topic{
  flex-wrap: wrap;
}
.hd-topic li{
  border:1px solid #e8e6e6;
  padding: .2rem;
  margin: .2rem;
  border-radius: 20px;
}
</style>
