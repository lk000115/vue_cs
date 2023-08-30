/**
 * option风格写法
 * 
 */
import {defineStore} from 'pinia'

const useTabbarStore = defineStore("tabbar",{

     state:()=>{
         return {

            isTabbarShow:true
         }

     },
     actions:{
        change(value){
            this.isTabbarShow = value
        }  
     }

})

export default useTabbarStore

