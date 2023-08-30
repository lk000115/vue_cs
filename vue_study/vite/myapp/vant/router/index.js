import{createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import Films from '../views/Films.vue'
import Center from '../views/Center.vue'
import Cinemas from '../views/Cinemas.vue'
import Notfound from '../views/Notfound.vue'
import Nowplaying from '../views/films/Nowplaying.vue'
import Comingsoon from '../views/films/Comingsoon.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'

const routes = [
   {  
    path: '/Films', 
    name:"films",      //命名路由 
    component: Films,
    children:[         //嵌套路由
        {
         path:"/films/nowplaying",
         component:Nowplaying
        }, 
        {
         path:"/films/comingsoon",
         component:Comingsoon
        } ,
        {
         path: '/films', 
         redirect: '/Films/nowplaying'
        },
    ]
   },
   {  
    path: '/Center', 
    alias:"/wode",    //路由别名
    component: Center
   },
   {  
    path: '/Cinemas', 
    component: Cinemas
   },
   {  
    path: '/detail/:myid',   //动态路由配置
    component: Detail
   },   
   {
    name:"Login",  
    path: '/Login',   //动态路由配置
    component: Login
   },    
   {
    path: '/', 
    redirect: '/Films'
   },
   {  
    path: '/:pathMatch(.*)*', 
    component: Notfound
   }

]


const router = createRouter({
    //  history:createWebHashHistory(),
     history:createWebHistory(),
     routes,
})

//全局路由拦截,某个页面没有授权就跳转到login页面
// router.beforeEach((to, from, next) => {
//     let isAuthenticated = localStorage.getItem("token")
//     // console.log(to.fullPath);
//     if (to.name !== 'Login' && !isAuthenticated && to.fullPath ==='/center') next({ name: 'Login' })
//     else next()
//   })



export default router

