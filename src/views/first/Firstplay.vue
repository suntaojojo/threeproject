<template>
  <div>
    <div id="second">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>



        
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.css'
export default {
  mounted(){
    var myswiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
    });
  }
}
</script>
<style scoped lang="scss">
    .swiper-container {
      width: 100%;
      // height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>