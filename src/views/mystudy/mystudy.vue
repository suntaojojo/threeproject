<template>
  <div>
    <van-nav-bar title="我的课程" left-arrow>
        <template #right>
          <span class="strong">···</span>
        </template>
        <template #left>
          <span class="strong">&lt;</span>
        </template>
    </van-nav-bar>
    <div v-if="is_show">
      <div class="header">
        请登录后查看相关内容
      </div>
      <div class="login">
        登录 / 注册
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon , NavBar} from 'vant'

Vue.use(NavBar);
Vue.use(Icon)
export default {
  data(){
    return {
      is_show:true
    }
  },
  created(){
    if(this.$store.state.user._token){
      this.is_show = false
    }else{
      this.is_show = true
    }
  }
}
</script>
<style lang="scss">
  .header{
    margin-top:40px;
    text-align: center;
  }
  .strong{
    font-weight:900;
  }
  .login{
    display:flex;
    width:100px;
    height:40px;
    margin:0 auto;
    align-items:center;    
    justify-content: center;
    margin-top:20px;
    background:#F19682;
    color:white;
    border-radius:5px;
  }
</style>