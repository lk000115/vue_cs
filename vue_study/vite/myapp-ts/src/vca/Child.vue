<template>

    <div>
        child---{{ props.title }}
        <button @click="handleclick"> 子传父</button>   
    </div>
     
      
</template>

<script setup  lang="ts">
// import {defineProps,defineEmits} from 'vue'
// const props = defineProps({
//     title:String
// })

interface Iobj {
  name:string,
  age:number
}
const props = defineProps<{
    title:string,
    obj:Iobj
}>()

const emit = defineEmits<{
  (e:"event",myvalue:string):void 
}>()
const handleclick = ()=>{
     emit("event","hello parent")
}
</script>