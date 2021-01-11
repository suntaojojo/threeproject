<template>
<div>
    <van-row gutter="20">
    <van-col span="8">
    <van-icon name="arrow-left" size="30px"/>
    </van-col>
    <van-col ><b style="font-size:25px">详情页面</b></van-col>
    <van-col span="8"></van-col>
   </van-row>
   <div class="middle">
     <img src="../../assets/down.jpg">
      <p>【0元领】《恋词序列二：考研英语真题词汇5500词》配套视频课</p>
      <p><span>朱伟</span><span>限时免费</span></p>
      <p>共141个课时</p>
      <!-- <van-count-down :time="time" format="距离停售：DD 天 HH 时 mm 分 ss 秒" /> -->
      <van-swipe-cell>
       <van-card
         num="2"
         price="2.00"
         desc="描述信息"
         title="商品标题"
         class="goods-card"
         thumb="../../assets/downlo.png"
       />
       <template #right>
         <van-button square text="删除" type="danger" class="delete-button" />
       </template>
     </van-swipe-cell>

   </div>
  </div>
  
</template>


<script>
import Vue from 'vue';
import {Icon,GridItem, Col, Row,CountDown,SwipeCell,Card } from 'vant';
import "@/assets/font/iconfont.css";
Vue.use(Icon);
Vue.use(GridItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(CountDown);
Vue.use(SwipeCell);
Vue.use(Card);
export default {
 
}
</script>
<style scoped>
.middle{
  height: 200px;
  padding:10px;
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
.goods-card {
  margin: 0;
  background-color:white;
}

.delete-button {
    height: 100%;
  }
</style>