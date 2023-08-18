<template>
   <div>
     <Navbar/>
     <!-- <Home v-if="which==='首页'" />
     <Center v-else-if="which==='列表'" /> 
     <List v-else/>   -->
     <!-- 动态组件 -->
     <component :is="which"/>
       
     <Tabar/> 
   </div>

</template>

<script>
import Navbar from  "./Navbar.vue";
import Tabar from "./Tabar.vue";
import Home from   '../src/Home.vue';
import Center from   '../src/Center.vue';
import List from  '../src/List.vue';
import store from "./store.js";

export default{
   data(){
     return{
        navTitle:"首页",
        which:"Home"
     }
   }, 
   provide(){
      return{
         navTitle:this.navTitle,
         app: this
      } 
   },
   mounted(){
     var obj  = {
        "首页":"Home", 
        "列表":"List", 
        "我的":"Center", 
     }
      //订阅方法,需要tabaritem提供的[首页,列表,我的]三个数据来设置which的值  
     store.subscribe((value)=>{
        this.which = obj[value]
      //   console.log(obj[value],"-----");
     })

   },
   components:{
      Navbar,
      Tabar,
      Home,
      Center,
      List
   }

}

</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
ul{
    list-style-type: none;
}



</style>