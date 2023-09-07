<template>
  <div>
    app---vca
    <Child title="首页" :obj="{name:'kerwin',age:18}" @event="handleEvent"></Child>
  </div>

</template>

<script setup lang="ts">
import Child from './Child.vue' ;

const handleEvent = (v:string)=>{
  console.log(v);
  
}


</script>
