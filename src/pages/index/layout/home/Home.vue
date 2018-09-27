<template>
    <div id='app'>
        <header :class="[staateid==1?'headerbg':'headerbg0']">
          <div class="cube-header page-wrap wrap-between">
              <div @click="getAddressHandle" class="leftDemo page-wrap">
                <div>
                <img  class="iconmap-c" :src="mapIcon" alt="">
              </div>
              <p class="fontSize-custom-p"> 
                {{mapaddress}}</p>
            </div>
            <div class="right page-wrap">
               <div @click="getQrcodeHandler">
                  <img  class="iconmap-c" :src="scanIcon" alt="">
                </div>
                <div class=" wordbtn" @click="searchBtnHandle">
                  <img  class="iconmap-c" :src="searchIcon" alt="">
                </div>
            </div>
            </div>
            
            <ul class="page-wrap appfunction">
                <li v-for="(item,index) in listNavIndex" :key="index" :class="{'marginLR': (index+2)%3==0}">
                  <a  v-if="index == 3" href="tel:400 081 8181" class="li page-wrap wrap-d-colum wrap-vcenter">
                    <div class="itemImg">
                        <img :src="item.iconImg">
                    </div>
                    <p class="fontSize-custom-p">{{item.title}}</p>
                  </a>
                  <router-link v-else :to="{ path: (item.router)}" class="li page-wrap wrap-d-colum wrap-vcenter">
                    <div class="itemImg">
                        <img :src="item.iconImg">
                    </div>
                    <p class="fontSize-custom-p">{{item.title}}</p>
                  </router-link>
                </li>
              </ul>
        </header>
        <section class="scroll-list-wrap homescroll-cus"> 
          <cube-scroll ref="scroll" direction="vertical">
            <ul class="list-wrapper">
                <div class="headerSS"></div>
                  
                 <!--文字滚动  start-->
                 <div class="index-p2">
                         <cube-slide :showDots=false :interval=0 :speed=6000 :loop=false fontsoptions="fontsOptions"  class="slide-custom-h">
                          <cube-slide-item class="index-slide-custom-w" v-for="(item, index) in itemsfonts" :key="index">
                            <router-link :to="{ path: (item.router)}" >
                              <div class="font-scroll-cus" :class="[staateid==1?'':'font-scroll-cus0']"><span>公告</span>{{item.font}}</div>
                            </router-link>
                          </cube-slide-item>
                        </cube-slide>
                    </div>
                     <!--轮播  start-->
                    <div class="index-p2">
                         <cube-slide class="slide-custom-h">
                          <cube-slide-item class="index-slide-custom-w" v-for="(item, index) in itemsbanners" :key="index">
                            <router-link :to="{ path: (item.router)}" >
                              <img :src="item.image">
                            </router-link>
                          </cube-slide-item>
                        </cube-slide>
                    </div>
                   
                    <!--轮播  end-->
                    <!-- 周边商家start-->
                    <div class="neighb">
                      <div class="felx-custom-hd" >
                        <h1 class="font-size-t">商家服务</h1>      
                      </div>
                      <ul class="page-wrap">
                        <li class="wrap-content textcenter" v-for="(item,index) in merchants" :key="index">
                          <!-- {{item.merchantName}} -->

                          <router-link :to="{ path: 'MerchantsList',query:{mNamt:(item.merchantName),list:(item.list)}}">
                            <div class="merchantsImg"> <img :src="item.imgicon" alt=""></div>
                          </router-link>
                          <router-link :to="{ path: 'MerchantsList',query:{mNamt:(item.merchantName),list:(item.list)}}">{{item.merchantName}}</router-link>
                        </li>
                      </ul>
                    </div>
                    <!-- 周边商家end -->
                    <div v-if="staateid==1" class="neighb">
                      <div class="felx-custom-hd" >
                        <h1 class="font-size-t">邻里互动</h1>      
                        <span class=" wordbtn" @click="getListCommunityHandle">
                            <i class="cubeic-arrow fontSize-custom-in"></i> 
                        </span>
                      </div>
                      <ul class="hd-topic" >
                        <li v-for="(item,index) in listCTitle" :key="index" @click="getCommunityHandle(item)" :class="[staateid==1?'hd-topic-blue':'hd-topic-y']">
                          {{item}}
                        </li>
                      </ul>
                    </div>
                    <div class="neighb-yqbx">
                      <div class="felx-custom-hd" >
                        <h1 class="font-size-t">园区报修</h1>      
                      </div>
                    <ul class="life-ul">
                      <li>
                        <router-link :to="{ path: 'Repair'}">
                          <img src="../../../../../static/img/home/tou.png" alt="">
                          <p>维修员</p>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                   
              </ul>
          </cube-scroll>
        </section>
          <cube-popup 
                type="extend-popup" 
                :mask="false"
                :position="welcomePosition"
                ref="welcome">
              <div class="cube-extend-popup-content">
                <slot>欢迎回家</slot>
              </div>
          </cube-popup> 
    </div>
</template>
<script>
// import { bus } from "../../components/bus";
// import CubeView from "../../components/cube-view.vue";
// import CubePage from "../../components/cube-page.vue";
const mapIcon = require("../../../../../static/img/home/icon-map.png");
const banner1 = require("../../../../../static/img/home/scan.png");
const scanIcon = require("../../../../../static/img/home/icon-scan.png");
const searchIcon = require("../../../../../static/img/home/icon-search.png");
const iconmerchantsArr = [];
const navitemIndex = [
  {
    title: "生活缴费",
    iconImg: require("../../../../../static/img/home/icon-wan_money.png"),
    router: "/LifePayView"
  },
  {
    title: "访客通行",
    iconImg: require("../../../../../static/img/home/icon-et-visit.png"),
    router: "/Visitors"
  },
  {
    title: "物业报事",
    iconImg: require("../../../../../static/img/home/icon-house-o.png"),
    router: "/Repair"
  },
  {
    // title: "代收包裹",
    title: "客服热线",
    iconImg: require("../../../../../static/img/home/icon-phone.png")
    // router: "tel:400 081 8181"
  }
];
const itemsbanners1 = [
  {
    image: require("../../../../../static/img/home/1.jpg"),
    router: "/AboutQD"
  },
  {
    image: require("../../../../../static/img/home/2.jpg"),
    router: "/BannerDetail"
  }
];
const itemsbanners2 = [
  {
    image: require("../../../../../static/img/home/3.jpg")
  },
  {
    image: require("../../../../../static/img/home/4.jpg")
  },
  {
    image: require("../../../../../static/img/home/5.jpg")
  }
];
export default {
  name: "app",
  data() {
    return {
      staateid: this.$route.query.stateid || 1,
      listNavIndex: navitemIndex,
      mapIcon: mapIcon, //icon-map
      scanIcon: scanIcon,
      searchIcon: searchIcon,
      fontsOptions: {
        direction: "vertical",
        showDots: false
      },
      welcomePosition: "center",
      merchants: [
        {
          merchantName: "医院",
          imgicon: require("../../../../../static/img/home/icon/icon1.png"),
          list: [
            {
              title: "北京女医师协会仁和医院",
              address: "北京市门头沟区石担路永兴嘉园12号楼底商1层",
              telephone: "(010)69809259"
            },
            {
              title: "北京市门头沟区妇幼保健院",
              address: "北京市门头沟区石龙北路10号院",
              telephone: "(010)69839914"
            },
            {
              title: "国家安全生产监督管理总局职业安全卫生研究中心石龙医院",
              address: "北京市门头沟区石龙北路27号院",
              telephone: "(010)69805342"
            }
          ]
        },
        {
          merchantName: "超市",
          imgicon: require("../../../../../static/img/home/icon/icon2.png"),
          list: [
            {
              title: "超市发（梧桐苑店）",
              address: "永定龙兴南二路5号院4号楼",
              telephone: "(010)82125291"
            },
            {
              title: "黎家生活超市（梧桐苑店）",
              address: "龙兴南二路梧桐苑八号院",
              telephone: "(010)57713689"
            },
            {
              title: "世纪华隆超市",
              address: "北京市门头沟区永定镇乌龙岗南街21号院",
              telephone: ""
            }
          ]
        },
        {
          merchantName: "药店",
          imgicon: require("../../../../../static/img/home/icon/icon3.png"),
          list: [
            {
              title: "福优堂大药房",
              address: "龙兴南二街7号院7-1-115",
              telephone: ""
            },
            {
              title: "众惠康泰平价大药房",
              address: "燕堤西街金隅滨河园6号院",
              telephone: ""
            },
            {
              title: "嘉事堂药店",
              address: "北京市石景山区北辛安大街77号",
              telephone: "（010）68872424"
            }
          ]
        },
        {
          merchantName: "快递",
          imgicon: require("../../../../../static/img/home/icon/icon4.png"),
          list: [
            {
              title: "菜鸟驿站（永升嘉园6号楼烟酒副食超市）",
              address: "永定永升嘉园6－2-104",
              telephone: ""
            },
            {
              title: "灵之秀物流配送中心",
              address: "永定镇石龙经济开发区高科大厦灵之秀物流配送中心",
              telephone: ""
            },
            {
              title: "顺丰速运",
              address: "北京市门头沟区永定镇永安路14号",
              telephone: ""
            }
          ]
        }
      ],
      itemsfonts: [
        { font: "2018年物业缴费现在开始", router: "/NoticeDetail" }
      ],
      itemsbanners: [],
      listCTitle: ["节日活动", "日常安全", "拼车拼团", "车位租售", "咨询求助"],
      mapaddress: "中铁建国际花园"
    };
  },
  components: {
    // CubeView
  },
  methods: {
    // 邻里社区跳转
    getListCommunityHandle() {
      this.$router.push({
        path: "/ListCommunityView"
      });
    },
    // 邻里社区跳转-某一话题
    getCommunityHandle(rel) {
      this.$router.push({
        path: "/CommunityView",
        params: rel
      });
    },
    searchBtnHandle() {
      // 搜索跳转
      this.$router.push({
        path: "/SearchHuiView"
      });
    },
    getAddressHandle() {
      // 定位跳转
      this.$router.push({
        path: "/LocationView"
      });
    },
    getQrcodeHandler() {
      // 跳转调用二维码页
      this.$router.push({
        path: "/QrcodeCcanning"
      });
    },
    getStyleHandler() {
      if (this.staateid == 1) {
        this.itemsbanners = itemsbanners1;
        this.mapaddress = "中铁建国际花园";
      } else {
        this.itemsbanners = itemsbanners2;
        this.mapaddress = "上海阳光国际花园";
      }
    },
    // 欢迎回家显示
    showPopupWelcome() {
      if(this.$route.query.id==1){
      const component = this.$refs.welcome;
        component.show();
        setTimeout(() => {
          component.hide();
        }, 2000);
      }
    }
  },

  created() {
    this.getStyleHandler();
  },
  computed: {},
  activated() {},
  beforeDestroy() {},
  mounted() {
    this.showPopupWelcome();
    //  this.getStyleHandler();
  }

};
</script>

<style scoped>
/* demo首页自定义样式 */
/* lyf  css start */
.index-p2 {
  margin: 10px 0;
  padding: 10px 0;
  box-sizing: border-box;
  background: #fff;
}
.slide-custom-h img {
  width: 96%;
  padding: 0 2%;
}
.cindex-slide-custom-w img {
  width: 100%;
}
.appfunction li {
  flex: 1;
  text-align: center;
  line-height: 30px;
  padding: 0.3rem 0;
}
.appfunction li i {
  font-size: 0.5rem;
}
.fontSize-custom {
  font-size: 0.4rem;
  padding-right: 0.2rem;
  color: #fff;
}
.fontSize-custom-in {
  font-size: 0.4rem;
  padding-right: 0.2rem;
  color: #736969;
}
.fontSize-custom-p {
  /* padding-right: 0.2rem; */
  color: #fff;
  line-height: 40px;
}
.bg-color-c {
  /* background-color: #004098; */
}
.bg-color-c2 {
  background-color: #c75b3e;
}
.felx-custom-hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.2rem;
}
.neighb {
  background-color: #ffffff;
  padding: 0.3rem;
  margin-bottom: 10px;
}
.neighb-yqbx {
  background-color: #ffffff;
  padding: 0.3rem;
  margin-bottom: 1.5rem;
}
.font-size-t {
  font-size: 0.4rem;
}
.hd-topic,
.life-ul {
  display: flex;
  flex-wrap: wrap;
}
.hd-topic li {
  border: 1px solid #e8e6e6;
  padding: 0.1rem 0.3rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
  color: #fff;
}
.hd-topic-blue{
  background: #89c5ee;
  box-shadow: 0px 3px 3px #89c5ee;
}
.hd-topic-y{
  background: #fbceac;
  box-shadow: 0px 3px 3px #d1e5f9;
}
.life-ul li img {
  width: 1.5rem;
  height: 1.4rem;
}
.life-ul li p {
  text-align: center;
}
.itemImg img {
  width: 25px;
  height: 27px;
}
.cube-header {
  padding: 0.2rem;
}
p,
li {
  font-size: 0.3rem;
}
.font-scroll-cus {
  font-size: 0.3rem;
  text-align: left;
  padding-left: 2%;
  line-height: 40px;
}
 .font-scroll-cus span{
   padding:0 .3rem;
   color:#4c9ff4;
   border-right: 1px solid #dddddd;
   margin-right: .3rem;
 }
 .font-scroll-cus0 span{
 color:#fbc9a3;
 }
.textcenter {
  text-align: center;
  line-height: 50px;
}
.cube-extend-popup .cube-extend-popup-content {
  padding: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
}
.homescroll-cus {
  height: 12rem;
}
.cube-scroll-wrapper {
  overflow: scroll;
}
.iconmap-c {
  width: 0.33rem;
  padding-top: 0.2rem;
  margin-right: 0.1rem;
}
.merchantsImg {
  height: 0.8rem;
}
.merchantsImg img {
  width: 0.8rem;
}
.headerbg{
  background-image: url(../../../../../static/img/home/scan.png);
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.headerbg0{
  background-image: url(../../../../../static/img/home/scan0.png);
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
/* lyf css end */
</style>