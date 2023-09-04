/**
 * 专给cinema组件使用
 * setup风格
 */
import axios from 'axios'
import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
import useCityStore from "./cityStore" ;

const useCinemaStore = defineStore('cinema',()=>{
   //引入另外一个cityStore文件
     const cityStore = useCityStore()  ;
     const cinemaList = ref([])
     const getCinemaList = async ()=>{
         var res = await axios({
            url:`https://m.maizuo.com/gateway?cityId=${cityStore.cityId}&ticketFlag=1&k=699006`,
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16933172852908118061154306","bc":"110100"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        })
        cinemaList.value = res.data.data.cinemas 
     }
     const clearCinemaList = ()=>{
        cinemaList.value = []
     } 

      const filterCinemaList = computed(()=>
          (type)=>{
        return  cinemaList.value.filter(item=>item.eTicketFlag===type)
       }
      )
     return {
        cinemaList,
        getCinemaList,
        clearCinemaList,
        filterCinemaList,
        
     } 

}) 
export default useCinemaStore