var api = {
  init(Vue, axios) {
      Vue.prototype.URL = {
         BASEURL: 'http://124.65.79.102:44507/', //测试地址
         Trip: 'ctrip/findTravelTrip', //行程
      };
      axios.interceptors.request.use(
         config => {
            config.headers.common = {
               'Content-Type': "application/json", //正式
            };
            config.timeout = 12000;
            return config;
         },
         err => {
            return null
         }
      )
   }
}

export { api }