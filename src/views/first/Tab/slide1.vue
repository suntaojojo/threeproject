<template>
  <div>
    <div>
      <!-- 轮播图的播放 -->
      <!-- 这里有一个问题就是轮播图的位置不对 -->
      <autoPlay :key="bannerList.length">
        <template v-for="(item , index) in bannerList">
          <van-swipe-item :key="index">
            <div class="img">
              <img v-lazy="item.banner_img" width="345px" style="border-radius:30px" height="140px"/>
            </div>    
          </van-swipe-item>
        </template>
      </autoPlay>
    </div>
    <div class="abc">
      <van-grid>
        <!-- 这里可以直接跳转到指定的路由位置  使用 to属性 -->
        <van-grid-item icon="https://weilinjiaoyu.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020y5d2pdhu1604387421.png" text="词根词缀" to="/smallcode" icon-size=""></van-grid-item>
        <van-grid-item icon="https://weilinjiaoyu.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020zp6l6w2k1604387478.png" text="每日打卡" to="small_code"></van-grid-item>
        <van-grid-item icon="https://weilinjiaoyu.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020nay52vt21598241226.jpg" text="22考研"  ></van-grid-item>
        <van-grid-item icon="https://weilinjiaoyu.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020otchr2a91598240987.jpg" text="21复试" to="/modelList" ></van-grid-item>
      </van-grid>
    </div>  
    <smallnav>
      <span slot="one">
        免费公开课
      </span>
      <span slot="two" class="">
        每天进步一点点
      </span>
      <span slot="three" @click="goFreeAll">
        全部 >
      </span>
      <div class="nav-content" slot="content">
        <van-grid :column-num="2" :key="1" >
            <template v-for="(item , index) in freeList">
          <van-grid-item  :icon="item.course_cover" :text="item.title" @click="todoDetail">
              <div  slot="text">
                <p class="content-title">{{item.title}}</p>
                <div class="content-footer">
                  <p class="content-role">{{item.teacher_name}}</p>
                  <!-- 这里时间要使用中间件进行更改一下 -->
                  <p class="content-time">2020.12.25 - 2021.05.31</p>
                </div>
              </div>
          </van-grid-item>
            </template>
        </van-grid>
      </div>
    </smallnav>
    <!-- 热门好课 -->
    <div class="hotcourse">
      <smallnav>
        <span slot="one">
          热门好课
        </span>
        <span slot="two">
          大家都在听的课程
        </span>
        <span slot="three" @click="goHotspot">
          全部 >
        </span>
        <div class="nav-content" slot="content" v-for="(item , index) in hotList" :key="index">
          <fullCart >
            <template>
              <div slot="img">
                <img :src="item.course_cover" width="125" height="125" alt="">
              </div>
              <span slot="title">{{item.title}}</span>
              <span slot="teacher">{{item.teacher[0].teacher_name}}</span>
              <span slot="num">已经购买的人数{{item.sales_num}}</span>
              <span slot="price">${{item.price}}</span>
            </template>
          </fullCart>
        </div>
      </smallnav>
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
import Vue from 'vue';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: "https://2url.cc/1OwrB",
});
import smallnav from '@/components/Navigator/smallnav'
import uri from '@/config/uri'  
import fullCart from '@/components/Card/fullCart'
import { Grid, GridItem ,Overlay,Loading} from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Overlay);
Vue.use(Loading);

import autoPlay from '@/components/autoPlay/autoplay'
export default {
  data(){
    return {
      bannerList:[1,2,2,3,4,5,5],
      freeList:[],
      hotList:[],
      show:true,
    }
  },
  methods:{
    goFreeAll(){
      this.$router.push({
        path:'/modeList',
        query:{id:32,title:'免费公开课'}
      })

    },
    goHotspot(){
      this.$router.push({
        path:'/modeList',
        query:{id:45 , title:'热门好课'}
      })
    },
    todoDetail(){
      this.$router.push({path:"/detail",query:{id:1}})
    }
  },
  mounted(){

  },
  created(){
    this.$http.get(uri.bannerlist).then(ret =>{
      console.log(ret.data)
      this.bannerList = ret.data.model2
      this.freeList = ret.data.model4.goods_list
      this.hotList = ret.data.model6.goods_list
      this.show = false
    })
  },
  components:{
    autoPlay,
    smallnav,
    fullCart
  }
}
</script>

<style lang='scss'>

   .abc .van-icon__image{
     width:37px;
     height:37px;
   }
   .van-swipe-item{
     padding-left:15px
   }
   .nav-content .van-icon__image{
     width:95px;
     height:95px;
   }
    .nav-content .content-title,.content-role,.content-time{
     font-size:13px;
     text-align:center;
   }
   .nav-content .content-role,.content-time{
     margin:0;
     padding:0;
   }
   .content-footer{
     width:100%;
     border-top:1px solid #F8F8F8;
   }
    .hotcourse{
      margin-bottom:60px;
    }
   .content-title{
     height:18px;
     overflow:hidden;
   }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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