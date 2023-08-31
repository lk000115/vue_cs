<template>

  <div>
    city
  </div>

</template>

<script setup>
import axios from 'axios'
import{onMounted} from 'vue'
onMounted( async ()=>{
    var res = await axios({
        url:"https://m.maizuo.com/gateway?k=1669812" ,
        headers:{
          'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16933172852908118061154306"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
     })
     console.log(res.data.data.cities);
})


</script>