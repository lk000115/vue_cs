<template>
  <div>
     <Child mytitle="父属性" :myname="name" :myleft="left"  :right="aright"
      @event="handleEvent" >

     </Child>

  </div>

</template>


<script>
import Child from "../components/Child.vue";
export default{
   components:{
      Child,
   },
   data(){
      return{
        name:"aa",
        left:12,
        aright:true

      }

   },
   methods:{
      handleEvent(data){
         console.log("自定义事件",data);
      }
   }
}

</script>
