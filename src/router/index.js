import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '北大宿舍預約系統',
    },
  },
  // {
  //   path: '/:id?',
  //   name: 'Random',
  //   component: () => import('../views/Home.vue'),
  //   meta: {
  //     title: 'Hi | 北大宿舍預約系統',
  //   },
  // },
  {
    path: '/reserve',
    name: 'Reserve',
    component: () => import('../views/Reserve.vue'),
    meta: {
      title: '預約 | 北大宿舍預約系統',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login | 北大宿舍預約系統',
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue'),
    meta: {
      title: 'Logout | 北大宿舍預約系統',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
