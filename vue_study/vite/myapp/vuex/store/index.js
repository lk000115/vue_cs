/*
1 页面有多个需要共享的状态,引入vuex便于维护 
2 缓存部分异步数据,减少后端服务的访问
 */
import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({

    state(){
        return{
           isTabbarShow:true,
           cinemalist:[]
        }  
    },
    //增加状态修改的监视
    mutations:{
        // showTabbar(state){
        //     state.isTabbarShow = true
        // },
        // hideTabbar(state){
        //     state.isTabbarShow = false
        // },
        changeTabbar(state,payload){
            state.isTabbarShow = payload
        },
        changeCinemaList(state,payload){
             state.cinemalist = payload
        }
    },
    //数据缓存,先取数,在提交给mutaotion统一存储
    actions:{
        getCinemaList(store){
            // console.log("ajax");
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=699006",
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16933172852908118061154306","bc":"110100"}',
                    'X-Host':'mall.film-ticket.cinema.list'
                }
            }).then(res=>{
                // console.log(res.data.data.cinemas);
                store.commit("changeCinemaList",res.data.data.cinemas)
            })
        }
    },
    //数据二次加工,相当于计算属性
    getters:{
        filterCinemaList(state){
            return ((type)=>{
               return state.cinemalist.filter(item => item.eTicketFlag === type)
            })
        }

    }


})


export default store