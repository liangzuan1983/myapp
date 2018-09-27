import Vue from 'vue'
import Router from 'vue-router'
import Trip from '../layout/children/Trip.vue';

import guide from '@/components/guide'
import guide1 from '@/components/guide1'
import guide2 from '@/components/guide2'
import guide3 from '@/components/guide3'
// import guide4 from '@/components/guide4'
const SearchHuiView = () => import('../../../components/SearchHuiView.vue');//首页－搜索
const LocationView = () => import('../layout/home/LocationView.vue');//定位－选择社区
const LifePayView = () => import('../layout/home/LifePayView.vue');//生活缴费
const CommunityView = () => import('../layout/home/CommunityView.vue');//邻里互动列表－按模块划分
const ListCommunityView = () => import('../layout/home/ListCommunityView.vue');//邻里互动列表－all
const PostingView = () => import('../layout/home/PostingView.vue');//发帖
const PostRepairsView = () => import('../layout/home/PostRepairsView.vue');// 报事报修列表
const RepairsDetail = () => import('../layout/home/RepairsDetailView.vue');// 报事报修列表
const PostRepEvaluationView = () => import('../layout/home/PostRepEvaluationView.vue');// 报事报修评价
const PostRepFeedbackView = () => import('../layout/home/PostRepFeedbackView.vue');// 报事报修反馈
const PaySuccessful = () => import('../layout/home/PaySuccessful.vue');// 缴费成功
const QrcodeCcanning = () => import('../layout/home/QrcodeCcanning.vue');// 缴费成功
const NoticeDetail = () => import('../layout/home/noticeDetail.vue');// 通知－详情页
const BannerDetail = () => import('../layout/home/BannerDetail.vue');// banner－详情页
const MerchantsList = () => import('../layout/home/MerchantsList.vue');// 商家服务－列表页

const IndexPay = () => import('../layout/home/property/indexPay.vue');// 物业费－缴费
const PastBills = () => import('../layout/home/property/pastBills.vue');// 物业费－往期账单
const PayAdvance = () => import('../layout/home/property/payAdvance.vue');// 物业费－预缴费用
const PPaySuccessful = () => import('../layout/home/property/PPaySuccessful.vue');// 物业费－预缴成功
const PayInfo = () => import('../layout/home/property/payInfo.vue');// 物业费－填写物业费缴费信息 
const PayInfo1 = () => import('../layout/home/property/payInfo1.vue');// 物业费－缴费账单信息 
const PayInfo2 = () => import('../layout/home/property/payInfo2.vue');// 物业费－确认缴费信息 
const PayInfo3 = () => import('../layout/home/property/payInfo3.vue');// 物业费－确认支付第一步 
const PayInfo4 = () => import('../layout/home/property/payInfo4.vue');// 物业费－确认支付第二步 
const PayInfo5 = () => import('../layout/home/property/payInfo5.vue');// 物业费－确认支付第三步 
const PayInfo6 = () => import('../layout/home/property/payInfo6.vue');// 物业费－确认支付第四步 

const Index = () => import('../layout/Index.vue');//主页

const Home = () => import('../layout/home/Home.vue');//首页
const MyContract = () => import('../layout/mine/MyContract.vue');//我的合同－物业合同
const MembersDetail = () => import('../layout/mine/MembersDetail.vue');//我的－会员详情

const Service = () => import('../layout/service/Service.vue');//服务
const Visitors = () => import('../layout/service/children/Visitors.vue');//访客通行
const InviteToJoin = () => import('../layout/service/children/InviteToJoin.vue');//邀请加入
const PayCost = () => import('../layout/service/children/PayCost.vue');//缴费单位选择
const PayCostDetail = () => import('../layout/service/children/PayCostDetail.vue');//缴费详情
const Repair = () => import('../layout/service/children/Repair.vue');//园区维修
const RepairSuccessful = () => import('../layout/service/children/RepairSuccessful.vue');//报修成功
const QueryCode = () => import('../layout/service/children/QueryCode.vue');//二维码
const MyHouse = () => import('../layout/service/children/MyHouse.vue');//我的房屋
const OwnerInformation = () => import('../layout/service/children/OwnerInformation.vue');//房屋业主信息
const DecorationPass = () => import('../layout/service/children/DecorationPass.vue');//装修出入证

const MJ = () => import('../layout/mine/MJ.vue');//门禁

const Mine = () => import('../layout/mine/Mine.vue');//我的
const Mynews = () => import('../layout/mine/children/Mynews.vue');//消息设置
const Myoptions = () => import('../layout/mine/children/Myoptions.vue');//意见反馈
const AboutQD = () => import('../layout/mine/children/AboutQD.vue');//关于中铁物业
const GJNotice = () => import('../layout/mine/children/GJnotice.vue');//管家提醒
const TY = () => import('../layout/mine/children/Tongyongshezhi.vue');//通用设置
const ABQD = () => import('../layout/mine/children/ABQD.vue');//关于中铁物业

const Login = () => import('../layout/mine/children/shoujidenglu.vue');//手机登录
const registered = () => import('../layout/mine/children/zhuce.vue');//注册
const SetPassWord = () => import('../layout/mine/children/setpassword.vue');//手机登录
const BindHousing = () => import('../layout/mine/children/bindHousing.vue');//绑定房屋－选择绑定方式0
const BindHousing1 = () => import('../layout/mine/children/bindHousing1.vue');//绑定房屋－选择房屋－小区
const BindHousing2 = () => import('../layout/mine/children/bindHousing2.vue');//绑定房屋－选择房屋－栋
const BindHousing3 = () => import('../layout/mine/children/bindHousing3.vue');//绑定房屋－选择房屋－房间号
const BindHousing4 = () => import('../layout/mine/children/bindHousing4.vue');//绑定房屋－选择房屋－验证业主手机号

// 消息
const Message = () => import('../layout/message/Index.vue');//消息首页
const MessageDetail = () => import('../layout/message/MessageDetail.vue');//报事报修详情页
Vue.use(Router)

Router.prototype.history1Path="/";

// 自定义goback方法，用于记录是否是返回的状态，控制返回动画显示
Router.prototype.goback = function() {
   this.isBack = true;
   console.log("b1");
   window.history.go(-1);
}

export default new Router({
   scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
   },
   mode: 'hash',
   routes: [
      {
         path:"/",
         component: Index,
         children:[
            {
               path:'',
               component:Home
            },
            {
               path:'Trip',
               component:Trip
            },
            {
               path:'Service',
               component:Service

            },
            {
               path:'MJ',
               component:MJ
            },
            {
               path:'Mine',
               component:Mine
            },
            {
              path: '/Message',
              component: Message,
            }
         ],
         meta:{
           requireAuth:true
         }
      },
      {
        path:'/LocationView',
        component:LocationView,
      },
      {
        path:'/LifePayView',
        component:LifePayView,
      },
      {
        path:'/CommunityView',
        component:CommunityView,
      },
      {
        	path:'/SearchHuiView',
        	component:SearchHuiView,
      },
      {
        	path:'/Visitors',
        	component:Visitors,
      },
      {
       	path: '/InviteToJoin',
       	component: InviteToJoin,
		},
		{
      path: '/PayCost',
      name:'paycost',
			component: PayCost,
		},
		{
      path: '/PayCostDetail',
      name:'paycostdetail',
			component: PayCostDetail,
		},
		{
			path: '/Repair',
			component: Repair,
		},
		{
			path: '/QueryCode',
			component: QueryCode,
    },
    {
			path: '/ListCommunityView',
			component: ListCommunityView,
    },
    {
			path: '/PostingView',
			component: PostingView,
    },
    {
      path: '/PostRepairsView',
      name:"PostRepairsView",
			component: PostRepairsView,
    },
    {
      path: '/RepairsDetail',
      name: 'repairsdetail',
			component: RepairsDetail,
    },
    {
			path: '/PostRepEvaluationView',
			component: PostRepEvaluationView,
    },
    {
			path: '/PostRepFeedbackView',
			component: PostRepFeedbackView,
    },
    {
			path: '/MyHouse',
			component: MyHouse,
    },
    {
			path: '/OwnerInformation',
			component: OwnerInformation,
    },
    {
			path: '/MyContract',
			component: MyContract,
    },
    {
			path: '/PaySuccessful',
			component: PaySuccessful,
    },
      {
         path: '/Mynews',
         component: Mynews,
      },
      {
         path: '/GJNotice',
         component: GJNotice,
      },
      {
         path: '/TY',
         component: TY,
      },
      {
         path: '/Myoptions',
         component: Myoptions,
      },
      {
         path: '/AboutQD',
         component: AboutQD,
      },
      {
         path: '/ABQD',
         component: ABQD,
      },
      {
         path: '/registered',
         component: registered,
      },
      {
         path: '/SetPassWord',
         component: SetPassWord,
      },
      {
         path: '/RepairSuccessful',
         component: RepairSuccessful,
      },
      {
        path: '/Login',
        component: Login,
      },
      {
        path: '/BindHousing',
        component: BindHousing,
      },
      {
        path: '/BindHousing1',
        component: BindHousing1,
      },
      {
        path: '/BindHousing2',
        component: BindHousing2,
      },
      {
        path: '/BindHousing3',
        component: BindHousing3,
      },
      {
        path: '/BindHousing4',
        component: BindHousing4,
      },
      {
        path: '/QrcodeCcanning',
        component: QrcodeCcanning,
      },
      {
        path: '/IndexPay',
        component: IndexPay,
      },
      {
        path: '/PastBills',
        component: PastBills,
      },
      {
        path: '/PayAdvance',
        component: PayAdvance,
      },
      {
        path: '/PPaySuccessful',
        component: PPaySuccessful,
      },
      {
        path: '/NoticeDetail',
        component: NoticeDetail,
      },
      {
        path: '/BannerDetail',
        component: BannerDetail,
      },
      {
        path: '/MembersDetail',
        component: MembersDetail,
      },
      {
        path: '/MerchantsList',
        component: MerchantsList,
      },
      {
        path: '/MessageDetail',
        component: MessageDetail,
      },
      {
        path: '/DecorationPass',
        component: DecorationPass,
      },
      {
        path: '/PayInfo',
        component: PayInfo,
      },
      {
        path: '/PayInfo',
        component: PayInfo,
      },
      {
        path: '/PayInfo1',
        component: PayInfo1,
      },
      {
        path: '/PayInfo2',
        component: PayInfo2,
      },
      {
        path: '/PayInfo3',
        component: PayInfo3,
      },
      {
        path: '/PayInfo4',
        component: PayInfo4,
      },
      {
        path: '/PayInfo5',
        component: PayInfo5,
      },
      {
        path: '/PayInfo6',
        component: PayInfo6,
      },
      {
        path: '/guide',
        name: 'guide',
        component: guide,
        children: [{
              name:'default',
              path:'',
              component:guide1
            },{
              name:'page1',
                path: '1',
                component: guide1
            }, {
              name:'page2',
                path:'2',
                component: guide2
            }, {
              name:'page3',
                path: '3',
                component: guide3
            }]
      }
   ]
})
