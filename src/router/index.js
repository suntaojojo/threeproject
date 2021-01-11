import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '@/router/modules/first/first'
import Cart from '@/router/modules/cart/cart'
import Mystudy from '@/router/modules/mystudy/mystudy'
import Personal from '@/router/modules/personal/personal'
Vue.use(VueRouter)

const routes = [
  First,
  Cart,
  Mystudy,
  Personal,
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
