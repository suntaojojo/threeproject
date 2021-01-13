<template>
    <van-form @submit="onSubmit">
      <div class="logo">
        <p>
           <van-icon style="margin-top: 10px; margin-left: 5px" name="arrow-left" size="1.5rem" @click="back()"/>
        </p>
         <div>
           <img src="../../assets/download.png">
         </div>
      </div>
  <van-field
    v-model="username"
    name="username"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" style="background-color:rgba(255,0,0,.5); border-radius: 5px; margin-top: 50px; font-size: 16px; letter-spacing: 2px; outline: none">登录</van-button>
  </div>
  <div class="footer">
    <van-checkbox 
    v-model="checked" 
    shape="square" 
    checked-color="red"
    style="font-size: 12px"
    >同意
    <span><a href="" style="color:blue">用户注册协议</a></span>
      和
      <span><a href="" style="color:blue">隐私政策</a></span>
      </van-checkbox>
    <p><a href="">忘记密码？</a><a href="">注册&nbsp;/&nbsp;验证码登录</a></p>
   </div>
</van-form>
  

</template>


<script>
import Vue from 'vue';
import { Form,Field,Button,Icon,Checkbox, CheckboxGroup } from 'vant';
Vue.use(Form);
Vue.use(Field)
Vue.use(Button);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
     data() {
    return {
      username: '',
      password: '',
      checked:false,
      pattern: /^1[3-9]\d{9}$/,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    back(){
      this.$router.back()
    }

  },
  created(){
    this.$store.commit('global/isShow' , false)
  },
  beforeDestroy(){
    this.$store.commit('global/isShow' , true)
  }
}
</script>
<style scoped>
.logo{
  width:100%;
  height:240px;
  position:relative;
}
.logo>p{
  margin-top:0;
}
.logo>div{
  width: 82px;
  height: 82px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.logo>div>img{
  display: block;
  width: 100%;
  height: 100%;
}
.footer{
  padding:0 20px;
}
.footer>p{
  display: flex;
  justify-content:space-between;
}
.footer>p>a{
   color: rgba(0,0,0,.6);
   font-size: 12px;
}

</style>