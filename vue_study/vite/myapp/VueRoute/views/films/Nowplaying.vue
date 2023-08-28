<template>

    <div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            datalist:[]
        }
    },
    async mounted(){
       const res = await axios({
           url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4005062",
          
           headers:{
            'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16932023362813800579334145","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
           }  
        })
        this.datalist = res.data.data.films 
        console.log(this.datalist);


     }
     

}


</script>