
<template>
  <div>
    app {{ state.myname }}--{{ name }}
    <p> 

      --- {{computedName }}---
    </p>
  </div>
  <button @click="handleClick(1)">按钮</button>
<div ref="mydiv">我是div</div>
</template>

<script setup lang="ts">
import { onMounted, reactive,ref,computed} from 'vue'
import type {Ref} from 'vue'
//隐式推导
// const state = reactive({
//    myname:"kerwin",
// })
//显式推导,先显式的定义数据类型
interface IState{
  myname:string
}
const state:IState = reactive({
  myname:"kerwin"
})

// 1 写法1
// const name:Ref<string> = ref("kerwin")
// 2 写法2
const name = ref<string>("kerwin")
const mydiv = ref<HTMLDivElement>()
onMounted(()=>{
  console.log(mydiv.value?.innerHTML);   //?表示前面为假就不会执行后面的.(js的知识点)
  
})
//计算属性,<>指定计算属性结果的数据类型
const computedName = computed<string>(()=>name.value.substring(0,1).toUpperCase()+name.value.substring(1))
//方法,形参指定参数类型
const handleClick = (index:number)=>{
  console.log(index);
}

</script>
