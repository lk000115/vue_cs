<!-- 
    插槽子组件
 -->
<template>

     <div>
        child-子组件
        <slot  :myname="name" str="66">

        </slot>
     </div>  

</template>


<script setup>
import {ref} from 'vue'
const name = ref('lisi')

</script>
