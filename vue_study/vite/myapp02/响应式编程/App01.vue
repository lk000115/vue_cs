<!-- 
响应式编程 计算属性computed案例---模糊搜索-- 
计算属性只能监听同步数据的变动,不能监听异步代码,即不能包含异步代码
-->

<template>
  <div>
    <input type="text" v-model="mytext"> :请输入搜索内容{{ mytext}}
    <ul>
        <li v-for="data in computedList" key="data">
            {{ data }}
        </li>
    </ul>
  </div>

</template>


<script>
import {computed,ref}  from 'vue'

function useSearch(datalist){
    const mytext = ref("")
// computed里面的代码只能放同步代码    
    const computedList = computed(()=>
            datalist.value.filter(item=>item.includes(mytext.value))
        ) 
    return{
        mytext,
        computedList
    }     

}


export default {
   setup(){
        const datalist = ref([]) 
        //模拟异步取数
        setTimeout(() => {
           datalist.value = ["aaa","abc","cdab","bcd","effc","ffff","ggfc"] 
        }, 2000);

        const{mytext,computedList} = useSearch(datalist)

        return{
        //    computedList,
        //    mytext
        ...useSearch(datalist)
        }

   }

   
}



</script>