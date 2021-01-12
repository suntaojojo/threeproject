<template>
  <div> 
    <div class="nav">
      <div class="nav-left">
        <span class="nav-left-left">
          <slot name="one"></slot>
          <!-- 免费公开课 -->
        </span> 
        <span class="nav-left-right">
          <slot name="two"></slot>

          <!-- 每天进步一点点 -->
        </span>
      </div>
      <div class="nav-right">
        <span>
          <slot name="three"></slot>
          <!-- 全部 >  -->
        </span>
      </div>
    </div>
      <slot name="content"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .nav{
     margin:10px;
     height:46px;
     .nav-left{
       float:left;
      .nav-left-left{
        border-left: 5px solid #F09581;
        font-size:15px;
        padding-left:5px;
      }
      .nav-left-right{
         color:#999999;
         span{
          font-size:13px;
         }
       }
     }
     .nav-right{
       float:right;
       color:#F09581;
       font-size:13px;
       margin-top:8px;
     }
   }
</style>