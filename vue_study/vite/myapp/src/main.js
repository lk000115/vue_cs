import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
import router from '../VueRoute/router'
import App from  '../../myapp/VueRoute/App.vue'  

var app = createApp(App)

// createApp(App).mount('#app')
// 自定义指令,全局定义

// app.directive("kw",{
// // 钩子
//    mounted(el){
//      console.log("当前节点插入到父节点时调用",el);  
//    }
// })
app.use(router)
app.mount('#app')