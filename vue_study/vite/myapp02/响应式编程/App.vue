<template>
    <button @click="handleclk">按钮</button>
    <div  ref="mydiv">
          {{ obj.name }}-----{{computedName}}
          <!-- {{ obj.age }} -->
         ----- {{ sex }}----{{ nameref}}
    </div>
</template>


<script>
    import { ref } from 'vue'
    import { reactive, toRef,toRefs,computed} from 'vue'
    export default {
        setup() {
        // 1 reative 初始化响应式对象   
            const obj = reactive({
                age:19,
                sex:"男" ,
                name:"ract-nm"
            })
            const computedName = computed(()=>obj.name)
       // 2 ref 初始化响应式对象 
            const nameref = ref("zhansan")
            const mydiv = ref(null)
            function handleclk() {
                console.log(mydiv.value);
                // ref对象赋值风格 
                nameref.vaule = "点击改名-lisi";
                // reactive对象赋值风格
                obj.age = 22;

            }

            return {
                // age:toRef(obj,"age"),
                ...toRefs(obj),        //把reactive对象转为ref对象
                nameref,
                handleclk,
                obj,
                mydiv,
                computedName
            }

        }
    }


</script>