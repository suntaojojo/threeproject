import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '@/router/modules/first/first'
import Cart from '@/router/modules/cart/cart'
import Mystudy from '@/router/modules/mystudy/mystudy'
import Personal from '@/router/modules/personal/personal'
import modeList from '@/router/modules/all/modeList'
import Login from '@/router/modules/login/login'
import Detail from '@/router/modules/detail/detail'
Vue.use(VueRouter)

const routes = [
  First,
  Cart,
  Mystudy,
  Personal,
  modeList,
  Login,
  Detail,
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
