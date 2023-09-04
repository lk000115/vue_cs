import{createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import AddNews from '../views/AddNews.vue'
import NewsList from '../views/NewsList.vue'
import Notfound from '../views/Notfound.vue'

const routes = [
     
   {
    path: '/home', 
    redirect: '/Home'
   },
   {
    path: '/addnews', 
    redirect: '/AddNews'
   },
   {
    path: '/newslist', 
    redirect: '/NewsList'
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


export default router

