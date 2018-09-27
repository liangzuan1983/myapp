<template>
<cube-page type="input-view">
    <div slot="content">
       <div class="page-wrap">
            <i class="cubeic-search search-opac icon-style-s"></i>
            <cube-input v-model="searchValue" class="b-radius-10" ></cube-input>
           <cube-button @click="searchGoBackHandle" class="search-cancel－btn">取消</cube-button>
       </div>
       <p><i class="cubeic-time icon-style-s"></i>最近搜索</p>
    
     </div>
  </cube-page>
</template>

<script>

import CubePage from './cube-page.vue'
    export default {
        name: 'SearchView',
        components: {
            CubePage
        },
        data() {
            return {
                searchValue:'按名称搜索',
                searchText: '',
                commonLists: [],
                pHistoryList: [], //历史记录列表
                isNull: true,
                isHistroy: true,
                isTipView: false,
                param: {
                    pageNum: 1,
                    pageSize: 20,
                    accountId: '',
                    status: -1,
                    analyzingConditions: -1,
                }
            }
        },
        methods: {
            searchGoBackHandle() {
                history.go(-1);
                }
          
        },
        created() {},
        mounted() {
          
        },
    }
</script>

<style scoped>
.b-radius-10 {
  border-radius: 10px;
  overflow: hidden;
  background-color: #e8e7e7;
  margin: .2rem 0 .2rem .2rem;
  width: 80%;
  padding-left: 20px;
}
.search-cancel－btn{
    color:#757070;
    background: border-box;
    width: 10%
}
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
</style>
