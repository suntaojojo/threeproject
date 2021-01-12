import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '@/router/modules/first/first'
import Cart from '@/router/modules/cart/cart'
import Mystudy from '@/router/modules/mystudy/mystudy'
import Personal from '@/router/modules/personal/personal'
<<<<<<< HEAD
import modeList from '@/router/modules/all/modeList'
=======
import Login from '@/router/modules/login/login'
import Detail from '@/router/modules/detail/detail'
>>>>>>> 0a24eb7036cd6f55077b48f2c1a2a2f083a93d3d
Vue.use(VueRouter)

const routes = [
  First,
  Cart,
  Mystudy,
  Personal,
<<<<<<< HEAD
  modeList
=======
  Login,
  Detail,
>>>>>>> 0a24eb7036cd6f55077b48f2c1a2a2f083a93d3d
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
