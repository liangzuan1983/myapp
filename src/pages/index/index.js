// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Vue } from '../../config'
import { hook } from '../../hook'
import App from './App'
import router from './router'
import axios from "axios";
// import VueTouch from 'vue-touch'
// import vueg from 'vueg'
// import 'vueg/css/transition-min.css'  

// Vue.use(vueg, router,{
// 	tabs:[{                              //由于底部的圆点导航类似于tab导航，都是水平转场效果，所以填入这个配置项，可以参考vueg配置项
// 		name:'page1'
// 	},{
// 		name:'page2'
// 	},{
// 		name:'page3'
// 	}]
// })
// Vue.use(VueTouch, { name: 'v-touch' })

// import '../../../static/font/iconfont.css';

// 加入此插件可以做到：前进加载新页面，返回直接调用原缓存页面
import Navigation from 'vue-navigation'
router.beforeEach((to, from, next) => {
    // 如果有 userid 代表登录，可以之行 next
    // 没有 userid 的代表没有登录，跳转登录页面
    // 但是访问登录页就不要再跳转了，这样惠进入跳转循环。
    // 所以再 ｜｜ 后边增加准许不登录访问的 path 就可以了
    // var arr = ['/login', '/registered','/SetPassWord','/guide'];
    var reg = /^\/(login||registered||SetPassWord||guide||BindHousing1||BindHousing2||BindHousing3||BindHousing4)(\/.+)*$/;
    // if(arr.indexOf(to.path) >= 0 || sessionStorage.getItem('userId')){
    if(to.path!="/"&&reg.test(to.path) || sessionStorage.getItem('userId')){
      next();
    } else {
      next({
        path: '/login'
      })
    }
})
Vue.use(Navigation, {router})
Vue.prototype.$axios = axios;
// Vue.component(Steps.name, Steps);
// Vue.component(Step.name, Step);




/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {
    this.redrct()
    // 设置当前登陆用户信息
    hook.setLoginUser(this,Vue);
    // // 监听龙信导航栏按钮点击事件
    hook.navListen(this);
    // // document.getElementById("init-loader").remove();
    // console.log(2);
    // console.log(this.$route.query);
    if(this.$route.query.usercode){
      localStorage.usercode=this.$route.query.usercode;
      localStorage.form=this.$route.query.form;
    }else{
      localStorage.form=this.$route.query.form;
      localStorage.usercode=decodeURI(this.$route.query.data);
    }
    // console.log(localStorage.usercode)
  },
  methods: {
    redrct () {
    },
    loggedIn () {
      var id = sessionStorage.getItem('userId')
      if (id === null) { // 未登录
        next({
          path: '/login'
        })
        return false
      }
      return true  // 别忘了这句啊，之前忘写了，调了好半天呢
    }
  },
  mounted() {

  } 
})
