import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

const router  = new Router({
  routes: [
    {
      path: '/',
      // redirect: 'Login'
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home/:id',
      component: Home
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
 if (to.matched.some(res => res.meta.requireAuth)){// 判断是否需要登录权限
 if (localStorage.getItem('token')){// 判断是否登录
    next()
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