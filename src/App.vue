<template>
  <div id="app">
    <Footer></Footer>
    <router-view/>
  </div>
</template>
<script>
import Footer from "./components/Navigator/Footer"
import Vue from 'vue'
export default {
  components:{
    Footer
  }
}
</script>
<style lang="scss">
  .van-hairline--top-bottom{
    margin-top:200px;
  }
</style>
