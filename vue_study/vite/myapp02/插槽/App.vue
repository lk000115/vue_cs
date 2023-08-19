<template>
    <div>
       <Nowplay/>
    </div>
</template>

<script>
import Nowplay from "./Nowplay.vue";
import axios  from '../../myapp/node_modules/axios/lib/axios'

export default {
   components:{
      Nowplay,
   },
   data(){
    return{
       datalist:[] 
    }
   },
   methods:{
    
   },
   mounted(){
      axios.get("test_my.json").then(res=>{
           console.log(res.data.data.hot);
      })
    //   fetch("test_my.json").then(res=>res.json())
    //   .then(res=>{
    //     console.log(res.data.hot);
    //   }) 
   }
}

</script>


