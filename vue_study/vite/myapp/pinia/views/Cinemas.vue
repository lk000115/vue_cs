<template>
    <div>
        <select v-model="type">
            <option :value="1">App订票</option>
            <option :value="0">前台兑换</option>
        </select>
        <ul>
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