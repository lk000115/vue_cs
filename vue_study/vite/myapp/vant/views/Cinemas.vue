<template>
    <div>
        <van-nav-bar title="影院" >
           <template #left>
                <div @click="handleClick">{{ cityStore.cityName }}</div>
           </template> 
            <template #right>
                <van-icon name="search" size="20" />
            </template>
        </van-nav-bar>
        <select v-model="type">
            <option :value="1">App订票</option>
            <option :value="0">前台兑换</option>
        </select>
        <ul>
            <li v-for="data in store.filterCinemaList(type)" :key="data.cinemaid">
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useCinemaStore from '../store/cinemaStore'
import useCityStore from '../store/cityStore';
import { NavBar as vanNavBar ,Icon as vanIcon } from 'vant';
import {  useRouter } from "vue-router";
const router = useRouter()
const type = ref(1)
const store = useCinemaStore()
const cityStore = useCityStore()
onMounted(() => {
    if (store.cinemaList.length === 0) {
        // console.log("aaaa");
        store.getCinemaList()
    } else {
        // console.log(store.cinemaList);
    }

})
const handleClick = ()=>{
    // console.log("跳转代码");
    router.push('/city')
    store.clearCinemaList()
}


</script>