<!-- 
    vca: 组合式 API (Composition API)
    vca中的
   子传父，父传子在响应式编程中的写法

 -->

<template>
    <Child title="aa" @event="handleck">

    </Child>
</template>



<script>
import Child from "./Child.vue";
export default {
    components: {
        Child,
    },
    setup() {
        function handleck(v) {
            console.log("子传父的函数", v);
        }

        return {
            handleck
        }

    }




}


</script>