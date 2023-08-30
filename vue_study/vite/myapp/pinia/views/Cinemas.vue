<template>
    <div>
        <select v-model="type">
            <option :value="1">App订票</option>
            <option :value="0">前台兑换</option>
        </select>
        <ul>
            <!-- 传参给store,通过store.getters计算把结果返回 -->
            <!-- $store.getters.filterCinemaList  被mapGetters映射了-->
            <li v-for="data in store.cinemaList" :key="data.cinemaid">
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {useCinemaStore} from '../store/cinemaStore'
const store = useCinemaStore()
onMounted(()=>{
    if (store.cinemaList.length === 0) {
                console.log("aaaa");
                // store.getCinemaList()
            } else {
                console.log(store.cinemalist);
            }   

})



</script>