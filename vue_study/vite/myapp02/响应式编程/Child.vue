<template>
    <div>
        child
        <button @click="handleclick">子传父</button>
        <p>

         经过加工的计算属性-----{{ computedTitle }}
        </p>
    </div>
</template>


<script>
    import { computed } from 'vue'
    export default {
        props: ['title'],
        //响应式编程中，父子之间的参数都是通过setup形参传递  
        setup({ title }, { emit }) {
            console.log();
            const computedTitle = computed(() => title + 11111)
            const handleclick = () => {

                emit('event', "来自孩子的问候")
            }
            return {
                handleclick,
                computedTitle
            }

        }


    }

</script>