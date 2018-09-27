import Vue from 'vue'
import 'es6-promise/auto';
// ----------------------------------------CubeUI引入--------------------------------------------
import Cube from 'cube-ui'
// Vue.use(Cube)

// ----------------------------------------element-ui'引入--------------------------------------------
// import {Steps,Step} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Cube,Steps,Step)
Vue.use(Cube)
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.prototype.$Cube = Cube;
// ----------------------------------------通用样式引入--------------------------------------------
import '../static/css/common.css';

//-----------------------------------------RSA加密文件引入----------------------------------
// import '../static/js/security.js';
 import '../src/pages/index/index.js'; //lyf 添加 2018-0726
// -----------------------------------------自定义的钩子函数引用--------------------------------------------
import { api } from './api'
import { hook } from './hook'
Vue.prototype.$hook = hook;

// -----------------------------------------属性配置--------------------------------------------
// 接口地址配置

Vue.config.productionTip = false;
Vue.prototype.$authToken = "E3WSAFEAPPQWEFGHYI7I483S";

// -----------------------------------------图片预加载组件--------------------------------------------
/*import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
   error: '../static/img/nohead_icon.png', //这个是请求失败后显示的图片
   loading: '../static/img/nohead_icon.png', //这个是加载的loading过渡效果
   try: 2 // 这个是加载图片数量
})*/

// -----------------------------------------解决IOS点击事件响应慢问题------------------------------
import FastClick from 'fastclick';
new FastClick(document.body);

// -----------------------------------------axios使用设置------------------------------
import axios from 'axios'
Vue.prototype.$axios = axios;
// axios.defaults.withCredentials=true
// 初始化API的配置
api.init(Vue,axios);

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
   return response;
}, (err) => {
   // 这里是返回状态码不为200时候的错误处理
   if (err.toString().indexOf("timeout") != -1) {
      Cube.Dialog.$create({
         type: 'alert',
         content: "请求超时，请稍后再试",
         icon: 'cubeic-alert'
      }).show()
   }
   if (err && err.response) {
      switch (err.response.status) {
         case 400:
            err.message = '请求错误'
            break

         case 401:
            err.message = '未授权，请登录'
            break

         case 403:
            err.message = '拒绝访问'
            break

         case 404:
            err.message = `请求地址出错: ${err.response.config.url}`
            break

         case 408:
            err.message = '请求超时'
            break

         case 500:
            err.message = '服务器开个小差，请稍后再试'
            break

         case 501:
            err.message = '服务器开个小差，请稍后再试'
            break

         case 502:
            err.message = '服务器开个小差，请稍后再试'
            break

         case 503:
            err.message = '服务器开个小差，请稍后再试'
            break

         case 504:
            err.message = '服务器开个小差，请稍后再试'
            break

         case 505:
            err.message = 'HTTP版本不受支持'
            break

         default:
      }
      Cube.Dialog.$create({
         type: 'alert',
         content: err.message,
         icon: 'cubeic-alert'
      }).show()
   }
   return Promise.reject(err)
})

// -----------------------------------------龙信jsbridge交互引入--------------------------------------------
import lxjsSDK from '../static/js/lxjsSDK';
// 获取龙信bridg， 使用方式： 
// this.$lxbridgePromise().then(function(bridge) { 
//  bridge.callhandler() }, function(e) {
// });
Vue.prototype.$lxbridgePromise = function() {
   return new Promise(function(resolve, reject) {
      if (Vue.prototype.$lxbridge) {
         resolve(Vue.prototype.$lxbridge);
      } else {
         try {
            lxjsSDK.connectWebViewJavascriptBridge(function(bridge) {
               let u = navigator.userAgent,
               app = navigator.appVersion;
               let isAndroid = null;
               let isiOS = null;

               if (isAndroid == null) {
                  isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1
               }
               if (isiOS == null) {
                  isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
               }

               if (isAndroid) {
                  bridge.init(function(message, responseCallback) {
                     var data = {
                        'Javascript Responds': 'Wee!'
                     }
                     responseCallback(data)
                  })
               }
               Vue.prototype.$lxbridge = bridge;
               resolve(bridge);
            })
         } catch (e) {
            reject(e);
         }
      }
   });
}

export { Vue }