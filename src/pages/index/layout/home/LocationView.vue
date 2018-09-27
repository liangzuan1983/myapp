<template>
    <div slot="content">
      <div class="page-wrap wrap-center wrap-vcenter">
          <i @click="closeLocationHandler" class="cubeic-close close-custom-p-a"></i>
          <h2 class="title-h2-l">选择社区（北京市）</h2>
      </div>
      <!-- <div class="page-wrap location-t-r">
            <i class="cubeic-search search-opac icon-style-s"></i>
            <cube-input v-model="addressKeyvalue" class="b-radius-10" ></cube-input>
       </div>
       <h6 class="l-h-title">附近社区</h6>  -->
      <div class="scroll-list-wrap">
        <cube-scroll>
           <ul class="list-wrapper">
            <li v-for="(item,index) in addresses" :key="index">
                <router-link :to="{path:'/',query:{'stateid':item.stateid}}" class="l-item-lineS list-item page-wrap wrap-between">
                <h5>{{ item.title}}</h5>
                <span>{{item.distance}}</span>
              </router-link>
              </li>
          </ul>
        </cube-scroll>
      </div>
     </div>
</template>

<script>
// import CubePage from "../../../components/cube-view.vue";
export default {
  name: "LocationView",
  components: {
    // CubePage
  },
  data() {
    return {
        addressKeyvalue:'请输入小区名称',
      addresses: [
          {
              title: '中铁建国际花园',
              distance: '',
              router: '/',
              stateid:1
          },
          {
              title: '上海阳光国际花园',
              distance: '',
              router: '/',
              stateid:2
          }
        ],

    };
  },
  methods: {
    closeLocationHandler() {
      history.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.search-opac{
    position: absolute;
    top: .4rem;
    z-index: 10;
}
.icon-style-s{
    font-size: .4rem;
    color: #999;
    padding-left: 20px;
}
.b-radius-10 {
  border-radius: 20px;
  overflow: hidden;
  background-color: #f7f6f6;   
  margin: .2rem 3%;
  width: 94%;
  padding-left: 20px;
}
.l-h-title{
  line-height: 40px;
  background-color: #f7f6f6;
  padding-left: 3%;
}
.l-item-lineS{
    line-height: 50px;
    border-bottom: 1px solid #f7f6f6;
    margin: 0 .2rem;
    padding: 0;
    font-size: .3rem;
}
.title-h2-l{
  line-height: 50px;
  font-size: .4rem;
}
.location-t-r{position: relative;}
.close-custom-p-a{
    position: absolute;
    top: .3rem;
    left: .3rem;
    font-size: .5rem;
}
</style>
