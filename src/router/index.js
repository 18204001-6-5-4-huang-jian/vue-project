import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
//路由懒加载  减小打包体积
const Login = () => import('../components/Login')
const Home = () =>import('../components/Home')
const Default = () => import ('../components/Default')
const Notfind = () => import('../components/404')
Vue.use(Router)
const routes = [
      {
        path: '/',
        // redirect: 'Login'
        name:'Login',
        component: Login,
        meta: {
          title: 'login',
          breadcrumb:[
            {
              name:'Login',
              path:'/login'
            },
          ]
        },
      },
      {
        path: '/login',
        name:'Login',
        component: Login,
        meta: {
          title: 'login',
          breadcrumb:[
            {
              name:'Login',
              path:'/ogin'
            },
          ]
        },
      },
      {
        path: '/home/:id',
        name:'Home',
        component: Home,
        meta: {
          title: 'Home',
          breadcrumb:[
            {
              name:'首页',
              path:'/home/:id'
            },
          ]
        },
      },
      {
        path:'/default',
        name:'Default',
        component:Default,
        meta: {
          title: 'Default',
          breadcrumb:[
            {
              name:'默认',
              path:'/default'
            },
          ]
        },
      },
      {
        path:'*',
        name:'Notfind',
        component:Notfind,
        meta: {
          title: '404页面',
          breadcrumb:[
            {
              name:'404',
              path:'*'
            },
          ]
        },
      }
]
const router  = new Router({
  routes,
  mode: 'hash', //default: hash ,history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

// 判断是否需要登录权限 以及是否登录(路由守卫)
router.beforeEach((to, from, next) => {
 if (to.matched.some(res => res.meta.requireAuth)){// 判断是否需要登录权限
 if (localStorage.getItem('token')){// 判断是否登录
    next();
 }else{// 没登录则跳转到登录界面
    next({
    path: '/login',
    query: {redirect: to.fullPath}
    })
  }
 }else{
   next()
  }
})
export default router