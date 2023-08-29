/*
1 页面有多个需要共享的状态,引入vuex便于维护 
2 缓存部分异步数据,减少后端服务的访问
 */
import {createStore} from 'vuex'

const store = createStore({

    state(){
        return{
           isTabbarShow:true
        }  
    }

})


export default store