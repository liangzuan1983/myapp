var hook = {
   navListen(_self) {
      document.addEventListener("navdo", function(e) {
         if (e.url == "back") {
            _self.$router.go(-1);
         } else if (e.url == "Bill") {
            _self.$router.push({ path: '/Bill' })
         } else if (e.url == "tolinkIM") {
            _self.$router.push({path:'/InvestMeeting/AddNewInvestMeeting'})
         } else if (e.url == "tolinkIT") {
            _self.$router.push({path:'/Investor/AddNewInvestor'})
         } else if (e.url == "tolinkIG") {
            _self.$router.push({path:'/InvestOrganize/AddNewInvestOrganize'})
         } else if (e.url == "tolinkRM") {
            _self.$router.push({path:'/ResearchMeeting/AddNewResearchMeeting'})
         } else if (e.url == "tolinkRP") {
            _self.$router.push({path:'/ResearchPaper/AddNewResearchPaper'})
         } else if (e.url == "tolinkVP") {
            _self.$router.push({path:'/VisitPlan/AddNewVisitPlan'})
         }
      });
   },
   setLoginUser(vm, Vue) {
      /*if (!this.validUA(Vue)) {
         return false;
      }*/
      if (vm.$route.query.usercode) {
         Vue.prototype.$usercode = vm.$route.query.usercode;
      } else {
         Vue.prototype.$usercode = "wangshixiao";
         /*Vue.prototype.$Cube.Dialog.$create({
         type: 'alert',
         title: '温馨提醒',
            content: '身份信息验证失败，请重新登陆龙信',
            icon: 'cubeic-alert'
         }).show();*/
      }
   },
   validUA(Vue) {
      var ua = navigator.userAgent;
      ua = ua.toString();
      if (ua.indexOf("788dc519-3962-4acc-832e-1f30b60add0d") == -1 && ua.indexOf("6a67252a-7537-4935-9d98-d8256c8b1e0f") == -1) {
         Vue.prototype.$Cube.Dialog.$create({
            type: 'alert',
            title: '温馨提醒',
            content: '非法请求！请更新您的龙信至V2.0版',
            icon: 'cubeic-alert'
         }).show();
         return false;
      } else {
         return true;
      }
   }
}

export { hook }