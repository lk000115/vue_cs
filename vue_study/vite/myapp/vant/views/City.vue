<template>
  <div>
    <van-index-bar  :index-list="indexList">
      <div v-for="item in dataList" :key="item.type">
        <van-index-anchor :index="item.type"/> 
        <van-cell :title="data.name" v-for="data in item.list" :key="item.list.cityId" @click="handleClick(data.name)"/>

      </div>

    </van-index-bar>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref,computed } from 'vue'
import { IndexBar as vanIndexBar, IndexAnchor as vanIndexAnchor, Cell as vanCell } from 'vant';
// import useCityStore from '../store/cityStore'
// const store = useCityStore()
const dataList = ref([])
onMounted(async () => {
  var res = await axios({
    url: "https://m.maizuo.com/gateway?k=1669812",
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16933172852908118061154306"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
  //  console.log(res.data.data.cities);
  dataList.value = filterCity(res.data.data.cities)
})
const filterCity = (cities) => {
  var letterArr = []
  for (let i = 65; i < 91; i++) {
    letterArr.push(String.fromCharCode(i))
  }
  var newCities = []
  for (let i = 0; i < letterArr.length; i++) {
    newCities.push({
      type: letterArr[i],
      list: cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letterArr[i])
    })
  }
  // 筛选出item.list.length != 0 的数组 
  newCities = newCities.filter(item => item.list.length)
  console.log(newCities);
  return newCities

}

const indexList = computed(()=>dataList.value.map(item=>item.type))

const handleClick = (e)=>{
  console.log(e);
}
</script>