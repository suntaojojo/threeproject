<template>
  <div> 
    <van-card>
    <template #thumb>
      <slot name="img"></slot>
    </template>
    <template #title>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <span class="role">
        <slot name="teacher"></slot>
      </span>
      <p class="time" >
        <slot name="time">2020.12.31 - 2023.12.31</slot> 
      </p>
    </template>
    <template #footer>
      <div class="buynum">
        <slot name="num"></slot>
      </div>
      <div class="price">
        <slot name="price"></slot>
      </div>
    </template>
    </van-card>

  </div>
</template>

<script>
import Vue from 'vue';
import { Card } from 'vant';

Vue.use(Card);
export default {

}
</script>

<style lang="scss" scoped>
  .van-card__header{
    height:130px;
  }
  .van-card__thumb{
      width:125px;
      height:125px;
  }
  .van-card{
    border-radius:15px;
    margin:15px;
    background:white;
    box-shadow: 3px 2px  0px #F5F5F5;

  }
  .van-card__header .van-card__content .title{
    font-size:16px;
    font-weight: 800;
  }
  .van-card__header .van-card__content .role{
    position:relative;
    height:18px;
    background:#F19682;
    padding: 0 8px;
    border-radius:8px;
    color:black;
  }
  .buynum{
    float:left;
  }
  .price{
    font-size:16px;
    font-weight:800;
    color:red;
  }
</style>