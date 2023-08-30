<template>
    <div>
        center
        <button @click="handleClk">测试</button>
    </div>
</template>


<script>
import  *  as uu from 'vuex'
// import {useStore} from 'vuex'
// const store = useStore()     //相当于this.$store

export default{
    methods:{
   
         handleClk(){
            console.log(uu); 

         }


    }
   


}



</script>