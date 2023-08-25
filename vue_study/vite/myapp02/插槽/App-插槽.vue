<!-- 
    插槽演示
 -->
<template>
    <div> 插槽父组件使用子组件的数据   </div>
    <!-- 以下数据是通过解构赋值, -->
    <Child #="{myname,str}">     
   
       {{ myname }}----{{ str }}
         <!-- --{{ props.myname }}--- -->
         <!-- ----{{ props.str }}-----           -->
    </Child>
</template>

<script setup>
import Child from './child.vue'


</script>
