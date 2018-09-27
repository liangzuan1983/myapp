<template>
   <ul class="footer page-wrap wrap-between">
      <li class="list page-wrap wrap-d-colum wrap-vcenter" v-for="(item,index) in listNav" :key="index" :class="{'color':index==activeIndex}" @click="target(index,item.activeIcon,item.path)">
         <div class="activeImg">
            <img v-if="index==activeIndex" :src="currentImg">
            <img v-else :src="item.icon">
         </div>
         <p class="names">{{item.title}}</p>
      </li>
   </ul>
</template>
<script>
const listNav = [
   {
      title: '首页',
      icon: require('../../static/img/footer/home-unsel.png'),
      activeIcon: require('../../static/img/footer/home-sel.png'),
      path: '/'
   },
   {
      title: '服务',
      icon: require('../../static/img/footer/trip-unsel.png'),
      activeIcon: require('../../static/img/footer/trip-sel.png'),
      path: '/Service'
   },
   {
      title: '门禁',
      icon: require('../../static/img/footer/story-unsel.png'),
      activeIcon: require('../../static/img/footer/story-sel.png'),
      path: '/MJ'
   },
   {
      title: '消息',
      icon: require('../../static/img/footer/message-unsel.png'),
      activeIcon: require('../../static/img/footer/message-sel.png'),
      path: '/Message'
   },
      {
      title: '我的',
      icon: require('../../static/img/footer/personal-unsel.png'),
      activeIcon: require('../../static/img/footer/personal-sel.png'),
      path: '/Mine'
   }
]
export default{
   data() {
      return{
         listNav: listNav,
         activeIndex: 0,//当前活动图标
         currentImg: require('../../static/img/footer/home-sel.png')
      }
   },
   props:['isButton'],
   methods: {
      target(i,t,s) {
         this.activeIndex = i
         this.currentImg = t
         this.$router.push({path:s})
      }
   },
   
   mounted(){
      if (this.isButton) {
         this.activeIndex = this.isButton
         console.log(this.activeIndex)
         this.currentImg = this.listNav[this.isButton].activeIcon
         console.log(this.currentImg)
      } else {
         console.log(1)
         this.activeIndex = 0,//当前活动图标
         this.currentImg = require('../../static/img/footer/home-sel.png')
      }
   },
   updated(){
      console.log(this.isButton)
   }
}
</script>
<style scoped>
.footer{
   width: 100%;
   padding: 0.25rem 0.61rem 0.16rem;
   box-sizing: border-box;
   background: #fff;
   color: #AFAFAF;
    position: fixed;
    bottom: 0;
    z-index: 10;
}
.list{
   width: 0.96rem;
}
.activeImg{
   width: 0.45rem;
   height: 0.45rem;
}
.activeImg img{
   height: 100%;
}
.names{
   font-size: 0.24rem;
   margin-top: 0.12rem;
}
</style>