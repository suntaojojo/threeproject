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
        <van-icon class-prefix="iconfont icon-renwu" slot="icon" @click="change"></van-icon>

      </div>
    </van-search>

    <!-- 轮播图 -->
    <firstplay></firstplay>
  </div>
 
</template>
<script>
import Vue from 'vue'
import firstplay from './Firstplay'
import '../../assets/font/iconfont.css'
import { Search } from 'vant';

Vue.use(Search);
export default Vue.extend({
  data(){
    return {
      value:''
    }
  },
  components:{
    firstplay
  },
  methods:{
    change(){
      console.log(123)
    }
  }
})
</script>
<style lang="scss">

</style>