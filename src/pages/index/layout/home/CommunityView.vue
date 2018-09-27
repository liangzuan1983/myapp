<template>
    <div slot="content">
        <div class="c-s-s">
        <div class="page-wrap wrap-center wrap-vcenter">
            <i @click="backCommunityHandler" class="cubeic-back Cback-custom-p-a"></i>
            <h2 class="title-h2-l">{{ctitle}}＃生活杂谈＃</h2>
        </div>
        <div class="banner">
        <img :src="communityImgImg[0].img">
        </div>
        <cube-tab-bar class="CfontSize3 CfontSize-h-50" v-model="CommunityselectedLabel" showSlider>
            <cube-tab v-for="(item) in Communitytabs" :icon="item.icon" :label="item.label" :key="item.label">
            </cube-tab>
        </cube-tab-bar>
        <cube-tab-panels v-model="CommunityselectedLabel" class="c-bottom-100">
            <cube-tab-panel v-for="(item) in Communitytabs" :label="item.label" :key="item.label">
            <ul>
                <li v-for="(hero,index) in item.heroes" :key="index" class="accountIntroduced">
                    <div class="page-wrap">
                        <img class="ctou-custom" :src="hero.img" alt="">
                        <div>
                            <h5 class="CfontSize3 CfontSize-h-40">{{hero.accountName}}</h5>
                            <span class="CfontSize2">{{hero.time}}</span>
                        </div>
                    </div>
                    <p class="CfontSize3 CfontSize-h-50">{{hero.desc}}</p>
                    <img class="account-p-w" :src="hero.showImg" alt="">
                    <div class="page-wrap cp-15">
                        <p class="CfontSize3 wrap-content3 CfontSize3-grey">{{hero.addressC}}</p>
                        <div class="page-wrap wrap-content">
                            <img class="c-icon-custom" :src="communityImgImg[1].img" alt=""> 
                            <span class="CfontSize3 CfontSize3-grey c-p-10">1</span>
                            <img class="c-icon-custom" :src="communityImgImg[2].img" alt="">
                        </div>
                    </div>
                </li>
            </ul>
            </cube-tab-panel>
        </cube-tab-panels>
       
        <router-link class="btn cus-btn" :to="{ path: '/PostingView'}">我要发帖</router-link>
     </div>
    </div>
</template>

<script>
// import CubePage from "../../../components/cube-view.vue";
export default {
  name: "CommunityView",
  components: {
    // CubePage
  },
  data() {
    return {
      communityImgImg: [
        { img: require("../../../../../static/img/home/c-banner.png") },
        { img: require("../../../../../static/img/home/zan.png") },
        { img: require("../../../../../static/img/home/icon-pinglun.png") }
      ],
      CommunityselectedLabel: "最新",
      Communitytabs: [
        {
          label: "最新",
          heroes: [
            {
              img: require("../../../../../static/img/home/ctou.png"),
              accountName: "中铁建国际花园2-2-2业主",
              time: "18小事前",
              desc: "＃节日活动＃快乐六一 亲子嘉年华",
              showImg: require("../../../../../static/img/home/house61.jpeg"),
              addressC: "来自北京市－中铁建国际花园2-2-2"
            },
            {
              img: require("../../../../../static/img/home/ctou.png"),
              accountName: "中铁建国际花园2-2-2业主",
              time: "18小事前",
              desc: "＃节日活动＃快乐六一 亲子嘉年华",
              showImg: require("../../../../../static/img/home/house61.jpeg"),
              addressC: "来自北京市－中铁建国际花园2-2-2"
            }
          ]
        },
        {
          label: "最热",

          heroes: [
            {
              img: require("../../../../../static/img/home/ctou.png"),
              accountName: "中铁建国际花园2-2-2业主",
              time: "18小事前",
              desc: "＃日常安全＃中铁建国际花园社区119消防日宣传活动",
              showImg: require("../../../../../static/img/home/xqhd.jpg"),
              addressC: "来自北京市－中铁建国际花园2-2-2"
            },
            {
              img: require("../../../../../static/img/home/ctou.png"),
              accountName: "中铁建国际花园2-2-2业主",
              time: "18小事前",
              desc: "＃日常安全＃中铁建国际花园社区119消防日宣传活动",
              showImg: require("../../../../../static/img/home/xqhd.jpg"),
              addressC: "来自北京市－中铁建国际花园2-2-2"
            }
          ]
        }
      ],
      ctitle: ""
    };
  },
  methods: {
    backCommunityHandler() {
      history.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.Cback-custom-p-a {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  font-size: 0.5rem;
}
.banner {
  width: 100%;
}
.banner img {
  width: 100%;
}
.title-h2-l {
  height: 50px;
  line-height: 50px;
  font-size: 0.4rem;
}
.CfontSize3 {
  font-size: 0.3rem;
  font-weight: bold;
}
.CfontSize-h-50 {
  line-height: 50px;
}

.CfontSize-h-40 {
  line-height: 40px;
}
.CfontSize2 {
  font-size: 0.2rem;
}
.ctou-custom {
  width: 20%;
  height: 20%;
  margin-right: 0.3rem;
}
.c-icon-custom {
  width: 15%;
  margin-left: 0.3rem;
  height: 80%;
}
.accountIntroduced {
  padding: 0.2rem;
}
.account-p-w {
  width: 80%;
}
.CfontSize3-grey {
  color: #7f7f7f;
}
.cp-15 {
  padding: 15px 0;
}
.c-p-10 {
  padding-left: 10px;
}
.btn-bgcolor {
  background-color: #5599ff;
  position: fixed;
  bottom: 0;
}
.c-bottom-100 {
  padding-bottom: 100px;
}
.c-s-s {
  overflow-x: auto;
  overflow-y: scroll;
  position: relative;
}
.cus-btn {
  position: absolute;
}
</style>
