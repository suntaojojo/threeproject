<template>
  <div> 
      <template v-for="(item , index) in allList">
        <fullCart :key="index">
          <div slot="img">
            <img :src="item.course_cover" alt="" width="125" height="125">
          </div>
          <div slot="title">
            {{item.title}} 
          </div>
          <span slot="teacher" v-for="(a, c) in item.teacher" :key="c">
            <span>{{a.teacher_name}}</span>
          </span>
          <div slot="num">
            已经购买人数{{item.sales_num}}
          </div>
          <div slot="price">
            {{item.price == 0 ? '免费' : '￥'+item.price}}
          </div>
        </fullCart>
    </template>

  </div>
</template>
<script>
import uri from '@/config/uri'
import fullCart from '@/components/Card/fullCart'
export default {
  data(){
    return {
      allList:[],
      teacher:[]
    }
  },
  components:{
    fullCart,
  },
  created(){
    console.log(this.$route.query.id)
    if(this.$route.query.id == 45){
      console.log('热门')
      this.$http.get(uri.allHotcourse).then(ret=>{
        console.log(ret.data.data , 123123123123)
        this.allList = ret.data.data
        this.teacher = ret.data.data[0].teacher
        console.log(this.teacher)
      })
    }else{
      console.log('免费')
      this.$http.get(uri.allFreecourse).then(ret=>{
        console.log(ret.data.data , 123123123123)
        this.allList = ret.data.data
        this.teacher = ret.data.data[0].teacher
        console.log(this.teacher)
      })
    }
    
  }
}
</script>
<style scoped>

</style>