<template>

    <div>
        <ul>
            <li v-for="data in datalist" key="data"  @click="handleclick">
                {{ data }}   
            </li>
        </ul>
    </div>
</template>

<script>
import {inject,ref} from 'vue'
export default{
    setup(){
        const datalist = ref(["aaa","bbb","ccc"])
        const which = inject("which")
        const handleclick = ()=>{
            //  console.log(which.value);
            which.value = "Detail" 
        }
        
        return{
           datalist,
           which,
           handleclick  
        }


    }


}



</script>