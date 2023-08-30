/**
 * 专给cinema组件使用
 * 
 */
import axios from 'axios'
import {defineStore} from 'pinia'
const useCinemaStore = defineStore('cinema',{
      state:()=>{
        return{
            cinemaList:[]
        }
      },
      actions:{
            getCinemaList(){
                // console.log("ajax");
                axios({
                    url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=699006",
                    headers:{
                        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16933172852908118061154306","bc":"110100"}',
                        'X-Host':'mall.film-ticket.cinema.list'
                    }
                }).then(res=>{
                    // console.log(res.data.data.cinemas);
                    this.cinemaList = res.data.data.cinemas
                })
            }
       
             
      }
          


}) 


export default useCinemaStore