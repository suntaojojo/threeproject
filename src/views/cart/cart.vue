<template>
<div>
 <van-row gutter="20" style="height:50px" class="header">
  <van-col span="8"></van-col>
  <van-col span="8">购物车</van-col>
  <van-col span="8">管理</van-col>
</van-row>
<van-checkbox-group v-model="result" ref="checkboxGroup">
  <van-checkbox id="meddil" name="">
    <div style="display:flex;">
      <p>
        <img src="../../assets/downlo.png" style="width:80px;height:80px">
      </p>
      <p  style="margin-left: 10px;">
       <b> 啊是的是的范德萨规范化发过吧</b>
       <b style="position: absolute;bottom:20px;left:135px;">￥2442.34</b>
      </p>
    </div>
  </van-checkbox>
  <van-checkbox id="meddil" name="">
     <div style="display:flex;">
       <p>
         <img src="../../assets/downlo.png" style="width:80px;height:80px">
       </p>
       <p  style="margin-left: 10px;">
         <b> 啊是的是的范德萨规范化发过吧</b>
         <b style="position: absolute;bottom:20px;left:135px;">￥2442.34</b>
      </p>
    </div>
  </van-checkbox>
  <van-checkbox id="meddil" name="">
     <div style="display:flex;">
       <p>
         <img src="../../assets/downlo.png" style="width:80px;height:80px">
       </p>
       <p  style="margin-left: 10px;">
         <b> 啊是的是的范德萨规范化发过吧</b>
         <b style="position: absolute;bottom:20px;left:135px;">￥2442.34</b>
      </p>
    </div>
  </van-checkbox>
</van-checkbox-group>
 <div style="position:fixed;bottom:50px;">
    <van-button type="primary" @click="checkAll">全选</van-button>
    <van-button type="info" @click="toggleAll">反选</van-button>
</div>

</div>

</template>
<script>
  import Vue from 'vue';
  import { Col, Row,Checkbox,CheckboxGroup,SubmitBar} from 'vant';
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup); 
  Vue.use(Col);
  Vue.use(Row);
  // Vue.use(SubmitBar);
export default {
   data() {
    return {
      result: [],
    };
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
      console.log(this.$refs.checkboxGroup.children);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    onSubmit(){

    }
  },
}
</script>



<style scoped>
.header{
  height: 50px;
  font-size:30px;
}
  #meddil{
     padding:0 20px;
     margin: 0 5px;
     background-color: aliceblue;
     position: relative;
  }
  #meddil>div{
    margin-left: 10px;
  }
 .footor{
   position:fixed;
   bottom:10px;
 }
</style>