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