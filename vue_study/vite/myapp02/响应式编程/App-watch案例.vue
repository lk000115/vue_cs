<!-- 
响应式编程 watch案例-- 
-->

<template>

<div>
    <select name="" id="" v-model="select">
        <option value="kerwin">kerwin</option>
        <option value="tiecui">tiecui</option>
        <option value="gandan">gandan</option>
    </select>
    <ul>
        <li v-for="data in list" key="data.id">
              {{ data.content }}                  
        </li>
    </ul>
</div>


</template>

<script>
import{ref,watch} from 'vue'
import axios from 'axios'

export default{
    setup(){
        const select = ref("kerwin") 
        const list = ref([])
        watch(select,(value)=>{
            axios.get(`http://localhost:3000/news?author=${value}`)
            .then((res)=>{
                // console.log(res.data);
                list.value = res.data
            })
        },{immediate:true}) 

       return{
         select,
         list
       }     

    }

}


</script>