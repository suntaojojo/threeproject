<template>
  <div>
    <van-tabbar v-model="active" active-color="#FF917C" @change="changeIndex">
      <van-tabbar-item >
        <van-icon class-prefix="iconfont icon-home" slot="icon"></van-icon>
        <span> 首页</span>
      </van-tabbar-item>
      <van-tabbar-item >
        <van-icon class-prefix="iconfont icon-wodekecheng" slot="icon" />
        <span>我的课程</span>         
      </van-tabbar-item>
      <van-tabbar-item >
        <van-icon class-prefix="iconfont icon-icon-gouwuche" slot="icon"></van-icon>
        <span>购物车</span>  
      </van-tabbar-item>
      <van-tabbar-item>
        <!-- 这里在官网上事 incontyyy  但是实际应该使用 iconfont  只是官网没有更新-->
        <van-icon class-prefix="iconfont icon-icon_renwu" slot="icon"></van-icon>
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
      url : [ '/' , '/mystudy' , '/cart' , '/personal'],
    }
  },
  methods:{
    changeIndex(index){
      // this.$router.push(place)
    this.$router.push(this.url[index]);
    }
  },
  created(){
    // this.active = url.indexOf(this.$route.path) > 0 ? url.indexOf(this.$route.path) : 0
    this.active = this.url.indexOf(this.$route.path)
    console.log(1111111111)
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to , from)
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
}
</script>
<style lang="scss" scoped>
  .van-tabbar{
    margin-top:80px;
  }
</style>