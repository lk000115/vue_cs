import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
import App from  '../../myapp02/vue3语法糖/App-语法糖.vue'  

var app = createApp(App)

// createApp(App).mount('#app')
// 自定义指令,全局定义

app.directive("kw",{
// 钩子
   mounted(el){
     console.log("当前节点插入到父节点时调用",el);  
   }


})

app.mount('#app')