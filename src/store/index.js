import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import user from './../store/modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    global,
    user
  }
})
