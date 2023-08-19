<template>
    <div>
        <slot :mylist="datalist"  a="2" b="2" >
            <!-- <ul>
               <li v-for="item in datalist" key="item.id">
                   {{item.nm}}
                </li>
            </ul> -->
        </slot>
    </div>

</template>

<script>
import axios  from '../../myapp/node_modules/axios/lib/axios'

export default{
   data(){
      return{
        datalist:[] 

      }
   },
   mounted(){
      axios.get("test_my.json").then(res=>{
           console.log(res.data.data.hot);
           this.datalist = res.data.data.hot
      })
    //   fetch("test_my.json").then(res=>res.json())
    //   .then(res=>{
    //     console.log(res.data.hot);
    //   }) 
   }
   



}


</script>