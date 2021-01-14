<template>
  <div class="main">
    <div class="leave" @click="clear">
      退出登录
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    clear(){
      window.localStorage.setItem('_token' , '')
      this.$store.commit('user/setJwt' , '')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .leave{
    width:100px;
    height:50px;
    display:flex;
    align-items: center;
    justify-content: center;
    background:red;
    color:white;
    margin:200px auto;
  }
</style>