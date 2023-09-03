import axios from 'axios'
import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
const useCityStore = defineStore("city",()=>{
    const cityList  =  ref(["A","B","C","E","F"])



   return {
    cityList,

   }  
      


})


export default useCityStore