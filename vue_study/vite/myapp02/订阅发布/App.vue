<template>
   <div>
     <Navbar/>
     <Tabar/> 
   </div>

</template>

<script>
import Navbar from "./Navbar.vue";
import Tabar from "./Tabar.vue";
export default{
   data(){
     return{
        navTitle:"首页"
     }
   }, 
   provide(){
      return{
         navTitle:this.navTitle,
         app: this
      } 
   },
   components:{
      Navbar,
      Tabar
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