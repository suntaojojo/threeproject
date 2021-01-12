<template>
  <div>
    <van-tabbar v-model="active" active-color="#FF917C">
      <van-tabbar-item>
        <van-icon class-prefix="iconfont icon-Home" slot="icon"></van-icon>
        <span> 首页</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class-prefix="iconfont icon-wodekecheng" slot="icon" />
        <span>我的课程</span>         
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class-prefix="iconfont icon-gouwuche" slot="icon"></van-icon>
        <span>购物车</span>  
      </van-tabbar-item>
      <van-tabbar-item>
        <!-- 这里在官网上事 incontyyy  但是实际应该使用 iconfont  只是官网没有更新-->
        <van-icon class-prefix="iconfont icon-renwu" slot="icon"></van-icon>
        <span> 个人 </span>
        
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue';
import '../../assets/font/iconfont.css'
import { Tabbar, TabbarItem , Icon } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon)

export default {
  data(){
    return {
      active:0,
    }
  }
}
</script>
<style lang="scss" scoped>
  .van-tabbar{
    margin-top:80px;
  }
</style>