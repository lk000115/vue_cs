<template>
   <div>
       app----
      <Child  @event="handleEvent">

      </Child> 
   </div>
</template>

<script>

import Child from './Child.vue'
export default{
   components:{
      Child
   },
   methods:{
     handleEvent(data){
        console.log(data);
     }
   }

}

</script>
