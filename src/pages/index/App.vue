<template>
   <div id='app'>
      <!-- <router-view></router-view> -->
      <!-- vue-touch提供的滑动事件指令，可以参考vue-touch文档 -->
        <!-- <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight"> -->
            <router-view></router-view>
        <!-- </v-touch> -->
        <!-- 页面底部的圆点导航 -->
        <!-- <ul class="circle-nav">
            <li :class="{'nav-current':$route.name==='page1'||$route.name==='default'}"></li>
            <li :class="{'nav-current':$route.name==='page2'}"></li>
            <li :class="{'nav-current':$route.name==='page3'}"></li>
        </ul> -->
   </div>
      <!-- <cube-view></cube-view> -->
</template>
<script>
import CubeView from '@/components/cube-view.vue'

export default {
   data() {
      return {}
   },
   components:{},
   components:{
      CubeView
   },
   methods: {
        //  onSwipeLeft() {
        // 	// router转场后会自动触发vueg的转场特效
        //     switch (this.$route.name) {
        //         case 'default':
        //         case 'page1':
        //             this.$router.push({
        //                 // name:'page2' 
        //                 path: '/guide/2'
        //             })
        //             break
        //         case 'page2':
        //             this.$router.push({
        //                 path: '/guide/3'
        //             })
        //             break
        //         case 'page3':
        //             this.$router.push({
        //                 path: '/login'
        //             })
        //             break
        //     }
        // },
        // onSwipeRight() {
        //     this.$router.back()
        // }
   },
   created() {},
   mounted() {}
}
</script>
<style scoped>
#app{
   height: 100%;
}
.circle-nav {
    position: fixed;
    bottom: 10px;
    width: 100%;
    max-width: inherit;
    text-align: center;
    padding: 0;
    opacity: 0.75;
}

.circle-nav li {
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 1px solid #f44336;
    border-radius: 50%;
    margin: 5px;
}

.nav-current {
    background-color: #f44336;
}
</style>