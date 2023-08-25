<!-- 
   vue3 组合式API的语法糖

 -->

<template>
    <div>
        <button @click="handleClick">父件按钮</button>
          app----{{ name }}
        <Child  :mytitle="title"  @event="handleEvt">

        </Child>
    </div>
</template>

<script setup>
    import Child from './child.vue'
    import { ref, computed,provide } from 'vue'
 
    const title = ref("tt")
    const name = ref('aaaa')
    const myname = ref("as")
    provide("myname",myname)
    const handleClick = ()=>{
        name.value = 'zhansan'
    }
    const handleEvt = (value)=>{
        console.log("----",value);
    }



</script>