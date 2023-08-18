<template>
    <div>
        <Navbar title="父传给子的属性"  :mytitle="title">
        </Navbar>
        <button  @click="clk">点击</button>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
   components:{
      Navbar,
   },
   data(){
    return{
       title:"fn----" 
    }
   },
   methods:{
    clk(){
        console.log(this.title);
    }
   }

}

</script>


