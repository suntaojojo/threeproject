<template>
<div>
    <div id="header">
      <van-nav-bar
        title="购物车"
      >
      <div slot="left" @click="onClickLeft">&lt;</div>
      <div slot="right" v-show="is_show" @click="onClickRight">管理</div>
      <div slot="right" v-show="!is_show" @click="onClickRight">完成</div>
      </van-nav-bar>
    </div>
    <van-checkbox-group v-model="result" ref="checkboxGroup"  @change="change">
      <div id="big" v-for="(item , index) in cartList" :key="index" >
          <van-checkbox id="meddil" :name="item.price"  label-disabled >
            <template #default>
              <img class="cartImg"  :src="item.course_cover" width="80px" height="80px" alt="">
              <div class="cartTitle">
                <span>  
                  {{item.title}}
                </span> 
                <p class="num">
                  ￥{{item.price | priceChange}}
                </p>
              </div>
            </template>
          </van-checkbox>
      </div>
    </van-checkbox-group>
    <van-submit-bar v-show="is_show" :price="Money" button-text="提交订单" @submit="onSubmit" >
      <van-checkbox v-model="checked" @click="checkAll()">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar v-show="!is_show"  button-text="删除" @submit="onDel" >
      <van-checkbox v-model="checked" :price="123" id="Left" @click="checkAll()" suffix-label="1231">全部</van-checkbox>
      <div id="rIGHE">11111111111111111111111111</div>
    </van-submit-bar>
</div>

</template>
<script>
  import Vue from 'vue';
  import url from '@/config/uri'
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
      checked:false,
      cartList:[],
      money:0,
      is_show:true
    };
  },
  filters:{
    priceChange(num){
      num = num / 100
      return num.toFixed(2)
    }
  },
  methods: {
    onSubmit(){
      console.log('支付')
    },
    onDel(){
      // this.cartList.forEach((item, index)=>{
      //   console.log(item.price , '每次循环显示的钱数')
      //   //index 导致的错误 每次删除一个的时候 length 就会发生变化 index也会发生变化
      //   // if(this.result.includes(item.price)){
      //   //   console.log(item.price , index)
      //   //   this.cartList.splice(index , 1)
      //   //   console.log(this.cartList)
      //   //   window.localStorage.setItem('cartList', JSON.stringify(this.cartList))
      //   // }
      //   this.result.forEach(items => {
      //     if(item.price == items){
      //       this.cartList.splice(index , 1)
      //     }
      //   })
      // })
      for(let i = 0 ; i < this.cartList.length ; i++){
        if(this.result.includes(this.cartList[i].price)){
          this.cartList.splice(i , 1)
          console.log(this.cartList)
          i--
        }
      } 
      //这里的问题解决就是在于:如果没有这一步骤的话,就会出现删除之后任然会有钱数的显示但是此时我已经将其删除了
      this.result.length = 0
      this.money = 0
      //但是如果我加上这一步骤就不会出现金属的显示了
    },
    change(){
      this.checked = this.result.length != 5 ? false : true
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(this.checked ? true : false);
    },
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      this.is_show = !this.is_show
    },
  },
  computed:{
    Money(){
      this.money = 0
      this.result.forEach(item=>{this.money += item})
      return this.money
    } 
  },
  created(){
    this.$store.commit('global/isShow' , false)
    this.$http.get(url.allHotcourse).then(ret=>{
      this.cartList = ret.data.data
      window.localStorage.setItem('cartList', JSON.stringify(ret.data.data))
    })
  },
  beforeDestroy(){
    this.$store.commit('global/isShow' , true)
  },
  components:{
    fullCard,
  },
  mounted(){
    this.cartList = JSON.parse(window.localStorage.getItem('cartList'))
  }
}
</script>



<style lang="scss" scoped>
    #meddil{
      background:white;
      border-radius: 8px;
      box-shadow: 2px 3px 4px 3px #F2F2F2;
      position:relative;
    }
   .cartTitle{
      display:flex;
      float:right;
      width:200px;
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
  #header .van-nav-bar__left .van-icon-arrow-left{
    color:black;
  }
  #header #rIGHT{
    width:200px;
    height:10px;
    color:white;
  }
  
</style>