import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/http'
Vue.prototype.$http = axios
Vue.config.productionTip = false

//这里为了防止在刷新的情况下 vuex 中的数据将会消失我们就在入口函数的位置上,与 localStorage 结合 让数据持久化的保存在 vuex 中
let jwt = window.localStorage.getItem('_token')
//这里我们就是判断一下是否在 localStorage 中,如果有就说明已经登录过了,如果没有就说明没有登陆过
//如果没有登陆过 上 获取localStorage 也得不到任何的值
if(jwt){
  store.commit('user/setJwt' , jwt)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
