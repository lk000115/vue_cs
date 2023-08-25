<template>
    <div>
        child-----{{ myname }}
        <p>
           父件传来的自定义属性--- {{ mytitle }}
        </p>
        <button @click="handleClk">子组件按钮</button>
    </div>
</template>


<script setup>
    import { inject } from 'vue'
    import {defineProps,defineEmits} from 'vue' 

    const myname = inject("myname")
    const props = defineProps({
        mytitle:{
            type:String,
            default:"cs"
        }
    })
    const emit = defineEmits(["event"])
    const handleClk = () => {
    //    myname.vaule = 'sdsd'     子组件不能修改父组件提供的属性  
       console.log('点击了子组件按钮',props.mytitle);
    //    props.mytitle = "cscscscscs"    子组件不能修改父组件的自定义属性
       emit("event","来自子组件的问候")
    }
</script>