<template>
   
  <div>
     <button @click="handleClick">展开/折叠侧边栏</button>
     <div>vue的单文件navbar</div>
  </div>
  
</template>

<style scoped>
  div{
     background: gray;

  }
 
</style>

<script>

export default{

   data(){
     return{

     } 
   },
   methods:{
    handleClick(){
      console.log("navbar按钮");
    }

   }

}


</script>
