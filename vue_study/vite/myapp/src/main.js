import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
import router from '../pinia/router'
import App from  '../../myapp/pinia/App.vue' 
// import store from '../vuex/store/index' 
import {createPinia} from 'pinia'
const pinia = createPinia()

var app = createApp(App)

// createApp(App).mount('#app')
// 自定义指令,全局定义

// app.directive("kw",{
// // 钩子
//    mounted(el){
//      console.log("当前节点插入到父节点时调用",el);  
//    }
// })
app.use(router)   //注册路由插件
// app.use(store)    //注册vuex插件
app.use(pinia)    //注册pinia插件
app.mount('#app')