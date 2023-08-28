import{createRouter,createWebHashHistory} from 'vue-router'
import Films from '../views/Films.vue'
import Center from '../views/Center.vue'
import Cinemas from '../views/Cinemas.vue'
import Notfound from '../views/Notfound.vue'
import Nowplaying from '../views/films/Nowplaying.vue'
import Comingsoon from '../views/films/Comingsoon.vue'
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
    path: '/', 
    redirect: '/Films'
   },
   {  
    path: '/:pathMatch(.*)*', 
    component: Notfound
   }

]


const router = createRouter({
     history:createWebHashHistory(),
     routes,
})

export default router

