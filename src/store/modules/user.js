export default {
  namespaced:true,
  state:{
    _token:''
  },
  mutations:{
    setJwt(state , arg){
      console.log(arg)
      state._token = arg
      window.localStorage.setItem('_token' , arg)
    }
  },
  actions:{

  },
  getters:{

  }
}