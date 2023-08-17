<template>
<div>
   <button>返回</button>
   <span>{{ title}}</span>
   <button>我的</button>

</div>

</template>
<script>
import store from "./store.js"
export default{
   data(){
      return{
         title:"首页"
      }
   },  
   mounted(){
      // 订阅.....
      store.subscribe((value)=>{
          console.log("我被触发了",value);
          this.title = value 
      })    
   }

}
</script>

<style scoped>
div{
   display: flex;
   width: 100%;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  background: gray; 
}
</style>