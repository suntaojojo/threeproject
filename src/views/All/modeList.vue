<template>
  <div>
    <van-nav-bar
      title="免费公开课"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #left>
        <span class="arrows" >&lt;</span>
      </template>
    </van-nav-bar>
    <firstplay :key="title.length">
      <template v-for="(item,index) in title">
          <div class="swiper-slide" @click="change('Aslide0' , $event)" :key="index">{{item.title}}</div>
      </template>
    </firstplay>
    <component :is="current"></component>
  </div>
</template>

<script>
import firstplay from '../../views/first/Firstplay'
import Aslide0 from '@/views/All/Aslide0'
import uri from '@/config/uri'
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  data(){
    return{
      title:[],
      current:"Aslide0",
      bigTitle:"",
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
        console.log(ret.data.data)
        this.title = ret.data.data
      })
    }
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
      console.log('这里的信息我要返回到上一页')
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

</style>