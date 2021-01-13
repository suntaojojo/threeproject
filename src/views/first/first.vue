<template>
  <div>
    <!-- 搜索引擎 -->
    <van-search
      v-model="value"
      shape="round"
      background="white"
      placeholder="请输入搜索关键词"
      show-action
    >
      <div slot="action">
        <van-icon class-prefix="iconfont icon-renwu" slot="icon" @click="change"></van-icon>
        
      </div>
      <template #action>
        <van-icon class-prefix="iconfont icon-icon_renwu" slot="icon" @click="change"></van-icon>
      </template>
    </van-search>

    <!-- 轮播图 -->
    <!-- 这里轮播图出现了一个问题, 如果单独只使用找个轮播图没有任何的问题,但是如果我将slide中的轮播图加进来就会导致,找个轮播图出问题  解决办法会不会是因为 key值的事 ,如果在渲染的时候在子组件中加如key值让他重新渲染会不会解决找个问题
    这里的问题已经解决了 解决方法  将第二个 swiper换成了 vant -->
    <firstplay :key="titleList.length">
      <template v-for="(item , index) in titleList">
          <div class="swiper-slide" @click="change('slide1',$event , index)" :key="index">{{item.name}}</div>
      </template>
    </firstplay>
    <keep-alive>
    <component :is="current"></component>
    </keep-alive>
  </div>
 
</template>
<script>
import Vue from 'vue'
import firstplay from './Firstplay'
import '../../assets/font/iconfont.css'
import uri from "@/config/uri"
import { Search } from 'vant';

Vue.use(Search);
import slide1 from './Tab/slide1'
import slide2 from './Tab/slide2'
export default Vue.extend({
  data(){
    return {
      value:'',
      current:'slide1',
      //找个a的数据就是为了测试轮播图没有用
      titleList:[],
    }
  },
  methods:{
    change(tab , direct ,index){
      for(let i = 0 ; i < direct.target.parentElement.children.length ; i++){
        direct.target.parentElement.children[i].style.borderBottom = '0'
        direct.target.parentElement.children[i].style.color = 'black'
      }
      direct.target.style.borderBottom = '3px solid #F19682'
      direct.target.style.color = '#F19682'
      this.current = 'slide' + (1 + index)
    }
  },
  components:{
    firstplay,
    slide1,
    slide2
  },
  mounted(){
  },
  created(){
    this.$http.get(uri.firstTitle).then(ret=>{
      console.log(ret.data.data)
      this.titleList = ret.data.data
    })
    
  }
 
})
</script>
<style lang="scss" scoped>
  .swiper-wrapper{
    margin-bottom:20px;
    .swiper-slide{
      font-size:15px;
      padding:10px 0;
      color:#666666;
    }
  }
</style>