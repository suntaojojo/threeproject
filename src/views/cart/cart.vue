<template>
<div>
  <van-nav-bar
    title="购物车"
    right-text="管理"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
  </van-nav-bar>
<van-checkbox-group v-model="result" ref="checkboxGroup" >
  <div id="big">
      <van-checkbox id="meddil" name="b"></van-checkbox>
      <van-checkbox id="meddil" name="a" label-disabled>
        <template #default>
          <img class="cartImg"  src="https://weilinjiaoyu.oss-cn-hangzhou.aliyuncs.com/uploads/image/2021de6dzll81610416213.png" width="80px" height="80px" alt="">
          <div class="cartTitle">
            <span>  
              你是是时候生死时速啊大大十大
            </span> 
            <p class="num">
              价钱111111111
            </p>
          </div>
        </template>
      </van-checkbox>
    
  </div>
  

  
</van-checkbox-group>


<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox>
</van-submit-bar>
</div>

</template>
<script>
  import Vue from 'vue';
  import fullCard from '@/components/Card/fullCart'
  import { Checkbox,CheckboxGroup,NavBar , Toast ,SubmitBar} from 'vant';
  Vue.use(NavBar);
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup); 
  Vue.use(SubmitBar); 
export default {
   data() {
    return {
      result: [],
      checked:false
    };
  },
  methods: {
    onClickEditAddress(){

    },
    inputClick(){

    },
    checkAll(e) {
      let flag = this.checked 
      console.log(this.checked , '这个是我要看看是否已经全选了')
      this.$refs.checkboxGroup.toggleAll();
      console.log(e)
    },

    onSubmit(){

    },
    onClickLeft() {
      Toast('返回');
      this.$router.back()
    },
    onClickRight() {
      Toast('按钮在这里我要设置一个删除的功能');
    },
  },
  created(){
    this.$store.commit('global/isShow' , false)
  },
  beforeDestroy(){
    this.$store.commit('global/isShow' , true)
  },
  components:{
    fullCard,
  }
}
</script>



<style lang="scss" scoped>
    #meddil{
      background:white;
      border-radius: 8px;
      box-shadow: 2px 3px 4px 3px #F2F2F2;
    }
   .cartTitle{
      display:flex;
      float:right;
      width:220px;
      height:60px;
      margin:10px;
      flex-direction: column;
      justify-content: space-between;
      span{
        font-size: 14px;
      }
      .num{
        margin:0px;
        font-size:12px;
        color:red;
      }
  }
  #meddil{
    margin:20px 10px;
    height:130px;
  }
 
</style>