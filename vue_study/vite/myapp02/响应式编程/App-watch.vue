<!-- 
响应式编程 watch基础语法----- 
-->

<template>
    <div>
        <input type="text" v-model="mytext">
    </div>
</template>

<script>
    import { ref, watch } from 'vue'

    export default {
        setup() {
            const mytext = ref("")
            //1 写法
            // watch(mytext, () => {
            //     console.log("同步/异步相应都可");
            // })
            //2 写法,第一个参数可以是函数.也可以是数组,数组可以放多个数据,同时监听多个数据变动
            //底第3个参数表示立即执行一次 
            watch(()=>mytext.value, (n,o) => {
                console.log("同步/异步相应都可",n,o);
            },{immediate:true})

            return {
              mytext,
            }
        }
    }


</script>