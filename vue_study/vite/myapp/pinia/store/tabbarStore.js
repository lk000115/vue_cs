/**
 * setup风格
 * 
 * 
 */

import {defineStore} from 'pinia'
import {ref} from 'vue'

const useTabbarStore = defineStore("tabbar",()=>{

    const isTabbarShow  = ref(true)
    
    const change = (value)=>{
        isTabbarShow.value = value
    }
    return {
        isTabbarShow,
        change 
    }

})

export default useTabbarStore

