<template>
<div>
    <div id="header">
      <van-nav-bar
        title="课程详情"
      >
      <div slot="left" @click="onClickLeft">&lt;</div>
      <div slot="right" >❤</div>
      </van-nav-bar>
    </div>
   <div class="middle">
     <img src="../../assets/down.jpg">
      <p>【0元领】《恋词序列二：考研英语真题词汇5500词》配套视频课</p>
      <p><span>朱伟</span><span>限时免费</span></p>
      <p>共141个课时</p>
      <van-count-down :time="time" format="距离停售：DD 天 HH 时 mm 分 ss 秒" />
      
     </div>
  </div>

  
</template>


<script>
import Vue from 'vue';
import {Icon,GridItem, Col, Row,CountDown,SwipeCell,Card  , NavBar} from 'vant';
import "@/assets/font/iconfont.css";
Vue.use(Icon);
Vue.use(GridItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(CountDown);
Vue.use(SwipeCell);
Vue.use(Card);
Vue.use(NavBar);
import url from "@/config/uri"
export default {
  data(){
    return {
      time:11110
    }
  },
  methods:{
    onClickLeft(){
      this.$router.back()
    }
  },
  created(){
    console.log(this.$route.query.id)
    let id = this.$route.query.id
    if(id==1){
      this.$http.get(url.courseOne).then(ret=>{
        console.log(ret)
      })
    }
  }
}
</script>
<style scoped>
.middle{
  height: 200px;
  padding:10px;
  padding-bottom:50px;
}
.middle>img{
  height:100%;
}
.middle>p:nth-of-type(1){
  margin-top: 0;
}
.middle>p:nth-of-type(2){
   display: flex;
   justify-content: space-between;
   align-content: center;
   padding-right:10px;
}
.middle>p:nth-of-type(2)>span:nth-of-type(1){
  width: 50px;
  background-color:#f19682;
  text-align: center;
  border-radius:5px;
}
.middle>p:nth-of-type(2)>span:nth-of-type(2){
  color: darkgreen;
  font-size: 20px;
}
.middle>h4{
  font-size:20px;
  border: 1px solid blue;
  margin-bottom: 0;
  line-height: 40px;
}
.middle>div>p>img{
  display: block;
  width: 100%;
  height: 100%;
}
.goods-card {
  margin: 0;
  background-color:white;
}

.delete-button {
    height: 100%;
  }
</style>