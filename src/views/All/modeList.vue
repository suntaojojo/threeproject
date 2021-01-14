<template>
  <div>
    <van-nav-bar
      :title='mainTitle'
      left-arrow
      @click-left="onClickLeft"
    >
      <template #left>
        <span class="arrows" >&lt;</span>
      </template>
    </van-nav-bar>
    <div class="virtual">
    <firstplay :key="title.length">
      <template v-for="(item,index) in title">
          <div class="swiper-slide" @click="change('Aslide0' , $event)" :key="index">{{item.title}}</div>
      </template>
    </firstplay>
    <component :is="current"></component>
    </div>
    <van-overlay :show="show">
      <div class="wrapper" >
        <div class="block" style="text-align:center; display:flex; align-items:center; justify-content:center" >
          <van-loading size="24px" vertical>
            加载中...
          </van-loading>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import firstplay from '../../views/first/Firstplay'
import Aslide0 from '@/views/All/Aslide0'
import uri from '@/config/uri'
import Vue from 'vue';
import { NavBar ,Overlay,Loading } from 'vant';
Vue.use(Overlay);
Vue.use(Loading);
Vue.use(NavBar);
export default {
  data(){
    return{
      title:[],
      current:"Aslide0",
      bigTitle:"",
      mainTitle:'',
      show:true
    }
  },
  components:{
    firstplay,
    Aslide0,
  },
  created(){
    console.log(this.$route.query.id)
    if(this.$route.query.id == 32){
      this.$http.get(uri.allFreecourseTitle).then(ret=>{
        console.log(ret , '找个是标题的地方')
        this.title = ret.data
        this.mainTitle = ret.data[ret.data.length-1].title
        console.log(this.mainTitle)
        this.show=false
      })
    }else{
      this.$http.get(uri.allHotcourseTitle).then((ret)=>{
        console.log(ret.data , '找个是标题的地方')
        this.title = ret.data
        this.mainTitle = '热门好课'
        console.log(this.mainTitle)
        this.show=false

      }
    )}
  },
  methods:{
    change(tab , direct){
      this.a+=1
      this.current = tab
      console.log(direct.target)
      for(let i = 0 ; i < direct.target.parentElement.children.length ; i++){
        direct.target.parentElement.children[i].style.borderBottom = '0'
        direct.target.parentElement.children[i].style.color = 'black'

      }
      direct.target.style.borderBottom = '3px solid #F19682'
      direct.target.style.color = '#F19682'
    },
    onClickLeft(){
      this.$router.back()
    }
  },
}
</script>

<style lang="scss" scoped>
  .arrows{
    font-size:20px;
    color:#9B9B9B;
  }
  .swiper-slide{
    font-size:14px;
  }
  .virtual{
    margin-bottom:80px;
  }
  .block {
    width: 80px;
    height: 80px;
    background:rgba(0,0,0,0.7)
  }
  .van-overlay{
    background:rgba(0,0,0,0)
  }
</style>