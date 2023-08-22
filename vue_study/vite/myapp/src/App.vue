<!-- 练习  测试 -->

<script >
import Navbar from "./components/Navbar.vue";
import Layout from "./components/Layout.vue";

export default {

   components:{
     Navbar,
     Layout 
   },

   data(){
  return{
     name:"hello"


  }
},

}
</script>

<template>

 <div class="root">
   <Navbar class="navbar"></Navbar>  
   <Layout class="layout"></Layout>
 </div> 



<!-- <div>{{name}}</div> -->

</template>

<style >

*{
   margin:0px;
   padding:0px
}
.root{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.navbar{
  height: 50px;
}
.layout{
  flex:1;
  display: flex;
}


</style>
