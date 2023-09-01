<template>
  <div>
    city
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
onMounted(async () => {
  var res = await axios({
    url: "https://m.maizuo.com/gateway?k=1669812",
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16933172852908118061154306"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
  //  console.log(res.data.data.cities);
  filterCity(res.data.data.cities)
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
  newCities = newCities.filter(item=>item.list.length)
  console.log(newCities);

}


</script>