import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '@/router/modules/first/first'
import Cart from '@/router/modules/cart/cart'
import Mystudy from '@/router/modules/mystudy/mystudy'
import Personal from '@/router/modules/personal/personal'
import modeList from '@/router/modules/all/modeList'
import Login from '@/router/modules/login/login'
import Detail from '@/router/modules/detail/detail'
import Leave from '@/views/All/leave'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  First,
  Cart,
  Mystudy,
  Personal,
  modeList,
  Login,
  Detail,
  {path:'/leave' , component:Leave}
]

const router = new VueRouter({
  routes,
  mode:'history'
})
import store from '@/store/index'
router.beforeEach((to, from, next) => {
  // ...
  console.log(to , from)
  if(store.state.user._token){
    next()
  }else{
    var url = ['/cart' , '/personal']
    if(url.includes(to.path)){
      router.push('/login')
    }else{
      next()
    }
  }
})
export default router
