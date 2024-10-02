import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangwu from '@/views/modules/fangwu/list'
    import fangwuCollection from '@/views/modules/fangwuCollection/list'
    import fangwuLiuyan from '@/views/modules/fangwuLiuyan/list'
    import fangwuOrder from '@/views/modules/fangwuOrder/list'
    import forum from '@/views/modules/forum/list'
    import jiaofei from '@/views/modules/jiaofei/list'
    import news from '@/views/modules/news/list'
    import qiye from '@/views/modules/qiye/list'
    import qiyeyonghu from '@/views/modules/qiyeyonghu/list'
    import sheshiyuyue from '@/views/modules/sheshiyuyue/list'
    import weixiubaobei from '@/views/modules/weixiubaobei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryFangwu from '@/views/modules/dictionaryFangwu/list'
    import dictionaryFangwuCollection from '@/views/modules/dictionaryFangwuCollection/list'
    import dictionaryFangwuOrder from '@/views/modules/dictionaryFangwuOrder/list'
    import dictionaryFangwuOrderPayment from '@/views/modules/dictionaryFangwuOrderPayment/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJiaofei from '@/views/modules/dictionaryJiaofei/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryQiye from '@/views/modules/dictionaryQiye/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionarySheshiyuyue from '@/views/modules/dictionarySheshiyuyue/list'
    import dictionarySheshiyuyueYesno from '@/views/modules/dictionarySheshiyuyueYesno/list'
    import dictionaryWeixiubaobei from '@/views/modules/dictionaryWeixiubaobei/list'
    import dictionaryWeixiubaobeiYesno from '@/views/modules/dictionaryWeixiubaobeiYesno/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryFangwu',
        name: '房屋类型',
        component: dictionaryFangwu
    }
    ,{
        path: '/dictionaryFangwuCollection',
        name: '收藏表类型',
        component: dictionaryFangwuCollection
    }
    ,{
        path: '/dictionaryFangwuOrder',
        name: '订单类型',
        component: dictionaryFangwuOrder
    }
    ,{
        path: '/dictionaryFangwuOrderPayment',
        name: '订单支付类型',
        component: dictionaryFangwuOrderPayment
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJiaofei',
        name: '缴费类型',
        component: dictionaryJiaofei
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryQiye',
        name: '企业类型',
        component: dictionaryQiye
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionarySheshiyuyue',
        name: '设施类型',
        component: dictionarySheshiyuyue
    }
    ,{
        path: '/dictionarySheshiyuyueYesno',
        name: '预约状态',
        component: dictionarySheshiyuyueYesno
    }
    ,{
        path: '/dictionaryWeixiubaobei',
        name: '报备类型',
        component: dictionaryWeixiubaobei
    }
    ,{
        path: '/dictionaryWeixiubaobeiYesno',
        name: '申请状态',
        component: dictionaryWeixiubaobeiYesno
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '缴费状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangwu',
        name: '房屋信息',
        component: fangwu
      }
    ,{
        path: '/fangwuCollection',
        name: '房屋收藏',
        component: fangwuCollection
      }
    ,{
        path: '/fangwuLiuyan',
        name: '房屋留言',
        component: fangwuLiuyan
      }
    ,{
        path: '/fangwuOrder',
        name: '房屋租赁订单',
        component: fangwuOrder
      }
    ,{
        path: '/forum',
        name: '交流论坛',
        component: forum
      }
    ,{
        path: '/jiaofei',
        name: '缴费',
        component: jiaofei
      }
    ,{
        path: '/news',
        name: '公告通知',
        component: news
      }
    ,{
        path: '/qiye',
        name: '企业',
        component: qiye
      }
    ,{
        path: '/qiyeyonghu',
        name: '企业用户',
        component: qiyeyonghu
      }
    ,{
        path: '/sheshiyuyue',
        name: '设施预约',
        component: sheshiyuyue
      }
    ,{
        path: '/weixiubaobei',
        name: '维修报备',
        component: weixiubaobei
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
